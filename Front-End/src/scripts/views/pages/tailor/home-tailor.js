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
                    <p>Bergabunglah bersama kami untuk membantu lebih banyak pelanggan dalam menemukan Layanan Jahit terbaik.</p>
                </div>
            </div>
        </div>

        <div class="container-fluid second-main text-center p-lg-5">
          <h1 class="tagline">Artikel Terkait</h1>
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="card">
                  <img src="./tailors/tailor1.jpg" class="card-img-top" alt="./tailors/1.png">
                  <div class="card-body">
                    <h5 class="card-title">Article Title</h5>
                    <a href="#" class="btn-read-article">Read more</a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card" >
                  <img src="./tailors/tailor1.jpg" class="card-img-top" alt="./tailors/1.png">
                  <div class="card-body">
                    <h5 class="card-title">Article Title</h5>
                    <a href="#" class="btn-read-article">Read more</a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src="./tailors/tailor1.jpg" class="card-img-top" alt="./tailors/1.png">
                  <div class="card-body">
                    <h5 class="card-title">Article Title</h5>
                    <a href="#" class="btn-read-article">Read more</a>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src="./tailors/tailor1.jpg" class="card-img-top" alt="./tailors/1.png">
                  <div class="card-body">
                    <h5 class="card-title">Article Title</h5>
                    <a href="#" class="btn-read-article">Read more</a>
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
