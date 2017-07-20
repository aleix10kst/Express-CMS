import fs from 'fs';
import yaml from 'js-yaml'
import env from './env'
/*
* Returns the selected environment configuration
*
* @param {string}
* @returns {object} Config
*/

export default function getConfig(environment){
    const config = yaml.safeLoad(fs.readFileSync(`${__dirname}/../config/config.yml`,'utf-8'));
    return environment && config[environment] || config[env().name] || {};
}