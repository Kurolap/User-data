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

    function currentForm() {
        $('#form').show();
        $('#list').hide();
   }

    $('#add').click(function(event) {
        switchToForm();
    });

    $('.glyphicon-pencil').click(function(event) {
        currentForm();
        $("#fname").val(data[2].first_name);
        $("#sname").val(data[0].second_name);
        $("#email").val(data[0].email);
        $("#pwd").val('newTxtmm');
        $("#gender").val(data[0].gender);
        $("#date").val('newTxt');
    });
});
