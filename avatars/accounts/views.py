from django.shortcuts import render, redirect
from django.contrib import messages

from django.contrib.auth.views import LoginView, LogoutView
from django.views.generic.edit import CreateView
from django.contrib.auth.models import User
from django.contrib.auth import login, authenticate, logout
from .forms import LoginForm, SignupForm
from django.urls import reverse_lazy
from django.contrib.auth.mixins import LoginRequiredMixin

# class LoginUserView(LoginView):
#     form_class = LoginForm
#     model = User
#     template_name = 'login.html'
#     success_url = reverse_lazy('profile')

# class LogoutUserView(LogoutView):
#     template_name = 'index.html'
#     success_url = reverse_lazy('login')
    
# class RegisterView(CreateView):
#     form_class = SignupForm
#     model = User
#     template_name = 'index.html'
#     success_url = reverse_lazy('home')


def user_profile(request, id):
    user = User.objects.get(id=id)
    return render(request, 'profile.html', {'user': user})


def log_in(request):
    if request.method == 'GET':
        if request.user.is_authenticated:
            return redirect('home')
        form = LoginForm()
        return render(request, 'login.html', {'form': form})
    elif request.method == 'POST':
        form = LoginForm(request.POST)
        
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(request,username=username,password=password)
            if user:
                login(request, user)
                return redirect('home')
        
        # form is not valid or user is not authenticated
        messages.error(request,f'Invalid username or password')
        return render(request,'login.html',{'form': form})
    
def log_out(request):
    logout(request)
    return redirect('home')  

def sign_up(request):
    if request.method == 'GET':
        form = SignupForm()
        return render(request, 'signup.html', { 'form': form})   
    if request.method == 'POST':
        form = SignupForm(request.POST) 
        if form.is_valid():
            user = form.save(commit=False)
            user.username = user.username.lower()
            user.save()
            login(request, user)
            return redirect('home')
        else:
            return render(request, 'signup.html', {'form': form})
    
    
    