// MENU BAR
$('.map-menu button').click(function() {
  $('button').not(this).removeClass("selected");
  $(this).addClass('selected');
    if ($(this).attr('id') == 'btn2') {
      $('.maps-container').children().hide();

      $('#map2-container').fadeIn(800);
    }
    else if ($(this).attr('id') == "btn4") {
      // $('.maps-container').children().hide();
      $('#map2-container').hide();
      console.log("bt4 clicked");
      // Map 4
      $(function(){
        var scope = {};
        scope.bgColor = '#fff';
        scope.scaleColors = ['#fbf0f1','#cb333b'];
        scope.fillColor = '#e7e7e9';
        scope.strokeColor = '#fff';
        scope.strokeWidth = '0.4';
        scope.markerColor = '#21ACDE';

        $('#map4').vectorMap({
          map: 'world_mill_en',
          backgroundColor: scope.bgColor,
          zoomOnScroll: false,
          regionStyle: {
            initial: {
              fill: scope.fillColor,
              stroke: scope.strokeColor,
              "stroke-width": scope.strokeWidth
            },
            hover: {
              "fill-opacity": 0.8,
              cursor: 'pointer'
            }
          },
          markers: markers,
          markerStyle: {
                  initial: {
                    fill: scope.markerColor,
                    stroke: scope.markerColor
                  }
                },
          series: {
            regions: [{
              values: physicianData,
              scale: scope.scaleColors,
              normalizeFunction: 'polynomial'
            }]
          },
          onRegionTipShow: function(e, label, index){
            label.html(label.html()+'<br> (GDP - '+physicianData[index]+')');
          },
          onMarkerTipShow: function(event, tip, index){
            tip.html('<div class="info-window"><h3>'+tip.html()+'</h3>'+'<p>'+markers[index].content+'</p>'+'<a href="'+markers[index].link+'" target="_blank">Where we work <span>&#62;&#62;</span></a></div>');
            event.preventDefault();
          },
          onMarkerClick: function(event, tip, code ) {
            console.log('You have triggered click');
            var map = $('#map4').vectorMap('get', 'mapObject');
            var customTip = $('#customTip');

            var left,top;
            $('#map4').vectorMap('get', 'mapObject').container.mousemove(function(e){
              left = e.pageX - 320;
              top = e.pageY - 220;
            });

            customTip.css({
                      left: left,
                      top: top
            })

            customTip.html(map.tip.html());
            customTip.prepend("<button>&#215;</button>");
            customTip.children("button").click(function(){
                       customTip.hide();
            })

            customTip.show();
          }
        });// end vectorMap

      });// end function


      // $('#map4-container').fadeIn(800);

    }

  // toggle all sibling buttons
  // toggleClass this button
  //
  // fadeToggle their corresponding map
});



// JVECTORMAPS

// Map 2

