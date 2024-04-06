from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
from django.http import JsonResponse
from .fixtures.activities import mock_activities
from .fixtures.arcteryx import mock_arc

import requests
import os
from django.http import JsonResponse

def exercise(request, muscle):
    api_key = os.getenv('EXERCISE_API_KEY')
    if not api_key:
        return JsonResponse({'error': 'API key not set'})
    
    url = f"https://api.api-ninjas.com/v1/exercises?muscle={muscle}"
    headers = {
        'Authorization': f'Bearer {api_key}',
        'Content-Type': 'application/json',
    }
    response = requests.get(url)
    data = response.json()
    return JsonResponse(data)

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
