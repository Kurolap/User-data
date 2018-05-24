var data = [
    {id: "1", first_name: "Sergey", second_name: "Akulov", gender: "male", age: 29, email: "akulov@mail.com"},
    {id: "2", first_name: "Ivan", second_name: "Petrov", gender: "male", age: 28, email: "petrov@mail.com"},
    {id: "3", first_name: "Elena", second_name: "Sidorova", gender: "female", age: 25, email: "sidorova@mail.com"},
];
$(document).ready(function() {

    $.ajax({
        url: "list/list.html",
        success: function(result) {
            $("#list").html(result);
            $.ajax({
                url: "form/form.html",
                success: function(result) {
                    $("#form").html(result);
                }
            });
        }
    });

});