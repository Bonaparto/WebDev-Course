from django.shortcuts import render
from django.http.response import JsonResponse
from api.models import Product, Category


def get_products_list(request):
    products_list = Product.objects.all()
    products_list_json = [product.to_json() for product in products_list]
    return JsonResponse(products_list_json, safe=False)


def get_product(request, product_id):
    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    return JsonResponse(product.to_json())


def get_categories_list(request):
    categories_list = Category.objects.all()
    categories_list_json = [category.to_json() for category in categories_list]
    return JsonResponse(categories_list_json, safe=False)


def get_category(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    return JsonResponse(category.to_json())


def get_category_products(request, category_id):
    try:
        products = Product.objects.filter(category_id=category_id)
        products_list_json = [product.to_json() for product in products]
    except Product.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    return JsonResponse(products_list_json, safe=False)
