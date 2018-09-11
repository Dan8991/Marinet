from flask import Flask
from flask_cors import CORS
App = Flask(__name__)
CORS(App)

import marinet.main
import marinet.users