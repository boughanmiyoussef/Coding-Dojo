from flask import Flask , session , render_template,redirect , request
import random
app=Flask(__name__)
app_secret_key="very safe "

#http://127.0.0.1/
@app.route('/')
def hello():
    if "num" not in session:
        session['num']=random.randint(1,100)
        return render_template("index.html")
    

@app.route('/guess', methods=['POST'])
def guess():
    session['guess']=int(request.form['guess'])
    return redirect('/')


@app.route('/reset')
def reset():
    session.clear()
    return redirect('/')





if __name__ == "__main__":
    app.run(debug=True , port=1337)