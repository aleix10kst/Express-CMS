export function isArray(variable) {
    return instanceOf(variable,Array);
}

export function isDefined(variable)
{
    return typeof variable !== 'undefined' && variable !== null;
}

export function isFunction(func) {
    return typeof func === 'function';
}

export function isJson(str)
{
    if (str === null)
        return false;
    try{
        JSON.parse(str);
    } catch (e){
        return false;
    }
    return true;
}

export function isNumber(number) {
    return !isNaN(number);
}

export function isObject(variable) {
    return typeof variable === 'object';
}

export function isString(variable) {
    return typeof variable === 'string';
}

export function isUndefined(variable) {
    return typeof variable === 'undefined' || variable === null;
}

export function isDay(day)
{
    return isDefined(day) && day.length === 2 && !isNaN(day) && day <= 31;
}

export function isMonth(month)
{
    return isDefined(month) && month.length === 2 && !isNaN(day) && day <= 12;
}

export function isYear(year)
{
    return isDefined(year) && year.length === 4 && !isNaN(year);
}