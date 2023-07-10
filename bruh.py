import assistorgapi
import json

institutions_json = json.loads(assistorgapi.get_institutions())

for i in institutions_json:
  print(i['id'])