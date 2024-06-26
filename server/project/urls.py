"""
URL configuration for backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from apps.views import ActivityGroupView
from apps.views import ActivityDetailView
from apps.views import ArcteryxProductsListView
from apps.views import DailyQuoteView
from apps.views import RandomBreathingTechniqueView
from apps import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/activity/<str:label>/', ActivityGroupView.as_view(), name='activity-group'),
    path('api/activities/<str:identifier>/', ActivityDetailView.as_view(), name='activity-detail'),
    path('api/products/<str:label>/', ArcteryxProductsListView.as_view(), name='arcteryx-products-list'),
    path('api/quote/', DailyQuoteView.as_view(), name='daily-quote'),
    path('api/breathing/', RandomBreathingTechniqueView.as_view(), name='random-breathing-technique'),
    path('exercise/<str:muscle>', views.exercise),
]
