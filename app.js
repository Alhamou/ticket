const createError = require('http-errors');
const express = require('express');
const bodyParser = require('body-parser')
const logger = require('morgan');
const mongoose =  require('mongoose');

const ticketRouter = require('./routes/ticket');

const app = express();

// view engine setup
app.use(logger('dev'));
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }));

// connect to mango db
const uri = 'mongodb://127.0.0.1:27017'
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
    .then(r => console.log('connected ...'))
    .catch(er => console.log(er))


app.use('/tickets', ticketRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

module.exports = app;
