from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Author(models.Model):
    userName = models.OneToOneField(User, on_delete=models.CASCADE)

    # def __str__(self):
    #     return self.userName
    
class Category(models.Model):
    category =models.CharField(max_length=100)
    
    def __str__(self):
        return self.category
    
class Face(models.Model):
    imgName = models.CharField(max_length=100)
    imgUrl = models.CharField(max_length=100)
    category =models.ForeignKey(Category, on_delete=models.CASCADE)
    def __str__(self):
        return self.imgName
    
class Color(models.Model):
    imgName = models.CharField(max_length=100)
    imgUrl = models.CharField(max_length=100)
    category =models.ForeignKey(Category, on_delete=models.CASCADE)
    def __str__(self):
        return self.imgName
    
class Hair(models.Model):
    imgName = models.CharField(max_length=100)
    imgUrl = models.CharField(max_length=100)
    category =models.ForeignKey(Category, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.imgName

class Eyes(models.Model):
    imgName = models.CharField(max_length=100)
    imgUrl = models.CharField(max_length=100)
    category =models.ForeignKey(Category, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.imgName
    
class Style(models.Model):
    imgName = models.CharField(max_length=100)
    imgUrl = models.CharField(max_length=100)
    category =models.ForeignKey(Category, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.imgName

class Details(models.Model):
    imgName = models.CharField(max_length=100)
    imgUrl = models.CharField(max_length=100)
    category =models.ForeignKey(Category, on_delete=models.CASCADE)
    
    def __str__(self):
        return self.imgName


class Avatar(models.Model):
    author = models.ForeignKey(Author, on_delete=models.CASCADE)
    avatarName = models.CharField(max_length=100)
    face = models.ForeignKey(Face, on_delete=models.CASCADE)
    hair = models.ForeignKey(Hair, on_delete=models.CASCADE)
    eyes = models.ForeignKey(Eyes, on_delete=models.CASCADE)
    details= models.ForeignKey(Details, on_delete=models.CASCADE)
    
    def __str__(self):
        return f"{self.author} {self.avatarName}"