var mortalityResult = {};
var physicianResult ={};

function processData(jsonData, result) {

  var gapminderData, countryData;

  //Get JSON files and save gapminder object array to gapminderData and country code object to countrydata
  $.when(
    $.getJSON(jsonData, function(data) {
      gapminderData = data;
    }),
    $.getJSON("mti-country-codes.json", function(data) {
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
processData("mortality.json", mortalityResult);
console.log(mortalityResult);
processData("physician.json", physicianResult);

// $('.info-window').on('mouseover', function() {
//   $(this).parent().addClass('is-hover');
// }).on('mouseout', function() {
//   $(this).parent().removeClass('is-hover');
// });
// debugger;
$('circle.jvectormap-marker.jvectormap-element').click(function() {
  console.log('this works');
});
