from flask import request
from flask_cors import CORS
from marinet import App
from marinet.models import Users
CORS(App)

@App.route('/api/users', methods=["POST"])
def users_api():
    json = request.json
    req = request.method
    print(json)
    if req == 'POST' and json != None:
        Users.insert(json).execute()
        return "user inserted"
    else:
        return "blank json"