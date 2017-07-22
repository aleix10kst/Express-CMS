import {$languages} from './config';
import _ from 'lodash';
import {getParamsFromUrl} from './utils/url'

export default {
    getCurrentLanguage: getCurrentLanguage,
    getLanguagePath: getLanguagePath,
    load: loadLanguage
}

function getCurrentLanguage(url) {
    const params = getParamsFromUrl(url);

    return _.includes($languages().list,params[0]) ? params[0] : $config().languages.default;
}

function getLanguagePath(url){
    const params = getParamsFromUrl(url);

    return _.includes($languages().list,params[0]) ? `\${params[0]}` : '';
}

function loadLanguage(language) {
    let content;

    if (_.includes($languages().list,language)){
        try{
            content = require(`../content/i18n/${language}`);
        } catch (e){
            content = require(`../content/i18n/${$languages().default}`);
        }
    } else {
        content = require(`../content/i18n/${$languages().default}`);
    }
    return content;
}