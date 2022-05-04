from django.http.response import JsonResponse
from api.models import Company
from api.models import Vacancy

def companies(req):
    companies = Company.objects.all()
    companies_json = [company.to_json() for company in companies]
    return JsonResponse(companies_json,safe=False)

def company(req, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({"message": str(e)}, status=400)
    return JsonResponse(company.to_json())

def vacancy_of_company(req,id):
    try:
        vacancies_json = []
        company = Company.objects.get(id=id)
        for vacancy in Vacancy.objects.filter(company_id=int(id)):
            obj = vacancy.to_json()
            vacancies_json.append(obj) 
    except Company.DoesNotExist as e:
        return JsonResponse({"message": str(e)}, status=400)
    return JsonResponse(vacancies_json, safe=False)

def vacancies(req):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vac.to_json() for vac in vacancies]
    return JsonResponse(vacancies_json,safe=False)

def vacancy(req,id):
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({"message": str(e)}, status=400)
    return JsonResponse(vacancy.to_json())

def top10_vacancies(req):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vac.to_json() for vac in vacancies]
    sorted_vacs = sorted(vacancies_json, key=lambda x: x["salary"], reverse=True)
    return JsonResponse(sorted_vacs,safe=False)
