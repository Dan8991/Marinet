"""Module used to initialize the database on the machine where marinet is running"""
from psycopg2 import connect, ProgrammingError, OperationalError
from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT
from marinet.models import USER, PASSWORD, HOST, PORT, init_tables

try:
    CON = connect(dbname="postgres", user=USER,
                  password=PASSWORD, host=HOST, port=PORT)
except OperationalError:
    print("One between user, password, port, host is uncorrect,"
          + "usually port is 5432 and host is localhost")
    exit()
CURS = CON.cursor()
# needed in order to be able to execute the create database instruction
CON.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)
try:
    CURS.execute("CREATE DATABASE marinet_db;")
    CURS.close()
    CON.close()
except ProgrammingError:
    print("tables already exists")
init_tables()
