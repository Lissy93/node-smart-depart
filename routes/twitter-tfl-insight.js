/**
 * Created by alicia.sykes on 23/06/2015.
 */
var express = require('express');

var tflSentimentAnalysis = require('tfl-sentiment-analysis');

var credentials = require('../helpers/config');


var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    var results =
            [{"line":"DLR","sentiments":"positive","score":0.6105463433142023},
            {"line":"Waterloo","sentiments":"positive","score":0.6105463433142023},
            {"line":"Victoria","sentiments":"positive","score":0.6887336106458627},
            {"line":"Picadilly","sentiments":"negative","score":-0.5274215517597863},
            {"line":"Bakerloo","sentiments":"positive","score":0.6105463433142023},
            {"line":"Central","sentiments":"negative","score":-0.4304983442204642},
            {"line":"Overground","sentiments":"positive","score":0.6105463433142023},
            {"line":"Jubile","sentiments":"neutral","score":0},
            {"line":"District","sentiments":"positive","score":0.6105463433142023},
            {"line":"Metropolitan","sentiments":"positive","score":0.6105463433142023},
            {"line":"Northen","sentiments":"neutral","score":0},
            {"line":"Hammersmith","sentiments":"positive","score":0.6105463433142023},
            {"line":"Circle","sentiments":"neutral","score":0}];
    //tflSentimentAnalysis.fetchTflSentiments(credentials, function(results) {
        res.render('twitterInsights', {results: results});
    //});
});

module.exports = router;
