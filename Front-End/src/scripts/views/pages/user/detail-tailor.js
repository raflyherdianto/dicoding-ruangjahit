const DetailTailorUser = {
  async render() {
    return `
    <app-bar-user></app-bar-user>
    <div class="container pt-5 user-profile">
    <div class="row content">
        <div class="col-lg-3 col-md-4 col-12">
            <img src="./users/woman.png" class="img-fluid" width="250" alt="">
        </div>
        <div class="col-lg-7 col-md-5 col-12 pt-2">
            <h3><b>Anisa Fitrianida</b></h3>
            <p>Bekasi, Jawa Barat Indonesia</p>
            <small>
                <span class="category"><i class="bi bi-telephone-fill"></i></span><span class="category">Female</span>
            </small>
        </div>
        <div class="col-lg-2 col-md-3 col-12 pt-4">
            <button type="button" class="btn btn-sub mt-3" data-bs-toggle="modal" data-bs-target="#add-catalogueModal">
                Request
            </button>
            
        </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-lg-8">
            <nav>
                <div class="nav nav-tabs" id="nav-tab">
                <button class="nav-link text-dark" id="nav-myproduct-tab" data-bs-toggle="tab" data-bs-target="#nav-myproduct" type="button" role="tab" aria-controls="nav-myproduct" aria-selected="true">My Product</button>
                <button class="nav-link text-dark" id="nav-mycatalogue-tab" data-bs-toggle="tab" data-bs-target="#nav-mycatalogue" type="button" role="tab" aria-controls="nav-mycatalogue" aria-selected="false">My Catalogue</button>
                <button class="nav-link text-dark" id="nav-orderstatus-tab" data-bs-toggle="tab" data-bs-target="#nav-orderstatus" type="button" role="tab" aria-controls="nav-orderstatus" aria-selected="false">Order Status</button>
                </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active p-3" id="nav-myproduct" role="tabpanel" aria-labelledby="nav-myproduct-tab" tabindex="0">
                    <div class="my-product pt-5">
                        <h4 class="title-section"><b>My Product</b></h4>
                        <div class="row my-products">
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
                                        <span class="btn-buy">Add to cart</span>
                                        
                                        </div>
                                    </div>
                                </div>
                                </a>
                            </div>
                            </div>
                        </div>
                </div>
                <div class="tab-pane fade p-3" id="nav-mycatalogue" role="tabpanel" aria-labelledby="nav-mycatalogus-tab" tabindex="0">
                    <div class="my-product pt-5">
                        <h4 class="title-section"><b>My Catalogue</b></h4>
                        <div class="galery flex">
                            <div class="item" data-w="344" data-h="333">
                                <a href="#" target="_blank">
                                <img src="./users/woman.png" class="img-fluid" alt=""></a>
                            </div>
                            <div class="item" data-w="344" data-h="333">
                                <a href="#" target="_blank">
                                <img src="./users/woman.png" class="img-fluid" alt=""></a>
                            </div>
                            <div class="item" data-w="344" data-h="333">
                                <a href="#" target="_blank">
                                <img src="./users/woman.png" class="img-fluid" alt=""></a>
                            </div>
                            <div class="item" data-w="344" data-h="333">
                                <a href="#" target="_blank">
                                <img src="./users/woman.png" class="img-fluid" alt=""></a>
                            </div>
                            <div class="item" data-w="344" data-h="333">
                                <a href="#" target="_blank">
                                <img src="./users/woman.png" class="img-fluid" alt=""></a>
                            </div>
                            <div class="item" data-w="344" data-h="333">
                                <a href="#" target="_blank">
                                <img src="./users/woman.png" class="img-fluid" alt=""></a>
                            </div>
                            <div class="item" data-w="344" data-h="333">
                                <a href="#" target="_blank">
                                <img src="./users/woman.png" class="img-fluid" alt=""></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade p-3 order-list" id="nav-orderstatus" role="tabpanel" aria-labelledby="nav-orderstatus-tab" tabindex="0">
                <h5>Order Status</h5>
                <nav>
                    <div class="nav nav-tabs btn-group" id="nav-tab" role="group" aria-label="button group">
                    <button class="nav-link btn btn-outline-dark" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Received</button>
                    <button class="nav-link btn btn-outline-dark" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">On Proses</button>
                    <button class="nav-link btn btn-outline-dark" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Complete</button>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active p-3" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-10" style="line-height: 4px;">
                                        <p>Blouse</p>
                                        <small>Order ID xxxxxxxx</small>
                                    </div>
                                    <div class="col-2" style="font-size: 10px;">
                                        <p>04-Dec-2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade p-3" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                        <div class="card">
                            <div class="card-body">
                            <div class="row">
                                <div class="col-10" style="line-height: 4px;">
                                    <p>Batik Pekalongan</p>
                                    <small>Order ID xxxxxxxx</small>
                                </div>
                                <div class="col-2" style="font-size: 10px;">
                                    <p>04-Dec-2022</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade p-3" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                        <!-- untuk card status pemesanan diterima -->
                        <div class="card">
                            <div class="card-body">
                            <div class="row">
                                <div class="col-10" style="line-height: 4px;">
                                    <p>Kemeja</p>
                                    <small>Order ID xxxxxxxx</small>
                                </div>
                                <div class="col-2" style="font-size: 10px;">
                                    <p>04-Dec-2022</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>                    
            </div>
        </div>
        <div class="col-lg-4">
            <div class="order-list">
                <h5>Order Status</h5>
                <nav>
                    <div class="nav nav-tabs btn-group" id="nav-tab" role="group" aria-label="button group">
                    <button class="nav-link btn btn-outline-dark" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Received</button>
                    <button class="nav-link btn btn-outline-dark" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">On Proses</button>
                    <button class="nav-link btn btn-outline-dark" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Complete</button>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active p-3" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                        <div class="card">
                            <div class="card-body">
                            <div class="row">
                                <div class="col-lg-8" style="line-height: 4px;">
                                    <p>Blouse</p>
                                    <small>Order ID xxxxxxxx</small>
                                </div>
                                <div class="col-lg-4" style="font-size: 10px;">
                                    <p>04-Dec-2022</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade p-3" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                        <div class="card">
                            <div class="card-body">
                            <div class="row">
                                <div class="col-lg-8" style="line-height: 4px;">
                                    <p>Batik Pekalongan</p>
                                    <small>Order ID xxxxxxxx</small>
                                </div>
                                <div class="col-lg-4" style="font-size: 10px;">
                                    <p>04-Dec-2022</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade p-3" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-lg-8" style="line-height: 4px;">
                                        <p>Kemeja</p>
                                        <small>Order ID xxxxxxxx</small>
                                    </div>
                                    <div class="col-lg-4" style="font-size: 10px;">
                                        <p>04-Dec-2022</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- modal edit profile -->
    <div class="modal fade" id="edit-ProfileModal" tabindex="-1" aria-labelledby="edit-ProfileModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
                <div class="modal-body">
                    <h5 class="text-center">Edit Profile</h5>
                    <hr>
                    <form>                        
                        <div class="mb-3">
                            <label for="photo" class="form-label"><small>Photo Product</small></label>
                            <div class="custom-file">
                                <input type="file" class="custom-file-input form-control" id="photo-profile">
                                <label class="custom-file-label" for="photo-profile"></label>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="name" class="form-label"><small>Name</small></label>
                            <input type="text" class="form-control" id="name" placeholder="name">
                        </div>
                        <div class="mb-3">
                            <label for="price" class="form-label"><small>Username</small></label>
                            <input type="text" class="form-control" id="username" placeholder="username">
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label"><small>Email Address</small></label>
                            <input type="email" class="form-control" id="email" placeholder="name@example.com">
                        </div>
                        <div class="mb-3">
                            <label for="first_address" class="form-label"><small>Address</small></label>
                            <input type="text" class="form-control" id="first_address" placeholder="address">
                        </div>
                        <div class="mb-3">
                            <label for="second_address" class="form-label"><small>Complete Address</small></label>
                            <textarea class="form-control" id="second_address" placeholder="complete address" rows="3"></textarea>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    <!-- modal Add Product -->
    <div class="modal fade" id="add-productModal" tabindex="-1" aria-labelledby="add-productModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-body">
                <h5 class="text-center">Add Product</h5>
                <hr>
                <div class="mb-3">
                    <label for="photo" class="form-label"><small>Photo Product</small></label>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input form-control" id="formFile">
                        <label class="custom-file-label" for="Image"></label>
                    </div>
                </div>
                <div class="mb-3">
                    <label for="nameproduct" class="form-label"><small>Name Product</small></label>
                    <input type="text" class="form-control" id="nameproduct" placeholder="name product">
                </div>
                <div class="mb-3">
                    <label for="price" class="form-label"><small>Price</small></label>
                    <input type="text" class="form-control" id="price" placeholder="Price">
                </div>
                <div class="mb-3">
                    <label for="stock" class="form-label"><small>Stock</small></label>
                    <input type="number" class="form-control" id="stock" placeholder="Stoc">
                </div>
                <div class="mb-3">
                    <label for="size" class="form-label"><small>Size</small></label>
                    <input type="text" class="form-control" id="size" placeholder="address">
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label"><small>Description</small></label>
                    <textarea class="form-control" id="description" placeholder="Description" rows="3"></textarea>
                </div>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
            </div>
        </div>
        </div>
    </div>
    <!-- modal add catalogue -->
    <div class="modal fade" id="add-catalogueModal" tabindex="-1" aria-labelledby="add-catalogueModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
            <div class="modal-body">
                <h5 class="text-center">Add My Catalogue</h5>
                <hr>
                <div class="container">
                    <div class="mb-3">
                        <label for="photo" class="form-label"><small>Photo Product</small></label>
                        <div class="custom-file">
                            <input type="file" class="custom-file-input form-control" id="formFile" onchange="preview()">
                            <label class="custom-file-label" for="Image"></label>
                        </div>
                    </div>
                    <img id="frame" src="" class="img-fluid" />
                </div>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
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

export default DetailTailorUser;
