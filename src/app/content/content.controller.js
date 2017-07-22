import express from 'express';
import {$languages} from '../../lib/config';
import contentModel from './content.model';
import {buildContentJson} from "../../lib/utils/object"

const router = express.Router();
const availableLanguages = $languages().list.join('|');

/**
* Content
*/

router.get(`/:language(${availableLanguages}).json`, (req,res) => {
    contentModel.getContent({
        language: req.params.language
    }, (content) => {
        if (content) {
            res.send(buildContentJson(content));
        } else {
            res.redirect('/');
        }
    });
});

router.get(`/:language(${availableLanguages})`,(req,res) => {
    contentModel.getContent({
        language: req.params.language
    }, (content) => {
        if (content) {
            res.send(buildContentJson(content,true));
        } else {
            res.redirect('/');
        }
    });
});

export default router;