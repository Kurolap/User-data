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
        var search = $('#search').val().toLowerCase();

        if (!search) {
            data = _.clone(data);
        } else {
            data = data.filter(function (item) {
                var id = item.id.toString().toLowerCase();
                var first_name = item.first_name.toLowerCase();
                var sec_name = item.second_name.toLowerCase();
                var gender = item.gender.toLowerCase();
                var email = item.email.toLowerCase();
                var age = item.age.toString().toLowerCase();
                return id.indexOf(search) != -1 || first_name.indexOf(search) != -1 || sec_name.indexOf(search) != -1 ||
                    email.indexOf(search) != -1 || gender.indexOf(search) != -1 || age.indexOf(search) != -1;
            });
        }
        render();
    });

    var fn_btn_click = false;

    $('#first_name_btn').click(function(event) {
        if  (fn_btn_click === false) {
            function compareId(a, b) {
                if(a.first_name < b.first_name) return -1;
                if(a.first_name > b.first_name) return 1;
                return 0;
            }
            sortable = data.sort(compareId);
        console.log('var is true')
            fn_btn_click = true;}
        else {
            sortable = sortable.reverse();
            console.log('var is false')
            fn_btn_click = false;
        }
       console.log(sortable)
        render();
    });

    var sn_btn_click = false;

    $('#second_name_btn').click(function(event) {
        if  (sn_btn_click === false) {
        function compareSn(a, b) {
            if(a.second_name < b.second_name) return -1;
            if(a.second_name > b.second_name) return 1;
            return 0;
        }
        sortable = data.sort(compareSn);
            sn_btn_click = true;
        }
        else {
            sortable = sortable.reverse();
            sn_btn_click = false;
        }
        console.log(sortable)
        render();
    });

    var gnd_btn_click = false;

    $('#gender_btn').click(function(event) {
        if  (gnd_btn_click === false) {
        function compareGn(a, b) {
            if(a.gender < b.gender) return -1;
            if(a.gender > b.gender) return 1;
            return 0;
        }
        sortable = data.sort(compareGn);
            gnd_btn_click = true;
        }
        else {
            sortable = sortable.reverse();
            gnd_btn_click = false;
        }
        console.log(sortable)
        render();
    });

    var em_btn_click = false;

    $('#email_btn').click(function(event) {
        if  (em_btn_click === false) {
        function compareEm(a, b) {
            if(a.email < b.email) return -1;
            if(a.email > b.email) return 1;
            return 0;
        }
        sortable = data.sort(compareEm);
            em_btn_click = true;
        }
        else {
            sortable = sortable.reverse();
            em_btn_click = false;
        }
        console.log(sortable)
        render();
    });

    var age_btn_click = false;

    $('#age_btn').click(function(event) {
        if  (age_btn_click === false) {
        function compareAge(a, b) {
            if(a.age < b.age) return -1;
            if(a.age > b.age) return 1;
            return 0;
        }
        sortable = data.sort(compareAge);
            age_btn_click = true;
        }
        else {
            sortable = sortable.reverse();
            age_btn_click = false;
        }
        console.log(sortable)
        render();
    });
});
