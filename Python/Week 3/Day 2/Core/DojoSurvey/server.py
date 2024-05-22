from flask import Flask, render_template, redirect,request,session

app = Flask(__name__)
app.secret_key = 'It is safe' # 


# http://127.0.0.1/
@app.route('/')
def index():
    return render_template("index.html")


@app.route('/process', method=['POST'])
def process():
    session["name"]=request.form["name"]
    session["location"]=request.form["location"]
    session["fav_language"]=request.form["fav_language"]
    session["comment"]=request.form["comment"] 
    return redirect('/display')


@app.route('/display')
def display():
    return render_template("display.html")
