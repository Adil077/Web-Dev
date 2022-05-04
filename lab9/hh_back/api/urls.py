from django.urls import path
from api.views import companies, company,vacancy_of_company,vacancies,vacancy,top10_vacancies

urlpatterns = [
    path('companies/',companies ),
    path('companies/<int:id>/', company),
    path('vacancies/', vacancies),
    path('vacancies/<int:id>/', vacancy),
    path('companies/<int:id>/vacancies/', vacancy_of_company),
    path('vacancies/top_ten/',top10_vacancies )
]
