from flask import Flask , render_template 
app = Flask(__name__) 

#http://127.0.0.1/
@app.route('/')
def hello():
    return "Hello"

#http://127.0.0.1/play
@app.route('/play')
def play():
    return render_template("box.html") 

#http://127.0.0.1/play/<int:number>
@app.route('/play/<int:number>')
def num(number):
    return render_template("box.html" , number=number)

#http://127.0.0.1/play/<int:number>/color
@app.route('/play/<int:number>/<color>')
def color(number,color):
    return render_template("box.html" , number=number , color=color)

if __name__=="__main__":   
    app.run(debug=True ,port=1337)    