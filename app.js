require('dotenv').config();

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require('mongoose');
const cors = require('cors')

var indexRouter = require('./routes/index');

var app = express();

app.use(cors('http://localhost:3000/'));

// DB connection
const uri = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@cluster0.gwrcf.mongodb.net/test`;
const option = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(uri, option)
.then(() => console.log('Base de datos conectada'))
.catch(e => console.log(`error db: ${e}`));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

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
  res.render('error');
});

module.exports = app;
