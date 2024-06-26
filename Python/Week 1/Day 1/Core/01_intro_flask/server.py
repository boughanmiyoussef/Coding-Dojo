from flask import Flask , render_template
app = Flask(__name__)    

#http://127.0.0.1/
@app.route('/')
def index():
    users=[
        {'name' : "Jack" , 'age' : 33 },
        {'name' : "Mack" , 'age' : 44 },
        {'name' : "Tack" , 'age' : 55 },
        {'name' : "Back" , 'age' : 66 },
        {'name' : "Wack" , 'age' : 77 },
        {'name' : "Dack" , 'age' : 88 }
    ]

    return render_template("index.html", users= users)

#http://127.0.0.1/circles
@app.route('/circles/<color>/<int:number>')
def circles(color,number):
    return render_template("circles.html" , color=color,number=number)


if __name__=="__main__":   
    app.run(debug=True ,port=1337)    