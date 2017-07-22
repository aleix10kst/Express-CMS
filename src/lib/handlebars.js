/**
 * Created by aleixcanet on 19/7/17.
 */
import {minify} from 'html-minifier'
import {$html} from './config'

function compress(content) {
    if (!$html().minify){
        return content.fn(this);
    }
    return minify(content.fn(this), {
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true
    })
}

export default {
    compress: compress
}