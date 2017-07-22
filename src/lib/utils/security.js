import crypto from 'crypto'

import { isDefined } from './is'

import { $security} from "../config"

const salt = $security().secret;

//Security functions

export function encrypt(str) {
    return sha1(md5(str));
}

export function md5(str){
    if (isDefined(str)){
        return crypto.createHash('md5').update(`${salt}${str.toString()}`).digest('hex');
    }
    return false;
}

export function sha1(str) {
    if (isDefined(str)){
        return crypto.createHash('sha1').update(`${salt}${str.toString()}`).digest('hex');
    }
    return false;
}