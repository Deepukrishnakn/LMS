from django.contrib import admin
from .models import Category,Book
# Register your models here.

class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('category_name',)}
    list_display = ('category_name','slug')

class BookAdmin(admin.ModelAdmin):
    list_display = ('book_name','price','category','modified_date','is_available')
    prepopulated_fields = {'slug':('book_name',)}

admin.site.register(Category, CategoryAdmin)
admin.site.register(Book, BookAdmin)