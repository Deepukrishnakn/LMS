
from accounts.models import Account
from django.db import models
from django.urls import reverse

# Create your models here.

class Category(models.Model):
    category_name = models.CharField(max_length=50, unique=True)
    slug = models.SlugField(max_length=100, unique=True)
    description = models.TextField(max_length=255)
    
    class Meta:
        verbose_name = 'categrory'
        verbose_name_plural = 'categories'
        
    def get_url(self):
        return reverse('books_by_category', args=[self.slug])    
    def __str__(self):
        return self.category_name

class Book(models.Model):
    book_name = models.CharField(max_length=200)
    author = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, unique=True)
    description = models.TextField(max_length=500, blank=True)
    price = models.IntegerField()
    image = models.ImageField(upload_to='photos/products')
    is_available = models.BooleanField(default=False)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    create_date = models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.book_name


#book Rating and Reviews

class BookRating(models.Model):
    user = models.ForeignKey(Account,on_delete=models.CASCADE,related_name='rating_user')
    book = models.ForeignKey(Book,on_delete=models.CASCADE,related_name='book_rating')
    rating = models.IntegerField()
    reviews = models.TextField()
    add_time = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.rating} - {self.reviews}'


class Favorite(models.Model):
    user = models.ForeignKey(Account,on_delete=models.CASCADE,related_name='user_Favorite')
    book = models.ForeignKey(Book,on_delete=models.CASCADE,related_name='Favorite_book')
    Like = models.BooleanField(default=False)
    add_date =models.DateTimeField(auto_now_add=True)
    modified_date = models.DateTimeField(auto_now=True)
