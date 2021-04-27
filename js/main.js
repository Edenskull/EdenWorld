$(document).ready(function() {
    var spy = sessionStorage.getItem('spy');
    if(spy == undefined){
        sessionStorage.setItem('spy', "about");
        spy = sessionStorage.getItem('spy');
    }
    changePage(spy);
    $(".nav-link").click(function(){
        changePage($(this).attr("href").substring(1));
    })
});

function changePage(href){
    sessionStorage.setItem('spy', href);
    switch(href){
        case "about":
            $(".active").removeClass("active");
            $("#page-manager").load("view/about.html");
            $($("#navigation").children()[0]).addClass("active");
            break;
        case "competences":
            $(".active").removeClass("active");
            $("#page-manager").load("view/competences.html");
            $($("#navigation").children()[1]).addClass("active");
            break;
        case "contact":
            $(".active").removeClass("active");
            $("#page-manager").load("view/contact.html");
            $($("#navigation").children()[2]).addClass("active");
            break;
    }
}