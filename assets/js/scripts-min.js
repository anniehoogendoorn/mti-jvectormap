$(document).ready(function(){$(".map-menu button#btn2").trigger("click")}),$(".map-menu button").click(function(){$("button").not(this).removeClass("selected"),$(this).addClass("selected"),"btn1"===$(this).attr("id")?($(".maps-container > div:not(#map1-container)").hide(),$("#map1-container").fadeIn(800)):"btn2"===$(this).attr("id")?($(".maps-container > div:not(#map2-container)").hide(),$("#map2-container").fadeIn(800)):"btn3"==$(this).attr("id")||"btn4"==$(this).attr("id")&&($(".maps-container > div:not(#map4-container)").hide(),$("#map4-container").fadeIn(800),$("#map4").vectorMap("get","mapObject").updateSize(),console.log("bt4 clicked"))}),$(function(){var o={};o.bgColor="transparant",o.scaleColors=["#fffdfd","#cb333b"],o.fillColor="#e7e7e9",o.strokeColor="#fff",o.strokeWidth="0.4",o.markerColor="#21ACDE",o.markerStrokeColor="#1a8ab2",$("#map2").vectorMap({map:"world_mill_en",backgroundColor:o.bgColor,zoomOnScroll:!1,regionStyle:{initial:{fill:o.fillColor,stroke:o.strokeColor,"stroke-width":o.strokeWidth}},markers:markers,markerStyle:{initial:{fill:o.markerColor,stroke:o.markerStrokeColor},hover:{"fill-opacity":1,stroke:o.markerStrokeColor,cursor:"pointer"}},series:{regions:[{values:mortalityData,scale:o.scaleColors,normalizeFunction:"polynomial",legend:{vertical:!0}}]},onRegionTipShow:function(o,e,r){e.html(e.html()+"<br> (Rate - "+mortalityData[r]+")")},onMarkerTipShow:function(o,e,r){e.html('<div class="info-window"><h3>'+e.html()+"</h3><p>"+markers[r].content+'</p><a href="'+markers[r].link+'" target="_blank">Where we work <span>&#62;&#62;</span></a></div>'),o.preventDefault()},onMarkerOver:function(o,e,r){},onMarkerClick:function(o,t,a){console.log("You have triggered click");var n=$("#map2").vectorMap("get","mapObject"),i=$("#customTip");i.css({left:e,top:r}),i.html(n.tip.html()),i.prepend("<button>&#215;</button>"),i.children("button").click(function(){i.hide()}),i.show()}});var e,r;$("#map2").vectorMap("get","mapObject").container.mousemove(function(o){e=o.pageX-320,r=o.pageY-220})}),$(function(){var o={};o.bgColor="#fff",o.scaleColors=["#fbf0f1","#cb333b"],o.fillColor="#e7e7e9",o.strokeColor="#fff",o.strokeWidth="0.4",o.markerColor="#21ACDE",o.markerStrokeColor="#1a8ab2",$("#map4").vectorMap({map:"world_mill_en",backgroundColor:o.bgColor,zoomOnScroll:!1,regionStyle:{initial:{fill:o.fillColor,stroke:o.strokeColor,"stroke-width":o.strokeWidth},hover:{"fill-opacity":.8,cursor:"pointer"}},markers:markers,markerStyle:{initial:{fill:o.markerColor,stroke:o.markerColor},hover:{"fill-opacity":1,stroke:o.markerStrokeColor,cursor:"pointer"}},series:{regions:[{values:physicianData,scale:o.scaleColors,normalizeFunction:"polynomial"}]},onRegionTipShow:function(o,e,r){e.html(e.html()+"<br> (GDP - "+physicianData[r]+")")},onMarkerTipShow:function(o,e,r){e.html('<div class="info-window"><h3>'+e.html()+"</h3><p>"+markers[r].content+'</p><a href="'+markers[r].link+'" target="_blank">Where we work <span>&#62;&#62;</span></a></div>'),o.preventDefault()},onMarkerClick:function(o,t,a){console.log("You have triggered click");var n=$("#map4").vectorMap("get","mapObject"),i=$("#customTip");i.css({left:e,top:r}),i.html(n.tip.html()),i.prepend("<button>&#215;</button>"),i.children("button").click(function(){i.hide()}),i.show()}});var e,r;$("#map4").vectorMap("get","mapObject").container.mousemove(function(o){e=o.pageX-320,r=o.pageY-220})});