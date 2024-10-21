function allMahasiswa() { 
    $.getJSON('data/kelas.json', function(data){
        let kelas = data.kelas;
    
     
        $.each(kelas, function(i, data){
            $('#data-mahasiswa').append('<div class="col-md-4 mt-3"><div class="card mb-3" style="width: 18rem;"><img src="img/'+ data.gambar  +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">'+ data.nim +'</h5><a href="#" class="btn btn-primary">Details</a></div></div></div>')
        })
    })
}
allMahasiswa();


$('.nav-link').on('click', function() {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html().toLowerCase();
    $('h1').html(kategori)

    // console.log(kategori);

    if(kategori == 'all mahasiswa'){
        allMahasiswa();
        return;
    }


    $.getJSON('data/kelas.json', function(data){
        let kelas =  data.kelas;
        let content = '';

        
        

        $.each(kelas, function(i, data){
            if(data.kategori.toLowerCase() === kategori){
                content += '<div class="col-md-4 mt-3"><div class="card mb-3" style="width: 18rem;"><img src="img/'+ data.gambar  +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">'+ data.nim +'</h5><a href="#" class="btn btn-primary">Details</a></div></div></div>'
            }
        })

        $('#data-mahasiswa').html(content);
    })
    
});
