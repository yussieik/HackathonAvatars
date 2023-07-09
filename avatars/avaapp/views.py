from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, CreateAPIView
from rest_framework import status
from rest_framework.permissions import AllowAny, IsAuthenticated
from .models import Avatar, Author, Face, Color, Hair, Style, Eyes, Details, Category
from .serializers import AvatarSerializer, AuthorSerializer, CategorySerializer, FaceSerializer, ColorSerializer, HairSerializer, StyleSerializer, EyesSerializer, DetailsSerializer

def home(request):
    return render(request, 'index.html')

class AvatarsListView(ListAPIView):
    queryset = Avatar.objects.all()
    serializer_class = AvatarSerializer
    permission_classes = (AllowAny, )

class AuthorListView(ListAPIView):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer
    permission_classes = (AllowAny, )
    
class CategoryListView(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = (AllowAny, )
    
class FaceListView(ListAPIView):
    queryset = Face.objects.all()
    serializer_class = FaceSerializer
    permission_classes = (AllowAny, )
    
class ColorListView(ListAPIView):
    queryset = Color.objects.all()
    serializer_class = ColorSerializer
    permission_classes = (AllowAny, )

class HairListView(ListAPIView):
    queryset = Hair.objects.all()
    serializer_class = HairSerializer
    permission_classes = (AllowAny, )
    
class StyleListView(ListAPIView):
    queryset = Style.objects.all()
    serializer_class = StyleSerializer
    permission_classes = (AllowAny, )
    
class EyesListView(ListAPIView):
    queryset = Eyes.objects.all()
    serializer_class = EyesSerializer
    permission_classes = (AllowAny, )

class DetailsListView(ListAPIView):
    queryset = Details.objects.all()
    serializer_class = DetailsSerializer
    permission_classes = (AllowAny, )
    
class AvatarsCreateListView(CreateAPIView):
    queryset = Avatar.objects.all()
    serializer_class = AvatarSerializer
    permission_classes = (AllowAny, )
