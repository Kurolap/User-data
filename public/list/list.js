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
        isEdit = false;
    });

    $('.glyphicon-pencil').click(function(event) {
        switchtoEdit();
        isEdit = true;
        personId = event.target.attributes.id.value;
        console.log(personId);
        $("#fname").val(data[personId].first_name);
        $("#sname").val(data[personId].second_name);
        $("#email").val(data[personId].email);
        $("#pwd").val('newTxtmm');
        $("#gender").val(data[personId].gender);
        $("#date").val('newTxt');
    });
});
