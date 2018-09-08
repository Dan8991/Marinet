import re
file = open("./settings/postgres_settings.txt")

#retrieving infos from te settings text file

user = re.split(':|\n',file.readline())[1]
password = re.split(':|\n',file.readline())[1]
host = re.split(':|\n',file.readline())[1]
port = re.split(':|\n',file.readline())[1]


