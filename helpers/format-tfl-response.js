/**
 * Created by Alicia on 21/06/2015.
 */


function startFormat(response){

    var results = {journeys:[]}; // To return

    var journeysNode = response.journeys || {}; // List of all journeys

    journeysNode.forEach(function(journeyNode){
        var newJourney = {legs: []};
        newJourney.duration     = journeyNode.duration;
        newJourney.startTime    = journeyNode.startDateTime;
        newJourney.endTime      = journeyNode.arrivalDateTime;
        newJourney.startLocation= journeyNode.legs[0].departurePoint.commonName;
        newJourney.endLocation  = journeyNode.legs[journeyNode.legs.length-1].arrivalPoint.commonName;

        var legsNode = journeyNode.legs;
        legsNode.forEach(function(legNode){
            var newLeg = {};
            newLeg.startName    = legNode.departurePoint.commonName;
            newLeg.endName      = legNode.arrivalPoint.commonName;
            newLeg.duration     = legNode.duration;
            newLeg.mode         = legNode.mode.name;
            newLeg.line         = '';

            if(legNode.routeOptions
                && legNode.routeOptions.length>0
                && legNode.routeOptions[0].lineIdentifier!=undefined){
                    newLeg.line = legNode.routeOptions[0].lineIdentifier.id;
            }


            newJourney.legs.push(newLeg);
        });

        results.journeys.push(newJourney);
    });
    return results;
}

exports.start = startFormat;