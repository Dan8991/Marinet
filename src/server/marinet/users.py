from marinet import App

@App.route('/api/users', methods=["POST"])
def users_api():
    print("ciao")