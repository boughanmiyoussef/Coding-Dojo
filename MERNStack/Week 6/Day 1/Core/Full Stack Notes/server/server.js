const express = require ('express')

const cors = require('cors');
// import environment variables (PORT)
require('dotenv').config();
const app = express();


// ! Add Middleware
app.use( express.json() );
app.use( express.urlencoded( { extended: true }) );
app.use(cors())


// import routes
require('./routes/note.routes')(app);

// CONNECT DATABASE
require('./config/mongoose.config')();

// run server 

app.listen(process.env.port, () => {
    console.log('SERVER IS UP AND RUNNING ON ${process.env.port} \nURL: http://localhost:${process.env.port}')
})