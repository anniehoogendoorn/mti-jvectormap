var result = {};
var gdpData = result;
// debugger;

function processData(jsonData) {

  var mortalityData, countryData;
  // var result = {};

  //Get JSON files and save gapminder object array to mortalityData and country code object to countrydata
  $.when(
    $.getJSON(jsonData, function(data) {
      mortalityData = data;
    }),
    $.getJSON("mti-country-codes.json", function(data) {
      countryData = data;
    })
    //Loop through gapminder json data and save values of country and stat to variables
  ).done(function() {
    for (var i=0; i<mortalityData.length; i++) {
      var mortalityData_country = mortalityData[i].country;
      var mortalityData_stat = mortalityData[i].stat;
      // Loop through countryData object and if country matches gapminder data country, save key (country code) to equal stat to result
      $.each(countryData, function(key, value) {
        if (mortalityData_country === value ) {
          result[key] = mortalityData_stat;
        }
      });
    }
    // debugger;
    // console.log(result);
    return result;
  });
}
debugger;
processData("mortality.json");


console.log(result);
// processData("physicians.json");
// var physicianData = result;
// console.log(physicianData);
