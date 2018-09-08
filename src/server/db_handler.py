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


class BasicModel(Model):
    class Meta:
        database = DB

class User(BasicModel):
    id = IntegerField()
    username = CharField()

class UserFollows(BasicModel):
    id = IntegerField()
    follower_id = IntegerField()
    followed_id = IntegerField()

class Comments(BasicModel):
    id = IntegerField()
    comment = CharField()
    user_id = IntegerField

