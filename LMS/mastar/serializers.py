
from dataclasses import field
from rest_framework import serializers
from .models import Category, Book
from accounts.serializers import RegisterSerializer



class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['category_name','slug','description','id']

class BookSerializer(serializers.ModelSerializer):
    category = CategorySerializer(many=False)
   
    class Meta:

        model = Book
        fields = '__all__'

class EditSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['book_name','author','price','description','image','is_available','category']