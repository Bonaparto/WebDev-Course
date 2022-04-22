import json

from rest_framework import generics


from django.utils.decorators import method_decorator
from django.views.generic import ListView
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse

from api.models import *
from api.serializers import *
from rest_framework.permissions import IsAuthenticated


class CompaniesList(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer
    permission_classes = (IsAuthenticated, )

# @method_decorator(csrf_exempt, name='dispatch')
# class Companies(ListView):
#     def has_permission(self, request, view):
#         return False
#
#     permission_classes = (IsAuthenticated,)
#
#     def get(self, request, *arg, **kwargs):
#         permission_classes = (IsAuthenticated,)
#         companies_list = Company.objects.all()
#         serializer = CompanySerializer(companies_list, many=True)
#         return JsonResponse(serializer.data, safe=False)
#
#     def post(self, request, *arg, **kwargs):
#         permission_classes = (IsAuthenticated,)
#         request_body = json.loads(request.body)
#
#         serializer = CompanySerializer(data=request_body)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data)
#         return JsonResponse({'error': serializer.errors})


@csrf_exempt
def company(request, company_id):
    try:
        company = Company.objects.get(id=company_id)
    except Company.DoesNotExist as e:
        return JsonResponse({'message': str(e)}, status=400)

    if request.method == 'GET':
        return JsonResponse(CompanySerializer(company).data, safe=False)

    elif request.method == 'PUT':
        request_body = json.loads(request.body)
        serializer = CompanySerializer(instance=company, data=request_body)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse({'error': serializer.errors})

    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({'deleted': True})


def get_company_vacancies(request, company_id):
    try:
        vacancy_list = Vacancy.objects.filter(company_id=company_id)
        serializer = VacancySerializer(vacancy_list, many=True)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'message': serializer.errors}, status=400)

    return JsonResponse(serializer.data, safe=False)


class VacanciesList(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer
    permission_classes = (IsAuthenticated, )


# @method_decorator(csrf_exempt, name='dispatch')
# class Vacancies(ListView):
#     def get(self, request, *arg, **kwargs):
#         vacancies_list = Vacancy.objects.all()
#         serializer = VacancySerializer(vacancies_list, many=True)
#         return JsonResponse(serializer.data, safe=False)
#
#     def post(self, request, *arg, **kwargs):
#         request_body = json.loads(request.body)
#         serializer = VacancySerializer(data=request_body)
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data)
#         return JsonResponse({'error': serializer.errors})


@csrf_exempt
def vacancy(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.get(id=vacancy_id)
        serializer = VacancySerializer(vacancy)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'message': serializer.errors}, status=400)

    if request.method == 'GET':
        return JsonResponse(VacancySerializer(company).data, safe=False)

    elif request.method == 'PUT':
        request_body = json.loads(request.body)
        serializer = VacancySerializer(instance=vacancy, data=request_body)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse({'error': serializer.errors})

    elif request.method == 'DELETE':
        vacancy.delete()
        return JsonResponse({'deleted': True})


def get_top10_vacancies(request):
    try:
        vacancy_list = Vacancy.objects.all().order_by('-salary')
        vacancy_list = vacancy_list[:10]
        serializer = VacancySerializer(vacancy_list, many=True)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'message': serializer.errors}, status=400)

    return JsonResponse(serializer.data, safe=False)
