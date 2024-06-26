from flask import Flask , render_template
app = Flask(__name__)    


#http://127.0.0.1/
@app.route('/')
def hello():
    return render_template("index.html",row=8,col=8)


#http://127.0.0.1/int<x>
@app.route('/<int:x>')
def x_line(x):
    return render_template("index.html" , row=x , col=8)


#http://127.0.0.1/int<x>/int<y>
@app.route('/<int:x>/<int:y>')
def y_line(x,y):
    return render_template("index.html" , row=x , col=y)


#http://127.0.0.1/int<x>/int<y>/<string:color1>
@app.route('/<int:x>/<int:y>/<string:color1>')
def color1(x,y,color1):
    return render_template("index.html",row=x,col=y,color1=color1,color2='blue')


@app.route('/<int:x>/<int:y>/<string:color1>/<string:color2>')
def color2(x,y,color1,color2):
    return render_template("index.html",row=x,col=y,color1e=color1,color2=color2)



if __name__=="__main__":   
    app.run(debug=True ,port=1337)    
