from flask import Flask, render_template
import os, json

app = Flask(__name__)

@app.route("/")
def home():
    filename = os.path.join(app.static_folder, 'data', 'contributors.json')
    with open(filename) as file:
        contributors = json.load(file)
    print(contributors)
    response = render_template('index.html', contributors=contributors)
    return response


@app.route("/3147")
def __3147__():
    response = render_template('3147.html')
    return response


@app.route("/3144")
def __3144__():
    response = render_template('3144.html')
    return response