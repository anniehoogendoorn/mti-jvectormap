var result = {};

// $(document).ready(function () {

  // function processMortality() {

    var mortalityData, countryData, mortalityData_key, mortalityData_value;

    $.when(
      $.getJSON("mortality.json", function(data) {
        mortalityData = data;
      }),
      $.getJSON("country-codes.json", function(data) {
        countryData = data;
      })
    ).done(function() {
      // var result = {};
      for (var i=0; i<mortalityData.length; i++) {
        mortalityData_key = mortalityData[i].key;
        mortalityData_value = mortalityData[i].value;

        $.each(countryData, function(key, value) {
          if (mortalityData_key === value ) {
            result[key] = mortalityData_value;
          }
        });
      }
      // return result;
      // console.log(result);
    });
  // }

// });// document ready
var gdpData = result;
console.log(result);
