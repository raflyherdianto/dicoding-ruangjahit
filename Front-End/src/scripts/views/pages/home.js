const Home = {
  async render() {
    return `
    <section class="hero rows containers">
      <div>
        <h1>Buat Desain Impianmu<br>bersama RuangJahit!</h1>
        <p>Kami hadir untuk membantu Anda dalam menemukan jasa penjahit terbaik dan memberikan ruang untuk jasa penjahit agar dapat lebih dikenal oleh banyak orang. </p>
        <a href="#/product" class="hero-btn">Pesan Sekarang!</a>
      </div>
      <div class="rows">
        <img src="./assets/header.png" width="650px" alt="">
      </div>
    </section>

    <div class="title-section">
      <h2>Top Selling Item</h2>
    </div>
    <section class="first">    
          <div class="row g-2">
                <div class="col-lg-2 col-12 me-1">
                  <div class="card">
                    <div class="image-container">
                      <div class="header-product">
                        <div class="d-flex justify-content-between align-items-center">
                          <a href="#" class="like-btn"><i class="bi bi-bookmark-heart"></i></a>
                        </div>
                      </div>
                      <img src="./product/product1/1.jpg" class="img-fluid rounded thumbnail-image">
                    </div>

                    <div class="product-detail-container p-2">
                        <div class="justify-content-between align-items-center">
                          <h5 class="product-name" href="#" data-bs-toggle="modal" data-bs-target="#detailProduct">Blouse</h5>
                          <p class="price">IDR 100.000</p>
                        </div>

                        <div class="d-flex justify-content-between align-items-center pt-1">
                          <div>
                            <i class="fa fa-star-o rating-star"></i>
                            <span class="rating-number">4.8</span>
                          </div>
                          <a href="#/product-cart" class="btn-buy">Add to cart</a>
                        </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-2 col-12 me-1">
                <div class="card">
                  <div class="image-container">
                    <div class="header-product">
                      <div class="d-flex justify-content-between align-items-center">
                        <a href="#" class="like-btn"><i class="bi bi-bookmark-heart"></i></a>
                      </div>
                    </div>
                    <img src="./product/product1/1.jpg" class="img-fluid rounded thumbnail-image">
                  </div>

                  <div class="product-detail-container p-2">
                      <div class="justify-content-between align-items-center">
                        <h5 class="product-name" href="#" data-bs-toggle="modal" data-bs-target="#detailProduct">Blouse</h5>
                        <p class="price">IDR 100.000</p>
                      </div>

                      <div class="d-flex justify-content-between align-items-center pt-1">
                        <div>
                          <i class="fa fa-star-o rating-star"></i>
                          <span class="rating-number">4.8</span>
                        </div>
                        <a href="#/product-cart" class="btn-buy">Add to cart</a>
                      </div>
                  </div>
                </div>
              </div>
              
                <div class="col-lg-2 col-12 me-1">
                  <div class="card">
                    <div class="image-container">
                      <div class="header-product">
                        <div class="d-flex justify-content-between align-items-center">
                          <a href="#" class="like-btn"><i class="bi bi-bookmark-heart"></i></a>
                        </div>
                      </div>
                      <img src="./product/product1/1.jpg" class="img-fluid rounded thumbnail-image">
                    </div>

                    <div class="product-detail-container p-2">
                        <div class="justify-content-between align-items-center">
                          <h5 class="product-name" href="#" data-bs-toggle="modal" data-bs-target="#detailProduct">Blouse</h5>
                          <p class="price">IDR 100.000</p>
                        </div>

                        <div class="d-flex justify-content-between align-items-center pt-1">
                          <div>
                            <i class="fa fa-star-o rating-star"></i>
                            <span class="rating-number">4.8</span>
                          </div>
                          <a href="#/product-cart" class="btn-buy">Add to cart</a>
                        </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-2 col-12 me-1">
                <div class="card">
                  <div class="image-container">
                    <div class="header-product">
                      <div class="d-flex justify-content-between align-items-center">
                        <a href="#" class="like-btn"><i class="bi bi-bookmark-heart"></i></a>
                      </div>
                    </div>
                    <img src="./product/product1/1.jpg" class="img-fluid rounded thumbnail-image">
                  </div>

                  <div class="product-detail-container p-2">
                      <div class="justify-content-between align-items-center">
                        <h5 class="product-name" href="#" data-bs-toggle="modal" data-bs-target="#detailProduct">Blouse</h5>
                        <p class="price">IDR 100.000</p>
                      </div>

                      <div class="d-flex justify-content-between align-items-center pt-1">
                        <div>
                          <i class="fa fa-star-o rating-star"></i>
                          <span class="rating-number">4.8</span>
                        </div>
                        <a href="#/product-cart" class="btn-buy">Add to cart</a>
                      </div>
                  </div>
                </div>
              </div>

                <div class="col-lg-2 col-12 me-1">
                  <div class="card">
                    <div class="image-container">
                      <div class="header-product">
                        <div class="d-flex justify-content-between align-items-center">
                          <a href="#" class="like-btn"><i class="bi bi-bookmark-heart"></i></a>
                        </div>
                      </div>
                      <img src="./product/product1/1.jpg" class="img-fluid rounded thumbnail-image">
                    </div>

                    <div class="product-detail-container p-2">
                        <div class="justify-content-between align-items-center">
                          <h5 class="product-name" href="#" data-bs-toggle="modal" data-bs-target="#detailProduct">Blouse</h5>
                          <p class="price">IDR 100.000</p>
                        </div>

                        <div class="d-flex justify-content-between align-items-center pt-1">
                          <div>
                            <i class="fa fa-star-o rating-star"></i>
                            <span class="rating-number">4.8</span>
                          </div>
                          <a href="#/product-cart" class="btn-buy">Add to cart</a>
                        </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-2 col-12 me-1">
                <div class="card">
                  <div class="image-container">
                    <div class="header-product">
                      <div class="d-flex justify-content-between align-items-center">
                        <a href="#" class="like-btn"><i class="bi bi-bookmark-heart"></i></a>
                      </div>
                    </div>
                    <img src="./product/product1/1.jpg" class="img-fluid rounded thumbnail-image">
                  </div>

                  <div class="product-detail-container p-2">
                      <div class="justify-content-between align-items-center">
                        <h5 class="product-name" href="#" data-bs-toggle="modal" data-bs-target="#detailProduct">Blouse</h5>
                        <p class="price">IDR 100.000</p>
                      </div>

                      <div class="d-flex justify-content-between align-items-center pt-1">
                        <div>
                          <i class="fa fa-star-o rating-star"></i>
                          <span class="rating-number">4.8</span>
                        </div>
                        <a href="#/product-cart" class="btn-buy">Add to cart</a>
                      </div>
                  </div>
                </div>
              </div>
          </div>
    </section>

    <section class="second">
    <h1>Layanan yang Kami Tawarkan</h1>
    
    <div class="sec-body">
      <div class="sec-img">
      <img src="../assets/ruangjahit-image-1.jpg" alt="RuangJahit Image">
      </div>

      <div>
      <h3>Layanan Produk</h3>
      <ul>
        <li>Kami hadir untuk membantu Anda dalam menyediakan informasi Penyedia Layanan Jahit berdasarkan rating atau lokasi.</li>
        <br>
        <li>Tingkatkan penjualan Anda dengan mendaftarkan produk Anda di RuangJahit.</li>
      </ul>

      <h3>Layanan Jasa</h3>
      <p>
        Bergabunglah bersama kami untuk membantu lebih banyak pelanggan dalam menemukan Layanan Jahit terbaik.
      </p>
      </div>
    </div>
    </section>

    <div class="title-section">
      <h2>Our Top Tailor</h2>
    </div>
    <section class="third">
      <div class="row">
        <div class="col">
          <div class="card">
              
              <h5 class="m-1"><img src="/tailors/tailor1.jpg" width="100px" class="img-fluid float-start rounded-circle p-2" alt=""><br>Lorem Ipsum<br><span><a href="#">see more</a></span></h5>
          </div>
        </div>
        <div class="col">
          <div class="card">
              
              <h5 class="m-1"><img src="/tailors/tailor2.png" width="100px" class="img-fluid float-start rounded-circle p-2" alt=""><br>Lorem Ipsum<br><span><a href="#">see more</a></span></h5>
          </div>
        </div>
        <div class="col">
          <div class="card">
              
              <h5 class="m-1"><img src="/tailors/tailor3.png" width="100px" class="img-fluid float-start rounded-circle p-2" alt=""><br>Lorem Ipsum<br><span><a href="#">see more</a></span></h5>
          </div>
        </div>
        <div class="col">
          <div class="card">
              
              <h5 class="m-1"><img src="/tailors/tailor4.png" width="100px" class="img-fluid float-start rounded-circle p-2" alt=""><br>Lorem Ipsum<br><span><a href="#">see more</a></span></h5>
          </div>
        </div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
