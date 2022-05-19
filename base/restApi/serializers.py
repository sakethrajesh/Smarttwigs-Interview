from restApi.models import User
from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ( 'name', 'wins', 'cumulativeWinScore' )
        ordering = ['wins']
