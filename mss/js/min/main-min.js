$(document).ready(function(){function e(){var e=r.offset().top,t=r.offset().left;i.css("top",e),i.css("left",t-35)}$('a[href^="#"]').on("click",function(e){var t=$($(this).attr("href"));t.length&&(e.preventDefault(),$("html, body").animate({scrollTop:t.offset().top-50},1e3))});var t=$("#mss-nav"),a=$("#mss-hero"),d=$(".navbar-brand");$(this).scrollTop()>10&&(t.addClass("affix"),t.removeClass("affix-top")),$(this).scrollTop()>a.outerHeight()&&d.addClass("visible-logo"),$(window).scroll(function(){$(this).scrollTop()>10?(t.addClass("affix"),t.removeClass("affix-top")):(t.addClass("affix-top"),t.removeClass("affix")),$(this).scrollTop()>a.outerHeight()-33?d.addClass("visible-logo"):d.removeClass("visible-logo")}),$("#down-icon").click(function(){$("#menu-icon").toggleClass("down")});var i=$("#typed"),r=$("#mss-logo-top>img");e(),$(window).resize(e),$("#typed").typed({strings:["\n    Thank You!","So glad you \ncould make it...","I was thrilled to \nbe able to celebrate...","\nMerci, Grazie, Xiè xie!","\n      It's a Boy!","We are thrilled to\nannounce..."],typeSpeed:50,backDelay:500,loop:!0,contentType:"html",loopCount:!1}),$(".selectpicker").selectpicker({hideDisabled:"true"}),$(".font-picker").change(function(){$("#sample-letter>p").css("font-family",$(this).val())});var s=$("#stationery-img"),o=$("#loading-icon");$(".stationery-picker").change(function(){var e=$(this).val();"Alphabet Letter"===e&&(s.fadeOut(),o.fadeIn(),window.setTimeout(function(){s.attr("src","./img/cards/alphabet-letter.png")},800),window.setTimeout(function(){s.fadeIn(),o.fadeOut()},800)),"Ampersand"===e&&(s.fadeOut(),o.fadeIn(),window.setTimeout(function(){s.attr("src","./img/cards/ampersand.png")},800),window.setTimeout(function(){s.fadeIn(),o.fadeOut()},800)),"Ballerina Mouse"===e&&(s.fadeOut(),o.fadeIn(),window.setTimeout(function(){s.attr("src","./img/cards/ballerina-mouse.png")},800),window.setTimeout(function(){s.fadeIn(),o.fadeOut()},800)),"Beauty (Chinese characters)"===e&&(s.fadeOut(),o.fadeIn(),window.setTimeout(function(){s.attr("src","./img/cards/chinese-beauty.png")},800),window.setTimeout(function(){s.fadeIn(),o.fadeOut()},800)),"Bicycle"===e&&(s.fadeOut(10),o.fadeIn(),window.setTimeout(function(){s.attr("src","./img/cards/bicycle.png")},800),window.setTimeout(function(){s.fadeIn(),o.fadeOut()},800)),"Books"===e&&(s.fadeOut(),o.fadeIn(),window.setTimeout(function(){s.attr("src","./img/cards/books.png")},800),window.setTimeout(function(){s.fadeIn(),o.fadeOut()},800)),"Bowtie"===e&&(s.fadeOut(),o.fadeIn(),window.setTimeout(function(){s.attr("src","./img/cards/bowtie.png")},800),window.setTimeout(function(){s.fadeIn(),o.fadeOut()},800)),"Dress"===e&&(s.fadeOut(),o.fadeIn(),window.setTimeout(function(){s.attr("src","./img/cards/dress.png")},800),window.setTimeout(function(){s.fadeIn(),o.fadeOut()},800)),"Frog"===e&&(s.fadeOut(),o.fadeIn(),window.setTimeout(function(){s.attr("src","./img/cards/frog.png")},800),window.setTimeout(function(){s.fadeIn(),o.fadeOut()},800)),"Gold Mouse"===e&&(s.fadeOut(),o.fadeIn(),window.setTimeout(function(){s.attr("src","./img/cards/mouse.png")},800),window.setTimeout(function(){s.fadeIn(),o.fadeOut()},800)),"Lion"===e&&(s.fadeOut(),o.fadeIn(),window.setTimeout(function(){s.attr("src","./img/cards/lion.png")},800),window.setTimeout(function(){s.fadeIn(),o.fadeOut()},800)),"Mermaid"===e&&(s.fadeOut(),o.fadeIn(),window.setTimeout(function(){s.attr("src","./img/cards/mermaid.png")},800),window.setTimeout(function(){s.fadeIn(),o.fadeOut()},800)),"Nest"===e&&(s.fadeOut(),o.fadeIn(),window.setTimeout(function(){s.attr("src","./img/cards/nest.png")},800),window.setTimeout(function(){s.fadeIn(),o.fadeOut()},800)),"Pocketwatch"===e&&(s.fadeOut(),o.fadeIn(),window.setTimeout(function(){s.attr("src","./img/cards/pocketwatch.png")},800),window.setTimeout(function(){s.fadeIn(),o.fadeOut()},800)),"Roadster"===e&&(s.fadeOut(),o.fadeIn(),window.setTimeout(function(){s.attr("src","./img/cards/roadster.png")},800),window.setTimeout(function(){s.fadeIn(),o.fadeOut()},800)),"Sailboat"===e&&(s.fadeOut(),o.fadeIn(),window.setTimeout(function(){s.attr("src","./img/cards/sailboat.png")},800),window.setTimeout(function(){s.fadeIn(),o.fadeOut()},800)),"Savannah Tree"===e&&(s.fadeOut(),o.fadeIn(),window.setTimeout(function(){s.attr("src","./img/cards/savannahtree.png")},800),window.setTimeout(function(){s.fadeIn(),o.fadeOut()},800)),"Skyline"===e&&(s.fadeOut(),o.fadeIn(),window.setTimeout(function(){s.attr("src","./img/cards/skyline.png")},800),window.setTimeout(function(){s.fadeIn(),o.fadeOut()},800)),"Tent"===e&&(s.fadeOut(),o.fadeIn(),window.setTimeout(function(){s.attr("src","./img/cards/tent.png")},800),window.setTimeout(function(){s.fadeIn(),o.fadeOut()},800)),"Turtle"===e&&(s.fadeOut(),o.fadeIn(),window.setTimeout(function(){s.attr("src","./img/cards/turtle.png")},800),window.setTimeout(function(){s.fadeIn(),o.fadeOut()},800)),"Wreath"===e&&(s.fadeOut(),o.fadeIn(),window.setTimeout(function(){s.attr("src","./img/cards/wreath.png")},800),window.setTimeout(function(){s.fadeIn(),o.fadeOut()},800)),"Yoga Pose"===e&&(s.fadeOut(),o.fadeIn(),window.setTimeout(function(){s.attr("src","./img/cards/yogapose.png")},800),window.setTimeout(function(){s.fadeIn(),o.fadeOut()},800)),"Zebra"===e&&(s.fadeOut(),o.fadeIn(),window.setTimeout(function(){s.attr("src","./img/cards/zebra.png")},800),window.setTimeout(function(){s.fadeIn(),o.fadeOut()},800))});var n=$("option:contains(Celebration invitation)"),l=$("option:contains(Shower invitation)"),c=$("option:contains(Acknowledgement)"),b=$("option:contains(Announcement)"),p=$("option:contains(Save the date)"),f=$("option:contains(Gift acknowledgement)"),m=$("option:contains(Invitation)"),u=$("option:contains(Alphabet Letter)"),v=$("option:contains(Ampersand)"),w=$("option:contains(Ballerina Mouse)"),h=$("option:contains(Chinese)"),k=$("option:contains(Bicycle)"),g=$("option:contains(Books)"),A=$("option:contains(Bowtie)"),y=$("option:contains(Dress)"),T=$("option:contains(Frog)"),O=$("option:contains(Gold Mouse)"),I=$("option:contains(Lion)"),C=$("option:contains(Mermaid)"),x=$("option:contains(Nest)"),B=$("option:contains(Pocketwatch)"),S=$("option:contains(Roadster)"),M=$("option:contains(Sailboat)"),z=$("option:contains(Savannah Tree)"),D=$("option:contains(Skyline)"),G=$("option:contains(Tent)"),P=$("option:contains(Turtle)"),L=$("option:contains(Wreath)"),W=$("option:contains(Yoga Pose)"),q=$("option:contains(Zebra)"),F=$(".card-images");$(".service-picker").prop("disabled",!0),$(".stationery-picker").prop("disabled",!0),$(".calligraphy-picker").prop("disabled",!0),$(".service-picker").selectpicker("refresh"),$(".stationery-picker").selectpicker("refresh"),$(".calligraphy-picker").selectpicker("refresh"),$(".event-picker").change(function(){$(".service-picker").prop("disabled",!1),R.prop("disabled",!1),R.selectpicker("refresh");var e=$(this).val();null!==e?$("#hide-on-select").css("display","none"):($("#hide-on-select").css("display","inline"),e="nothing"),e.indexOf("Baby")>=0&&($(".stationery-picker").prop("disabled",!1),l.removeAttr("disabled"),b.removeAttr("disabled"),f.removeAttr("disabled"),s.css("display","block"),F.css("display","block"),w.removeAttr("disabled"),G.removeAttr("disabled"),T.removeAttr("disabled"),I.removeAttr("disabled"),C.removeAttr("disabled"),O.removeAttr("disabled"),u.removeAttr("disabled"),P.removeAttr("disabled"),q.removeAttr("disabled"),v.attr("disabled",""),h.attr("disabled",""),k.attr("disabled",""),g.attr("disabled",""),A.attr("disabled",""),y.attr("disabled",""),x.attr("disabled",""),B.attr("disabled",""),S.attr("disabled",""),M.attr("disabled",""),z.attr("disabled",""),D.attr("disabled",""),L.attr("disabled",""),W.attr("disabled",""),n.attr("disabled",""),c.attr("disabled",""),p.attr("disabled",""),m.attr("disabled",""),$(".wedding-notice").hide(),$(".stationery-picker").selectpicker("refresh"),$(".service-picker").selectpicker("refresh")),e.indexOf("Engagement")>=0&&($(".stationery-picker").prop("disabled",!1),b.removeAttr("disabled"),n.removeAttr("disabled"),f.removeAttr("disabled"),s.css("display","block"),F.css("display","block"),v.removeAttr("disabled"),h.removeAttr("disabled"),D.removeAttr("disabled"),u.removeAttr("disabled"),x.removeAttr("disabled"),L.removeAttr("disabled"),S.removeAttr("disabled"),w.attr("disabled",""),k.attr("disabled",""),g.attr("disabled",""),A.attr("disabled",""),y.attr("disabled",""),T.attr("disabled",""),O.attr("disabled",""),I.attr("disabled",""),C.attr("disabled",""),B.attr("disabled",""),M.attr("disabled",""),z.attr("disabled",""),G.attr("disabled",""),P.attr("disabled",""),W.attr("disabled",""),q.attr("disabled",""),l.attr("disabled",""),c.attr("disabled",""),m.attr("disabled",""),p.attr("disabled",""),$(".wedding-notice").hide(),$(".stationery-picker").selectpicker("refresh"),$(".service-picker").selectpicker("refresh")),e.indexOf("Wedding")>=0&&(b.removeAttr("disabled"),p.removeAttr("disabled"),m.removeAttr("disabled"),f.removeAttr("disabled"),$(".wedding-notice").show(),$(".stationery-picker").prop("disabled",!0),n.attr("disabled",""),l.attr("disabled",""),c.attr("disabled",""),s.css("display","none"),F.css("display","none"),$(".stationery-picker").selectpicker("refresh"),$(".service-picker").selectpicker("refresh")),e.indexOf("Bar/Bat Mitzvah")>=0&&(console.log("bar bat mitzvah"),$(".stationery-picker").prop("disabled",!1),b.removeAttr("disabled"),n.removeAttr("disabled"),f.removeAttr("disabled"),m.removeAttr("disabled"),s.css("display","block"),F.css("display","block"),A.removeAttr("disabled"),D.removeAttr("disabled"),g.removeAttr("disabled"),u.removeAttr("disabled"),h.removeAttr("disabled"),y.removeAttr("disabled"),W.removeAttr("disabled"),v.attr("disabled",""),w.attr("disabled",""),k.attr("disabled",""),T.attr("disabled",""),O.attr("disabled",""),I.attr("disabled",""),C.attr("disabled",""),x.attr("disabled",""),B.attr("disabled",""),S.attr("disabled",""),M.attr("disabled",""),z.attr("disabled",""),G.attr("disabled",""),P.attr("disabled",""),L.attr("disabled",""),q.attr("disabled",""),l.attr("disabled",""),c.attr("disabled",""),p.attr("disabled",""),$(".wedding-notice").hide(),$(".stationery-picker").selectpicker("refresh"),$(".service-picker").selectpicker("refresh")),e.indexOf("Birthday")>=0&&(console.log("birthday"),$(".stationery-picker").prop("disabled",!1),b.removeAttr("disabled"),n.removeAttr("disabled"),f.removeAttr("disabled"),m.removeAttr("disabled"),s.css("display","block"),F.css("display","block"),w.removeAttr("disabled"),G.removeAttr("disabled"),T.removeAttr("disabled"),I.removeAttr("disabled"),C.removeAttr("disabled"),O.removeAttr("disabled"),u.removeAttr("disabled"),P.removeAttr("disabled"),q.removeAttr("disabled"),h.removeAttr("disabled"),x.removeAttr("disabled"),D.removeAttr("disabled"),L.removeAttr("disabled"),z.removeAttr("disabled"),A.removeAttr("disabled"),g.removeAttr("disabled"),B.removeAttr("disabled"),M.removeAttr("disabled"),y.removeAttr("disabled"),C.removeAttr("disabled"),W.removeAttr("disabled"),k.removeAttr("disabled"),v.attr("disabled",""),S.attr("disabled",""),l.attr("disabled",""),c.attr("disabled",""),p.attr("disabled",""),$(".wedding-notice").hide(),$(".stationery-picker").selectpicker("refresh"),$(".service-picker").selectpicker("refresh")),e.indexOf("Bridal")>=0&&($(".stationery-picker").prop("disabled",!1),m.removeAttr("disabled"),f.removeAttr("disabled"),s.css("display","block"),F.css("display","block"),h.removeAttr("disabled"),x.removeAttr("disabled"),D.removeAttr("disabled"),L.removeAttr("disabled"),u.removeAttr("disabled"),v.removeAttr("disabled"),w.attr("disabled",""),k.attr("disabled",""),g.attr("disabled",""),A.attr("disabled",""),y.attr("disabled",""),T.attr("disabled",""),O.attr("disabled",""),I.attr("disabled",""),C.attr("disabled",""),B.attr("disabled",""),S.attr("disabled",""),M.attr("disabled",""),z.attr("disabled",""),G.attr("disabled",""),P.attr("disabled",""),W.attr("disabled",""),q.attr("disabled",""),l.attr("disabled",""),c.attr("disabled",""),b.attr("disabled",""),p.attr("disabled",""),n.attr("disabled",""),$(".wedding-notice").hide(),$(".stationery-picker").selectpicker("refresh"),$(".service-picker").selectpicker("refresh")),e.indexOf("Graduation")>=0&&($(".stationery-picker").prop("disabled",!1),b.removeAttr("disabled"),n.removeAttr("disabled"),f.removeAttr("disabled"),s.css("display","block"),F.css("display","block"),h.removeAttr("disabled"),D.removeAttr("disabled"),y.removeAttr("disabled"),u.removeAttr("disabled"),W.removeAttr("disabled"),A.removeAttr("disabled"),D.removeAttr("disabled"),g.removeAttr("disabled"),B.removeAttr("disabled"),S.removeAttr("disabled"),v.attr("disabled",""),w.attr("disabled",""),k.attr("disabled",""),T.attr("disabled",""),O.attr("disabled",""),I.attr("disabled",""),C.attr("disabled",""),x.attr("disabled",""),M.attr("disabled",""),z.attr("disabled",""),G.attr("disabled",""),P.attr("disabled",""),L.attr("disabled",""),q.attr("disabled",""),l.attr("disabled",""),c.attr("disabled",""),p.attr("disabled",""),m.attr("disabled",""),$(".wedding-notice").hide(),$(".stationery-picker").selectpicker("refresh"),$(".service-picker").selectpicker("refresh")),e.indexOf("Memorial")>=0&&($(".stationery-picker").prop("disabled",!1),b.removeAttr("disabled"),c.removeAttr("disabled"),s.css("display","block"),F.css("display","block"),h.removeAttr("disabled"),x.removeAttr("disabled"),I.removeAttr("disabled"),q.removeAttr("disabled"),D.removeAttr("disabled"),u.removeAttr("disabled"),S.removeAttr("disabled"),v.attr("disabled",""),w.attr("disabled",""),k.attr("disabled",""),g.attr("disabled",""),A.attr("disabled",""),y.attr("disabled",""),T.attr("disabled",""),O.attr("disabled",""),C.attr("disabled",""),B.attr("disabled",""),M.attr("disabled",""),z.attr("disabled",""),G.attr("disabled",""),P.attr("disabled",""),L.attr("disabled",""),W.attr("disabled",""),l.attr("disabled",""),f.attr("disabled",""),n.attr("disabled",""),p.attr("disabled",""),m.attr("disabled",""),$(".wedding-notice").hide(),$(".stationery-picker").selectpicker("refresh"),$(".service-picker").selectpicker("refresh"))}),$(".service-picker").change(function(){var e="";e=null!==$(this).val()?$(this).val().toString().replace(/[^a-z0-9\s]/gi,""):"nothing","nothing"===e&&console.log("null service")});var N=$("#paypal-name"),Y=$(".paypal-btn"),E=$("#paypal-btn1"),H=$("#paypal-btn2"),R=$(".quantity-picker"),Z=$(".addon-picker");Z.prop("disabled",!0),Z.selectpicker("refresh"),R.prop("disabled",!0),R.selectpicker("refresh"),Y.click(function(e){$(this).hasClass("disabled")&&e.preventDefault()}),R.change(function(){var e=$(this).val();N.val().trim().length>=3&&(E.removeClass("disabled"),$(this).unbind("click"),Z.prop("disabled",!1),Z.selectpicker("refresh")),null===e&&(E.addClass("disabled"),H.addClass("disabled"),Z.prop("disabled",!0),Z.selectpicker("refresh"))}),N.on("input",function(){null===R.val()&&N.val().trim().length<3?(E.addClass("disabled"),H.addClass("disabled"),Z.prop("disabled",!0),Z.selectpicker("refresh")):null!==R.val()&&N.val().trim().length>=3?(E.removeClass("disabled"),$(this).unbind("click"),Z.prop("disabled",!1),Z.selectpicker("refresh")):(E.addClass("disabled"),H.addClass("disabled"))}),E.click(function(){E.hasClass("disabled")||(H.removeClass("disabled"),Z.prop("disabled",!1),Z.selectpicker("refresh"))}),$("#quantity-form").submit(function(e){(null===$(".event-picker").val()||null===$(".service-picker").val()||$(".service-picker").val().length<1||"null"===$(".service-picker").val())&&($("#required").after('<div class="alert alert-danger text-center"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Uh oh!</strong> Please make sure all available options of the Customizer are filled out before placing your order.</div>'),$("html, body").animate({scrollTop:$("#customizers").offset().top-50},1e3),e.preventDefault()),$("#paypal-name-hidden").val("Name: "+N.val()+"; Event: "+$(".event-picker").val()+"; Type: "+$(".service-picker").val()+"; Font: "+$(".font-picker").val()+"; Image: "+$(".stationery-picker").val()+"; Calligraphy: "+$(".calligraphy-picker").val()),console.log($("#paypal-name-hidden").val())})});