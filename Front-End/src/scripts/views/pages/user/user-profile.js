/* eslint-disable no-unused-vars */
const UserProfile = {
  async render() {
    return `
      <app-bar-user></app-bar-user>
      <div class="container pt-5 user-profile">
          <div class="row content">
              <div class="col-lg-3 col-md-4 col-12">
                  <img src="./users/woman.png" class="img-fluid" width="250" alt="">
              </div>
              <div class="col-lg-7 col-md-5 col-12 pt-2"  id="user_name">
                  
                  <p>Bekasi, Jawa Barat Indonesia</p>
                  <small>
                      <span class="category"><i class="bi bi-telephone-fill"></i></span><span class="category">Female</span>
                  </small>
              </div>
              <div class="col-lg-2 col-md-3 col-12 pt-4">
                  <button type="button" class="btn btn-sub" data-bs-toggle="modal" data-bs-target="#edit-ProfileModal">
                      Edit Profile
                  </button>
                  <button type="button" class="btn btn-sub" id="btn-logout" onclick="Logout()">
                      Logout
                  </button>
                  
              </div>
          </div>
          <hr>
  
          <!-- modal edit profile -->
          <div class="modal fade" id="edit-ProfileModal" tabindex="-1" aria-labelledby="edit-ProfileModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-scrollable">
              <div class="modal-content">
                      <div class="modal-body">
                          <h5 class="text-center">Edit Profile</h5>
                          <hr>
                          <form>                        
                          <div class="mb-3">
                              <label for="edit_name" class="form-label"><small>Name</small></label>
                              <input type="text" class="form-control" id="edit_name" placeholder="name">
                          </div>
                          <div class="mb-3">
                              <label for="edit_username" class="form-label"><small>Username</small></label>
                              <input type="text" class="form-control" id="edit_username" placeholder="username">
                          </div>
                          <div class="mb-3">
                              <label for="edit_first_address" class="form-label"><small>Address</small></label>
                              <input type="text" class="form-control" id="edit_first_address" placeholder="address">
                          </div>
                          <div class="mb-3">
                              <label for="edit_province_id" class="form-label"><small>Provinsi</small></label>
                                  <select class="form-select" aria-label="Default select example">
                                  <option selected>Provinsi</option>
                                  <option id="edit_province_id" name="edit_province_id" value="11">ACEH</option>
                                  <option id="edit_province_id" name="edit_province_id" value="12">SUMATERA UTARA</option>
                                  <option id="edit_province_id" name="edit_province_id" value="13">SUMATERA BARAT</option>
                              </select>
                          </div>
                          <div class="mb-3">
                              <label for="edit_regency_id" class="form-label"><small>Kabupaten/Kota</small></label>
                              <select class="form-select" aria-label="Default select example">
                              <option selected>Kabupaten</option>
                              <option id="edit_regency_id" name="edit_regency_id" value="1101">KABUPATEN SIMEULUE</option>
                              <option id="edit_regency_id" name="edit_regency_id" value="1102">KABUPATEN ACEH SINGKIL</option>
                              <option id="edit_regency_id" name="edit_regency_id" value="1103">KABUPATEN ACEH SELATAN</option>
                              </select>
                          </div>
                          <div class="mb-3">
                              <label for="edit_zip_code" class="form-label"><small>Kode Pos</small></label>
                              <input type="text" class="form-control" id="edit_zip_code" placeholder="zip code">
                          </div>
                          <div class="mb-3">
                              <label for="edit_first_phone" class="form-label"><small>Phone Number</small></label>
                              <input type="text" class="form-control" id="edit_first_phone" placeholder="phone number">
                          </div>
                          <div class="mb-3">
                              <label for="password_confirmation" class="form-label"><small>Masukkan Password Anda</small></label>
                              <input type="password" class="form-control" id="password_confirmation" placeholder="password">
                          </div>
                      </form>
                      </div>
                      <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="button" class="btn btn-primary" onclick="ProfileEdit()">
                              Save Changes
                          </button>
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
export default UserProfile;
