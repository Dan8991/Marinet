import re
from peewee import Model, IntegerField, CharField, PostgresqlDatabase

file = open("./settings/postgres_settings.txt")

#retrieving infos from te settings text file

USER = re.split(':|\n',file.readline())[1]
PASSWORD = re.split(':|\n',file.readline())[1]
HOST = re.split(':|\n',file.readline())[1]
PORT = re.split(':|\n',file.readline())[1]

DB = PostgresqlDatabase(
    "marinet_db",
    user=USER,
    password=PASSWORD,
    host=HOST,
    port=PORT
)

def init_tables():
    Users.create_table(True)
    UserFollows.create_table(True)
    Comments.create_table(True)


class BasicModel(Model):
    class Meta:
        database = DB

class Users(BasicModel):
    username = CharField()

class UserFollows(BasicModel):
    follower_id = IntegerField()
    followed_id = IntegerField()

class Comments(BasicModel):
    comment = CharField()
    user_id = IntegerField

