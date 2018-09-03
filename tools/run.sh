#!/bin/bash
cd ../src/server
export FLASK_APP=main.py
export FLASK_DEBUG=1
ls
flask run