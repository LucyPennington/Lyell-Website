# app/config.py
from flask_cors import CORS


def configure_cors(app):
    # Allow requests from the React app running on localhost:3000
    CORS(app)
