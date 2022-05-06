from django.shortcuts import render
import json

from rest_framework import generics


from django.utils.decorators import method_decorator
from django.views.generic import ListView
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse

from api.models import *
from api.serializers import *
from rest_framework.permissions import IsAuthenticated

# Create your views here.


class CategoriesList(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = (IsAuthenticated, )


@csrf_exempt
def category(request, category_id):
    try:
        category = Category.objects.get(id=category_id)
    except Category.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    if request.method == 'GET':
        return JsonResponse(CategorySerializer(category).data, safe=False)

    elif request.method == 'PUT':
        request_body = json.loads(request.body)
        serializer = CategorySerializer(instance=category, data=request_body)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse({'error': serializer.errors})

    elif request.method == 'DELETE':
        category.delete()
        return JsonResponse({'deleted': True})


class ProviderList(generics.ListCreateAPIView):
    queryset = Provider.objects.all()
    serializer_class = ProviderSerializer
    permission_classes = (IsAuthenticated, )


@csrf_exempt
def provider(request, provider_id):
    try:
        provider = Provider.objects.get(id=provider_id)
    except Provider.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    if request.method == 'GET':
        return JsonResponse(ProviderSerializer(provider).data, safe=False)

    elif request.method == 'PUT':
        request_body = json.loads(request.body)
        serializer = ProviderSerializer(instance=provider, data=request_body)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse({'error': serializer.errors})

    elif request.method == 'DELETE':
        provider.delete()
        return JsonResponse({'deleted': True})


class ProductList(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = (IsAuthenticated, )


@csrf_exempt
def product(request, product_id):
    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    if request.method == 'GET':
        return JsonResponse(ProductSerializer(product).data, safe=False)

    elif request.method == 'PUT':
        request_body = json.loads(request.body)
        serializer = ProductSerializer(instance=product, data=request_body)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse({'error': serializer.errors})

    elif request.method == 'DELETE':
        product.delete()
        return JsonResponse({'deleted': True})


def get_category_products(request, category_id):
    try:
        products_list = Product.objects.filter(category_id=category_id)
        serializer = ProductSerializer(products_list, many=True)
    except Product.DoesNotExist as e:
        return JsonResponse({'message': serializer.errors}, status=400)

    return JsonResponse(serializer.data, safe=False)
