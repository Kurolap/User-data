$(document).ready(function() {
    var data = [
        {id: "1", first_name: "Sergey", second_name: "Akulov", gender: "male", age: 29, email: "akulov@mail.com"},
        {id: "2", first_name: "Ivan", second_name: "Petrov", gender: "male", age: 28, email: "petrov@mail.com"},
        {id: "3", first_name: "Elena", second_name: "Sidorova", gender: "female", age: 25, email: "sidorova@mail.com"},
    ];
    var content = "";
    _.each(data, function(person){
        content += "<tr>" +
            "<td>"+person.id+"</td>" +
            "<td>"+person.first_name+"</td>" +
            "<td>"+person.second_name+"</td>" +
            "<td>"+person.gender+"</td>" +
            "<td>"+person.age+"</td>" +
            "<td>"+person.email+"</td>" +
            "<td><span title='edit' class='glyphicon glyphicon-pencil'></span></td>" +
            "<td><span title='delete' class='glyphicon glyphicon-trash'></span></td></td>" +
            "</tr>";
    });
    $('#content').html(content);
});
