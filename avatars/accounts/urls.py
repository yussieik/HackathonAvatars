from django.urls import path
from django.contrib.auth import views
from .import views
from .views import user_profile


urlpatterns = [
    path('login/', views.log_in, name='login'),
    path('logout/', views.log_out, name='logout'),
    path('signup/', views.sign_up, name='signup'),


    # path('login/', views.LoginView.as_view(template_name = 'login.html'), name='login'),

    # path('logout/', views.LogoutView.as_view(), name='logout'),
    # path('signup/', views.RegisterView.as_view(template_name ='signup.html'), name='signup'),
    path('profile/<int:id>', user_profile,  name='profile'),
]
