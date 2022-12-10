/* eslint-disable no-unused-vars */
const TailorProfile = {
  async render() {
    return `
    <app-bar-tailor></app-bar-tailor>
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
                <button type="button" class="btn btn-sub" data-bs-toggle="modal" data-bs-target="#edit-ProfileModal">
                    Edit Profile
                </button>
                <button type="button" class="btn btn-sub" onclick="Logout()"">
                    Logout
                </button>
                
            </div>
        </div>
        <hr>
        <div class="sidebar">
            <div class="logo-details">
            <i><img src="./assets/logo-ruangjahit2.png" class="img-fluid" width="50"></i>
            <span class="logo_name">RuangJahit</span>
            </div>
            <ul class="nav-links" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <li class="nav-link " id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-category" type="button" role="tab" aria-controls="v-pills-category" aria-selected="true">
                <a>
                    <i class="bi bi-pie-chart-fill"></i>
                    <span class="links_name">Category</span>
                </a>
                </li>
                <li class="nav-link " id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-addimage" type="button" role="tab" aria-controls="v-pills-addimage" aria-selected="true">
                <a>
                    <i class="bi bi-file-text"></i>
                    <span class="links_name">Image Product</span>
                </a>
                </li>
                <li class="nav-link " id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-product" type="button" role="tab" aria-controls="v-pills-product" aria-selected="true">
                <a>
                    <i class="bi bi-archive-fill"></i>
                    <span class="links_name">Product</span>
                </a>
                </li>
                <li class="nav-link " id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-transaction" type="button" role="tab" aria-controls="v-pills-transaction" aria-selected="true">
                <a>
                    <i class="bi bi-archive-fill"></i>
                    <span class="links_name">Transaction</span>
                </a>
                </li>
                <li class="nav-link " id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-appointment" type="button" role="tab" aria-controls="v-pills-appointment" aria-selected="true">
                <a>
                    <i class="bi bi-archive-fill"></i>
                    <span class="links_name">Appointment</span>
                </a>
                </li>
                
            </ul>
        </div>
        <section class="home-section tab-content" id="v-pills-tabContent">
            <div class="home-content tab-pane fade show" id="v-pills-dashboard" role="tabpanel" aria-labelledby="v-pills-dashboard-tab" tabindex="0">
            <p>Dashboard</p>
            </div>

            <div class="home-content tab-pane fade show" data-bs-spy="scroll" id="v-pills-product" role="tabpanel" aria-labelledby="v-pills-product-tab" tabindex="0">
            <div class="container-lg">
                <div class="row panel-title">
                    <div class="col-lg-9"><h4>My Product</h4></div>
                    <div class="col-lg-3 pb-3">
                    <button class="btn btn-warning" type="button" data-bs-toggle="modal" data-bs-target="#add-productModal">Add Product</button>
                    </div>
                    <hr>
                </div>
                <div class="table-pane">
                <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">User</th>
                        <th scope="col">Category</th>
                        <th scope="col">Price</th>
                        <th scope="col">Description</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Stock</th>
                        <th scope="col">Color</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Size</th>
                        <th scope="col">Created_at</th>
                        <th scope="col">Updated-at</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody class="align-middle">
                        <td scope="col">#</td>
                        <td scope="col">Name</td>
                        <td scope="col">User</td>
                        <td scope="col">Category</td>
                        <td scope="col">Price</td>
                        <td scope="col">Description</td>
                        <td scope="col">Rating</td>
                        <td scope="col">Stock</td>
                        <td scope="col">Color</td>
                        <td scope="col">Weight</td>
                        <td scope="col">Size</td>
                        <td scope="col">Created_at</td>
                        <td scope="col">Updated-at</td>
                        <td scope="col">
                        <button class="btn btn-warning">Delete</button>
                        <button class="btn btn-warning" type="button" data-bs-toggle="modal" data-bs-target="#edit-productModal">Edit</button>
                        </td>
                </tbody>
                    
                    </table>
                    </div>
                </div>
            </div>

            <div class="home-content tab-pane fade show" id="v-pills-addimage" role="tabpanel" aria-labelledby="v-pills-addimage-tab" tabindex="0">
            <div class="container-lg">
                <div class="row">
                    <div class="col-lg-9"><h4>Image Product</h4></div>
                    <div class="col-lg-3 pb-3">
                    <button class="btn btn-warning" type="button" data-bs-toggle="modal" data-bs-target="#add-imageProductModal">Add Image</button>
                    </div>
                    <hr>
                </div>
                <div class="table-pane">
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Actiob</th>
                        </tr>
                    </thead>
                    <tbody class="align-middle">
                            <td scope="col">#</td>
                            <td scope="col">Name</td>
                            <td scope="col"><button class="btn btn-warning">Delete</button></td>
                    </tbody>
                    </table>
                    </div>
                </div>
            </div>
            <div class="home-content tab-pane fade show" id="v-pills-category" role="tabpanel" aria-labelledby="v-pills-category-tab" tabindex="0">
                <div class="container-lg">
                <div class="row">
                    <div class="col-lg-9"><h4>My Category</h4></div>
                    <div class="col-lg-3 pb-3">
                    <button class="btn btn-warning" type="button" data-bs-toggle="modal" data-bs-target="#add-categoryModal">Add Category</button>
                    </div>
                    <hr>
                </div>
                <div class="table-pane">
                <table id="example" class="table table-striped dt-responsive nowrap" style="width:100%">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                    </tr>
                </thead>
                <tbody class="align-middle">
                        <td scope="col">#</td>
                        <td scope="col">Name</td>
                </tbody>
            </table>
                </div>
                </div>
            </div>
            <div class="home-content tab-pane fade show" id="v-pills-transaction" role="tabpanel" aria-labelledby="v-pills-transaction-tab" tabindex="0">
                <div class="container-lg">
                <p>transaction</p>
                </div>
            </div>
            <div class="home-content tab-pane fade show" id="v-pills-appointment" role="tabpanel" aria-labelledby="v-pills-appointment-tab" tabindex="0">
                <div class="container-lg">
                <p>appointment</p>
                </div>
            </div>
        </section>
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
                            <label for="password" class="form-label"><small>Password</small></label>
                            <input type="password" class="form-control" id="password" placeholder="enter your password">
                        </div>
                        <div class="mb-3">
                            <label for="first_address" class="form-label"><small>Address</small></label>
                            <input type="text" class="form-control" id="first_address" placeholder="address">
                        </div>
                        <div class="mb-3">
                            <label for="province_id" class="form-label"><small>Provinsi</small></label>
                            <select class="form-select" aria-label="Default select example">
                            <option selected>Provinsi</option>
                            <option id="province_id" name="province_id" value="11">ACEH</option>
                            <option id="province_id" name="province_id" value="12">SUMATERA UTARA</option>
                            <option id="province_id" name="province_id" value="13">SUMATERA BARAT</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="regency_id" class="form-label"><small>Kabupaten/Kota</small></label>
                            <select class="form-select" aria-label="Default select example">
                            <option selected>Kabupaten</option>
                            <option id="regency_id" name="regency_id" value="1101">KABUPATEN SIMEULUE</option>
                            <option id="regency_id" name="regency_id" value="1102">KABUPATEN ACEH SINGKIL</option>
                            <option id="regency_id" name="regency_id" value="1103">KABUPATEN ACEH SELATAN</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="zip_code" class="form-label"><small>Kode Pos</small></label>
                            <input type="text" class="form-control" id="zip_code" placeholder="address">
                        </div>
                        <div class="mb-3">
                        <label for="first_phone" class="form-label"><small>Phone Number</small></label>
                        <input type="text" class="form-control" id="first_phone" placeholder="address">
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
    <!-- modal edit product -->
    <div class="modal fade" id="edit-productModal" tabindex="-1" aria-labelledby="edit-ProfileModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
                <div class="modal-body">
                <div class="container-lg">
                <h5 class="text-center">Edit Product</h5>
                <hr>
                <form class="row g-3">
                    <div class="col-lg-12">
                    <label for="inputProductName" class="form-label">Product Name</label>
                    <input type="text" class="form-control" id="inputProductName" required>
                    </div>
                    <div class="col-lg-12">
                    <label for="inputPrice" class="form-label">Price</label>
                    <input type="number" class="form-control" id="inputPrice">
                    </div>
                    <div class="col-lg-12">
                    <label for="inputStock" class="form-label">Stock</label>
                    <input type="number" class="form-control" id="inputStock">
                    </div>
                    <div class="col-12">
                    <label for="inputDescription" class="form-label">Description</label>
                    <input type="textarea" class="form-control" id="inputDescription">
                    </div>
                    <div class="col-lg-12">
                        <label for="inputCategory">Select Category</label>
                        <input type="text" class="form-control" id="inputCategory" placeholder="Select category e.g shirt, pants, etc." required>
                    </div>
                    <div class="col-lg-12">
                        <label for="inputSize">Select Size</label>
                        <select class="form-control" id="inputSize">
                        <option>Select Size</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>XXL</option>
                        </select>
                    </div>
                    <div class="col-lg-12">
                        <label for="inputColor">Color</label>
                        <input type="text" class="form-control" id="inputColor" placeholder="Enter color">
                    </div>
                    <div class="col-lg-12">
                        <label for="inputWeight">Weight</label>
                        <input type="number" class="form-control" id="inputWeight" placeholder="Enter weight">
                    </div>
                    
                    <div class="col-lg-12">
                        <button type="submit" class="btn btn-primary mt-3" id="btn-create-product">Create</button>
                        <button type="submit" class="btn btn-danger mt-3" id="btn-delete-product">Delete</button>
                    </div>
                </form>
            </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    <!-- modal Add product -->
    <div class="modal fade" id="add-productModal" tabindex="-1" aria-labelledby="add-ProfileModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
                <div class="modal-body">
                <div class="container-lg">
                <h5 class="text-center">Add Product</h5>
                <hr>
                <form class="row g-3">
                    <div class="col-lg-12">
                    <label for="inputProductName" class="form-label">Product Name</label>
                    <input type="text" class="form-control" id="inputProductName" required>
                    </div>
                    <div class="col-lg-12">
                    <label for="inputPrice" class="form-label">Price</label>
                    <input type="number" class="form-control" id="inputPrice">
                    </div>
                    <div class="col-lg-12">
                    <label for="inputStock" class="form-label">Stock</label>
                    <input type="number" class="form-control" id="inputStock">
                    </div>
                    <div class="col-12">
                    <label for="inputDescription" class="form-label">Description</label>
                    <input type="textarea" class="form-control" id="inputDescription">
                    </div>
                    <div class="col-lg-12">
                        <label for="inputCategory">Select Category</label>
                        <input type="text" class="form-control" id="inputCategory" placeholder="Select category e.g shirt, pants, etc." required>
                    </div>
                    <div class="col-lg-12">
                        <label for="inputSize">Select Size</label>
                        <select class="form-control" id="inputSize">
                        <option>Select Size</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                        <option>XXL</option>
                        </select>
                    </div>
                    <div class="col-lg-12">
                        <label for="inputColor">Color</label>
                        <input type="text" class="form-control" id="inputColor" placeholder="Enter color">
                    </div>
                    <div class="col-lg-12">
                        <label for="inputWeight">Weight</label>
                        <input type="number" class="form-control" id="inputWeight" placeholder="Enter weight">
                    </div>
                    
                    <div class="col-lg-12">
                        <button type="submit" class="btn btn-primary mt-3" id="btn-create-product">Create</button>
                        <button type="submit" class="btn btn-danger mt-3" id="btn-delete-product">Delete</button>
                    </div>
                </form>
            </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    <!-- modal Add category -->
    <div class="modal fade" id="add-categoryModal" tabindex="-1" aria-labelledby="add-ProfileModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
                <div class="modal-body">
                <div class="container-lg">
                <h5 class="text-center">Add Category</h5>
                <hr>
                <form class="row g-3">
                    <div class="col-lg-12">
                    <label for="inputcategoryName" class="form-label">Category Name</label>
                    <input type="text" class="form-control" id="inputcategoryName" required>
                    </div>
                </form>
            </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    <!-- modal Edit category -->
    <div class="modal fade" id="edit-categoryModal" tabindex="-1" aria-labelledby="add-ProfileModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
                <div class="modal-body">
                <div class="container-lg">
                <h5 class="text-center">Edit Category</h5>
                <hr>
                <form class="row g-3">
                    <div class="col-lg-12">
                    <label for="inputcategoryName" class="form-label">Category Name</label>
                    <input type="text" class="form-control" id="inputcategoryName" required>
                    </div>
                </form>
            </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    <!-- modal add image -->
    <div class="modal fade" id="add-imageProductModal" tabindex="-1" aria-labelledby="add-ProfileModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
                <div class="modal-body">
                <div class="container-lg">
                <h5 class="text-center">Add Image</h5>
                <hr>
                <form class="row g-3">
                <div class="mb-3">
                    <label for="photo-product" class="form-label"><small>Photo Product</small></label>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input form-control" id="photo-product">
                        <label class="custom-file-label" for="photo-product"></label>
                    </div>
                </div>
                </form>
            </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Save changes</button>
                </div>
            </div>
        </div>
    </div>
    <!-- modal Edit category -->
    <div class="modal fade" id="edit-imageProductModal" tabindex="-1" aria-labelledby="edit-imageProductModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
                <div class="modal-body">
                <div class="container-lg">
                <h5 class="text-center">Edit Image</h5>
                <hr>
                <form class="row g-3">
                <div class="mb-3">
                    <label for="photo-product" class="form-label"><small>Photo Product</small></label>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input form-control" id="photo-product">
                        <label class="custom-file-label" for="photo-product"></label>
                    </div>
                </div>
                </form>
            </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Save changes</button>
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
export default TailorProfile;
