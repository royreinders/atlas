# Generated by Django 2.0.5 on 2018-08-13 14:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_auto_20180813_1444'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Tools',
            new_name='Tool',
        ),
    ]