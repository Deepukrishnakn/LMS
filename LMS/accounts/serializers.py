from statistics import mode
from rest_framework import serializers
from .models import Account

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = '__all__'
        #['first_name','last_name','email','phone_number','password','id']
        extra_kwargs ={
            'password':{'write_only':True}
        }