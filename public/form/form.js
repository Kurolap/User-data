$(document).ready(function() {

    $('#cancel-btn').click(function(event) {
        event.preventDefault();
        $('#form').hide();
        $('#list').show();
    });

    $('#save-btn').click(function(event) {
        event.preventDefault();
        var fname = $("#fname").val();
        var sname = $("#sname").val();
        var email = $("#email").val();
        var pwd = $("#pwd").val();
        var gender = $("#gender").val();
        var person_age = calculateAgeByBirthday();
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
            var new_user_id = data.length;

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

   // $("#fname").change(function(){alert("Содержимое тестового поля с именем было изменено.")});
    //$("#sname").change(function(){alert("Содержимое тестового поля с фамилией было изменено.")});
    //$("#pwd").change(function(){alert("Содержимое тестового поля с паролем было изменено.")});
    //$("#email").change(function(){alert("Содержимое тестового поля с почтой было изменено.")});
   // $("#gender").change(function(){alert("Содержимое тестового поля с полом было изменено.")});
   // $("#date").change(function(){alert("Содержимое тестового поля с датой было изменено.")});

});
