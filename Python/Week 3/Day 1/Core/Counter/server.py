from flask import Flask, render_template, session, redirect

app = Flask(__name__)
app.secret_key = 'Keep It Safe' 

@app.route('/')
def visiting():
    if 'visit' in session: 
        session['visit'] += 1 
    else:
        session['visit'] = 1
    return render_template('index.html', visit=session['visit'])

@app.route('/destroy_session')
def destroy_session ():
    session.clear()		
    session.pop('visit')		

if __name__ == '__main__':
    app.run(debug=True)
