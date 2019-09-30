const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
// const bodyParser = require("body-parser");
const routes = require('./routes')
const logger = require('morgan')
//==================================================
//configure body parsing for ajax reqs
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
//==================================================
//add route, api's & views
app.use(routes);
app.use(logger('dev'));
//serve up static assets (heroku)
if (process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
}
//==================================================
//connect to mongodb
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Google-Books-Search',
{ useCreateIndex: true, useNewUrlParser: true })
.then(() => {
    console.log('Cannot connect to database: ' + err)});
//==================================================
// start the api server
app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
});