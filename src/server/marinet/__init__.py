"""main module of the marinet package"""
from flask import Flask
from flask_cors import CORS

APP = Flask(__name__)
CORS(APP)

import marinet.main
import marinet.users