/*************************
MENU BAR
**************************/

// Add click to button 1 on load
$(document).ready(function() {
  $('.map-menu button#btn1').trigger('click');
});

// $('.maps-container:not(.pulse) ').click(function() {
//   $('#customTip').hide();
// })

// Functions for showing & hiding maps
$.fn.hideMap = function() {
  this.addClass('hide-map').removeClass('fade-in');
  return this;
}

$.fn.hideHeader = function() {
  this.addClass('hide-header').removeClass('fade-in');
  return this;
}

$.fn.showMap = function() {
  this.removeClass('hide-map').addClass('fade-in');
  return this;
}

$.fn.showHeader = function() {
  this.removeClass('hide-header').addClass('fade-in');
  return this;
}


// Shows and hides maps on menu tab click
$('.map-menu button').click(function() {
  $('button').not(this).removeClass("selected");
  $(this).addClass('selected');

  if ($(this).attr('id') === 'btn1') {
    $('.map-header:not(#map1-header)').hideHeader();
    $('.map:not(#map1)').hideMap();
    $('#map1-header').showHeader();
    $('#map1').showMap();
  }
  else if ($(this).attr('id') === 'btn2') {
    $('.map-header:not(#map2-header)').hideHeader();
    $('.map:not(#map2)').hideMap();
    $('#map2-header').showHeader();
    $('#map2').showMap();
  }
  else if ($(this).attr('id') == "btn3"){
    $('.map-header:not(#map3-header)').hideHeader();
    $('.map:not(#map3)').hideMap();
    $('#map3-header').showHeader();
    $('#map3').showMap();
  }
  else if ($(this).attr('id') == "btn4") {
    $('.map-header:not(#map4-header)').hideHeader();
    $('.map:not(#map4)').hideMap();
    $('#map4-header').showHeader();
    $('#map4').showMap();
  }
  else {
    $('.map-header:not(#map5-header)').hideHeader();
    $('.map:not(#map5)').hideMap();
    $('#map5-header').showHeader();
    $('#map5').showMap();
  }
});

//Version below works only on Chrome & Safari
//Shows and hides maps on menu tab click

// $('.map-menu button').click(function() {
//   $('button').not(this).removeClass("selected");
//   $(this).addClass('selected');
//
//   if ($(this).attr('id') === 'btn1') {
//     $('.maps-container > div:not(#map1-container)').hide();
//     $('#map1-container').fadeIn(300);
//   }
//   else if ($(this).attr('id') === 'btn2') {
//     $('.maps-container > div:not(#map2-container)').hide();
//     $('#map2-container').fadeIn(300);
//     $('#map2').vectorMap('get','mapObject').updateSize();
//   }
//   else if ($(this).attr('id') == "btn3"){
//     $('.maps-container > div:not(#map3-container)').hide();
//     $('#map3-container').fadeIn(300);
//     $('#map3').vectorMap('get','mapObject').updateSize();
//   }
//   else if ($(this).attr('id') == "btn4") {
//     $('.maps-container > div:not(#map4-container)').hide();
//     $('#map4-container').fadeIn(300);
//     $('#map4').vectorMap('get','mapObject').updateSize();
//   }
//   else {
//     $('.maps-container > div:not(#map5-container)').hide();
//     $('#map5-container').fadeIn(300);
//     $('#map5').vectorMap('get','mapObject').updateSize();
//   }
// });




/*************************
JVECTORMAPS API
**************************/

