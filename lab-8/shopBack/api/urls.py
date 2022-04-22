from django.urls import path
from api.views import products_category,category,products,product,categories

urlpatterns = [
    path('products/',products ),
    path('products/<int:id>/', product),
    path('categories/', categories),
    path('categories/<int:id>/', category),
    path('categories/<int:id>/products', products_category),
]