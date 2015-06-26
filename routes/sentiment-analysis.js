/**
 * Created by Alicia on 21/06/2015.
 */
var express = require('express');
var tflSentimentAnalysis = require('tfl-sentiment-analysis');

var credentials = require('../helpers/config');

var router = express.Router();

router.get('/', function(req, res, next) {
    tflSentimentAnalysis.fetchTflSentiments(credentials, function(results){
        res.send(results);
    });
});


module.exports = router;
