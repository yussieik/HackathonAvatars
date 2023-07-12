from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class SignupForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'password1']
        # fields = ['username', 'first_name', 'last_name', 'password1', 'password2']

# class LoginForm(UserCreationForm):
#     class Meta:
#         model = User
#         fields = ['username', 'password']

class LoginForm(forms.Form):
    username = forms.CharField(max_length=65)
    password = forms.CharField(max_length=65, widget=forms.PasswordInput)
