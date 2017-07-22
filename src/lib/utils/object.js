import _ from 'lodash'
import dot from 'dot-object'

export function buildJson(nodes, raw) {
    let row = {};
    _.forEach(nodes, node => {
        row[node.keyName] = node.keyValue;
    });

    if (!raw){
        dot.object(row);
    }

    return row;
}

export function buildContentJson(nodes, raw) {
    const rows = {};

    _.forEach(nodes, node => {
        rows[node.name] = node.value;
    });

    if (!raw) {
        dot.object(rows);
    }

    return rows;
}

export function pick(key,obj){
    return dot.pick(key,obj) || key;
}

export function stringify(value) {
    return JSON.stringify(value);
}