from django.db import models


class Company(models.Model):
    name = models.CharField(default='', max_length=300),
    description = models.TextField(default='')
    city = models.CharField(default='', max_length=300)
    address = models.TextField(default=''),

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'address': self.address
        }


class Vacancy(models.Model):
    name = models.CharField(default='', max_length=300)
    description = models.TextField(default='')
    salary = models.FloatField(default='0')
    company = models.ForeignKey(Company, default=1, on_delete=models.SET_DEFAULT)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
            'company': self.company
        }