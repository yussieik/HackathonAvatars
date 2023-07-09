from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('api/avatars/', views.AvatarsListView.as_view(), name='avatars-list'), 

    path('api/users/', views.AuthorListView.as_view(), name='users-list'),
    
    path('api/category/', views.CategoryListView.as_view(), name='categories-list'),

    path('api/faces/', views.FaceListView.as_view(), name='faces-list'),
    
    path('api/colors/', views.ColorListView.as_view(), name='colors-list'),

    path('api/hair/', views.HairListView.as_view(), name='hair-list'),
    
    path('api/styles/', views.StyleListView.as_view(), name='styles-list'),

    path('api/eyes/', views.EyesListView.as_view(), name='eyes-list'),
    
    path('api/details/', views.DetailsListView.as_view(), name='details-list'),
]