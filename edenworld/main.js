var colorSet = ["first", "second", "third"];
var transiRun = false;

$(document).ready(() => {
    var count = 0;
    $("#parallax").bind('mousewheel', (event) => {
        if(!transiRun) {
            transiRun = true;
            var increment = (event.originalEvent.wheelDelta /120 > 0) ? -1 : 1;
            count = count + increment;
            if(count == colorSet.length) {
                count = 0;
            } else if(count < 0) {
                count = colorSet.length - 1;
            }
            console.log("hep");
            $("#parallax").removeClass($("#parallax").attr('class'));
            $("#parallax").addClass(colorSet[count]);
            setTimeout(()=>{transiRun = false}, 1500);
        }
        
    });
});