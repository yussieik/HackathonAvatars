# from django.db.models.signals import post_save # poslr save
# from django.dispatch import receiver
# from django.contrib.auth.models import User, Group
# from .models import UserProfile #nasha funkciya

# # def create_user_profile(sender - User model, instance - new user, created - bolean, **kwargs - just in case):
# @receiver(post_save, sender = User)
# def create_user_profile(sender, instance, created, **kwargs):
#     if created:
#         UserProfile.objects.create(user=instance) #izmeneniya to app
        
# #здесь это сделали для автоматического создания профайла для созданного юзера

# @receiver(post_save, sender = User)
# def attach_user_group(sender, instance, created, **kwargs):
#     if created:
#         if not instance.is_stuff:
#             group = Group.objects.get(name='regular')
#             instance.group.add(group)
            
#     else:
#         if instance.is_stuff:
#             group = Group.objects.get(name='regular')
#             instance.group.remove(group)
#             instance.save()