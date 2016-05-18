var condiction = false;

$(document).ready(function() {
    $('#btn-HideMenu').on('click', function() {
        if (condiction === false) {
            condiction = true;
            $("#hideLeftMenu").css("visibility", "hidden");
            $("#leftMenu").css("width", "31px");
            $(".topMenu").css("padding-left", "0px");
            $(".search").css("width", "46px");
            $(".newTask").css("margin-left", "30px");
        } else {
            condiction = false;
            $("#hideLeftMenu").css("visibility", "visible");
            $("#leftMenu").css("width", "300px");
            $(".topMenu").css("padding-left", "250px");
            $(".search").css("width", "315px");
            $(".newTask").css("margin-left", "300px");
        }
    });
});
