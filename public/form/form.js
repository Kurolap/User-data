$(document).ready(function() {
    $('#cancel-btn').click(function(event) {
        $('#form').hide();
        $('#list').show();
    });

    $('#save-btn').click(function(event) {
        var fname = $("#fname").val();
        var sname = $("#sname").val();
        var email = $("#email").val();
        var pwd = $("#pwd").val();
        var gender = $("#gender").val();
        var date = $("#date").val();
        var age = $("date").val();
        var new_user = {
            id: "4",
            first_name: "fname",
            second_name: "sname",
            gender: "gender",
            age: 29,
            email: "akulov@mail.com",
            password:"pwd"
        };
        data.push(new_user);
        $('#form').hide();
        $('#list').show();
       console.log(data);
       alert('123');
        render();
    });
});
