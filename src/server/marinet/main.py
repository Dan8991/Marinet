"""Module that handles the root path in the server"""
from marinet import APP


@APP.route('/')
def main():
    """Method that handles the root path in the server"""
    return "hello world"
