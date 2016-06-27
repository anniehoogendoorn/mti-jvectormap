$(document).ready(function() {
  $.ajax( {
    type: "GET",
    url: "mortality_data.csv",
    dataType: "text",
    success: function(mortality_data) {processData(mortality_data);}
  });
});

function csvToJSON(mortality_data.csv) {
  var lines =

}
