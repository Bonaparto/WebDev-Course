from django.shortcuts import render
from django.http.response import JsonResponse
from api.models import Company, Vacancy


def get_companies_list(request):
    companies_list = Company.objects.all()
    companies_list_json = [company.to_json() for company in companies_list]
    return JsonResponse(companies_list_json)


def get_company(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExit as e:
        return JsonResponse({'message': str(e)}, status=400)

    return JsonResponse(company.to_json())


def get_company_vacancies(request, company_id):
    try:
        vacancy_list = Vacancy.objects.filter(company_id=company_id)
        vacancy_list_json = [vacancy.to_json() for vacancy in vacancy_list]
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    return JsonResponse(vacancy_list_json)


def get_vacancies_list(request):
    vacancies_list = Vacancy.objects.all()
    vacancies_list_json = [vacancy.to_json() for vacancy in vacancies_list]
    return JsonResponse(vacancies_list_json)


def get_vacancy(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
    except Vacancy.DoesNotExit as e:
        return JsonResponse({'message': str(e)}, status=400)

    return JsonResponse(vacancy.to_json())


def get_top10_vacancies(request):
    try:
        vacancy_list = Vacancy.objects.all()
        vacancy_list_json = [vacancy.to_json() for vacancy in vacancy_list]
        vacancy_list_json.sort(key=lambda x: x.salary, reverse=True)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    return JsonResponse(vacancy_list_json)
