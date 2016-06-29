$(document).ready(function() {
//   $.ajax( {
//     type: "GET",
//     url: "mortality_data.csv",
//     dataType: "text",
//     success: function(mortality_data) {processData(mortality_data);}
//   });

// function mortality(json) {
//   var obj = {};
  // for (var i=0; i<data.length; i++ ) {
  //   obj[data[i].key] = data[i].value;
  //   return obj;
  // }
// }

// $.getJSON( "mortality.json", function( data ) {
//    var result = {};
//    for (var i=0; i<data.length; i++) {
//      result[data[i].key] = data[i].value;
//    }
//    console.log(result);
//
//  });

 $.getJSON( "mortality.json", function( data ) {
  var result = {};
  for (var i=0; i<data.length; i++) {
    result[data[i].key] = data[i].value;
  }
  console.log(result);
 });

});// document ready
