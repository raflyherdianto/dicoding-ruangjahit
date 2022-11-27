const Product = {
  async render() {
    return `
      <div class="container-product">
        <div class="search-box">
          <form>
            <input type="text" name="search" placeholder="Search Product">
            <input type="submit" name="search" value="Search">
          </form>
        </div>
        <div class="main-content">
          <div class="category">
            <input type="submit" name="search" value="Category">
            <div class="row g-2 pt-3">
              <div class="col-md-3 col-sm-6">
                <a href="#">
                  <div class="card mt-3">
                    <div class="align-items-center p-2 text-center">
                      <img src="./category/custom.png" class="rounded" alt="Custom" width="130" height="140">
                    </div>
                    <div class="category-title p-3 text-center text-white mt-3 cursor">
                      <span>Custom</span>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-md-3 col-sm-6">
                <a href="#">
                  <div class="card mt-3">
                    <div class="align-items-center p-2 text-center">
                      <img src="./category/celana.png" class="rounded" alt="Celana" width="130" height="140">
                    </div>
                    <div class="category-title p-3 text-center text-white mt-3 cursor">
                      <span>Celana</span>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-md-3 col-sm-6">
                <a href="#">
                  <div class="card mt-3">
                    <div class="align-items-center p-2 text-center">
                      <img src="./category/gamis.png" class="rounded" alt="Gamis" width="130" height="140">
                    </div>
                    <div class="category-title p-3 text-center text-white mt-3 cursor">
                      <span>Gamis</span>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-md-3 col-sm-6">
                <a href="#">
                  <div class="card mt-3">
                    <div class="align-items-center p-2 text-center">
                      <img src="./category/mukenah.png" class="rounded" alt="Mukenah" width="130" height="140">
                    </div>
                    <div class="category-title p-3 text-center text-white mt-3 cursor">
                      <span>Mukenah</span>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-md-3 col-sm-6">
                <a href="#">
                  <div class="card mt-3">
                    <div class="align-items-center p-2 text-center">
                      <img src="./category/rok.png" class="rounded" alt="Rok" width="130" height="140">
                    </div>
                    <div class="category-title p-3 text-center text-white mt-3 cursor">
                      <span>Rok</span>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-md-3 col-sm-6">
                <a href="#">
                  <div class="card mt-3">
                    <div class="align-items-center p-2 text-center">
                      <img src="./category/kemeja.png" class="rounded" alt="Kemeja" width="130" height="140">
                    </div>
                    <div class="category-title p-3 text-center text-white mt-3 cursor">
                      <span>Kemeja</span>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-md-3 col-sm-6">
                <a href="#">
                  <div class="card mt-3">
                    <div class="align-items-center p-2 text-center">
                      <img src="./category/gorden.png" class="rounded" alt="Gorden" width="130" height="140">
                    </div>
                    <div class="category-title p-3 text-center text-white mt-3 cursor">
                      <span>Gorden</span>
                    </div>
                  </div>
                </a>
              </div>
              <div class="col-md-3 col-sm-6">
                <a href="#">
                  <div class="card mt-3">
                    <div class="align-items-center p-2 text-center">
                      <img src="./category/sprei.png" class="rounded" alt="Sprei" width="130" height="140">
                    </div>
                    <div class="category-title p-3 text-center text-white mt-3 cursor">
                      <span>Sprei</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <aside>
        <h5>Filter</h5>
        <p class="rate-title">Rating</p>
        <center class="mb-2">
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star checked"></span>
        <span class="fa fa-star"></span>
        </center>
        <p class="rate-title">Location</p>
        <select class="form-select" aria-label="Select your location">
          <option selected>Select your location</option>
          <option value="Aceh">ACEh</option>
          <option value="Sumatera">SUMATERA</option>
          <option value="Jawa Barat">JAWA BARAT</option>
          <option value="Jawa Tengah">JAWA TENGAH</option>
          <option value="Jawa Timur">JAWA TIMUR</option>
          <option value="Kalimantan">KALIMANTAN</option>
        </select>
        <input type="submit" name="search" value="Search">
        </aside>
      </div>
      
      <div class="product">
      <input type="submit" name="search" value="Product">
      <div class="row g-2 pt-3">
        <div class="col-lg-2 col-sm-6 me-3 pb-4">
          <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <div class="card">
              <div class="image-container">
                <div class="header-product">
                  <div class="d-flex justify-content-between align-items-center">
                    <span class="like-btn"><i class="fa fa-heart-o"></i></span>
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
                    <span class="btn-buy">Add to cart</span>
                    
                  </div>
              </div>
            </div>
          </a>
        </div>
        <div class="col-lg-2 col-sm-6 me-3 pb-4">
          <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <div class="card">
              <div class="image-container">
                <div class="header-product">
                  <div class="d-flex justify-content-between align-items-center">
                    <span class="like-btn"><i class="fa fa-heart-o"></i></span>
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
                    <span class="btn-buy">Add to cart</span>
                    
                  </div>
              </div>
            </div>
          </a>
        </div>
        <div class="col-lg-2 col-sm-6 me-3 pb-4">
          <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <div class="card">
              <div class="image-container">
                <div class="header-product">
                
                  <div class="d-flex justify-content-between align-items-center">
                    <span class="like-btn"><i class="fa fa-heart-o"></i></span>
                  </div>
                </div>
                <img src="./product/product2/1.jpg" class="img-fluid rounded thumbnail-image">
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
                    <span class="btn-buy">Add to cart</span>
                    
                  </div>
              </div>
            </div>
          </a>
        </div>
        <div class="col-lg-2 col-sm-6 me-3 pb-4">
          <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <div class="card">
              <div class="image-container">
                <div class="header-product">
                
                  <div class="d-flex justify-content-between align-items-center">
                    <span class="like-btn"><i class="fa fa-heart-o"></i></span>
                  </div>
                </div>
                <img src="./product/product2/1.jpg" class="img-fluid rounded thumbnail-image">
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
                    <span class="btn-buy">Add to cart</span>
                    
                  </div>
              </div>
            </div>
          </a>
        </div>
        <div class="col-lg-2 col-sm-6 me-3 pb-4">
          <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <div class="card">
              <div class="image-container">
                <div class="header-product">
                
                  <div class="d-flex justify-content-between align-items-center">
                    <span class="like-btn"><i class="fa fa-heart-o"></i></span>
                  </div>
                </div>
                <img src="./product/product2/1.jpg" class="img-fluid rounded thumbnail-image">
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
                    <span class="btn-buy">Add to cart</span>
                    
                  </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>

      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
          <div class="modal-content p-4">
            <div class="row">
            <h5 class="text-center mb-2">Detail Product</h5>
            <hr class="mb-5">
              <div class="col-md-5">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="./product/product1/1.jpg" class="d-block w-100 pb-1" alt="...">
                    </div>
                    <div class="carousel-item">
                      <img src="./product/product1/2.jpg" class="d-block w-100 pb-1" alt="...">
                    </div>
                    <div class="carousel-item">
                      <img src="./product/product1/3.jpg" class="d-block w-100 pb-1" alt="...">
                    </div>
                    <div class="carousel-item">
                      <img src="./product/product1/4.jpg" class="d-block w-100 pb-1" alt="...">
                    </div>
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>

                <div class="small-img-group">
                  <div class="small-img-col">
                    <img src="./product/product1/1.jpg" width="100%" class="small-img" alt="...">
                  </div>
                  <div class="small-img-col">
                    <img src="./product/product1/2.jpg" width="100%" class="small-img" alt="...">
                  </div>
                  <div class="small-img-col">
                    <img src="./product/product1/3.jpg" width="100%" class="small-img" alt="...">
                  </div>
                  <div class="small-img-col">
                    <img src="./product/product1/4.jpg" width="100%" class="small-img" alt="...">
                  </div>
                </div>
              </div>
              <div class="col-md-7">
                <h2>Blouse Wanita</h2>
                <div class="detail-product">
                  <p><b>Rating:</b> 5<span class="fa fa-star checked"></span>(200)</p>
                  <p class="price">IDR 100.000</p>
                  <p><b>Availibility:</b> In Stock</p>
                  <p><b>Category:</b> Women</p>
                  <p><b>Brand:</b> Chaya Hijab</p>
                  <p><b>Designer:</b> Chaya Syaqila</p>
                  <p><b>Tailor:</b> Chaya Syaqila</p>
                </div>
                <div class="size-chart pb-3">
                  <input type="radio" class="btn-check input-size" name="options" id="s" autocomplete="off">
                  <label class="btn form-size" for="s">S</label>
                  
                  <input type="radio" class="btn-check input-size" name="options" id="m" autocomplete="off">
                  <label class="btn form-size" for="m">M</label>

                  <input type="radio" class="btn-check input-size" name="options" id="l" autocomplete="off">
                  <label class="btn form-size" for="l">L</label>

                  <input type="radio" class="btn-check input-size" name="options" id="xl" autocomplete="off">
                  <label class="btn form-size" for="xl">XL</label>
                </div>
                <div class="quantity">
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-default">Quantity</span>
                    <input type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                  </div>
                </div>
                <div class="btn-product">
                  <input type="submit" name="search" class="buy-now" value="Buy Now">
                  <input type="submit" name="search" class="add-cart" value="Add to cart">
                  <input type="submit" name="search" class="add-req" value="Request">
                </div>
              </div>
              <div class="col-12 pt-3 pb-0">
              <h5>Description</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo numquam alias velit officia expedita consectetur perspiciatis, ad exercitationem vero tenetur. Accusantium aliquam culpa numquam asperiores aliquid, repellendus praesentium quos minus?</p>
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

export default Product;
