"""Module where the peewee representations of the db tables are defined"""
import datetime
import re
from peewee import Model, IntegerField, CharField, PostgresqlDatabase, DateTimeField, TextField

FILE = open("./settings/postgres_settings.txt")

# retrieving infos from te settings text file

USER = re.split(':|\n', FILE.readline())[1]
PASSWORD = re.split(':|\n', FILE.readline())[1]
HOST = re.split(':|\n', FILE.readline())[1]
PORT = re.split(':|\n', FILE.readline())[1]

DB = PostgresqlDatabase(
    "marinet_db",
    user=USER,
    password=PASSWORD,
    host=HOST,
    port=PORT
)


def init_tables():
    """Method that initializes all the tables in the marinet_db database"""
    Users.create_table(True)
    UserFollows.create_table(True)
    Comments.create_table(True)


class BasicModel(Model):
    """Class used for hereditariety"""
    class Meta:
        database = DB


class Users(BasicModel):
    """Class that describes the Users table"""
    username = CharField()
    password = CharField()


class UserFollows(BasicModel):
    """Class that describes the UserFollows table"""
    follower_id = IntegerField()
    followed_id = IntegerField()


class Comments(BasicModel):
    """Class that describes the Comments table"""
    comment = TextField()
    user_id = IntegerField()
    created_date = DateTimeField(default=datetime.datetime.now)

    def to_json(self):
        """returns a dictionary representing the comment"""
        user = Users.get(Users.id == self.user_id)
        return {"comment":self.comment, "username":user.username}
