# Generated by Django 2.0.5 on 2018-08-13 11:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_auto_20180813_1121'),
    ]

    operations = [
        migrations.AddField(
            model_name='proofofconcept',
            name='falsepositive',
            field=models.IntegerField(default=0),
        ),
    ]
