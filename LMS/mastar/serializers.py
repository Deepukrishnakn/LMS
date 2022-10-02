
from rest_framework import serializers
from .models import BookRating, Category, Book, Favorite
from accounts.serializers import RegisterSerializer



class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['category_name','slug','description','id']

class BookSerializer(serializers.ModelSerializer):
    book_rating=serializers.StringRelatedField(many=True,read_only=True)
    Favorite_book=serializers.StringRelatedField(many=True,read_only=True)
    category = CategorySerializer(many=False)

    class Meta:

        model = Book
        fields = '__all__'

class EditSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['book_name','author','price','description','image','is_available','category']


class BookRatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = BookRating
        fields = ['id','user','book','rating','reviews','add_time']
        depth = 2

        # def __init__(self,*args,**kwargs):
        #     super(BookRatingSerializer,self).__init__(*args,**kwargs)
        #     self.Meta.depth = 1


class FavoriteBookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favorite
        fields = '__all__'
        depth = 2