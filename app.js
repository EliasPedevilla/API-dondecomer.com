const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

// initialization
const app = express();

// Routers imports
const indexRouter = require('./routes/index');
const productRouter = require('./routes/products');

// middlewares
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/', indexRouter);
app.use('/products', productRouter);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(res.status(404).send('Cannot complete the request'));
});

module.exports = app;
