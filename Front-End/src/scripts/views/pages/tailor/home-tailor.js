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

    <div class="title-section">
      <h2>Top Selling Item</h2>
    </div>
    <section class="first">    
          <div class="row g-2">
                <div class="col-lg-2 col-12 me-1">
                  <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <div class="card">
                      <div class="image-container">
                        <div class="header-product">
                        
                          <div class="d-flex justify-content-between align-items-center">
                            <span class="like-btn"><i class="bi bi-bookmark-heart"></i></span>
                          </div>
                        </div>
                        <img src="./product/product1/1.jpg" class="img-fluid rounded thumbnail-image">
                      </div>

                      <div class="product-detail-container p-2">
                          <div class="justify-content-between align-items-center">
                            <h5 class="product-name">Blouse</h5>
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
                  </a>
                </div>
              </div>

              <div class="col-lg-2 col-12 me-1">
                <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <div class="card">
                    <div class="image-container">
                      <div class="header-product">
                      
                        <div class="d-flex justify-content-between align-items-center">
                          <span class="like-btn"><i class="bi bi-bookmark-heart"></i></span>
                        </div>
                      </div>
                      <img src="./product/product1/1.jpg" class="img-fluid rounded thumbnail-image">
                    </div>

                    <div class="product-detail-container p-2">
                        <div class="justify-content-between align-items-center">
                          <h5 class="product-name">Blouse</h5>
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
                </a>
              </div>
              
                <div class="col-lg-2 col-12 me-1">
                  <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <div class="card">
                      <div class="image-container">
                        <div class="header-product">
                        
                          <div class="d-flex justify-content-between align-items-center">
                            <span class="like-btn"><i class="bi bi-bookmark-heart"></i></span>
                          </div>
                        </div>
                        <img src="./product/product1/1.jpg" class="img-fluid rounded thumbnail-image">
                      </div>

                      <div class="product-detail-container p-2">
                          <div class="justify-content-between align-items-center">
                            <h5 class="product-name">Blouse</h5>
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
                  </a>
                </div>
              </div>

              <div class="col-lg-2 col-12 me-1">
                <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <div class="card">
                    <div class="image-container">
                      <div class="header-product">
                      
                        <div class="d-flex justify-content-between align-items-center">
                          <span class="like-btn"><i class="bi bi-bookmark-heart"></i></span>
                        </div>
                      </div>
                      <img src="./product/product1/1.jpg" class="img-fluid rounded thumbnail-image">
                    </div>

                    <div class="product-detail-container p-2">
                        <div class="justify-content-between align-items-center">
                          <h5 class="product-name">Blouse</h5>
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
                </a>
              </div>

                <div class="col-lg-2 col-12 me-1">
                  <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <div class="card">
                      <div class="image-container">
                        <div class="header-product">
                        
                          <div class="d-flex justify-content-between align-items-center">
                            <span class="like-btn"><i class="bi bi-bookmark-heart"></i></span>
                          </div>
                        </div>
                        <img src="./product/product1/1.jpg" class="img-fluid rounded thumbnail-image">
                      </div>

                      <div class="product-detail-container p-2">
                          <div class="justify-content-between align-items-center">
                            <h5 class="product-name">Blouse</h5>
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
                  </a>
                </div>
              </div>

              <div class="col-lg-2 col-12 me-1">
                <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <div class="card">
                    <div class="image-container">
                      <div class="header-product">
                      
                        <div class="d-flex justify-content-between align-items-center">
                          <span class="like-btn"><i class="bi bi-bookmark-heart"></i></span>
                        </div>
                      </div>
                      <img src="./product/product1/1.jpg" class="img-fluid rounded thumbnail-image">
                    </div>

                    <div class="product-detail-container p-2">
                        <div class="justify-content-between align-items-center">
                          <h5 class="product-name">Blouse</h5>
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
                </a>
              </div>
          </div>
    </section>

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

export default HomeTailor;
