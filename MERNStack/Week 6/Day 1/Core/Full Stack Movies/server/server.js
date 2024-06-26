const express  = require('express');
require('dotenv').config();
const cors = require('cors');
const app  = express();

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
app.use(cors())

//  CONNECT WITH DATABASE
require('./config/mongoose.config')

// IMPORT ALL ROUTES
// const routes = require('./routes/movies.routes')
// routes(app)
require('./routes/movies.routes')(app)

// RUN SERVER
app.listen(process.env.port,()=>{
    console.log('SERVER IS RUNNING ON PORT ',process.env.port);
    console.log(`http://localhost:${process.env.port}`);
})