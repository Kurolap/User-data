    var data = [];
    var filteredData = _.clone(data);
    var filt = [];
    var data_search = [];

    var isEdit = false;
    var personId = null;

    function calculateAgeByBirth_date(birth_date) {
        var birthDate = new Date(birth_date);
        var currentDate = new Date();
        var diff_age = new Date(currentDate - birthDate);
        var persn_age = diff_age.getFullYear() - 1970;
        return persn_age;
    }

    function render() {
        var content = "";
       // localStorage.clear();
        var strData = localStorage.getItem('data');
        var data = JSON.parse(strData) || [];
        console.log(strData)
        _.each(data, function (person) {
            content += "<tr>" +
                "<td>" + person.id + "</td>" +
                "<td>" + person.first_name + "</td>" +
                "<td>" + person.second_name + "</td>" +
                "<td>" + person.gender + "</td>" +
                "<td>" + person.age + "</td>" +
                "<td>" + person.email + "</td>" +
                "<td><span title='edit' class='glyphicon glyphicon-pencil' id='" + person.id + "' ></span></td>" +
                "<td><span title='delete' class='glyphicon glyphicon-trash' id='" + person.id + "'></span></td>" +
                "</tr>";
        });
        $('#content').html(content);
        createFunctionRemove();
        createFunctionEdit();
    }

    function createFunctionRemove() {
        var strData = localStorage.getItem('data');
        var data = JSON.parse(strData) || [];
        $('.glyphicon-trash').click(function (event) {
            var id = parseInt(event.target.id);
            var id_conf = confirm("Are you sure to remove this user from the list?");
            if (id_conf == true) {
                data = _.filter(data, function (person) {
                    return person.id !== id;
                });
                var strData = JSON.stringify(data);
                console.log(strData)
                localStorage.setItem('data', strData);
                render();
            }
        });
    }

    function switchtoEdit() {
        $('#form').show();
        $('#list').hide();
    }

    function createFunctionEdit() {
        $('.glyphicon-pencil').click(function (event) {
            switchtoEdit();
            isEdit = true;
            personId = parseInt(event.target.attributes.id.value);
            var strData = localStorage.getItem('data');
            var data = JSON.parse(strData) || [];
            var person = _.find(data, function(person) {
                return person.id === personId;
            });
            $("#fname").val(person.first_name);
            $("#sname").val(person.second_name);
            $("#email").val(person.email);
            $("#pwd").val('newTxtmm');
            $("#gender").val(person.gender);
            $("#date").val(person.birth_date);
        });
    }

    function reRender() {
        var content = "";
        var strData = localStorage.getItem('data');
        var data = JSON.parse(strData) || [];
        _.each(filt, function (person) {
            content += "<tr>" +
                "<td>" + person.id + "</td>" +
                "<td>" + person.first_name + "</td>" +
                "<td>" + person.second_name + "</td>" +
                "<td>" + person.gender + "</td>" +
                "<td>" + person.age + "</td>" +
                "<td>" + person.email + "</td>" +
                "<td><span title='edit' class='glyphicon glyphicon-pencil' id='" + person.id + "' ></span></td>" +
                "<td><span title='delete' class='glyphicon glyphicon-trash' id='" + person.id + "'></span></td></td>" +
                "</tr>";
        });
        $('#content').html(content);
        createFunctionRemove();
        createFunctionEdit();
    }

    function renderSearch() {
        var content = "";
        _.each(data_search, function (person) {
            content += "<tr>" +
                "<td>" + person.id + "</td>" +
                "<td>" + person.first_name + "</td>" +
                "<td>" + person.second_name + "</td>" +
                "<td>" + person.gender + "</td>" +
                "<td>" + person.age + "</td>" +
                "<td>" + person.email + "</td>" +
                "<td><span title='edit' class='glyphicon glyphicon-pencil' id='" + person.id + "' ></span></td>" +
                "<td><span title='delete' class='glyphicon glyphicon-trash' id='" + person.id + "'></span></td></td>" +
                "</tr>";
        });
        $('#content').html(content);
        createFunctionRemove();
        createFunctionEdit();
    }

    function renderSort() {
        var content = "";
        _.each(sortable, function (person) {
            content += "<tr>" +
                "<td>" + person.id + "</td>" +
                "<td>" + person.first_name + "</td>" +
                "<td>" + person.second_name + "</td>" +
                "<td>" + person.gender + "</td>" +
                "<td>" + person.age + "</td>" +
                "<td>" + person.email + "</td>" +
                "<td><span title='edit' class='glyphicon glyphicon-pencil' id='" + person.id + "' ></span></td>" +
                "<td><span title='delete' class='glyphicon glyphicon-trash' id='" + person.id + "'></span></td></td>" +
                "</tr>";
        });
        $('#content').html(content);
        createFunctionRemove();
        createFunctionEdit();
    }

    $(document).ready(function () {

        $.ajax({
            url: "list/list.html",
            success: function (result) {
                $("#list").html(result);
                $.ajax({
                    url: "form/form.html",
                    success: function (result) {
                        $("#form").html(result);
                    }
                });
            }
        });

    });

