import json
from django.shortcuts import render
from django.http import HttpResponse
from django.views import View
from django.http import JsonResponse
from .fixtures.activities import mock_activities
from .fixtures.arcteryx import mock_arc

import requests
import os
def exercise(request, muscle):
    api_key = os.getenv('EXERCISE_API_KEY')
    if not api_key:
        return JsonResponse({'error': 'API key not set'})
    
    url = f"https://api.api-ninjas.com/v1/exercises?muscle={muscle}"
    headers = {
        'X-Api-Key': api_key
    }
    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        exercises = json.loads(response.text)
        filtered_exercises = exercises[:3]
        return JsonResponse(filtered_exercises, safe=False)
    else:
        return JsonResponse({'error': 'Failed to fetch data from API'})

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

class DailyQuoteView(View):
    def get(self, request):
        url = 'https://zenquotes.io/api/quotes/'
        response = requests.get(url)
        data = response.json()
        return JsonResponse(data)