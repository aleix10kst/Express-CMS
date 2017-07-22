import {isDefined} from "./is"

function now() {
    return dateFormat(new Date());
}

function day() {
    return dateFormat('dd',new Date());
}

function month() {
    return dateFormat('MM',new Date());
}

function year() {
    return dateFormat('yyyy',new Date());
}
