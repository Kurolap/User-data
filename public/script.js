var data = [
    {id: 0, first_name: "Sergey", second_name: "Akulov", gender: "male", birth_date: '1988-05-21', email: "akulov@mail.com",
        age: calculateAgeByBirth_date('1988-05-21')
    },
    {id: 1, first_name: "Ivan", second_name: "Petrov", gender: "male", birth_date: '1985-10-28', email: "petrov@mail.com",
        age: calculateAgeByBirth_date('1985-10-28')
    },
    {id: 2, first_name: "Elena", second_name: "Sidorova", gender: "female", birth_date: '1976-08-08', email: "sidorova@mail.com",
        age: calculateAgeByBirth_date('1976-08-08')
    },
];
var isEdit = false;
var personId = null;

function calculateAgeByBirth_date(birth_date){
    var birthDate = new Date(birth_date);
    var currentDate = new Date();
    var diff_age = new Date(currentDate - birthDate);
    var persn_age = diff_age.getFullYear()- 1970;
    return persn_age;
}

function render() {
    var content = "";
    _.each(data, function(person) {
        content += "<tr>" +
            "<td>"+person.id+"</td>" +
            "<td>"+person.first_name+"</td>" +
            "<td>"+person.second_name+"</td>" +
            "<td>"+person.gender+"</td>" +
            "<td>"+person.age+"</td>" +
            "<td>"+person.email+"</td>" +
            "<td><span title='edit' class='glyphicon glyphicon-pencil' id='"+person.id+"' ></span></td>" +
            "<td><span title='delete' class='glyphicon glyphicon-trash' id='"+person.id+"'></span></td></td>" +
            "</tr>";
    });
    $('#content').html(content);
    createFunctionRemove();
    createFunctionEdit();
}

function createFunctionRemove() {
    $('.glyphicon-trash').click(function(event) {
        var id = parseInt(event.target.id);
        var id_conf = confirm("Are you sure to remove this user from the list?");
        if (id_conf == true) {
            data = _.filter(data, function(person) {
                return person.id !== id;
            });
            render();
        }
    });
}

function switchtoEdit() {
    $('#form').show();
    $('#list').hide();
}

function createFunctionEdit(){
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
}

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

