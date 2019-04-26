from django.conf.urls import url
from . import views

app_name = 'sample'

urlpatterns = [
    url('', views.HomeView.as_view()),
]