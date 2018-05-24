$(document).ready(function() {
    render();
   function switchToForm() {
       $('#form').show();
       $('#list').hide();
       var newTxt = '';
       $("#fname").val(newTxt);
       $("#sname").val(newTxt);
       $("#email").val(newTxt);
       $("#pwd").val(newTxt);
       $("#gender").val(newTxt);
       $("#date").val(newTxt);
   }

    $('#add').click(function(event) {
        switchToForm();
    });

    $('.glyphicon-pencil').click(function(event) {
        switchToForm();
    });
});
