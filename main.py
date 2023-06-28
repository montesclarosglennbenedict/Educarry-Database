import json
import assistorgapi

file_path = "./database_settings/institutions.json"

with open(file_path, "r") as text_file:
    # Read the entire content of the file
    file_content = text_file.read()

# Print the file content

ge_agreements = ['CSUTC','UCTCA','UCTEL','IGETC','CSUGE','CSUAI']

year = 74
for i in eval(file_content):
  print(str(i['id']))
  for j in ge_agreements:
    other_file_path =  './transferability_lists/'+str(j)+"/"+str(i['id'])+'.json'
    bruh = str(assistorgapi.get_transferability_courses(int(i['id']), year, j))
    with open(other_file_path, "w") as text_file:
      # Read the entire content of the file
      text_file.write(bruh)
  