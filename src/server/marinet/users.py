from flask import jsonify, request
from flask_cors import CORS
from marinet import App
from marinet.models import Users
CORS(App)

@App.route('/api/users', methods=["POST"])
def users_api():
    json = request.json
    req = request.method
    if req == 'POST' and json != None:
        id = Users.insert(json).execute()
        return jsonify({"id":id})
    else:
        return "blank json"