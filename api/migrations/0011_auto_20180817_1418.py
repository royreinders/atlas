# Generated by Django 2.0.5 on 2018-08-17 14:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0010_auto_20180817_1145'),
    ]

    operations = [
        migrations.AddField(
            model_name='tool',
            name='timout',
            field=models.IntegerField(default=60),
        ),
        migrations.AlterField(
            model_name='service',
            name='port',
            field=models.IntegerField(default=0),
        ),
    ]