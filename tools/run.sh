#!/bin/bash
cd ..
source venv-marinet/bin/activate
yarn webpack-dev-server & bg
cd src/server
export FLASK_APP=main.py
export FLASK_DEBUG=1
ls
flask run