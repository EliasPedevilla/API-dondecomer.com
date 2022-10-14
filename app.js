const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

// initialization
const app = express();

// Routers imports
const indexRouter = require('./routes');
const productRouter = require('./routes/products');
const productCategoryRouter = require('./routes/porductCategories');
const storeRouter = require('./routes/store');
const storeStatusRouter = require('./routes/storeStatus');
const storeCategoryRouter = require('./routes/storeCategories');
const userRoleRouter = require('./routes/userRoles');
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/users');

// middlewares
app.use(helmet());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/', indexRouter);
app.use('/products', productRouter);
app.use('/productCategories', productCategoryRouter);
app.use('/storeStatus', storeStatusRouter);
app.use('/storeCategories', storeCategoryRouter);
app.use('/userRoles', userRoleRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/stores', storeRouter);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(res.status(404).send('Cannot complete the request'));
});

module.exports = app;
