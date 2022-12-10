/* eslint-disable no-unused-vars */
/* eslint-disable no-multiple-empty-lines */
import Swal from 'sweetalert2';
import IndoRegionDataSource from '../../../data/indoregiondb-source';
import { createProvinceItemTemplate, createRegencyItemTemplate } from '../../templates/template-creator';


const SignUp = {
  async render() {
    return `
    <div class="container-signup">
        <div class="left-side">
            <img src="./assets/logo-ruangjahit.png" alt="Logo RuangJahit">
            <form action="#" class="signup-input" id="form-regis">
                <h3>Daftar Akun</h3>
                <div class="input-field">
                    <input type="text" id="name" name="name" placeholder="Nama Lengkap" required>
                </div>
  
                <div class="input-field">
                    <input type="text" id="username" name="username" placeholder="Nama Pengguna" required>
                </div>
  
                <div class="input-field">
                    <input type="text" id="first_address" name="first_address" placeholder="Alamat" required>
                </div>
  
                <div class="input-field">
                    <input type="number" id="first_phone" name="first_phone" placeholder="No. HP" required>
                </div>
                <select class="form-select" id="province_id" aria-label="Default select example">
                <option selected>Pilih Provinsi</option>
                </select>
            
                <select class="form-select" id="regency_id" aria-label="Default select example">
                <option selected>Pilih Kota</option>
                
                </select>

                <div class="input-field">
                    <input type="number" id="zip_code" name="zip_code" placeholder="Kode Pos" required>
                </div>
  
                <div class="input-field">
                    <input type="email" id="email" name="email" placeholder="E-mail" required>
                </div>
  
                <div class="input-field">
                    <input type="password" id="password" name="password" placeholder="Password" required>
                </div>
                <div class="input-field">
                    <input type="password" id="password_confirmation" name="password_confir" placeholder="Password Confirmation" required>
                </div>
                
                <button class="btn-daftar" type="button" id="btn-regis" onclick="Registration()" value="Daftar">Daftar</button>
            </form>
        </div>
  
        <div class="right-side">
            <div class="box-signin">
                <h3>Selamat Datang Kembali !</h3>
                <p>silakan masuk ke akun Anda <br>
                    dengan memberikan detail informasi akun <br>
                    untuk melanjutkan
                </p>
                <p>Sudah memiliki Akun? <a href="#/sign-in">Masuk disini</a></p>
                <input type="submit" value="Masuk" onclick="location.href='#/sign-in';">
                <p><br>ingin karya anda dikenal banyak orang?<br>ayo bergabung menjadi bagian dari <b>RuangJahit</b></p>
                <input type="submit" value="Masuk Penjahit" onclick="location.href='#/sign-in-tailor';">
            </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    document.querySelector('app-bar').style.display = 'none';
    document.querySelector('footer-bar').style.display = 'none';
    const provinces = await IndoRegionDataSource.getAllProvince();
    const regencies = await IndoRegionDataSource.getAllRegencies();
    const provinceContainer = document.querySelector('#province_id');
    const regencyContainer = document.querySelector('#regency_id');
    provinces.forEach((province) => {
      provinceContainer.innerHTML += createProvinceItemTemplate(province);
    });
    regencies.forEach((regency) => {
      regencyContainer.innerHTML += createRegencyItemTemplate(regency);
    });
  },

};

export default SignUp;
