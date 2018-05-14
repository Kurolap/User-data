$(document).ready(function() {
    var data = [
        {id: "1", first_name: "Sergey", second_name: "Akulov", gender: "male", age: 29, email: "akulov@mail.com"},
        {id: "2", first_name: "Ivan", second_name: "Petrov", gender: "male", age: 28, email: "petrov@mail.com"},
        {id: "3", first_name: "Elena", second_name: "Sidorova", gender: "female", age: 25, email: "sidorova@mail.com"},
    ];

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
                "<td><span title='edit' class='glyphicon glyphicon-pencil'></span></td>" +
                "<td><span title='delete' class='glyphicon glyphicon-trash' id='"+person.id+"'></span></td></td>" +
                "</tr>";
        });
        $('#content').html(content);
        createFunctionRemove();
    }
    render();

    function createFunctionRemove() {
        $(".glyphicon-trash").click(function(event) {
            var id = event.target.id;
            var id_conf = confirm("Are you sure to delete this person?");
            if (id_conf == true) {
                var chosen_person = _.find(data, function(person) { return person.id === id; });
                data = _.filter(data, function(person) {
                    return person.id !== id;
                });
                render();
            }
        });
    }
    createFunctionRemove();
});
