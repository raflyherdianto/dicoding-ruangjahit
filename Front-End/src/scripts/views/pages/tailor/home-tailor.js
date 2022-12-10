const HomeTailor = {
  async render() {
    return `
    <app-bar-tailor></app-bar-tailor>
        <div class="container-fluid hero">
          <div class="row">
              <div class="col-lg-6 col-md-12 p-5 hero-left">
                  <h1>Buat Desain Impianmu
                      bersama RuangJahit!</h1>
                  <p class="lead ">Kami hadir untuk membantu Anda dalam menemukan jasa penjahit terbaik dan memberikan ruang untuk jasa penjahit agar dapat lebih dikenal oleh banyak orang.</p>
                  <button type="button" class="btn bg-white text-warning font-weight-bolder">Pesan Sekarang!</button>
              </div>
              <div class="col-lg-6 col-md-12 hero-right">
                  <img src="./assets/header.png" class="img-fluid align-content-between" alt="">
              </div>
          </div>
        </div>

        <div class="container-fluid first-main pb-5">
            <h1 class="tagline">Mengapa harus RuangJahit??</h1>
            <div class="row">
                <div class="col-lg-6 col-md-12 fm-left">
                    <img src="./assets/ruangjahit-image-1.jpg" class="img-fluid" alt="">
                </div>
                <div class="col-lg-6 col-md-12 fm-right pt-3">
                    <p><span>RuangJahit</span> adalah website yang menghubungkan Pelanggan dan Penyedia Jasa Jahit baik individu maupun UMKM agar dapat memperluas potensi Penyedia Jasa Jahit untuk dapat dikenal banyak orang dan memudahkan Pelanggan dalam menemukan informasi Penyedia Jasa Jahit terbaik.</p>

                    <p>Kami hadir untuk membantu Anda dalam menyediakan informasi Penyedia Layanan Jahit berdasarkan rating atau lokasi.</p>
                </div>
            </div>
        </div>


        <div class="container-fluid second-main text-center p-lg-5">
        <h1 class="tagline">Artikel Terkait</h1>
        <div class="container">
        <div class="row">
          <div class="col">
            <div class="card">
              <img src="./artikel/artikel01.jpg" class="card-img-top" alt="">
              <div class="card-body">
                <h5 class="card-title">7 Alasan Kenapa Usaha Menjahit Baju Menguntungkan</h5>
                <a href="https://www.cermati.com/artikel/7-alasan-kenapa-usaha-menjahit-baju-menguntungkan" class="btn-read-article">Read more</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" >
              <img src="./artikel/artikel02.jpg" class="card-img-top" alt="">
              <div class="card-body">
                <h5 class="card-title">Peluang Usaha Jahit Pakaian dan Tips Sukses Memulainya</h5>
                <a href="https://smkperintis.sch.id/2020/11/19/peluang-usaha-jahit-pakaian-dan-tips-sukses-memulainya/" class="btn-read-article">Read more</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="./artikel/artikel03.jpg" class="card-img-top" alt="">
              <div class="card-body">
                <h5 class="card-title">Cerita Dibalik Seorang Penjahit Milenial</h5>
                <a href="https://baranewsaceh.co/cerita-dibalik-seorang-penjahit-milenial/" class="btn-read-article">Read more</a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <img src="./artikel/artikel04.jpg" class="card-img-top" alt="">
              <div class="card-body">
                <h5 class="card-title">Tips Memulai Usaha Jahit Pakaian</h5>
                <a href="https://blog.indodana.id/usaha-jahit/" class="btn-read-article">Read more</a>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default HomeTailor;
