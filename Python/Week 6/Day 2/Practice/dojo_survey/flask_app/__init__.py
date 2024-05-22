from flask import Flask 

app=Flask(__name__)
app.secret_key='qwerty'
DATABASE='dojo_survey_schema'