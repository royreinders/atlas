# Generated by Django 2.0.5 on 2018-08-13 11:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_auto_20180813_1118'),
    ]

    operations = [
        migrations.AlterField(
            model_name='proofofconcept',
            name='poc',
            field=models.TextField(blank=True, null=True),
        ),
    ]