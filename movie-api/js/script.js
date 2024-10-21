function searchMovie() {
    $('#movie-list').html('');
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
                let movies = results.Search;

                $.each(movies, function (i, data) {
                    $('#movie-list').append(`
                            <div class="col-md-3 mb-3">
                                <div class="card">
                                    <img src="` + data.Poster + `" class="card-img-top" alt="...">
                                    <div class="card-body">
                                        <h5 class="card-title">`+ data.Title + `</h5>
                                        <h6 class="card-subtitle mb-2 text-body-secondary">`+ data.Year + `</h6>
                                        <a href="#" class="card-link see-detail" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="`+ data.imdbID + `">See Details</a>
                                    </div>
                                </div>
                            </div>
                            `)
                })

                $('#search-input').val('');
            } else {
                $('#movie-list').html(`
                            <div classs="col">
                                <h1 class="text-center">`+ results.Error + `</h1>
                            </div>
                        `)
            }
        }
    })
}

$('#search-button').on('click', function () {
    searchMovie();
})

$('#search-input').on('keyup', function (e) {
    if (e.keyCode === 13) {
        searchMovie();
    }
})

$('#movie-list').on('click', '.see-detail', function () {
    $.ajax({
        url: 'http://www.omdbapi.com/',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': 'd141c1c3',
            'i': $(this).data('id')
        },
        success: function (movie) {
            if (movie.Response === "True") {
                $('.modal-body').html(`
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-4">
                                    <img src="`+ movie.Poster + `" class="img-fluid">
                                </div>
                                <div class="col-md-8">
                                    <ul class="list-group">
                                        <li class="list-group-item"><h3>`+ movie.Title + `</h3></li>
                                        <li class="list-group-item">Released:`+ movie.Released + `</li>
                                        <li class="list-group-item">Genre:`+ movie.Genre + `</li>
                                        <li class="list-group-item">Director:`+ movie.Director + `</li>
                                        <li class="list-group-item">Actors:`+ movie.Actors + `</li>
                                        <li class="list-group-item">Realesead:`+ movie.Plot + `</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    `)
            }
        }
    })
})
