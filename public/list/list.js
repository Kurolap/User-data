$(document).ready(function() {
   render();
   function switchToAdd() {
       $('#form').show();
       $('#list').hide();
       var newTxt = '';
       $("#fname").val(newTxt);
       $("#sname").val(newTxt);
       $("#email").val(newTxt);
       $("#pwd").val(newTxt);
       $("#gender").val(newTxt);
       $("#date").val(newTxt);
   }

    $('#add').click(function(event) {
        switchToAdd();
        isEdit = false;
        $("#save-btn").prop('disabled', true);
        $('#email').val('');
        $('#pwd').val('');
    });

    $('#search_btn').click(function(event) {
        var search = $('#search').val();
        if (!search) {
            filteredData = _.clone(data);
        } else {
            filteredData = data.filter(function (item) {
                return item.id.toString().indexOf(search) != -1 || item.first_name.indexOf(search) != -1 || item.second_name.indexOf(search) != -1 || item.email.indexOf(search) != -1 ||
                item.gender.indexOf(search) != -1 || item.age.toString().indexOf(search) != -1;
            });
        }
        render();
    });

    $('#first_name_btn').click(function(event) {
        function compareId(a, b) {
            if(a.first_name < b.first_name) return -1;
            if(a.first_name > b.first_name) return 1;
            return 0;
        }
    sortable = data.sort(compareId);
        console.log(sortable)
        render();
    });

    $('#second_name_btn').click(function(event) {
        function compareSn(a, b) {
            if(a.second_name < b.second_name) return -1;
            if(a.second_name > b.second_name) return 1;
            return 0;
        }
        sortable = data.sort(compareSn);
        console.log(sortable)
        render();
    });

    $('#gender_btn').click(function(event) {
        function compareGn(a, b) {
            if(a.gender < b.gender) return -1;
            if(a.gender > b.gender) return 1;
            return 0;
        }
        sortable = data.sort(compareGn);
        console.log(sortable)
        render();
    });

    $('#email_btn').click(function(event) {
        function compareEm(a, b) {
            if(a.email < b.email) return -1;
            if(a.email > b.email) return 1;
            return 0;
        }
        sortable = data.sort(compareEm);
        console.log(sortable)
        render();
    });

    $('#age_btn').click(function(event) {
        function compareAge(a, b) {
            if(a.age < b.age) return -1;
            if(a.age > b.age) return 1;
            return 0;
        }
        sortable = data.sort(compareAge);
        console.log(sortable)
        render();
    });

    function render_sort() {
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

});
