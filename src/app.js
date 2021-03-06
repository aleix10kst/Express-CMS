import express from 'express'
import path from 'path';
import favicon from 'serve-favicon';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

//Handlebars
import exphbs from 'express-handlebars';
import stylus from 'stylus';

import {$html} from './lib/config'
import {$views} from './lib/config'
import {$serverPort} from "./lib/config"
import hbsHelpers from './lib/handlebars';

import router from './router';

const app = express();
if (!$html().css.stylusPrecompile){
    //Stylus middleware
    app.use(
        stylus.middleware({
            src: path.join(__dirname,'/stylus'),
            dest: path.join(__dirname,'/public/css'),
            compile: (str,path) => {
                return stylus(str).set('filename',path).set('compress',true);
            }
        })
    );
}

//Handlebars setup
app.engine($views().engine,exphbs({
    extname: $views().extension,
    defaultLayout: $views().layout,
    layoutsDir: path.join(__dirname,'/views/layouts'),
    partialsDir: path.join(__dirname,'/views/partials'),
    helpers: hbsHelpers
}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', $views().engine);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Router
router(app);

//Disabling x-powered-by
app.disable('x-powered-by');

app.listen($serverPort() || 3000);
//module.exports = app;
