var data = [
    {id: "0", first_name: "Sergey", second_name: "Akulov", gender: "male", birth_date: '1988-05-21', email: "akulov@mail.com",
        calculateAgeByBirth_date: function(){
            var currentdate = new Date(this.birth_date);
            var birthdate = new Date();
            var diff_age = new Date (birthdate - currentdate);
            var age1 = diff_age.getFullYear()- 1970;
            return age1;
        }
    },
    {id: "1", first_name: "Ivan", second_name: "Petrov", gender: "male", birth_date: '1986-10-12', email: "petrov@mail.com",
        calculateAgeByBirth_date: function(){
            var currentdate = new Date(this.birth_date);
            var birthdate = new Date();
            var diff_age = new Date (birthdate - currentdate);
            var age1 = diff_age.getFullYear()- 1970;
            return age1;
        }
    },
    {id: "2", first_name: "Elena", second_name: "Sidorova", gender: "female", birth_date: '1980-06-07', email: "sidorova@mail.com",
        calculateAgeByBirth_date: function(){
            var currentdate = new Date(this.birth_date);
            var birthdate = new Date();
            var diff_age = new Date (birthdate - currentdate);
            var age1 = diff_age.getFullYear()- 1970;
            return age1;
        }
    },
];
var isEdit = false;
var personId = null;

function render() {
    var content = "";
    _.each(data, function(person) {
        content += "<tr>" +
            "<td>"+person.id+"</td>" +
            "<td>"+person.first_name+"</td>" +
            "<td>"+person.second_name+"</td>" +
            "<td>"+person.gender+"</td>" +
            "<td>"+person.calculateAgeByBirth_date()+"</td>" +
            "<td>"+person.email+"</td>" +
            "<td><span title='edit' class='glyphicon glyphicon-pencil' id='"+person.id+"' ></span></td>" +
            "<td><span title='delete' class='glyphicon glyphicon-trash' id='"+person.id+"'></span></td></td>" +
            "</tr>";
    });
    $('#content').html(content);
    createFunctionRemove();
}

function createFunctionRemove() {
    $('.glyphicon-trash').click(function(event) {
        var id = event.target.id;
        var id_conf = confirm("Are you sure to remove this user from the list?");
        if (id_conf == true) {
            data = _.filter(data, function(person) {
                return person.id !== id;
            });
            render();
        }
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