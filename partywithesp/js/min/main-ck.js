$(document).ready(function(){$("#esp-nav").affix({offset:{top:2}});var e=["Private parties","Fundraisers","Product launches","Holiday parties","Bar/Bat Mitvahs","Galas","Trade shows"];i=0,$div=$("#services"),setInterval(function(){$div.fadeOut(function(){$div.text(e[i++%e.length]).fadeIn()})},1500),Modernizr.touch||($.stellar({horizontalScrolling:!1,responsive:!0}),$(window).resize(function(){$.stellar("refresh")}))});