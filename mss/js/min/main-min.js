$(document).ready(function(){function e(){r.fadeOut("fast",function(){$(this).attr("src",i[t]),$(this).fadeIn("fast",function(){t===i.length-1?t=0:t++})})}var i=["img/letter-1.png","img/letter-2.png","img/letter-3.png"],t=0,r=$("#letter-img");$("#letter-div").height(r.height());var a=$("#mss-nav");$(window).scroll(function(){$(this).scrollTop()>10?(a.addClass("affix"),a.removeClass("affix-top")):(a.addClass("affix-top"),a.removeClass("affix"))}),$("#menu-icon").click(function(){$(this).toggleClass("down")}),setInterval(e,2500),$(".selectpicker").selectpicker("mobile"),$(".font-picker").change(function(){$("#sample-letter>p").css("font-family",$(this).val())});var s=$("#stationery-img");$(".stationery-picker").change(function(){var e=$(this).val();"Ampersand"===e&&s.attr("src","./img/ampersand.jpg"),"Wreath"===e&&s.attr("src","./img/wreath.jpg"),"Roadster"===e&&s.attr("src","./img/roadster.jpg"),"Savannah tree"===e&&s.attr("src","./img/savannahtree.jpg")});var d=$("option:contains(Celebration invitation)"),c=$("option:contains(Shower invitation)"),n=$("option:contains(Acknowledgement)"),l=$("option:contains(Announcement)"),o=$("option:contains(Save the date)"),p=$("option:contains(Gift acknowledgement)"),b=$("option:contains(Invitation)");$(".service-picker").prop("disabled",!0),$(".stationery-picker").prop("disabled",!0),$(".calligraphy-picker").prop("disabled",!0),$(".service-picker").selectpicker("refresh"),$(".stationery-picker").selectpicker("refresh"),$(".calligraphy-picker").selectpicker("refresh"),$(".event-picker").change(function(){$(".service-picker").prop("disabled",!1);var e=$(this).val();e.indexOf("Baby")>=0&&($(".stationery-picker").prop("disabled",!1),c.removeAttr("disabled"),l.removeAttr("disabled"),p.removeAttr("disabled"),s.css("display","block"),d.attr("disabled",""),n.attr("disabled",""),o.attr("disabled",""),b.attr("disabled",""),$(".wedding-notice").hide(),$(".stationery-picker").selectpicker("refresh"),$(".service-picker").selectpicker("refresh")),e.indexOf("Engagement")>=0&&($(".stationery-picker").prop("disabled",!1),l.removeAttr("disabled"),d.removeAttr("disabled"),p.removeAttr("disabled"),s.css("display","block"),c.attr("disabled",""),n.attr("disabled",""),b.attr("disabled",""),o.attr("disabled",""),$(".wedding-notice").hide(),$(".stationery-picker").selectpicker("refresh"),$(".service-picker").selectpicker("refresh")),e.indexOf("Wedding")>=0&&(l.removeAttr("disabled"),o.removeAttr("disabled"),b.removeAttr("disabled"),p.removeAttr("disabled"),$(".wedding-notice").show(),$(".stationery-picker").prop("disabled",!0),d.attr("disabled",""),c.attr("disabled",""),n.attr("disabled",""),s.css("display","none"),$(".stationery-picker").selectpicker("refresh"),$(".service-picker").selectpicker("refresh")),e.indexOf("Bridal")>=0&&($(".stationery-picker").prop("disabled",!1),b.removeAttr("disabled"),p.removeAttr("disabled"),s.css("display","block"),c.attr("disabled",""),n.attr("disabled",""),l.attr("disabled",""),o.attr("disabled",""),d.attr("disabled",""),$(".wedding-notice").hide(),$(".stationery-picker").selectpicker("refresh"),$(".service-picker").selectpicker("refresh")),e.indexOf("Graduation")>=0&&($(".stationery-picker").prop("disabled",!1),l.removeAttr("disabled"),d.removeAttr("disabled"),p.removeAttr("disabled"),s.css("display","block"),c.attr("disabled",""),n.attr("disabled",""),o.attr("disabled",""),b.attr("disabled",""),$(".wedding-notice").hide(),$(".stationery-picker").selectpicker("refresh"),$(".service-picker").selectpicker("refresh")),e.indexOf("Memorial")>=0&&($(".stationery-picker").prop("disabled",!1),l.removeAttr("disabled"),n.removeAttr("disabled"),s.css("display","block"),c.attr("disabled",""),p.attr("disabled",""),d.attr("disabled",""),o.attr("disabled",""),b.attr("disabled",""),$(".wedding-notice").hide(),$(".stationery-picker").selectpicker("refresh"),$(".service-picker").selectpicker("refresh"))}),$(".service-picker").change(function(){var e=$(this).val();"Announcement"===e||"Celebration invitation"===e||"Invitation"===e||"Save the date"===e||"Shower invitation"===e?($(".calligraphy-picker").prop("disabled",!1),$(".calligraphy-picker").selectpicker("refresh")):($(".calligraphy-picker").prop("disabled",!0),$(".calligraphy-picker").selectpicker("refresh"))})});