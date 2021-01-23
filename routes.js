'use restrict';
module.exports=function(app){
    var jsonku=require('./controller');
    //route index
    app.route('/')
    .get(jsonku.index);
    //route tampil semua data
    app.route('/tampil')
    .get(jsonku.tampilsemuamahasiswa);
    //route tampil data berdasarkan id
    app.route('/tampil/:id')
    .get(jsonku.tampilberdasarkanid);
    //route menambah data
    app.route('/tambah')
    .post(jsonku.tambahMahasiswa);
    //route untuk update data
    app.route('/ubah')
    .put(jsonku.ubahMahasiswa);
    //route untuk menghapus
    app.route('/hapus')
    .delete(jsonku.hapusMahasiswa);

    app.route('/tampilmatakuliah')
    .get(jsonku.tampilgroupmatakuliah);

    // var regis=require('./middleware/index');
    // app.route('/register1').post()
}