from rest_framework import serializers
from api.models import *


class CategorySerializer(serializers.Serializer):
    id = serializers.IntegerField()
    type = serializers.CharField()
    name = serializers.CharField()
    src = serializers.CharField()

    def create(self, validated_data):
        category = Category.objects.create(
            type=validated_data.get('type'),
            name=validated_data.get('name'),
            src=validated_data.get('src')
        )
        return category

    def update(self, instance, validated_data):
        instance.type = validated_data.get('type')
        instance.name = validated_data.get('name')
        instance.src = validated_data.get('src')
        instance.save()
        return instance


class ProviderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Provider
        fields = ['id', 'name', 'type', 'email', 'src']


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'type', 'price', 'src', 'category', 'provider']
