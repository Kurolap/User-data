$(document).ready(function() {

    $('.selectpicker').selectpicker();

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
        var strData = localStorage.getItem('data');
        var data = JSON.parse(strData) || [];
        var search = $('#search').val().toLowerCase();
        console.log(data)

        if (!search) {
            data_search = _.clone(data);
        } else {
            data_search = data.filter(function (item) {
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
        renderSearch();
    });

    var fn_btn_click = false;

    $('#first_name_btn').click(function(event) {
        var strData = localStorage.getItem('data');
        var data = JSON.parse(strData) || [];
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
        renderSort();
    });

    var sn_btn_click = false;

    $('#second_name_btn').click(function(event) {
        var strData = localStorage.getItem('data');
        var data = JSON.parse(strData) || [];
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
        renderSort();
    });

    var gnd_btn_click = false;

    $('#gender_btn').click(function(event) {
        var strData = localStorage.getItem('data');
        var data = JSON.parse(strData) || [];
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
        renderSort();
    });

    var em_btn_click = false;

    $('#email_btn').click(function(event) {
        var strData = localStorage.getItem('data');
        var data = JSON.parse(strData) || [];
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
        renderSort();
    });

    var age_btn_click = false;

    $('#age_btn').click(function(event) {
        var strData = localStorage.getItem('data');
        var data = JSON.parse(strData) || [];
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
        renderSort();
    });

    $('#pagination_btn').click(function(event) {
        var strData = localStorage.getItem('data');
        var data = JSON.parse(strData) || [];
        var resultsNumber = parseInt($('#page_select').val());
        if (resultsNumber === 0) {
            filt = _.clone(data);
        } else {
            filt = data.filter(function(el) {
                return el.id < resultsNumber;
            });
        }
        reRender();

        var pagesNumber = Math.ceil(data.length/resultsNumber)
        console.log('pagesNumber', pagesNumber)

        var content = "";
        for (var i = 1; i <= pagesNumber; i++) {
            var idx = "page_numb" + i;
            content += "<button type='button' id='"+idx+"' class='btn btn-default color-blue page_btn'><i>"+i+"</i></button>";
        }
        $('#pagination_buttons').html(content);
        $('.page_btn').click(function(event) {

           var links = document.querySelectorAll(".page_btn")
            links.forEach(function (item) {
                item.addEventListener('click', function () {
                    console.log('click')
                    //reset the color of other links
                    links.forEach(function (item) {
                        item.style.backgroundColor = '#fff'
                    })
                    // apply the style to the link
                    this.style.backgroundColor = '#ffcce9'
                });
            })

            var currentPage = parseInt(event.target.innerText);
            filt = data.filter(function(el, index) {
                var startWithIndex = (currentPage-1)*resultsNumber-1;
                var endWithIndex = startWithIndex + resultsNumber;
                return index > startWithIndex && index <= endWithIndex;
            })
            console.log('currentPage', currentPage)
            reRender();
        })
    });

});
