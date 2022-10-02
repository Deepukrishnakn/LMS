from . import views
from django.urls import path
from rest_framework.routers import DefaultRouter

router=DefaultRouter()
router.register('category',views.CategoryViewSet,basename="category")
router.register('get_books',views.BooksViewset,basename="books")
router.register('booksrating',views.BooksRatingViewset,basename="booksrating")
router.register('favoritebook',views.FavoriteBooksViewset,basename="favoritebook")

urlpatterns = [
    # path('register',RegisterAPIView.as_view()),
    path('addbook/', views.addBook, name="addbook"),
    path('editbook/<int:id>/', views.editbook, name="editbook"),
]+router.urls 