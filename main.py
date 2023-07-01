import json
import assistorgapi
from datetime import datetime, timedelta

file_path = "./database_settings/institutions.json"

with open(file_path, "r") as text_file:
    # Read the entire content of the file
    file_content = text_file.read()

# Print the file content

ge_agreements = ['CSUTC','UCTCA','UCTEL','IGETC','CSUGE','CSUAI']

year = 74
start_time = datetime.now()
print(start_time)

for i in json.loads(file_content):
  for j in ge_agreements:
    other_file_path =  './transferability_lists/'+str(j)+"/"+str(i['id'])+'.json'
    bruh = str(assistorgapi.get_transferability_courses(int(i['id']), year, j))
    with open(other_file_path, "w") as text_file:
      # Read the entire content of the file
      text_file.write(bruh)
end_time = datetime.now()
time_difference = end_time - start_time

print(time_difference)