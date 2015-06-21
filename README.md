# TFL Journey Planner

A simple wrapper for the TFL Journey planner

###Inatall
```
npm install git://github.com/Lissy93/node-tfl-journey-planner.git
```

### Include
```
var journeyPlanner = require('tfl-journey-planner');
```

### Authenticating
You will need to sign up for an API key at https://api-portal.tfl.gov.uk/signup
Create a JSON object similar to the one below

    var config = {};
  
    tfl = {
        appId: 'xxxxxxxx',
        appKey: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'
    };
    
    module.exports = config;


If you have put your credentials in a seperate file like above you can include them in your main JavaScript file the normal way
```
var credentials = require('../helpers/config');
```

Also don't forget to add the file with your API keys to .gitignore


### Required Paramaters
```
var params = {
    from:   {lat: 51.531951985733,  lon: 0.0037377856069111},
    to:     {lat:51.514342387502,   lon: -0.075612503707184}
};
```

### Make simple request
```
journeyPlanner.fetchRoutes(params, credentials.tfl, function(results) {
    console.log(results); // Do whatever with the results
});
```

### Additional Paramaters
* **When**
 * **date** - e.g. ```20150620```  *would be 20th June 2015*
 * **time** - e.g. ```2213```  *would be 10:13 pm*
 * **type** - ```"departing" | "arriving"```
* **Mode** - comma seperated list of all modes ``` "public-bus,overground,train,tube,coach,dlr,cablecar,tram,river,walking,cycle"```
* **Preference** - one of the following ``` "leastinterchange" | "leasttime" | "leastwalking"``
* **Accesability** - comma seperated list ```"noSolidStairs,noEscalators,noElevators,stepFreeToVehicle,stepFreeToPlatform"```
* **numTrips** The number of trips to display e.g. ```3```


**Example **
```
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
```



[TFL]:https://api-portal.tfl.gov.uk/signup
[@lissy_sykes]:http://twitter.com/lissy_sykes

