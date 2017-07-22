import fs from 'fs';
import yaml from 'js-yaml'
import env from './env'
/*
* Returns the selected environment configuration
*
* @param {string}
* @returns {object} Config
*/

let config;

export function $config(environment) {
    if (!config){
        config = yaml.safeLoad(
            fs.readFileSync(`${__dirname}/../config/config.yml`,'utf-8')
        );
    }
    return environment && config[environment] || config[env().name] || {};
}

export function $baseUrl(env) {
    return $config(env).baseUrl;
}

export function $db(env) {
    return $config(env).db;
}

export function $html(env) {
    return $config(env).html;
}

export function $languages(env) {
    return $config(env).languages;
}

export function $security(env){
    return $config(env).security;
}

export function $serverPort(env) {
    return $config(env).serverPort;
}

export function $session(env){
    return $config(env).session;
}

export function $views(env) {
    return $config(env).views;
}