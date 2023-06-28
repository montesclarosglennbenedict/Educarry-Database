import assistorgapi

database_settings = {
    "academic_years": assistorgapi.get_academic_years(),
    "assist_settings": assistorgapi.get_assist_settings(),
    "institutions": assistorgapi.get_institutions()
}

for file_name, data in database_settings.items():
    file_path = f"./database_settings/{file_name}.json"
    with open(file_path, "w") as text_file:
        text_file.write(str(data))
        print(f"The file '{file_path}' has been created and written to.")

for 