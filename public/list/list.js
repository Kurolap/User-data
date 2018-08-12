$(document).ready(function() {
   render();
   function switchToAdd() {
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

    function switchtoEdit() {
        $('#form').show();
        $('#list').hide();
   }

    $('#add').click(function(event) {
        switchToAdd();
    });

    $('.glyphicon-pencil').click(function(event) {
        switchtoEdit();
        var id = event.target.attributes.id.value;
        console.log(event);
        $("#fname").val(data[id].first_name);
        $("#sname").val(data[id].second_name);
        $("#email").val(data[id].email);
        $("#pwd").val('newTxtmm');
        $("#gender").val(data[id].gender);
        $("#date").val('newTxt');
    });
});
