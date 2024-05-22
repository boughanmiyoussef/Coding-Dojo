from flask import Flask

app = Flask(__name__)
app.secret_key= "911"
DATABASE = "recipes"