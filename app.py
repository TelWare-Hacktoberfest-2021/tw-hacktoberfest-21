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


@app.route("/3509")
def __3509__():
    response = render_template('3509.html')
    return response


@app.route("/3138")
def __3138__():
    response = render_template('3138.html')
    return response


@app.route("/3145")
def __3145__():
    response = render_template('3145.html')
    return response


@app.route("/3130")
def __3130__():
    response = render_template('3130.html')
    return response


@app.route("/3101")
def __3101__():
    response = render_template('3101.html')
    return response


@app.route("/3517")
def __3517__():
    response = render_template('3517.html')
    return response


@app.route("/5302")
def __35302__():
    response = render_template('5302.html')
    return response


@app.route("/3107")
def __3107__():
    response = render_template('3107.html')
    return response


@app.route("/3523")
def __3523__():
    response = render_template('3523.html')
    return response


@app.route("/3128")
def __3128__():
    response = render_template('3128.html')
    return response


@app.route("/5304")
def __5304__():
    response = render_template('5304.html')
    return response


@app.route("/3122")
def __3122__():
    response = render_template('3122.html')
    return response


@app.route("/3528")
def __3528__():
    response = render_template('3528.html')
    return response

@app.route("/3120")
def __3120__():
    response = render_template('3120.html')
    return response

@app.route("/3507")
def __3507__():
    response = render_template('3507.html')
    return response