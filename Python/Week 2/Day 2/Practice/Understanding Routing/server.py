from flask import Flask , render_template
app = Flask(__name__)    

#http://127.0.0.1/
@app.route('/')          
def hello():
    return 'Hello World !'

#http://127.0.0.1/dojo
@app.route('/dojo')
def dojo():
    return 'Dojo'

#http://127.0.0.1/say/<username>
@app.route('/say/<username>')
def salute(username):
    return f"Hi {username}"


#http://127.0.0.1/repeat/<int:times>/<username>
@app.route('/repeat/<int:times>/<username>')
def repeat ( times , username):
    return f"{username}"* times








if __name__=="__main__":   
    app.run(debug=True ,port=5001)