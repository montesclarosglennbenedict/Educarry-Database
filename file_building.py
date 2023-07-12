import assistorgapi
import json
import os

def file_creation_edit(file_path, data):
  with open(file_path, 'w') as file:
    file.write(data)

def folder_check_create(folder):
  if not os.path.exists(folder_name):
        os.makedirs(folder_name)
        print(f"Created folder: {folder_name}")
  else:
    print(f"Folder already created: {folder_name}")

def index_json(file_path):
  return file_path +'/index.json'

# appsettings
folder_name = './api/appsettings'
file_name = index_json(folder_name)
file_creation_edit(file_name, assistorgapi.get_assist_settings())

# institutions
folder_name = './api/institutions'
file_name = index_json(folder_name)
file_creation_edit(file_name, assistorgapi.get_institutions())

# AcademicYears
folder_name = './api/AcademicYears'
file_name = index_json(folder_name)
file_creation_edit(file_name, assistorgapi.get_academic_years())

# agreements, wait till the new api
# folder_name = './api/agreements'
# folder_check_create(folder_name)

# institutions/#/transferability/availableAcademicYears

institutions_json = json.loads(assistorgapi.get_institutions())

for i in institutions_json:
  folder_name = './api/institutions/'+str(i['id'])+'/transferability/availableAcademicYears'
  file_name = folder_name+'/index.json'
  file_creation_edit(file_name, assistorgapi.get_institutions_academic_years(str(i['id'])))
  
# transferability/categories
folder_name = './api/transferability/categories'

for i in institutions_json:
  file_name = folder_name+'/'+str(i['id'])+'-74-IGETC.json'
  file_creation_edit(file_name, str(assistorgapi.get_transferability_categories(i['id'],'74','IGETC')))

folder_name = './api/transferability/courses'

folder_check_create(folder_name)

for i in institutions_json:
  file_name = folder_name+'/'+str(i['id'])+'-74-IGETC.json'
  file_creation_edit(file_name, str(assistorgapi.get_transferability_courses(str(i['id']), '74', 'IGETC')))