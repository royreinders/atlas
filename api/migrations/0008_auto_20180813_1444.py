# Generated by Django 2.0.5 on 2018-08-13 14:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_tools'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tools',
            name='expected_bad',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='tools',
            name='expected_good',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='tools',
            name='path',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]