$(document).ready(function() {
 $.ajax({
  url: "list/list.html", 
  success: function(result){
   $("#list").html(result);
  }
 });
    $.ajax({
        url: "form/form.html",
        success: function(result){
            $("#form").html(result);
        }
    });
});