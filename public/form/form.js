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
        new_user = {}
    });
});
