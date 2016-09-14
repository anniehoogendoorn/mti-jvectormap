// MENU BAR
// $('.map-menu button').click(function() {
//   $('button').not(this).removeClass("selected");
//   $(this).addClass('selected');
//     if ($(this).attr('id') == 'child-btn') {
//       $('.map-container').children().hide();
//       $('#map-2').fadeIn(800);
//     }
//     else if ($(this).attr('id') == "marriage_btn") {
//       $('.map-container').children().hide();
//       $('#marriage').fadeIn(800);
//     }

  //toggle all sibling buttons
  //toggleClass this button

  //fadeToggle their corresponding map
// });



// JVECTORMAPS

// Map 2

$(function(){
  var scope = {};
  scope.bgColor = 'transparant';
  scope.scaleColors = ['#fbf0f1','#cb333b'];
  scope.fillColor = '#e7e7e9';
  scope.strokeColor = '#fff';
  scope.strokeWidth = '0.4';
  scope.markerColor = '#21ACDE'

  $('#map-2').vectorMap({
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
        r: 8,
        fill: scope.markerColor,
        stroke: scope.strokeColor
        // image: 'marker4.png'
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
      var map = $('#map-2').vectorMap('get', 'mapObject');
      var customTip = $('#customTip');

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
});
var left,top;
$('#map-2').vectorMap('get', 'mapObject').container.mousemove(function(e){
  left = e.pageX - 320;
  top = e.pageY - 220;

});//end vectorMap

});// end function


// Map 4
$(function(){
  var scope = {};
  scope.bgColor = '#fff';
  scope.scaleColors = ['#fbf0f1','#cb333b'];
  scope.fillColor = '#e7e7e9';
  scope.strokeColor = '#fff';
  scope.strokeWidth = '0.4';
  scope.markerColor = 'aqua'

  $('#map-4').vectorMap({
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
              fill: scope.markerColor,
              stroke: scope.strokeColor
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
    onMarkerTipShow: function(event, label, index){
      label.html('<h3>'+label.html()+'</h3>'+'<p>'+markers[index].content+'</p>'+'<a href="'+markers[index].link+'">Where we work >></a>');
    }
  });
});
