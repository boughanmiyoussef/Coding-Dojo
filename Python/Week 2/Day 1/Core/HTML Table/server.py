from flask import Flask , render_template
app = Flask(__name__) 

#http://127.0.0.1/
@app.route('/')
def give_list():
    user = [
   {'first_name' : 'Michael', 'last_name' : 'Choi'},
   {'first_name' : 'John', 'last_name' : 'Supsupin'},
   {'first_name' : 'Mark', 'last_name' : 'Guillen'},
   {'first_name' : 'KB', 'last_name' : 'Tonel'}
]
    return render_template("index.html" , users= user )


if __name__=="__main__":   
    app.run(debug=True ,port=1337)    
