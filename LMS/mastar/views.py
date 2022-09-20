from django.shortcuts import render
from rest_framework.decorators import api_view,authentication_classes
from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from rest_framework import status,exceptions
from .serializers import BookSerializer,CategorySerializer, EditSerializer
from .models import Book,Category
from accounts.authentication import JWTAuthentication
from rest_framework import viewsets
# Create your views here.

# get all catagorys
class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer

#add books 
@api_view(['POST'])
@authentication_classes([JWTAuthentication])
def addBook(request):

    data = request.data
    print(data)
    try:
        print('its add book')
        print(request.user)
        books = Book.objects.create(
            book_name = request.data['book_name'],
            slug = request.data['slug'],
            author = request.data['author'],
            description = request.data['description'],
            price = request.data['price'],
            image = request.FILES['image'],
            category_id = request.data['category'],
            is_available = request.data['is_available']
        )

        serializer = BookSerializer(books,many=False)
        message = {'detail':'Book posted Successfuly'}
        return Response(serializer.data)
    except :
        message = {'detail':'something weong!'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)

# view all books
class BooksViewset(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer


# @api_view(['PUT'])
# @authentication_classes([JWTAuthentication])
# def editbook(request,id):
#     try:
#         book=Book.objects.get(id=id)
#         edit=BookSerializer(instance=book,data=request.data)
#         if edit.is_valid():
#             edit.save()
#         return Response(edit.data)
#     except:
#         response=Response()
#         response.data={
#             'message':'somthing Wrong '
#         }
#         return response  

@api_view(['PUT'])
@authentication_classes([JWTAuthentication])
def editbook(request,id):
    try:
        print('yeees')
        book=Book.objects.get(id=id)
        edit=EditSerializer(instance=book,data=request.data)
        if edit.is_valid():
            print('sooooooi')
            edit.save()
        return Response(edit.data)
    except:
        response=Response()
        response.data={
            'message':'password miss match '
        }
        return response  