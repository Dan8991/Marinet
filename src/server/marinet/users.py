"""this module handles requests for Users"""
from flask import jsonify, request
from flask_cors import CORS
from marinet import APP
from marinet.models import Users
CORS(APP)


@APP.route('/api/users', methods=["GET", "POST"])
def users_api():
    """this method handles requests for Users"""
    json = request.json
    req = request.method
    if req == 'POST' and json is not None:
        user_id = Users.insert(json).execute()
        return jsonify({"id": user_id})
    if req == 'GET':
        username = request.args.get("username")
        password = request.args.get("password")
        user = Users.get_or_none(Users.username == username)
        if user is not None:
            if user.password == password:
                return jsonify({"id": user.id})
            #id=-1 => invalid password
            return jsonify({"id": -1})
        #id=-1 => invalid username
        return jsonify({"id": -2})
    return "no request"
