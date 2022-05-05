from django.urls import path
from api.views import CompanyListAPIView, CompanyVacanciesAPIView,VacancyItemAPIView,VacancyListAPIView,TopVacancyAPIView,CompanyItemAPIView
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('login/', obtain_jwt_token),
    path('companies/',CompanyListAPIView.as_view() ),
    path('companies/<int:id>/', CompanyItemAPIView.as_view()),
    path('vacancies/', VacancyListAPIView.as_view()),
    path('vacancies/<int:id>/', VacancyItemAPIView.as_view()),
    path('companies/<int:id>/vacancies/', CompanyVacanciesAPIView.as_view()),
    path('vacancies/top_ten/',TopVacancyAPIView.as_view() ),
]
