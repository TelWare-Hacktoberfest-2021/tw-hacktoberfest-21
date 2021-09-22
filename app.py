from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    response = render_template('index.html')
    return response