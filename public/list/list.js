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
        render(data_search);
   });

    function compare(prop) {
        return function(a, b) {
            if(a[prop] < b[prop]) return -1;
            if(a[prop] > b[prop]) return 1;
            return 0;
        }
    }

    var fn_btn_click = false;

    $('.sort_btn').click(function(event) {
        var strData = localStorage.getItem('data');
        var data = JSON.parse(strData) || [];
        var prop = event.target.id;
        if  (fn_btn_click === false) {
            sortable = data.sort(compare(prop));
            console.log(sortable)
            fn_btn_click = true;}
        else {
            sortable = sortable.reverse();
            fn_btn_click = false;
        }
        render(sortable);
    });


    $('#pagination_btn').click(function(event) {
        var strData = localStorage.getItem('data');
        var data = JSON.parse(strData) || [];
        var resultsNumber = parseInt($('#page_select').val());
        if (resultsNumber === 0) {
            filt = _.clone(data);
        } else {
            filt = data.filter(function(el, index) {
                return index < resultsNumber;
            });
        }
        render(filt);

        var pagesNumber = Math.ceil(data.length/resultsNumber)

        var content = "";
        for (var i = 1; i <= pagesNumber; i++) {
            var idx = "page_numb" + i;
            content += "<button type='button' id='"+idx+"' class='btn btn-default color-blue page_btn'><i>"+i+"</i></button>";
        }
        $('#pagination_buttons').html(content);
        page_numb1.style.backgroundColor = '#ffcce9'

        var links = document.querySelectorAll(".page_btn")
        console.log(links)
        links.forEach(function (item) {
            item.addEventListener('click', function () {
                links.forEach(function (item) {
                    item.style.backgroundColor = '#fff'
                })
                this.style.backgroundColor = '#ffcce9'
            });
        });

        $('.page_btn').click(function(event) {
            var currentPage = parseInt(event.target.innerText);
            filt = data.filter(function(el, index) {
                var startWithIndex = (currentPage-1)*resultsNumber-1;
                var endWithIndex = startWithIndex + resultsNumber;
                return index > startWithIndex && index <= endWithIndex;
            })
            render(filt);
        });
     });
});
