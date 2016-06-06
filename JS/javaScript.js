var condiction = false;
var arrayOfTasks = [];
var html = '<div class="taskCopy newTask">    <div class="col-md-12 ">        <span="inner-addon left-addon">            <span class="form-control responce">                <label class="checkBox"><input type="checkbox" value=""  class="checked"  onclick=handleClick()></label>';
var closeHtmlTags = '</span></span></div></div>';
var htmlFindTask = '<div class="taskCopy newTask">    <div class="col-md-12 ">        <span="inner-addon left-addon">            <span class="form-control responce">                <label class="checkBox"><input type="checkbox" value=""  class="checked"></label>';



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
                arrayOfTasks.push(userTask);
                var htmlTask = html + userTask.text + closeHtmlTags;
                $('.hide').after(htmlTask);
                $(".taskInput").val("");
            } else {
                alert("Task is to short");
            }
        }
    });

    $(".searchInput").keypress(function(e) {
        if (e.which == 13) {
            var searchValue = $(".searchInput").val();
            $(".compleatedTasks").attr("style", "visibility: hidden");
            let checkResult = arrayOfTasks.length;
            if (searchValue.length > 0) {
                for (var i = 0; i < arrayOfTasks.length; i++) {
                    let str = arrayOfTasks[i].text;
                    if (str.indexOf(searchValue) >= 0) {
                        let foundTask = htmlFindTask + arrayOfTasks[i].text + closeHtmlTags;
                        $(".tasksContent").attr("style", "visibility: hidden");
                        $('.searchTasksResult').append(foundTask);
                        $(".searchTasksResult").attr("style", "visibility: visible");
                        checkResult = +1;
                    } else if (checkResult - 1 == i) {
                        alert("Task not found");
                    }
                }
            } else {
                alert("You need type something in input");
            }
            $(".searchInput").val("");
        }
    });

    $('.btn-CompleatedTask').on('click', function() {
        let CompleatedTaskcondiction = false;
        if (condiction === false) {
            $(".compleatedTasks").attr("style", "visibility: visible");
            condiction = true;
        } else {
            condiction = false;
            $(".compleatedTasks").attr("style", "visibility: hidden");
        }
    });

});

var handleClick = function() {

    $('input[type=checkbox]').each(function() {
        var $button = $(this).closest('.taskCopy').clone();
        if (this.checked) {
            $(this).closest('.newTask').remove();
            $('.compleatedTasks').append($button);
        } else {
            $(this).closest('.newTask').remove();
            $('.hide').after($button);
        }
    });
};

var viewTask = function() {
    $(".searchTasksResult div").html(" ");
    $(".tasksContent").attr("style", "visibility: visibility");
}
