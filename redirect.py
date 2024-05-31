from flask import Flask
app = Flask(__name__)

@app.route('/')
def redirect():
    return '<html><body><h1>Debug Text</h1></body></html>'
