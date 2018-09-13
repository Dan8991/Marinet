"""In this module a setting file for marinet is created"""
import os
USER = input("postgres username:\n")
PASSWORD = input("postgres password:\n")
HOST = input("postgres host:\n")
PORT = input("postgres port:\n")

os.makedirs(os.path.dirname("./settings/postgres_settings.txt"), exist_ok=True)

FILE = open("./settings/postgres_settings.txt", 'w')
FILE.write("username:" + USER + "\n")
FILE.write("password:" + PASSWORD + "\n")
FILE.write("host:" + HOST + "\n")
FILE.write("port:" + PORT + "\n")
