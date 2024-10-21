$('#search-button').on('click', function () {

    $.ajax({
        url: 'http://www.omdbapi.com/',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': 'd141c1c3',
            's': $('#search-input').val()
        },
        success: function (results) {
            if (results.Response == "True") {

            }else{
                $('#movie-list').html('<h1>'+ results.Error +'</h1>')
            }
        }
    })
})