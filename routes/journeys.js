var express = require('express');
var tflJourneyPlanner = require('tfl-journey-planner');
var credentials = require('../helpers/config');
var formatTflResponse = require('../helpers/format-tfl-response');

var router = express.Router();


/* GET journeys listing. */
router.post('/', function(request, response){
  tflJourneyPlanner.fetchRoutes(request.body, credentials.tfl, function(results) {
    response.send(formatTflResponse.start(results));    // echo the result back
  });
});

module.exports = router;