$(function(){
  var scope = {};
  scope.bgColor = 'transparant';
  scope.scaleColors = ['#fbf0f1','#cb333b'];
  scope.fillColor = '#e7e7e9';
  scope.strokeColor = '#fff';
  scope.strokeWidth = '0.4';
  scope.markerColor = '#21ACDE';
  // scope.markerStrokeColor = '#88d3ed';
  scope.markerStrokeColor = '#1a8ab2';

  $('#map2').vectorMap({
    map: 'world_mill_en',
    backgroundColor: scope.bgColor,
    zoomOnScroll: false,
    regionStyle: {
      initial: {
        fill: scope.fillColor,
        stroke: scope.strokeColor,
        "stroke-width": scope.strokeWidth
      }
    },
    markers: markers,
    markerStyle: {
      initial: {
        r: 5,
        fill: scope.markerColor,
        stroke: scope.markerStrokeColor
        // image: 'marker4.png'
      },
      hover: {
        "fill-opacity": 0.8,
        stroke: scope.strokeColor,
        cursor: 'pointer'
      },

    },
    series: {
      regions: [{
        values: mortalityData,
        scale: scope.scaleColors,
        normalizeFunction: 'polynomial'
      }]
      // markers: [{
      //   attribute: fill,
      //
      // }]
    },
    onRegionTipShow: function(e, label, index){
      label.html(label.html()+'<br> (Rate - '+mortalityData[index]+')');
    },
    onMarkerTipShow: function(event, tip, index){
      tip.html('<div class="info-window"><h3>'+tip.html()+'</h3>'+'<p>'+markers[index].content+'</p>'+'<a href="'+markers[index].link+'" target="_blank">Where we work <span>&#62;&#62;</span></a></div>');
      event.preventDefault();
    },
    onMarkerOver: function(event, tip, code){
      // console.log('You have triggered mouseover');


    },
    onMarkerClick: function(event, tip, code ) {
      console.log('You have triggered click');
      var map = $('#map2').vectorMap('get', 'mapObject');
      var customTip = $('#customTip');

      var left,top;
      $('#map2').vectorMap('get', 'mapObject').container.mousemove(function(e){
        left = e.pageX - 320;
        top = e.pageY - 220;
      });

      customTip.css({
                left: left,
                top: top
              })

      customTip.html(map.tip.html());
      customTip.prepend("<button>&#215;</button>");
      customTip.children("button").click(function(){
                 customTip.hide();
               })

         // customTip.html('<h3>'+tip.html()+'</h3>'+'<p>'+markers[index].content+'</p>'+'<a href="'+markers[index].link+'">Where we work >></a>')
      customTip.show();
    }
  });// end vectorMap

});// end function


// // Map 4
// $(function(){
//   var scope = {};
//   scope.bgColor = '#fff';
//   scope.scaleColors = ['#fbf0f1','#cb333b'];
//   scope.fillColor = '#e7e7e9';
//   scope.strokeColor = '#fff';
//   scope.strokeWidth = '0.4';
//   scope.markerColor = 'aqua'
//
//   $('#map4').vectorMap({
//     map: 'world_mill_en',
//     backgroundColor: scope.bgColor,
//     zoomOnScroll: false,
//     regionStyle: {
//       initial: {
//         fill: scope.fillColor,
//         stroke: scope.strokeColor,
//         "stroke-width": scope.strokeWidth
//       }
//     },
//     markers: markers,
//     markerStyle: {
//             initial: {
//               fill: scope.markerColor,
//               stroke: scope.strokeColor
//             }
//           },
//     series: {
//       regions: [{
//         values: physicianData,
//         scale: scope.scaleColors,
//         normalizeFunction: 'polynomial'
//       }]
//     },
//     onRegionTipShow: function(e, label, index){
//       label.html(label.html()+'<br> (GDP - '+physicianData[index]+')');
//     },
//     onMarkerTipShow: function(event, tip, index){
//       tip.html('<div class="info-window"><h3>'+tip.html()+'</h3>'+'<p>'+markers[index].content+'</p>'+'<a href="'+markers[index].link+'" target="_blank">Where we work <span>&#62;&#62;</span></a></div>');
//       event.preventDefault();
//     },
//     onMarkerClick: function(event, tip, code ) {
//       console.log('You have triggered click');
//       var map = $('#map4').vectorMap('get', 'mapObject');
//       var customTip = $('#customTip');
//
//       var left,top;
//       $('#map4').vectorMap('get', 'mapObject').container.mousemove(function(e){
//         left = e.pageX - 320;
//         top = e.pageY - 220;
//       });
//
//       customTip.css({
//                 left: left,
//                 top: top
//       })
//
//       customTip.html(map.tip.html());
//       customTip.prepend("<button>&#215;</button>");
//       customTip.children("button").click(function(){
//                  customTip.hide();
//       })
//
//       customTip.show();
//     }
//   });// end vectorMap
//
// });// end function
