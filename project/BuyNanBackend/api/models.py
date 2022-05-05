from django.db import models

# Create your models here.
from django.db import models


class Provider(models.Model):

    type = models.CharField(default='', max_length=300)
    name = models.CharField(default='', max_length=300)
    src = models.CharField(default='', max_length=300)
    email = models.CharField(default='', max_length=300)

    class Meta:
        verbose_name_plural = "Providers"

    def to_json(self):
        return {
            'id': self.id,
            'type': self.type,
            'src': self.src,
            'email': self.email
        }


class Category(models.Model):

    type = models.CharField(default='', max_length=300)
    name = models.CharField(default='', max_length=300)
    src = models.CharField(default='', max_length=300)

    class Meta:
        verbose_name_plural = "Categories"

    def to_json(self):
        return {
            'id': self.id,
            'type': self.type,
            'src': self.src,
        }


class Product(models.Model):

    type = models.CharField(default='', max_length=300)
    name = models.CharField(default='', max_length=300)
    src = models.CharField(default='', max_length=300)
    price = models.FloatField()
    provider = models.ForeignKey(Provider, default=1, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, default=1, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = "Products"

    def to_json(self):
        return {
            'id': self.id,
            'type': self.type,
            'src': self.src,
            'price': self.price,
            'provider': self.provider_id,
            'category': self.category
        }
