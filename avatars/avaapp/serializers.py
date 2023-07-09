from rest_framework import serializers
from .models import Avatar, Author, Face, Color, Hair, Style, Eyes, Details, Category

class AvatarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Avatar
        fields = '__all__'
        # fields = ['id', 'author', 'author', 'face', 'hair', 'eyes', 'details']

class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = '__all__'
        # fields = ['id', 'userName']
        
class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
        # fields = ['id', 'category']
        
class FaceSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Face
        fields = '__all__'
        # fields = ['id', 'imgName ', 'imgUrl', 'category']
        
class ColorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Color
        fields = '__all__'
        # fields = ['id', 'imgName ', 'imgUrl', 'category']
        
class HairSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hair
        fields = '__all__'
        # fields = ['id', 'imgName ', 'imgUrl', 'category']
        
class StyleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Style
        fields = '__all__'
        # fields = ['id', 'imgName ', 'imgUrl', 'category']
        
class EyesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Eyes
        fields = '__all__'
        # fields = ['id', 'imgName ', 'imgUrl', 'category']
        
class DetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Details
        fields = '__all__'
        # fields = ['id', 'imgName ', 'imgUrl', 'category']
        

        
