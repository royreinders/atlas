from django.db import models


class Host(models.Model):
    __tablename__ = 'hosts'
    ip = models.CharField(max_length=30)
    fqdn = models.CharField(max_length=255)
    mac = models.CharField(max_length=30)
    os = models.CharField(max_length=100)


class Service(models.Model):
    __tablename__ = 'services'
    name = models.CharField(max_length=100)
    port = models.IntegerField(default=0)
    protocol = models.CharField(max_length=10)
    host = models.ForeignKey(Host, related_name='services', on_delete=models.CASCADE)


class Finding(models.Model):
    __tablename__ = 'findings'
    name = models.CharField(max_length=255)
    description = models.TextField()
    import_poc = models.TextField()  # PoC originating from the import from a scanning tool
    pluginID = models.IntegerField()
    services = models.ManyToManyField(Service, through='ProofOfConcept')


class ProofOfConcept(models.Model):
    __tablename__ = 'proofofconcept'
    service = models.ForeignKey(Service, null=True, on_delete=models.SET_NULL)
    finding = models.ForeignKey(Finding, null=True, on_delete=models.SET_NULL)
    haspoc = models.IntegerField(default=0)
    falsepositive = models.IntegerField(default=0)
    poc = models.TextField(null=True, blank=True)
    tool = models.TextField()


class Tool(models.Model):
    __tablename__ = 'tool'
    name = models.CharField(max_length=255)
    path = models.CharField(max_length=255, null=True, blank=True)
    executionstring = models.CharField(max_length=255)
    expected_good = models.TextField(null=True, blank=True)
    expected_bad = models.TextField(null=True, blank=True)
    timeout = models.IntegerField(default=60)


class Task(models.Model):
    __tablename__ = 'tasks'
    tool = models.ForeignKey(Tool, on_delete=models.CASCADE)
    pocs = models.ManyToManyField(ProofOfConcept)
    threads = models.IntegerField(default=5)
    running = models.IntegerField(default=0)
    targets_completed = models.IntegerField(default=0)
