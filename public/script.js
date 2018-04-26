$(document).ready(function() {
 
 $.ajax({
  url: "list/list.html", 
  success: function(result){
   $("#list").html(result);
  }
 });
 
});