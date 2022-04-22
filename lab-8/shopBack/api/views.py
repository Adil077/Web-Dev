from django.http.response import  JsonResponse
from api.models import Product
from api.models import Category

def products(req):
    products = [prod.to_json() for prod in Product.objects.all()] 
    return JsonResponse(products, safe=False)

def product(req, id):
    try:
        product = Product.objects.get(id=id)
        return JsonResponse(product.to_json())
    except:
        return JsonResponse({"message": "Product doesn't exist"}, status=404)

def categories(req):
    categories = [category.to_json() for category in Category.objects.all()] 
    return JsonResponse(categories, safe=False)

def category(req, id):
    try:
        category = Category.objects.get(id=id)
        return JsonResponse(category.to_json())
    except:
        return JsonResponse({"message": "Category doesn't exist"}, status=404)

def products_category(req, id):
    try:
        category = Category.objects.get(id=id)
        products = []
        for product in Product.objects.filter(category=int(id)):
            products.append(product.to_json())
        return JsonResponse(products, safe=False)
    except:
        return JsonResponse({"message": "Category doesn't exist"}, status=404)