# Generated by Django 2.0.5 on 2018-08-17 14:27

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_auto_20180817_1418'),
    ]

    operations = [
        migrations.RenameField(
            model_name='tool',
            old_name='timout',
            new_name='timeout',
        ),
    ]