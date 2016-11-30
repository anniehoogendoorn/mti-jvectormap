$(document).ready(function(){$(".map-menu button#btn1").trigger("click")}),$(".map-menu button").click(function(){$("button").not(this).removeClass("selected"),$(this).addClass("selected"),"btn1"===$(this).attr("id")?($(".maps-container > div:not(#map1-container)").hide(),$("#map1-container").fadeIn(300)):"btn2"===$(this).attr("id")?($(".maps-container > div:not(#map2-container)").hide(),$("#map2-container").fadeIn(300),$("#map2").vectorMap("get","mapObject").updateSize()):"btn3"==$(this).attr("id")?($(".maps-container > div:not(#map3-container)").hide(),$("#map3-container").fadeIn(300),$("#map3").vectorMap("get","mapObject").updateSize()):"btn4"==$(this).attr("id")?($(".maps-container > div:not(#map4-container)").hide(),$("#map4-container").fadeIn(300),$("#map4").vectorMap("get","mapObject").updateSize()):($(".maps-container > div:not(#map5-container)").hide(),$("#map5-container").fadeIn(300),$("#map5").vectorMap("get","mapObject").updateSize())}),$(function(){var o={};o.bgColor="transparant",o.scaleColors=["#cb333b","#fffdfd"],o.fillColor="#e7e7e9",o.strokeColor="#fff",o.strokeWidth="0.4",o.markerColor="#21ACDE",o.markerStrokeColor="#1a8ab2",$("#map1").vectorMap({map:"world_mill_en",backgroundColor:o.bgColor,zoomOnScroll:!1,regionStyle:{initial:{fill:o.fillColor,stroke:o.strokeColor,"stroke-width":o.strokeWidth}},markers:markers,markerStyle:{initial:{fill:o.markerColor,stroke:o.markerStrokeColor},hover:{"fill-opacity":1,stroke:o.markerStrokeColor,cursor:"pointer"}},series:{regions:[{values:birthsData,scale:o.scaleColors,normalizeFunction:"polynomial",legend:{horizontal:!0,title:"Percentage of Total"}}]},onRegionTipShow:function(o,e,r){e.html(e.html()+"<br> (Rate: "+birthsData[r]+")")},onMarkerTipShow:function(o,e,r){e.html('<div class="info-window"><h3>'+e.html()+"</h3><p>"+markers[r].content+'</p><a href="'+markers[r].link+'" target="_blank">Where we work <span>&#62;&#62;</span></a></div>'),o.preventDefault()},onMarkerOver:function(o,e,r){},onMarkerClick:function(o,t,a){console.log("You have triggered click");var l=$("#map1").vectorMap("get","mapObject"),n=$("#customTip");n.css({left:e,top:r}),n.html(l.tip.html()),n.prepend("<button>&#215;</button>"),n.children("button").click(function(){n.hide()}),n.show()}});var e,r;window.matchMedia("(min-width: 769px)").matches&&$("#map1").vectorMap("get","mapObject").container.mousemove(function(o){e=o.pageX-320,r=o.pageY-220})}),$(function(){var o={};o.bgColor="transparant",o.scaleColors=["#fbf0f1","#cb333b"],o.fillColor="#e7e7e9",o.strokeColor="#fff",o.strokeWidth="0.4",o.markerColor="#21ACDE",o.markerStrokeColor="#1a8ab2",$("#map2").vectorMap({map:"world_mill_en",backgroundColor:o.bgColor,zoomOnScroll:!1,regionStyle:{initial:{fill:o.fillColor,stroke:o.strokeColor,"stroke-width":o.strokeWidth}},markers:markers,markerStyle:{initial:{fill:o.markerColor,stroke:o.markerStrokeColor},hover:{"fill-opacity":1,stroke:o.markerStrokeColor,cursor:"pointer"}},series:{regions:[{values:mortalityData,scale:o.scaleColors,legend:{horizontal:!0,title:"Per 1000 live births"}}]},onRegionTipShow:function(o,e,r){e.html(e.html()+"<br> (Rate: "+mortalityData[r]+")")},onMarkerTipShow:function(o,e,r){e.html('<div class="info-window"><h3>'+e.html()+"</h3><p>"+markers[r].content+'</p><a href="'+markers[r].link+'" target="_blank">Where we work <span>&#62;&#62;</span></a></div>'),o.preventDefault()},onMarkerClick:function(o,t,a){console.log("You have triggered click");var l=$("#map2").vectorMap("get","mapObject"),n=$("#customTip");n.css({left:e,top:r}),n.html(l.tip.html()),n.prepend("<button>&#215;</button>"),n.children("button").click(function(){n.hide()}),n.show()}});var e,r;$("#map2").vectorMap("get","mapObject").container.mousemove(function(o){e=o.pageX-320,r=o.pageY-220})}),$(function(){var o={};o.bgColor="transparant",o.scaleColors=["#fbf0f1","#cb333b"],o.fillColor="#e7e7e9",o.strokeColor="#fff",o.strokeWidth="0.4",o.markerColor="#21ACDE",o.markerStrokeColor="#1a8ab2",$("#map3").vectorMap({map:"world_mill_en",backgroundColor:o.bgColor,zoomOnScroll:!1,regionStyle:{initial:{fill:o.fillColor,stroke:o.strokeColor,"stroke-width":o.strokeWidth}},markers:markers,markerStyle:{initial:{fill:o.markerColor,stroke:o.markerStrokeColor},hover:{"fill-opacity":1,stroke:o.markerStrokeColor,cursor:"pointer"}},series:{regions:[{values:maternalData,scale:o.scaleColors,legend:{horizontal:!0,title:"Per 100 000 live births"}}]},onRegionTipShow:function(o,e,r){e.html(e.html()+"<br> (Rate: "+maternalData[r]+")")},onMarkerTipShow:function(o,e,r){e.html('<div class="info-window"><h3>'+e.html()+"</h3><p>"+markers[r].content+'</p><a href="'+markers[r].link+'" target="_blank">Where we work <span>&#62;&#62;</span></a></div>'),o.preventDefault()},onMarkerClick:function(o,t,a){console.log("You have triggered click");var l=$("#map3").vectorMap("get","mapObject"),n=$("#customTip");n.css({left:e,top:r}),n.html(l.tip.html()),n.prepend("<button>&#215;</button>"),n.children("button").click(function(){n.hide()}),n.show()}});var e,r;$("#map3").vectorMap("get","mapObject").container.mousemove(function(o){e=o.pageX-320,r=o.pageY-220})}),$(function(){var o={};o.bgColor="#fff",o.scaleColors=["#fbf0f1","#cb333b"],o.fillColor="#e7e7e9",o.strokeColor="#fff",o.strokeWidth="0.4",o.markerColor="#21ACDE",o.markerStrokeColor="#1a8ab2",$("#map4").vectorMap({map:"world_mill_en",backgroundColor:o.bgColor,zoomOnScroll:!1,regionStyle:{initial:{fill:o.fillColor,stroke:o.strokeColor,"stroke-width":o.strokeWidth},hover:{"fill-opacity":.8,cursor:"pointer"}},markers:markers,markerStyle:{initial:{fill:o.markerColor,stroke:o.markerColor},hover:{"fill-opacity":1,stroke:o.markerStrokeColor,cursor:"pointer"}},series:{regions:[{values:physicianData,scale:o.scaleColors,legend:{horizontal:!0,title:"Per 1000 people"}}]},onRegionTipShow:function(o,e,r){e.html(e.html()+"<br> (Rate: "+physicianData[r]+")")},onMarkerTipShow:function(o,e,r){e.html('<div class="info-window"><h3>'+e.html()+"</h3><p>"+markers[r].content+'</p><a href="'+markers[r].link+'" target="_blank">Where we work <span>&#62;&#62;</span></a></div>'),o.preventDefault()},onMarkerClick:function(o,t,a){var l=$("#map4").vectorMap("get","mapObject"),n=$("#customTip");n.css({left:e,top:r}),n.html(l.tip.html()),n.prepend("<button>&#215;</button>"),n.children("button").click(function(){n.hide()}),n.show()}});var e,r;$("#map4").vectorMap("get","mapObject").container.mousemove(function(o){e=o.pageX-320,r=o.pageY-220})}),$(function(){var o={};o.bgColor="#fff",o.scaleColors=["#fbf0f1","#cb333b"],o.fillColor="#e7e7e9",o.strokeColor="#fff",o.strokeWidth="0.4",o.markerColor="#21ACDE",o.markerStrokeColor="#1a8ab2",$("#map5").vectorMap({map:"world_mill_en",backgroundColor:o.bgColor,zoomOnScroll:!1,regionStyle:{initial:{fill:o.fillColor,stroke:o.strokeColor,"stroke-width":o.strokeWidth},hover:{"fill-opacity":.8,cursor:"pointer"}},markers:markers,markerStyle:{initial:{fill:o.markerColor,stroke:o.markerColor},hover:{"fill-opacity":1,stroke:o.markerStrokeColor,cursor:"pointer"}},series:{regions:[{values:battleData,scale:o.scaleColors,legend:{horizontal:!0,title:"Per 100 000 standard population"}}]},onRegionTipShow:function(o,e,r){e.html(e.html()+"<br> (Rate: "+battleData[r]+")")},onMarkerTipShow:function(o,e,r){e.html('<div class="info-window"><h3>'+e.html()+"</h3><p>"+markers[r].content+'</p><a href="'+markers[r].link+'" target="_blank">Where we work <span>&#62;&#62;</span></a></div>'),o.preventDefault()},onMarkerClick:function(o,t,a){var l=$("#map5").vectorMap("get","mapObject"),n=$("#customTip");n.css({left:e,top:r}),n.html(l.tip.html()),n.prepend("<button>&#215;</button>"),n.children("button").click(function(){n.hide()}),n.show()}});var e,r;$("#map5").vectorMap("get","mapObject").container.mousemove(function(o){e=o.pageX-320,r=o.pageY-220})});