// This prepares the json data for Jvectormap - country names are replaced by country codes.


var mortalityResult = {};
var physicianResult ={};

function processData(jsonData, result) {

  var gapminderData, countryData;

  //Get JSON files and save gapminder object array to gapminderData and country code object to countrydata
  $.when(
    $.getJSON(jsonData, function(data) {
      gapminderData = data;
    }),
    $.getJSON("dev/data-input/mti-country-codes.json", function(data) {
      countryData = data;
    })
    //Loop through gapminder json data and save values of country and stat to variables
  ).done(function() {
    for (var i=0; i<gapminderData.length; i++) {
      var gapminderData_country = gapminderData[i].country;
      var gapminderData_stat = gapminderData[i].stat;
      // Loop through countryData object and if country matches gapminder data country, save key (country code) to equal stat to result
      $.each(countryData, function(key, value) {
        if (gapminderData_country === value ) {
          result[key] = gapminderData_stat;
        }
      });
    }
    return result;
  });
}
// Process data &
// Print out json data to the console (copy and paste in separate file in data-output)
processData("dev/data-input/mortality.json", mortalityResult);
alert(mortalityResult.toSource());
var mortality_json = JSON.stringify(mortalityResult);
console.log(mortality_json);


processData("dev/data-input/physician.json", physicianResult);
alert(physicianResult.toSource());
var physician_json = JSON.stringify(physicianResult);
console.log(physician_json);
