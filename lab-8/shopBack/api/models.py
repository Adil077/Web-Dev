from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=400)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()
    category = models.IntegerField()
    def to_json(self):
        return {
            'id' : self.id,
            'name' : self.name,
            'price' : self.price,
            'description' : self.description,
            'count' : self.count,
            'is_active' : self.is_active,
            'category': self.category 
        }

class Category(models.Model):
    name = models.CharField(max_length=400)
    def to_json(self):
        return {
            'id' : self.id,
            'name' : self.name,
        }
