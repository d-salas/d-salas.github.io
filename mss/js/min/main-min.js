$(document).ready(function(){function e(){var e=s.offset().top,t=s.offset().left;d.css("top",e),d.css("left",t-35)}$('a[href^="#"]').on("click",function(e){var t=$($(this).attr("href"));t.length&&(e.preventDefault(),$("html, body").animate({scrollTop:t.offset().top-50},1e3))});var t=$("#mss-nav"),a=$("#mss-hero"),i=$(".navbar-brand");$(this).scrollTop()>10&&(t.addClass("affix"),t.removeClass("affix-top")),$(this).scrollTop()>a.outerHeight()&&i.addClass("visible-logo"),$(window).scroll(function(){$(this).scrollTop()>10?(t.addClass("affix"),t.removeClass("affix-top")):(t.addClass("affix-top"),t.removeClass("affix")),$(this).scrollTop()>a.outerHeight()-33?i.addClass("visible-logo"):i.removeClass("visible-logo")}),$("#down-icon").click(function(){$("#menu-icon").toggleClass("down")});var d=$("#typed"),s=$("#mss-logo-top>img");e(),$(window).resize(e),$("#typed").typed({strings:["\n    Thank You!","So glad you \ncould make it...","I was thrilled to \nbe able to celebrate...","\nMerci, Grazie, Xiè xie!","\n      It's a Boy!","We are thrilled to\nannounce..."],typeSpeed:50,backDelay:500,loop:!0,contentType:"html",loopCount:!1}),$(".selectpicker").selectpicker({hideDisabled:"true"}),$(".font-picker").change(function(){$("#sample-letter>p").css("font-family",$(this).val())});var r=$("#stationery-img"),o=$("#loading-icon");$(".stationery-picker").change(function(){var e=$(this).val();"Alphabet Letter"===e&&(r.fadeOut(),o.css("display","block"),window.setTimeout(function(){r.attr("src","./img/cards/alphabet-letter.png")},500),window.setTimeout(function(){r.fadeIn(),o.fadeOut()},800)),"Ampersand"===e&&(r.fadeOut(),o.css("display","block"),window.setTimeout(function(){r.attr("src","./img/cards/ampersand.png")},500),window.setTimeout(function(){r.fadeIn(),o.fadeOut()},800)),"Ballerina Mouse"===e&&(r.fadeOut(),o.css("display","block"),window.setTimeout(function(){r.attr("src","./img/cards/ballerina-mouse.png")},500),window.setTimeout(function(){r.fadeIn(),o.fadeOut()},800)),"Beauty (Chinese characters)"===e&&(r.fadeOut(),o.css("display","block"),window.setTimeout(function(){r.attr("src","./img/cards/chinese-beauty.png")},500),window.setTimeout(function(){r.fadeIn(),o.fadeOut()},800)),"Bicycle"===e&&(r.fadeOut(10),o.css("display","block"),window.setTimeout(function(){r.attr("src","./img/cards/bicycle.png")},500),window.setTimeout(function(){r.fadeIn(),o.fadeOut()},800)),"Books"===e&&(r.fadeOut(),o.css("display","block"),window.setTimeout(function(){r.attr("src","./img/cards/books.png")},500),window.setTimeout(function(){r.fadeIn(),o.fadeOut()},800)),"Bowtie"===e&&(r.fadeOut(),o.css("display","block"),window.setTimeout(function(){r.attr("src","./img/cards/bowtie.png")},500),window.setTimeout(function(){r.fadeIn(),o.fadeOut()},800)),"Dress"===e&&(r.fadeOut(),o.css("display","block"),window.setTimeout(function(){r.attr("src","./img/cards/dress.png")},500),window.setTimeout(function(){r.fadeIn(),o.fadeOut()},800)),"Frog"===e&&(r.fadeOut(),o.css("display","block"),window.setTimeout(function(){r.attr("src","./img/cards/frog.png")},500),window.setTimeout(function(){r.fadeIn(),o.fadeOut()},800)),"Gold Mouse"===e&&(r.fadeOut(),o.css("display","block"),window.setTimeout(function(){r.attr("src","./img/cards/mouse.png")},500),window.setTimeout(function(){r.fadeIn(),o.fadeOut()},800)),"Lion"===e&&(r.fadeOut(),o.css("display","block"),window.setTimeout(function(){r.attr("src","./img/cards/lion.png")},500),window.setTimeout(function(){r.fadeIn(),o.fadeOut()},800)),"Mermaid"===e&&(r.fadeOut(),o.css("display","block"),window.setTimeout(function(){r.attr("src","./img/cards/mermaid.png")},500),window.setTimeout(function(){r.fadeIn(),o.fadeOut()},800)),"Nest"===e&&(r.fadeOut(),o.css("display","block"),window.setTimeout(function(){r.attr("src","./img/cards/nest.png")},500),window.setTimeout(function(){r.fadeIn(),o.fadeOut()},800)),"Pocketwatch"===e&&(r.fadeOut(),o.css("display","block"),window.setTimeout(function(){r.attr("src","./img/cards/pocketwatch.png")},500),window.setTimeout(function(){r.fadeIn(),o.fadeOut()},800)),"Roadster"===e&&(r.fadeOut(),o.css("display","block"),window.setTimeout(function(){r.attr("src","./img/cards/roadster.png")},500),window.setTimeout(function(){r.fadeIn(),o.fadeOut()},800)),"Sailboat"===e&&(r.fadeOut(),o.css("display","block"),window.setTimeout(function(){r.attr("src","./img/cards/sailboat.png")},500),window.setTimeout(function(){r.fadeIn(),o.fadeOut()},800)),"Savannah Tree"===e&&(r.fadeOut(),o.css("display","block"),window.setTimeout(function(){r.attr("src","./img/cards/savannahtree.png")},500),window.setTimeout(function(){r.fadeIn(),o.fadeOut()},800)),"Skyline"===e&&(r.fadeOut(),o.css("display","block"),window.setTimeout(function(){r.attr("src","./img/cards/skyline.png")},500),window.setTimeout(function(){r.fadeIn(),o.fadeOut()},800)),"Tent"===e&&(r.fadeOut(),o.css("display","block"),window.setTimeout(function(){r.attr("src","./img/cards/tent.png")},500),window.setTimeout(function(){r.fadeIn(),o.fadeOut()},800)),"Turtle"===e&&(r.fadeOut(),o.css("display","block"),window.setTimeout(function(){r.attr("src","./img/cards/turtle.png")},500),window.setTimeout(function(){r.fadeIn(),o.fadeOut()},800)),"Wreath"===e&&(r.fadeOut(),o.css("display","block"),window.setTimeout(function(){r.attr("src","./img/cards/wreath.png")},500),window.setTimeout(function(){r.fadeIn(),o.fadeOut()},800)),"Yoga Pose"===e&&(r.fadeOut(),o.css("display","block"),window.setTimeout(function(){r.attr("src","./img/cards/yogapose.png")},500),window.setTimeout(function(){r.fadeIn(),o.fadeOut()},800)),"Zebra"===e&&(r.fadeOut(),o.css("display","block"),window.setTimeout(function(){r.attr("src","./img/cards/zebra.png")},500),window.setTimeout(function(){r.fadeIn(),o.fadeOut()},800))});var l=$("option:contains(Celebration invitation)"),n=$("option:contains(Shower invitation)"),c=$("option:contains(Acknowledgement)"),b=$("option:contains(Announcement)"),p=$("option:contains(Save the date)"),m=$("option:contains(Gift acknowledgement)"),f=$("option:contains(Invitation)"),u=$("option:contains(Alphabet Letter)"),v=$("option:contains(Ampersand)"),k=$("option:contains(Ballerina Mouse)"),w=$("option:contains(Chinese)"),y=$("option:contains(Bicycle)"),h=$("option:contains(Books)"),g=$("option:contains(Bowtie)"),A=$("option:contains(Dress)"),T=$("option:contains(Frog)"),O=$("option:contains(Gold Mouse)"),I=$("option:contains(Lion)"),C=$("option:contains(Mermaid)"),x=$("option:contains(Nest)"),B=$("option:contains(Pocketwatch)"),S=$("option:contains(Roadster)"),M=$("option:contains(Sailboat)"),z=$("option:contains(Savannah Tree)"),D=$("option:contains(Skyline)"),N=$("option:contains(Tent)"),P=$("option:contains(Turtle)"),G=$("option:contains(Wreath)"),q=$("option:contains(Yoga Pose)"),F=$("option:contains(Zebra)"),L=$("option:contains(No image)"),W=$(".card-images");L.attr("disabled",""),$(".service-picker").prop("disabled",!0),$(".stationery-picker").prop("disabled",!0),$(".calligraphy-picker").prop("disabled",!0),$(".service-picker").selectpicker("refresh"),$(".stationery-picker").selectpicker("refresh"),$(".calligraphy-picker").selectpicker("refresh"),$(".event-picker").change(function(){$(".service-picker").prop("disabled",!1),Z.prop("disabled",!1),Z.selectpicker("refresh");var e=$(this).val();null!==e?$("#hide-on-select").css("display","none"):($("#hide-on-select").css("display","inline"),e="nothing"),e.indexOf("Baby")>=0&&($(".stationery-picker").prop("disabled",!1),n.removeAttr("disabled"),b.removeAttr("disabled"),m.removeAttr("disabled"),r.css("display","block"),W.css("display","block"),k.removeAttr("disabled"),N.removeAttr("disabled"),T.removeAttr("disabled"),I.removeAttr("disabled"),C.removeAttr("disabled"),O.removeAttr("disabled"),u.removeAttr("disabled"),P.removeAttr("disabled"),F.removeAttr("disabled"),v.attr("disabled",""),w.attr("disabled",""),y.attr("disabled",""),h.attr("disabled",""),g.attr("disabled",""),A.attr("disabled",""),x.attr("disabled",""),B.attr("disabled",""),S.attr("disabled",""),M.attr("disabled",""),z.attr("disabled",""),D.attr("disabled",""),G.attr("disabled",""),q.attr("disabled",""),L.attr("disabled",""),l.attr("disabled",""),c.attr("disabled",""),p.attr("disabled",""),f.attr("disabled",""),$(".wedding-notice").hide(),$(".stationery-picker").selectpicker("refresh"),$(".service-picker").selectpicker("refresh")),e.indexOf("Engagement")>=0&&($(".stationery-picker").prop("disabled",!1),b.removeAttr("disabled"),l.removeAttr("disabled"),m.removeAttr("disabled"),r.css("display","block"),W.css("display","block"),v.removeAttr("disabled"),w.removeAttr("disabled"),D.removeAttr("disabled"),u.removeAttr("disabled"),x.removeAttr("disabled"),G.removeAttr("disabled"),S.removeAttr("disabled"),k.attr("disabled",""),y.attr("disabled",""),h.attr("disabled",""),g.attr("disabled",""),A.attr("disabled",""),T.attr("disabled",""),O.attr("disabled",""),I.attr("disabled",""),C.attr("disabled",""),B.attr("disabled",""),M.attr("disabled",""),z.attr("disabled",""),N.attr("disabled",""),P.attr("disabled",""),q.attr("disabled",""),F.attr("disabled",""),L.attr("disabled",""),n.attr("disabled",""),c.attr("disabled",""),f.attr("disabled",""),p.attr("disabled",""),$(".wedding-notice").hide(),$(".stationery-picker").selectpicker("refresh"),$(".service-picker").selectpicker("refresh")),e.indexOf("Wedding")>=0&&(b.removeAttr("disabled"),p.removeAttr("disabled"),f.removeAttr("disabled"),m.removeAttr("disabled"),$(".wedding-notice").show(),L.removeAttr("disabled"),$(".stationery-picker").val("No image"),$(".stationery-picker").prop("disabled",!0),l.attr("disabled",""),n.attr("disabled",""),c.attr("disabled",""),r.css("display","none"),W.css("display","none"),$(".stationery-picker").selectpicker("refresh"),$(".service-picker").selectpicker("refresh")),e.indexOf("Bar/Bat Mitzvah")>=0&&($(".stationery-picker").prop("disabled",!1),b.removeAttr("disabled"),l.removeAttr("disabled"),m.removeAttr("disabled"),f.removeAttr("disabled"),r.css("display","block"),W.css("display","block"),g.removeAttr("disabled"),D.removeAttr("disabled"),h.removeAttr("disabled"),u.removeAttr("disabled"),w.removeAttr("disabled"),A.removeAttr("disabled"),q.removeAttr("disabled"),v.attr("disabled",""),k.attr("disabled",""),y.attr("disabled",""),T.attr("disabled",""),O.attr("disabled",""),I.attr("disabled",""),C.attr("disabled",""),x.attr("disabled",""),B.attr("disabled",""),S.attr("disabled",""),M.attr("disabled",""),z.attr("disabled",""),N.attr("disabled",""),P.attr("disabled",""),G.attr("disabled",""),F.attr("disabled",""),L.attr("disabled",""),n.attr("disabled",""),c.attr("disabled",""),p.attr("disabled",""),$(".wedding-notice").hide(),$(".stationery-picker").selectpicker("refresh"),$(".service-picker").selectpicker("refresh")),e.indexOf("Birthday")>=0&&($(".stationery-picker").prop("disabled",!1),b.removeAttr("disabled"),l.removeAttr("disabled"),m.removeAttr("disabled"),f.removeAttr("disabled"),r.css("display","block"),W.css("display","block"),k.removeAttr("disabled"),N.removeAttr("disabled"),T.removeAttr("disabled"),I.removeAttr("disabled"),C.removeAttr("disabled"),O.removeAttr("disabled"),u.removeAttr("disabled"),P.removeAttr("disabled"),F.removeAttr("disabled"),w.removeAttr("disabled"),x.removeAttr("disabled"),D.removeAttr("disabled"),G.removeAttr("disabled"),z.removeAttr("disabled"),g.removeAttr("disabled"),h.removeAttr("disabled"),B.removeAttr("disabled"),M.removeAttr("disabled"),A.removeAttr("disabled"),C.removeAttr("disabled"),q.removeAttr("disabled"),y.removeAttr("disabled"),v.attr("disabled",""),S.attr("disabled",""),L.attr("disabled",""),n.attr("disabled",""),c.attr("disabled",""),p.attr("disabled",""),$(".wedding-notice").hide(),$(".stationery-picker").selectpicker("refresh"),$(".service-picker").selectpicker("refresh")),e.indexOf("Bridal")>=0&&($(".stationery-picker").prop("disabled",!1),f.removeAttr("disabled"),m.removeAttr("disabled"),r.css("display","block"),W.css("display","block"),w.removeAttr("disabled"),x.removeAttr("disabled"),D.removeAttr("disabled"),G.removeAttr("disabled"),u.removeAttr("disabled"),v.removeAttr("disabled"),k.attr("disabled",""),y.attr("disabled",""),h.attr("disabled",""),g.attr("disabled",""),A.attr("disabled",""),T.attr("disabled",""),O.attr("disabled",""),I.attr("disabled",""),C.attr("disabled",""),B.attr("disabled",""),S.attr("disabled",""),M.attr("disabled",""),z.attr("disabled",""),N.attr("disabled",""),P.attr("disabled",""),q.attr("disabled",""),F.attr("disabled",""),L.attr("disabled",""),n.attr("disabled",""),c.attr("disabled",""),b.attr("disabled",""),p.attr("disabled",""),l.attr("disabled",""),$(".wedding-notice").hide(),$(".stationery-picker").selectpicker("refresh"),$(".service-picker").selectpicker("refresh")),e.indexOf("Graduation")>=0&&($(".stationery-picker").prop("disabled",!1),b.removeAttr("disabled"),l.removeAttr("disabled"),m.removeAttr("disabled"),r.css("display","block"),W.css("display","block"),w.removeAttr("disabled"),D.removeAttr("disabled"),A.removeAttr("disabled"),u.removeAttr("disabled"),q.removeAttr("disabled"),g.removeAttr("disabled"),D.removeAttr("disabled"),h.removeAttr("disabled"),B.removeAttr("disabled"),S.removeAttr("disabled"),v.attr("disabled",""),k.attr("disabled",""),y.attr("disabled",""),T.attr("disabled",""),O.attr("disabled",""),I.attr("disabled",""),C.attr("disabled",""),x.attr("disabled",""),M.attr("disabled",""),z.attr("disabled",""),N.attr("disabled",""),P.attr("disabled",""),G.attr("disabled",""),F.attr("disabled",""),L.attr("disabled",""),n.attr("disabled",""),c.attr("disabled",""),p.attr("disabled",""),f.attr("disabled",""),$(".wedding-notice").hide(),$(".stationery-picker").selectpicker("refresh"),$(".service-picker").selectpicker("refresh")),e.indexOf("Memorial")>=0&&($(".stationery-picker").prop("disabled",!1),b.removeAttr("disabled"),c.removeAttr("disabled"),r.css("display","block"),W.css("display","block"),w.removeAttr("disabled"),x.removeAttr("disabled"),I.removeAttr("disabled"),F.removeAttr("disabled"),D.removeAttr("disabled"),u.removeAttr("disabled"),S.removeAttr("disabled"),v.attr("disabled",""),k.attr("disabled",""),y.attr("disabled",""),h.attr("disabled",""),g.attr("disabled",""),A.attr("disabled",""),T.attr("disabled",""),O.attr("disabled",""),C.attr("disabled",""),B.attr("disabled",""),M.attr("disabled",""),z.attr("disabled",""),N.attr("disabled",""),P.attr("disabled",""),G.attr("disabled",""),q.attr("disabled",""),L.attr("disabled",""),n.attr("disabled",""),m.attr("disabled",""),l.attr("disabled",""),p.attr("disabled",""),f.attr("disabled",""),$(".wedding-notice").hide(),$(".stationery-picker").selectpicker("refresh"),$(".service-picker").selectpicker("refresh"))}),$(".service-picker").change(function(){var e="";e=null!==$(this).val()?$(this).val().toString().replace(/[^a-z0-9\s]/gi,""):"nothing"});var Y=$("#paypal-name"),E=$(".paypal-btn"),H=$("#paypal-btn1"),R=$("#paypal-btn2"),Z=$(".quantity-picker"),j=$(".addon-picker");j.prop("disabled",!0),j.selectpicker("refresh"),Z.prop("disabled",!0),Z.selectpicker("refresh"),E.click(function(e){$(this).hasClass("disabled")&&e.preventDefault()}),Z.change(function(){var e=$(this).val();Y.val().trim().length>=3&&(H.removeClass("disabled"),$(this).unbind("click"),j.prop("disabled",!1),j.selectpicker("refresh")),null===e&&(H.addClass("disabled"),R.addClass("disabled"),j.prop("disabled",!0),j.selectpicker("refresh"))}),Y.on("input",function(){null===Z.val()&&Y.val().trim().length<3?(H.addClass("disabled"),R.addClass("disabled"),j.prop("disabled",!0),j.selectpicker("refresh")):null!==Z.val()&&Y.val().trim().length>=3?(H.removeClass("disabled"),$(this).unbind("click"),j.prop("disabled",!1),j.selectpicker("refresh")):(H.addClass("disabled"),R.addClass("disabled"))}),H.click(function(){H.hasClass("disabled")||(R.removeClass("disabled"),j.prop("disabled",!1),j.selectpicker("refresh"))}),$("#quantity-form").submit(function(e){if(null===$(".event-picker").val()||null===$(".service-picker").val()||$(".service-picker").val().length<1||"null"===$(".service-picker").val()||null===$(".stationery-picker").val())$(".alert").alert("close"),$("#required").after('<div class="alert alert-danger text-center"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Uh oh!</strong> Please make sure all available options of the Customizer are filled out before placing your order.</div>'),$("html, body").animate({scrollTop:$("#customizers").offset().top-50},1e3),e.preventDefault();else{$(".alert").alert("close"),$("#quantity-form").after('<div class="alert alert-success text-center"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><strong>Huzzah!</strong> You have placed your order with PayPal. Now you\'re ready to email us your contact form so we can begin assembling your correspondence.</div>');var t="Order Details:<br>Name: "+Y.val()+";<br>Event: "+$(".event-picker").val()+";<br>Type: "+$(".service-picker").val()+";<br>Font: "+$(".font-picker").val()+";<br>Image: "+$(".stationery-picker").val(),a=Y.val()+"'s Modern Social Secretary contact form",i="Attached is my contact form for Modern Social Secretary. I look forward to previewing my cards!<br><br>"+t;window.setTimeout(function(){window.location="mailto:info@modernsocialsecretary.com?subject="+a+"&body="+i},2e3)}$("#paypal-name-hidden").val("Name: "+Y.val()+"; Event: "+$(".event-picker").val()+"; Type: "+$(".service-picker").val()+"; Font: "+$(".font-picker").val()+"; Image: "+$(".stationery-picker").val()),console.log($("#paypal-name-hidden").val())})});