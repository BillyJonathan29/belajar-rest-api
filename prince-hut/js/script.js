$.getJSON('data/kelas.json', function(data){
    let kelas = data.kelas;

 
    $.each(kelas, function(i, data){
        $('#data-mahasiswa').append('<div class="col-md-4 mt-3"><div class="card mb-3" style="width: 18rem;"><img src="img/'+ data.gambar  +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">'+ data.nim +'</h5><a href="#" class="btn btn-primary">Details</a></div></div></div>')
    })
})


$('.nav-link').on('click', function() {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    // let kategori = $(this).html();
    // console.log(kategori);
});
