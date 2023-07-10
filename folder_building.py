import assistorgapi
import json
import os

def folder_check_create(folder):
  if not os.path.exists(folder_name):
        os.makedirs(folder_name)
        print(f"Created folder: {folder_name}")
  else:
    print(f"Folder already created: {folder_name}")

# appsettings
folder_name = './api/appsettings'
folder_check_create(folder_name)

# institutions
folder_name = './api/institutions'
folder_check_create(folder_name)

# AcademicYears
folder_name = './api/AcademicYears'
folder_check_create(folder_name)

# agreements
folder_name = './api/agreements'
folder_check_create(folder_name)

# institutions/#/transferability/availableAcademicYears

institutions_json = json.loads(assistorgapi.get_institutions())

for i in institutions_json:
  folder_name = './api/institutions/'+str(i['id'])+'/transferability/availableAcademicYears'
  folder_check_create(folder_name)

# transferability/categories
folder_name = './api/transferability/categories'
folder_check_create(folder_name)

