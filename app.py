from flask import Flask, render_template
import os, json

app = Flask(__name__)

@app.route("/")
def home():
    filename = '/home/nperalta/hacktoberfest/tw_hacktoberfest_21/static/data/contributors.json'
    with open(filename) as blog_file:
        contributors = json.load(blog_file)
    print(contributors)
    response = render_template('index.html', contributors=contributors)
    return response
@app.route("/3147")
def __3147__():
    response = render_template('3147.html')
    return response