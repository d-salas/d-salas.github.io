$(document).ready(function(){function t(){n.fadeOut("fast",function(){$(this).attr("src",e[i]),$(this).fadeIn("fast",function(){i===e.length-1?i=0:i++})})}var e=["img/letter-1.png","img/letter-2.png","img/letter-3.png"],i=0,n=$("#letter-img");$("#letter-div").height(n.height());var s=$("#mss-nav");$(window).scroll(function(){$(this).scrollTop()>10?(s.addClass("affix"),s.removeClass("affix-top")):(s.addClass("affix-top"),s.removeClass("affix"))}),$("#menu-icon").click(function(){$(this).toggleClass("down")}),setInterval(t,2500),$(window).resize(function(){$("#letter-div").height(n.height())}),$("#select1").change(function(){"undefined"==typeof $(this).data("options")&&$(this).data("options",$("#select2 option").clone());var t=$(this).val(),e=$(this).data("options").filter("[value="+t+"]");$("#select2").html(e)})});