// Map 1
$(function(){
  var scope = {};
  scope.bgColor = 'transparant';
  scope.scaleColors = ['#cb333b','#fffdfd'];
  scope.fillColor = '#e7e7e9';
  scope.strokeColor = '#fff';
  scope.strokeWidth = '0.4';
  scope.markerColor = '#21ACDE';
  scope.markerStrokeColor = '#1a8ab2';


  $('#map1').vectorMap({
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
        stroke: scope.markerStrokeColor
        // image: 'marker4.png'
      },
      hover: {
        "fill-opacity": 1,
        stroke: scope.markerStrokeColor,
        cursor: 'pointer'
      }
    },
    series: {
      regions: [{
        values: birthsData,
        scale: scope.scaleColors,
        normalizeFunction: 'polynomial',
        legend: {
          horizontal: true,
          title: 'Percentage of Total'
        }
      }]
      // markers: [{
      //   attribute: fill,
      //
      // }]
    },
    onRegionTipShow: function(e, label, index){
      label.html(label.html()+'<br> (Rate: '+birthsData[index]+')');
    },
    onMarkerTipShow: function(event, tip, index){
      tip.html('<div class="info-window"><h3>'+tip.html()+'</h3>'+'<p>'+markers[index].content+'</p>'+'<a href="'+markers[index].link+'" target="_blank">Where we work <span>&#62;&#62;</span></a></div>');
      event.preventDefault();
    },
    onMarkerClick: function(event, tip, code ) {
      var map = $('#map1').vectorMap('get', 'mapObject');
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
  });// end vectorMap

  var left,top;
  if (window.matchMedia("(min-width: 769px)").matches) {
    $('#map1').vectorMap('get', 'mapObject').container.mousemove(function(e){
      left = e.pageX - 320;
      top = e.pageY - 220;
    });
  }


});// end function


// Map 2
$(function(){
  var scope = {};
  scope.bgColor = 'transparant';
  scope.scaleColors = ['#fbf0f1','#cb333b'];
  scope.fillColor = '#e7e7e9';
  scope.strokeColor = '#fff';
  scope.strokeWidth = '0.4';
  scope.markerColor = '#21ACDE';
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
        fill: scope.markerColor,
        stroke: scope.markerStrokeColor
      },
      hover: {
        "fill-opacity": 1,
        stroke: scope.markerStrokeColor,
        cursor: 'pointer'
      }
    },
    series: {
      regions: [{
        values: mortalityData,
        scale: scope.scaleColors,
        legend: {
          horizontal: true,
          title: 'Per 1000 live births'
        }
      }]
    },
    onRegionTipShow: function(e, label, index){
      label.html(label.html()+'<br> (Rate: '+mortalityData[index]+')');
    },
    onMarkerTipShow: function(event, tip, index){
      tip.html('<div class="info-window"><h3>'+tip.html()+'</h3>'+'<p>'+markers[index].content+'</p>'+'<a href="'+markers[index].link+'" target="_blank">Where we work <span>&#62;&#62;</span></a></div>');
      event.preventDefault();
    },
    onMarkerClick: function(event, tip, code ) {
      console.log('You have triggered click');
      var map = $('#map2').vectorMap('get', 'mapObject');
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

      customTip.show();
    }
  });// end vectorMap

  var left,top;
  $('#map2').vectorMap('get', 'mapObject').container.mousemove(function(e){
    left = e.pageX - 320;
    top = e.pageY - 220;
  });

});// end function


//Map 3
$(function(){
  var scope = {};
  scope.bgColor = 'transparant';
  scope.scaleColors = ['#fbf0f1','#cb333b'];
  scope.fillColor = '#e7e7e9';
  scope.strokeColor = '#fff';
  scope.strokeWidth = '0.4';
  scope.markerColor = '#21ACDE';
  scope.markerStrokeColor = '#1a8ab2';

  $('#map3').vectorMap({
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
        stroke: scope.markerStrokeColor
      },
      hover: {
        "fill-opacity": 1,
        stroke: scope.markerStrokeColor,
        cursor: 'pointer'
      }
    },
    series: {
      regions: [{
        values: maternalData,
        scale: scope.scaleColors,
        legend: {
          horizontal: true,
          title: 'Per 100 000 live births'
        }
      }]
    },
    onRegionTipShow: function(e, label, index){
      label.html(label.html()+'<br> (Rate: '+maternalData[index]+')');
    },
    onMarkerTipShow: function(event, tip, index){
      tip.html('<div class="info-window"><h3>'+tip.html()+'</h3>'+'<p>'+markers[index].content+'</p>'+'<a href="'+markers[index].link+'" target="_blank">Where we work <span>&#62;&#62;</span></a></div>');
      event.preventDefault();
    },
    onMarkerClick: function(event, tip, code ) {
      console.log('You have triggered click');
      var map = $('#map3').vectorMap('get', 'mapObject');
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

      customTip.show();
    }
  });// end vectorMap

  var left,top;
  $('#map3').vectorMap('get', 'mapObject').container.mousemove(function(e){
    left = e.pageX - 320;
    top = e.pageY - 220;
  });

});// end function


