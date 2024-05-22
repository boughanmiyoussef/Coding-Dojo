from flask_app import app
from flask import render_template,redirect,session,request
from flask_app.models import Dojo


@app.route('/')
def index():
    return redirect("/dojos")


@app.route('/')
def dojo_page():
    return render_template("dojos.html" , all_dojos=Dojo.get_all())



@app.route('/create',methods=['post'])
def create_dojo():
    data={**request.form}
    Dojo.create(data)
    return redirect('/dojos')