const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const middlewares = require('./src/middlewares/middlewares');

const welcome    = require('./src/routes/welcome')
const githubInfo = require('./src/routes/githubInfo');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(middlewares.setHeaders);

app.use(
  cors({
    origin: "http://localhost:8000",
    credentials: true,
  })
);
app.use('/', welcome)
app.use('/api/v1/githubInfo', githubInfo)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.title   = "Error"
  res.locals.error   = err;

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
