import $config from './lib/config'
import i18n from './lib/i18n';
import utils from './lib/utils';

import ContentController from './app/content/content.controller';
import HomeController from './app/home/home.controller';
import DashboardController from './app/dashboard/dashboard.controller';

export default (app) => {
  const availableLanguages = $config().languages.list.join('|');

  //i18n
  app.use((req,res,next) => {
      res.__ = res.locals.__ = i18n.load(i18n.getCurrentLanguage(req.url));
      res.locals.basePath = `${$config().baseUrl}${i18n.getLanguagePath(req.url)}`;

      return next();
  });

    //base Path
    app.use((req,res,next) => {
        res.locals.basePath = `${$config().baseUrl}${i18n.getLanguagePath(req.url)}`;
        return nextnext();
    });

    //Device detector
    app.use((req,res,next) => {
        res.locals.isMobile = utils.Device.isMobile(req.headers['user-agent']);
        return nextnext();
    });

  app.use((req,res,next) => {
      res.locals.css = [
          '/css/style.css'
      ];

      res.locals.topJs = [];
      res.locals.bottomJs = [];

      next();
  });

  //Controllers dispatch
    app.use('/', HomeController);
    app.use(`/:language(${availableLanguages})`, HomeController);
    app.use(`/:language(${availableLanguages})/dashboard`, DashboardController);
    app.use('/content', ContentController);

    app.use((req,res,next) => {
        const err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    if (app.get('env') === 'development'){
        app.use((err,req,res,next) => {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                err: err
            });
        })
    }

    app.use((err,req,res,next) => {
        res.status(err.status || 500);
        res.render('error',{
            message: err.message,
            error: {}
        });
    });
};