"""This modules handles requests for comments"""
from flask import jsonify, request
from flask_cors import CORS
from marinet import APP
from marinet.models import Comments
CORS(APP)


@APP.route('/api/comments', methods=["GET", "POST"])
def comments_api():
    """method that handles the requests for comments"""
    req = request.method
    json = request.json
    if req == "POST":
        comment = Comments.create(**json)
        return jsonify(comment.to_json())
    if req == "GET":
        full_json = []
        comments = Comments.select().order_by(Comments.created_date.desc()).execute()
        for comment in comments:
            full_json.append(comment.to_json())
        return jsonify(full_json)
    return "no request"
