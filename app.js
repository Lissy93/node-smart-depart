/**
 * Created by Alicia on 20/06/2015.
 */

var journeyPlanner = require('./tfl-journey-planner'); // Require London transport API module

var credentials = require('./config'); // Require config file containing app ID and key

var params = {
    from:   {lat: 51.531951985733,  lon: 0.0037377856069111,    textName: 'Place Name'},
    to:     {lat: 51.514342387502,  lon: -0.075612503707184,    textName: 'Aldgate East'},
    via:    {lat: 51.561569094453,  lon: -0.057475034590784,    textName: 'Clapton'},
    when: {type: 'arriving', date: 20150620, time: 1116},
    mode: 'bus,overground,train,tube',
    preference: 'leastinterchange',
    accessibility : 'noSolidStairs',
    numTrips : 5
};

journeyPlanner.fetchRoutes(params, credentials.tfl, function(results) {
    console.log(results); // Do whatever with the results
});

