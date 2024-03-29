# Generated by Django 2.2 on 2022-04-21 13:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_auto_20220421_1940'),
    ]

    operations = [
        migrations.AlterField(
            model_name='company',
            name='city',
            field=models.CharField(default='', max_length=300),
        ),
        migrations.AlterField(
            model_name='vacancy',
            name='company',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.SET_DEFAULT, to='api.Company'),
        ),
        migrations.AlterField(
            model_name='vacancy',
            name='name',
            field=models.CharField(default='', max_length=300),
        ),
        migrations.AlterField(
            model_name='vacancy',
            name='salary',
            field=models.FloatField(default='0'),
        ),
    ]
