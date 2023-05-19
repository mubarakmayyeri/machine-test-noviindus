from django.shortcuts import render, redirect
from django.contrib import auth, messages
from .forms import RegistrationForm, LoginForm
from .models import Account
from django.views.decorators.cache import never_cache
from django.http import JsonResponse



@never_cache
def user_login(request):
    # if request.user.is_authenticated:
    #     return redirect('index')
  
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['password']
        test = Account.objects.get(email=email)
        print(test.password)
        user = auth.authenticate(email=email, password=password)
        print(user)

        if user is not None:
            auth.login(request, user)

            return redirect('index')

        else:
            messages.error(request, 'Invalid credentials!')

            return redirect('user_login')

    return render (request, 'accounts/login.html')

def user_register(request):
  if request.user.is_authenticated:
    return redirect('index')
  
  if request.method == 'POST':
    form = RegistrationForm(request.POST)
    if form.is_valid():
      first_name = form.cleaned_data['first_name']
      last_name = form.cleaned_data['last_name']
      email = form.cleaned_data['email']
      phone_number = form.cleaned_data['phone_number']
      password = form.cleaned_data['password']
      
      user = Account.objects.create_user(first_name=first_name, last_name=last_name, email=email, phone_number=phone_number, password=password)
      user.save()
    
      messages.success(request, 'Registration Successful')
      return redirect('user_login')
  else:    
    form = RegistrationForm()
  context = {
    'form': form
  }
  
  return render (request, 'accounts/register.html', context)