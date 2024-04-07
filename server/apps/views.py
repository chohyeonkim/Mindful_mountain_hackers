from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
from django.http import JsonResponse
from .fixtures.activities import mock_activities
from .fixtures.arcteryx import mock_arc


class ActivityDetailView(View):
    def get(self, request, identifier):
        activity = next((item for item in mock_activities if item['identifier'] == identifier), None)
        if activity:
            return JsonResponse(activity)
        else:
            return JsonResponse({'error': 'Activity not found'}, status=404)
        
class ArcteryxProductsListView(View):
    def get(self, request, label):
        products = [item for item in mock_arc if item['label'] == label]
        
        if products:
            return JsonResponse(products, safe=False)
        else:
            return JsonResponse({'error': 'No products found for this label'}, status=404)
