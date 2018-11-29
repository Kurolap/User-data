$(document).ready(function() {

    $('#cancel-btn').click(function(event) {
        event.preventDefault();
        $('#form').hide();
        $('#list').show();
    });

    $('#save-btn').click(function(event) {
        var strData = localStorage.getItem('data');
        var data = JSON.parse(strData) || [];
        event.preventDefault();
        var fname = $('#fname').val();
        var sname = $('#sname').val();
        var email = $('#email').val();
        var pwd = $('#pwd').val();
        var gender = $('#gender').val();
        var person_age = calculateAgeByBirthday();
        console.log(data.length)
        if (isEdit === true) {
            data[personId] = {
                id: personId,
                first_name: fname,
                second_name: sname,
                gender: gender,
                age: person_age,
                email: email,
                password: pwd
            };
        }
        else
        {
            var new_user = _.maxBy(data, function(person) { return person.id; });
            var new_user_id = new_user ? new_user.id + 1 : 1;
            console.log(new_user_id)

            var new_user = {
                id: new_user_id,
                first_name: fname,
                second_name: sname,
                gender: gender,
                age: person_age,
                email: email,
                password: pwd
            };
            data.push(new_user);
        }
        $('#form').hide();
        $('#list').show();
        var strData = JSON.stringify(data);
        console.log(strData)
        localStorage.setItem('data', strData);
        render();
    });

    function calculateAgeByBirthday(){
        var time = new Date();
        var birthDate = new Date($('#date').val());
        var diff = new Date(time - birthDate);
        var person_age = diff.getFullYear() - 1970;
        return person_age;
        console.log(diff);
    }
    
    
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
