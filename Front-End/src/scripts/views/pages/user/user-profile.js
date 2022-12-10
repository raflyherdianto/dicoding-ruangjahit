/* eslint-disable no-unused-vars */
import UserDataSource from '../../../data/userdb-source';
import { createUserDetailTemplate } from '../../templates/template-creator';

const UserProfile = {
  async render() {
    return `
      <app-bar-user></app-bar-user>
      <div class="container pt-5 user-profile">
          <div class="row content">
              <div class="col-lg-3 col-md-4 col-12">
                  <img src="./users/woman.png" class="img-fluid" width="250" alt="">
              </div>
              <div class="col-lg-7 col-md-5 col-12 pt-2" id="user_name">
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
          <div class="row">
            <div class="col-lg-6 my-transaction">
                <h4>My Transaction</h4>
                <hr>
                <div class="card p-3" data-bs-toggle="modal" data-bs-target="#detail-transaksiModal">
                    <div class="row">
                        <div class="col-9">
                            <h5 class="pt-2">Blouse</h5>
                            <small>Resi: JPG2789010282</small>
                        </div>
                        <div class="col-3">
                            <div class="status-transaksi">Success</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 my-appointment">
                    <h4>My Appointment</h4>
                    <hr>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Deadline</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody class="align-middle">
                                <td scope="col">Blouse</td>
                                <td scope="col">11-12-22</td>
                                <td scope="col"><p class="status-appointment mt-3">Success</p></td>
                        </tbody>
                    </table>
            </div>
          </div>
          
           <!-- modal  detail transaksi-->
          <div class="modal fade" id="detail-transaksiModal" tabindex="-1" aria-labelledby="detail-transaksiModal" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-body">
                    <div class="row">
                        <div class="col-7">
                            <h6 class="pt-2"><b>Detail Pesanan</b></h6>
                        </div>
                        <div class="col-5">
                            <h6 class="pt-2">Resi: JPG2789010282</h6>
                        </div>
                        <hr>
                    
                    <div class="p-3" data-bs-toggle="modal" data-bs-target="#detail-transaksiModal">
                        <div class="row" card-detail-transaksi">
                            <div class="col-6">
                                <h5 class="pt-2">Blouse</h5>
                            </div>
                            <div class="col-3">
                                <p class="pt-2">5pcs</p>
                            </div>
                            <div class="col-3">
                                <p class="pt-2">Rp.100.000</p>
                            </div>
                            <hr>
                        </div>
                    </div>
                    </div>
                    <h6 class=""><b>Detail Pembayaran</b></h6>
                    <hr>
                    <p>Total Harga: 500.000</p>
                    <p>Metode Pembayaran: Transfer Bank</p>
                    <div>Status: <span class="status-transaksi">Success</span></div>
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
    const user = await UserDataSource.getUserData();
    const userContainer = document.querySelector('#user_name');
    userContainer.innerHTML += createUserDetailTemplate(user);
  },

};
export default UserProfile;
