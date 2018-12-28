$(document).ready(function() {

$('#cancel-btn').click(function(event) {
    event.preventDefault();
    $('#form').hide();
    $('#list').show();
});

$('#save-btn').click(function(event) {

    function calculateAgeByBirthday(){
    var time = new Date();
    var birthDate = new Date($('#date').val());
    var diff = new Date(time - birthDate);
    var person_age = diff.getFullYear() - 1970;
    return [person_age, birthDate];
    }
    var calculateAgeByBirthday = calculateAgeByBirthday();

    var strData = localStorage.getItem('data');
    var data = JSON.parse(strData) || [];
    event.preventDefault();
    var fname = $('#fname').val();
    var sname = $('#sname').val();
    var email = $('#email').val();
    var pwd = $('#pwd').val();
    var gender = $('#gender').val();

    var person_age = calculateAgeByBirthday[0];

    var get_date = calculateAgeByBirthday[1].getDate();
    var get_month = calculateAgeByBirthday[1].getMonth() + 1;
    var curr_year = calculateAgeByBirthday[1].getFullYear();

    if (get_month <= 9) {
        var curr_month = "0" + get_month;
    }
    else {
        var curr_month = get_month;
    }

    if (get_date <= 9) {
        var curr_date = "0" + get_date;
    }
    else {
        var curr_date = get_date;
    }

    var format_date = curr_year + "-" + curr_month + "-" + curr_date + "";

    if (isEdit === true) {
        var index = _.findIndex(data, function(person) {
            return person.id === personId;
        });
        data[index] = {
            id: personId,
            first_name: fname,
            second_name: sname,
            gender: gender,
            age: person_age,
            email: email,
            password: pwd,
            birth_date: format_date
        };
    }
    else
    {
        var new_user = _.maxBy(data, function(person) { return person.id; });
        var new_user_id = new_user ? new_user.id + 1 : 1;

        var new_user = {
            id: new_user_id,
            first_name: fname,
            second_name: sname,
            gender: gender,
            age: person_age,
            email: email,
            password: pwd,
            birth_date: format_date
        };
        data.push(new_user);
    }
    $('#form').hide();
    $('#list').show();
    var strData = JSON.stringify(data);
    localStorage.setItem('data', strData);
    render();
});

$('.form-control').change(function() {

    var errorMsg = '';

    if (!$('#sname').val()) {
        errorMsg += ' Surname is empty. ';
    }
    if (!$('#fname').val()) {
        errorMsg += ' First name is empty. ';
    }
    if (!$('#email').val()) {
        errorMsg += ' Email is empty. ';
    }
    if (!$('#pwd').val()) {
        errorMsg += ' Password is empty. ';
    }
    if (!$('#gender').val()) {
        errorMsg += ' Gender is empty. ';
    }
    if (!$('#date').val()) {
        errorMsg += ' Birth date is empty. ';
    }
    $('#error_msg').text(errorMsg);
    if (errorMsg) {
        $('#save-btn').prop('disabled', true);
    }
    else {
        $('#save-btn').prop('disabled', false);
    }
});

});
