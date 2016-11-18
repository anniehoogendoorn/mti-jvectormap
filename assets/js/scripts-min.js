$(document).ready(function(){$(".map-menu button#btn4").trigger("click")}),$(".map-menu button").click(function(){$("button").not(this).removeClass("selected"),$(this).addClass("selected"),"btn1"===$(this).attr("id")?($(".maps-container > div:not(#map1-container)").hide(),$("#map1-container").fadeIn(800)):"btn2"===$(this).attr("id")?($(".maps-container > div:not(#map2-container)").hide(),$("#map2-container").fadeIn(800),$("#map2").vectorMap("get","mapObject").updateSize()):"btn3"==$(this).attr("id")?($(".maps-container > div:not(#map3-container)").hide(),$("#map3-container").fadeIn(800),$("#map3").vectorMap("get","mapObject").updateSize()):"btn4"==$(this).attr("id")&&($(".maps-container > div:not(#map4-container)").hide(),$("#map4-container").fadeIn(800))}),$(function(){var o={};o.bgColor="transparant",o.scaleColors=["#cb333b","#fffdfd"],o.fillColor="#e7e7e9",o.strokeColor="#fff",o.strokeWidth="0.4",o.markerColor="#21ACDE",o.markerStrokeColor="#1a8ab2",$("#map1").vectorMap({map:"world_mill_en",backgroundColor:o.bgColor,zoomOnScroll:!1,regionStyle:{initial:{fill:o.fillColor,stroke:o.strokeColor,"stroke-width":o.strokeWidth}},markers:markers,markerStyle:{initial:{fill:o.markerColor,stroke:o.markerStrokeColor},hover:{"fill-opacity":1,stroke:o.markerStrokeColor,cursor:"pointer"}},series:{regions:[{values:birthsData,scale:o.scaleColors,normalizeFunction:"polynomial",legend:{horizontal:!0,title:"Percentage of Total"}}]},onRegionTipShow:function(o,r,e){r.html(r.html()+"<br> (Rate: "+birthsData[e]+")")},onMarkerTipShow:function(o,r,e){r.html('<div class="info-window"><h3>'+r.html()+"</h3><p>"+markers[e].content+'</p><a href="'+markers[e].link+'" target="_blank">Where we work <span>&#62;&#62;</span></a></div>'),o.preventDefault()},onMarkerOver:function(o,r,e){},onMarkerClick:function(o,t,a){console.log("You have triggered click");var l=$("#map1").vectorMap("get","mapObject"),n=$("#customTip");n.css({left:r,top:e}),n.html(l.tip.html()),n.prepend("<button>&#215;</button>"),n.children("button").click(function(){n.hide()}),n.show()}});var r,e;$("#map1").vectorMap("get","mapObject").container.mousemove(function(o){r=o.pageX-320,e=o.pageY-220})}),$(function(){var o={};o.bgColor="transparant",o.scaleColors=["#fbf0f1","#cb333b"],o.fillColor="#e7e7e9",o.strokeColor="#fff",o.strokeWidth="0.4",o.markerColor="#21ACDE",o.markerStrokeColor="#1a8ab2",$("#map2").vectorMap({map:"world_mill_en",backgroundColor:o.bgColor,zoomOnScroll:!1,regionStyle:{initial:{fill:o.fillColor,stroke:o.strokeColor,"stroke-width":o.strokeWidth}},markers:markers,markerStyle:{initial:{fill:o.markerColor,stroke:o.markerStrokeColor},hover:{"fill-opacity":1,stroke:o.markerStrokeColor,cursor:"pointer"}},series:{regions:[{values:mortalityData,scale:o.scaleColors,legend:{horizontal:!0,title:"Per 1000 live births"}}]},onRegionTipShow:function(o,r,e){r.html(r.html()+"<br> (Rate - "+mortalityData[e]+")")},onMarkerTipShow:function(o,r,e){r.html('<div class="info-window"><h3>'+r.html()+"</h3><p>"+markers[e].content+'</p><a href="'+markers[e].link+'" target="_blank">Where we work <span>&#62;&#62;</span></a></div>'),o.preventDefault()},onMarkerClick:function(o,t,a){console.log("You have triggered click");var l=$("#map2").vectorMap("get","mapObject"),n=$("#customTip");n.css({left:r,top:e}),n.html(l.tip.html()),n.prepend("<button>&#215;</button>"),n.children("button").click(function(){n.hide()}),n.show()}});var r,e;$("#map2").vectorMap("get","mapObject").container.mousemove(function(o){r=o.pageX-320,e=o.pageY-220})}),$(function(){var o={};o.bgColor="transparant",o.scaleColors=["#fbf0f1","#cb333b"],o.fillColor="#e7e7e9",o.strokeColor="#fff",o.strokeWidth="0.4",o.markerColor="#21ACDE",o.markerStrokeColor="#1a8ab2",$("#map3").vectorMap({map:"world_mill_en",backgroundColor:o.bgColor,zoomOnScroll:!1,regionStyle:{initial:{fill:o.fillColor,stroke:o.strokeColor,"stroke-width":o.strokeWidth}},markers:markers,markerStyle:{initial:{fill:o.markerColor,stroke:o.markerStrokeColor},hover:{"fill-opacity":1,stroke:o.markerStrokeColor,cursor:"pointer"}},series:{regions:[{values:maternalData,scale:o.scaleColors,legend:{horizontal:!0,title:"Per 100 000 live births"}}]},onRegionTipShow:function(o,r,e){r.html(r.html()+"<br> (Rate - "+maternalData[e]+")")},onMarkerTipShow:function(o,r,e){r.html('<div class="info-window"><h3>'+r.html()+"</h3><p>"+markers[e].content+'</p><a href="'+markers[e].link+'" target="_blank">Where we work <span>&#62;&#62;</span></a></div>'),o.preventDefault()},onMarkerClick:function(o,t,a){console.log("You have triggered click");var l=$("#map3").vectorMap("get","mapObject"),n=$("#customTip");n.css({left:r,top:e}),n.html(l.tip.html()),n.prepend("<button>&#215;</button>"),n.children("button").click(function(){n.hide()}),n.show()}});var r,e;$("#map3").vectorMap("get","mapObject").container.mousemove(function(o){r=o.pageX-320,e=o.pageY-220})}),$(function(){var o={};o.bgColor="#fff",o.scaleColors=["#fbf0f1","#cb333b"],o.fillColor="#e7e7e9",o.strokeColor="#fff",o.strokeWidth="0.4",o.markerColor="#21ACDE",o.markerStrokeColor="#1a8ab2",$("#map4").vectorMap({map:"world_mill_en",backgroundColor:o.bgColor,zoomOnScroll:!1,regionStyle:{initial:{fill:o.fillColor,stroke:o.strokeColor,"stroke-width":o.strokeWidth},hover:{"fill-opacity":.8,cursor:"pointer"}},markers:markers,markerStyle:{initial:{fill:o.markerColor,stroke:o.markerColor},hover:{"fill-opacity":1,stroke:o.markerStrokeColor,cursor:"pointer"}},series:{regions:[{values:physicianData,scale:o.scaleColors,legend:{horizontal:!0,title:"Per 1000 people"}}]},onRegionTipShow:function(o,r,e){r.html(r.html()+"<br> (GDP - "+physicianData[e]+")")},onMarkerTipShow:function(o,r,e){r.html('<div class="info-window"><h3>'+r.html()+"</h3><p>"+markers[e].content+'</p><a href="'+markers[e].link+'" target="_blank">Where we work <span>&#62;&#62;</span></a></div>'),o.preventDefault()},onMarkerClick:function(o,t,a){var l=$("#map4").vectorMap("get","mapObject"),n=$("#customTip");n.css({left:r,top:e}),n.html(l.tip.html()),n.prepend("<button>&#215;</button>"),n.children("button").click(function(){n.hide()}),n.show()}});var r,e;$("#map4").vectorMap("get","mapObject").container.mousemove(function(o){r=o.pageX-320,e=o.pageY-220})});