import os
user = input("postgres username:\n")
password = input("postgres password:\n")
host = input("postgres host:\n")
port = input("postgres port:\n")

os.makedirs(os.path.dirname("./settings/postgres_settings.txt"), exist_ok=True)

file = open("./settings/postgres_settings.txt", 'w')
file.write("username:" + user + "\n")
file.write("password:" + password + "\n")
file.write("host:" + host + "\n")
file.write("port:" + port + "\n")
