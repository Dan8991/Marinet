from models import USER, PASSWORD, HOST, PORT,  init_tables
from psycopg2 import connect, ProgrammingError, OperationalError
from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT

try:
    con = connect(dbname="postgres", user=USER, password=PASSWORD, host=HOST, port=PORT)
except OperationalError:
    print("One between user, password, port, host is uncorrect, usually port is 5432 and host is localhost")
    exit()
curs = con.cursor()
#needed in order to be able to execute the create database instruction
con.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
try:
    curs.execute("CREATE DATABASE marinet_db;")
    curs.close()
    con.close()
except ProgrammingError:
    print("tables already exists")
init_tables()