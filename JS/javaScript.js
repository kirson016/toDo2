var condiction = false;

var html = '<div class="newTask">    <div class="col-md-12 ">        <span="inner-addon left-addon">            <span class="form-control responce">                <label class="checkBox"><input type="checkbox" value=""></label>';
var closeHtmlTags = '</span></span></div></div>';

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


    $(function() {
        var $button = $('.button').clone();
        $('.package').html($button);
    });


    $(".btn-CompleatedTask").click(function() {
        var value = $(".taskInput").val();
        var userTask = new Task(value);
        var htmlTask = html + userTask.text + closeHtmlTags;
        $('.asd').after(htmlTask);
    });


    class Task {
        constructor(text) {
            this.text = text;
            var code = $("");

        }
    }




});
