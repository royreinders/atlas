from django.db import models


class Host(models.Model):
    __tablename__ = 'hosts'
    ip = models.CharField(max_length=30)
    fqdn = models.CharField(max_length=255, null=True)
    mac = models.CharField(max_length=30, null=True)
    os = models.CharField(max_length=100, null=True)


class Finding(models.Model):
    __tablename__ = 'findings'
    name = models.CharField(max_length=255)
    description = models.TextField(null=True)
    pluginID = models.IntegerField(null=True)
    checked = models.IntegerField(default=0)


class Service(models.Model):
    __tablename__ = 'services'
    name = models.CharField(max_length=100)
    port = models.IntegerField(default=0)
    protocol = models.CharField(max_length=10)
    host = models.ForeignKey(Host, related_name='services', on_delete=models.CASCADE)
    finding = models.ForeignKey(Finding, related_name='services', on_delete=models.CASCADE)
    haspoc = models.IntegerField(default=0)
    falsepositive = models.IntegerField(default=0)


class Tool(models.Model):
    __tablename__ = 'tool'
    name = models.CharField(max_length=255)
    commandstring = models.CharField(max_length=255)
    expected_good = models.TextField(null=True, blank=True)
    expected_bad = models.TextField(null=True, blank=True)
    timeout = models.IntegerField(default=60)
    threads = models.IntegerField(default=5, blank=True, null=True)


class Task(models.Model):
    __tablename__ = 'tasks'
    tool = models.ForeignKey(Tool, on_delete=models.CASCADE, null=False)
    starttime = models.DateTimeField(auto_now_add=True, blank=True)
    services = models.ManyToManyField(Service)
    threads = models.IntegerField(default=5)
    running = models.IntegerField(default=0)
    completed = models.IntegerField(default=0)
    errormessage = models.TextField(null=True, blank=True)
    targets_completed = models.IntegerField(default=0)


class ProofOfConcept(models.Model):
    __tablename__ = 'proofofconcept'
    service = models.ForeignKey(Service, null=True, on_delete=models.SET_NULL)
    info = models.CharField(max_length=30, null=False)
    poc = models.TextField(null=True, blank=True)
    imported = models.IntegerField(default=0)

class Import(models.Model):
    __tablename__ = 'import'
    name = models.CharField(max_length=30, null=False)
    timestamp = models.DateTimeField(auto_now_add=True, blank=True)
    running = models.IntegerField(default=0)
    completed = models.IntegerField(default=0)


