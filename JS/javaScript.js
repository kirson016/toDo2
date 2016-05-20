var condiction = false;

var html = '<div class="newTask">    <div class="col-md-12 ">        <span="inner-addon left-addon">            <span class="form-control responce">                <label class="checkBox"><input type="checkbox" value=""  class="checked"  onclick=handleClick()></label>';
var closeHtmlTags = '</span></span></div></div>';



$(document).ready(function() {

    class Task {
        constructor(text) {
            this.text = text;
        }
    }

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

    $(".taskInput").keypress(function(e) {
        if (e.which == 13) {
            var value = $(".taskInput").val();
            if (value.length > 0) {
                var userTask = new Task(value);
                var htmlTask = html + userTask.text + closeHtmlTags;
                $('.hide').after(htmlTask);
            } else {
                alert("Task is to short");
            }
        }
    });
});

var handleClick = function() {

    $('input[type=checkbox]').each(function() {
     var $button =  $(this).closest('.newTask').clone();
        if (this.checked) {
          $(this).closest('.newTask').remove();
          alert($button);
            $('.hide').after($button);
        }
    });
}
