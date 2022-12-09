import '../../components/app-bar_user';

const HomeLogin = {
  async render() {
    return `
    <app-bar_user></app-bar_user>
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
                <p><span>RuangJahit</span> adalah website yang menghubungkan Pelanggan dan Penyedia Jasa Jahit baik individu maupun UMKM. <br>
                   Hal ini bertujuan untuk memperluas potensi Penyedia Jasa Jahit untuk dapat dikenal banyak orang dan 
                   memudahkan Pelanggan dalam menemukan informasi Penyedia Jasa Jahit terbaik.</p>
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

    <div class="container-fluid third-main text-center p-lg-5">
      <h1 class="tagline">Bergabung bersama Kami</h1>
      <!-- button for register user tailor -->
      <h5>Bergabunglah bersama kami untuk menikmati berbagai fitur menarik yang kami tawarkan.</h5>
      <button onclick="location.href='#'">Daftar Penjahit</button>
    </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    // document.querySelector('app-bar').style.display = 'none';
  },
};

export default HomeLogin;
