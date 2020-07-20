var colorSet = ["first", "second", "third", "fourth"];
var transiRun = false;

$(document).ready(() => {
    var count = 0;
    $("#parallax").bind('mousewheel DOMMouseScroll', (event) => {
        if($( document ).width() >= 1333){
            var increment;
            if(!transiRun) {
                var prev = count;
                transiRun = true;
                if(event.originalEvent.type == "DOMMouseScroll") {
                    increment = (event.originalEvent.detail /3 > 0) ? 1 : -1;
                } else {
                    increment = (event.originalEvent.wheelDelta /120 > 0) ? -1 : 1;
                }
                count = count + increment;
                if(count == colorSet.length) {
                    count = 0;
                } else if(count < 0) {
                    count = colorSet.length - 1;
                }
                $("#parallax").removeClass($("#parallax").attr('class'));
                $("#parallax").addClass(colorSet[count]);
                $($(".section")[prev]).addClass("zoom-out");
                $($(".section")[prev]).fadeOut(1000, function(){
                    $($(".section")[count]).removeClass("zoom-out");
                    $($(".section")[count]).fadeIn(1000, function(){
                        transiRun = false;
                    })
                });
            }
        }
    });
    $(".addon").click(function(event){
        var increment;
        if(!transiRun) {
            var prev = count;
            transiRun = true;
            if($(this).attr('id') == "next") {
                increment = 1;
            } else {
                increment = -1;
            }
            count = count + increment;
            if(count == colorSet.length) {
                count = 0;
            } else if(count < 0) {
                count = colorSet.length - 1;
            }
            $("#parallax").removeClass($("#parallax").attr('class'));
            $("#parallax").addClass(colorSet[count]);
            $($(".section")[prev]).addClass("zoom-out");
            $($(".section")[prev]).fadeOut(1000, function(){
                $($(".section")[count]).removeClass("zoom-out");
                $($(".section")[count]).fadeIn(1000, function(){
                    transiRun = false;
                })
            });
        }
    });
});