// Map 4
$(function(){
  var scope = {};
  scope.bgColor = '#fff';
  scope.scaleColors = ['#fbf0f1','#cb333b'];
  scope.fillColor = '#e7e7e9';
  scope.strokeColor = '#fff';
  scope.strokeWidth = '0.4';
  scope.markerColor = '#21ACDE';
  scope.markerStrokeColor = '#1a8ab2';

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
      },
      hover: {
        "fill-opacity": 1,
        stroke: scope.markerStrokeColor,
        cursor: 'pointer'
      }
    },
    series: {
      regions: [{
        values: physicianData,
        scale: scope.scaleColors,
        // normalizeFunction: 'polynomial',
        legend: {
          horizontal: true,
          title: 'Per 1000 people'
        }
      }]
    },
    onRegionTipShow: function(e, label, index){
      label.html(label.html()+'<br> (Rate: '+physicianData[index]+')');
    },
    onMarkerTipShow: function(event, tip, index){
      tip.html('<div class="info-window"><h3>'+tip.html()+'</h3>'+'<p>'+markers[index].content+'</p>'+'<a href="'+markers[index].link+'" target="_blank">Where we work <span>&#62;&#62;</span></a></div>');
      event.preventDefault();
    },
    onMarkerClick: function(event, tip, code ) {
      var map = $('#map4').vectorMap('get', 'mapObject');
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

      customTip.show();
    }
  });// end vectorMap

  var left,top;
  $('#map4').vectorMap('get', 'mapObject').container.mousemove(function(e){
    left = e.pageX - 320;
    top = e.pageY - 220;
  });
});// end function


//Map 5
$(function(){
  var scope = {};
  scope.bgColor = '#fff';
  scope.scaleColors = ['#fbf0f1','#cb333b'];
  scope.fillColor = '#e7e7e9';
  scope.strokeColor = '#fff';
  scope.strokeWidth = '0.4';
  scope.markerColor = '#21ACDE';
  scope.markerStrokeColor = '#1a8ab2';

  $('#map5').vectorMap({
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
      },
      hover: {
        "fill-opacity": 1,
        stroke: scope.markerStrokeColor,
        cursor: 'pointer'
      }
    },
    series: {
      regions: [{
        values: battleData,
        scale: scope.scaleColors,
        // normalizeFunction: 'polynomial',
        legend: {
          horizontal: true,
          title: 'Per 100 000 standard population'
        }
      }]
    },
    onRegionTipShow: function(e, label, index){
      label.html(label.html()+'<br> (Rate: '+battleData[index]+')');
    },
    onMarkerTipShow: function(event, tip, index){
      tip.html('<div class="info-window"><h3>'+tip.html()+'</h3>'+'<p>'+markers[index].content+'</p>'+'<a href="'+markers[index].link+'" target="_blank">Where we work <span>&#62;&#62;</span></a></div>');
      event.preventDefault();
    },
    onMarkerClick: function(event, tip, code ) {
      var map = $('#map5').vectorMap('get', 'mapObject');
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

      customTip.show();
    }
  });// end vectorMap

  var left,top;
  $('#map5').vectorMap('get', 'mapObject').container.mousemove(function(e){
    left = e.pageX - 320;
    top = e.pageY - 220;
  });
});// end function
