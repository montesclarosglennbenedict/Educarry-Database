#to build the database as is, we must make something that builds itself

#the principle of it is to download all the files initially (this is the first time download) in the format listed in functional specs, then to use hashes or checksums or something to see if it needs to be replaced

#shouldn't be too hard, probably

#i guess based off of this, we go institutions (pretty simple, just download the institutions file)

#then transferability lists, cycle through all the institution ids, put them into a folder

#articulation agreements, pretty much dump all the data in their respective folders

#then course to course articulation, where we make our own new files and update from there

import assistorgapi
import os

database_settings = ['academic_years', 'settings', 'institutions']

file_path = "./database_settings/academic_years.json"

# Check if the file already exists
with open(file_path, "w") as text_file:
  # Write text to the file
  text_file.write(str(assistorgapi.get_academic_years()))
  print(f"The file '{file_path}' has been created and written to.")

file_path = "./database_settings/assist_settings.json"

# Check if the file already exists
with open(file_path, "w") as text_file:
  # Write text to the file
  text_file.write(str(assistorgapi.get_assist_settings()))
  print(f"The file '{file_path}' has been created and written to.")

file_path = "./database_settings/institutions.json"

# Check if the file already exists
with open(file_path, "w") as text_file:
  # Write text to the file
  text_file.write(str(assistorgapi.get_institutions()))
  print(f"The file '{file_path}' has been created and written to.")
 
