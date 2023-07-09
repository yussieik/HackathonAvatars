# Generated by Django 4.2.3 on 2023-07-06 12:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('avaapp', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='author',
            old_name='user_name',
            new_name='userName',
        ),
        migrations.RenameField(
            model_name='avatar',
            old_name='avatar_name',
            new_name='avatarName',
        ),
        migrations.RenameField(
            model_name='details',
            old_name='img_name',
            new_name='imgName',
        ),
        migrations.RenameField(
            model_name='details',
            old_name='img_url',
            new_name='imgUrl',
        ),
        migrations.RenameField(
            model_name='eyes',
            old_name='img_name',
            new_name='imgName',
        ),
        migrations.RenameField(
            model_name='eyes',
            old_name='img_url',
            new_name='imgUrl',
        ),
        migrations.RenameField(
            model_name='face',
            old_name='img_name',
            new_name='imgName',
        ),
        migrations.RenameField(
            model_name='face',
            old_name='img_url',
            new_name='imgUrl',
        ),
        migrations.RenameField(
            model_name='hair',
            old_name='img_name',
            new_name='imgName',
        ),
        migrations.RenameField(
            model_name='hair',
            old_name='img_url',
            new_name='imgUrl',
        ),
        migrations.RenameModel(
            old_name='ElementCategory',
            new_name='Category',
        ),
        migrations.CreateModel(
            name='Style',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('imgName', models.CharField(max_length=100)),
                ('imgUrl', models.CharField(max_length=100)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='avaapp.category')),
            ],
        ),
        migrations.CreateModel(
            name='Color',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('imgName', models.CharField(max_length=100)),
                ('imgUrl', models.CharField(max_length=100)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='avaapp.category')),
            ],
        ),
    ]
