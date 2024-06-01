from flask import Flask
from flask import render_template
app = Flask(__name__)

@app.route('/')
def redirect():
    return render_template("redirect.html")
