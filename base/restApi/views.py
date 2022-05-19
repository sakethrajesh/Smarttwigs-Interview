from numpy import generic
from restApi.models import User
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import UserSerializer
from rest_framework import generics
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters


# Create your views here.
# @api_view(['GET'])
# def getData(request):
#     items = Change.objects.all()
#     serializer = ItemSerializer(items, many=True)
#     return Response(serializer.data)

# @api_view(['POST'])
# def addItem(request):
#     serializer = ItemSerializer(data=request.data)
#     if serializer.is_valid():
#         serializer.save()
#     return Response(serializer.data)

class ChangeListCreate(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserListView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['wins', 'cumulativeWinScore']
    ordering = ['username']