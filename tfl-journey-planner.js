/**
 * Created by Alicia on 20/06/2015.
 */

var request = require('request');

var host = 'https://api.tfl.gov.uk/Journey/JourneyResults/%7Bfrom%7D/to/%7Bto%7D/via/%7Bvia%7D';

function fetchRoutes(params, credentials, callback) {

    var url = host
            +'?from='   + params.from.lat+'%2C'+params.from.lon
            +'&to='     + params.to.lat+'%2C'+params.to.lon
            +'&via='    + ((isThere(params.via)) ? params.via.lat+'%2C'+params.via.lon : '')
            +'&nationalSearch=False'
            +'&date='   + ((isThere(params.when)) ? (params.when.date || '')  : '')
            +'&time='   + ((isThere(params.when)) ? params.when.time || ''  : '')
            +'&timeIs=' + ((isThere(params.when)) ? params.when.type || ''  : '')
            +'&journeyPreference=' +(params.preferences || '')
            +'&mode='   + (params.mode || '')
            +'&accessibilityPreference='+(params.accessibility || '')
            +'&fromName='+ ((isThere(params.from)) ? (params.from.textName || '')  : '')
            +'&toName=' + ((isThere(params.to)) ? (params.to.textName || '')  : '')
            +'&viaName='+ ((isThere(params.via)) ? (params.via.textName || '')  : '')
            +'&maxTransferMinutes=60'
            +'&maxWalkingMinutes=60'
            +'&walkingSpeed=average'
            +'&alternativeWalking=True&applyHtmlMarkup=False' +
            +'&numberOfTrips='+(params.numTrips || 3)
            +'&app_id=' + credentials.appId+'&app_key='+credentials.appKey

    console.log(url);


    request({
        url: url,
        json: true
    }, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            callback(body);
        }
    });
}

function isThere(node){
    return !!(node != null
    && node != undefined
    && node != ''
    && node != {}
    && node != []);
}

exports.fetchRoutes = fetchRoutes;