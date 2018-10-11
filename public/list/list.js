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

    $('#add').click(function(event) {
        switchToAdd();
        isEdit = false;
        $("#save-btn").prop('disabled', true);
        $('#email').val('');
        $('#pwd').val('');
    });

    $('#search_btn').click(function(event) {
        var search = $('#search').val();
        if (!search) {
            filteredData = _.clone(data);
        } else {
            filteredData = data.filter(function (item) {
                return item.id.toString().indexOf(search) != -1 || item.first_name.indexOf(search) != -1 || item.second_name.indexOf(search) != -1 || item.email.indexOf(search) != -1 ||
                item.gender.indexOf(search) != -1 || item.age.toString().indexOf(search) != -1;
            });
        }
        render();
    });
});
