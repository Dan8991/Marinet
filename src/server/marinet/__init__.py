"""main module of the marinet package"""
from flask import Flask
from flask_cors import CORS
import marinet.main
import marinet.users

APP = Flask(__name__)
CORS(APP)
