$(document).ready(function() {

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

    $('#add').click(function(event) {
        $('#form').show();
        $('#list').hide();
        var newTxt = '';
        $("#fname").val(newTxt);
        $("#sname").val(newTxt);
        $("#email").val(newTxt);
        $("#pwd").val(newTxt);
        $("#gender").val(newTxt);
        $("#date").val(newTxt);
    });
    $('#cancel-btn').click(function(event) {
        $('#form').hide();
        $('#list').show();
    });
    $('#save-btn').click(function(event) {
        $('#form').hide();
        $('#list').show();
    });
    $('.glyphicon-pencil').click(function(event) {
        $('#form').show();
        $('#list').hide();
    });
});
