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
  
                <select class="form-select" aria-label="Default select example">
                    <option selected>Provinsi</option>
                    <option id="province_id" name="province_id" value="11">ACEH</option>
                    <option id="province_id" name="province_id" value="12">SUMATERA UTARA</option>
                    <option id="province_id" name="province_id" value="13">SUMATERA BARAT</option>
                </select>

                <select class="form-select" aria-label="Default select example">
                    <option selected>Kabupaten</option>
                    <option id="regency_id" name="regency_id" value="1101">KABUPATEN SIMEULUE</option>
                    <option id="regency_id" name="regency_id" value="1102">KABUPATEN ACEH SINGKIL</option>
                    <option id="regency_id" name="regency_id" value="1103">KABUPATEN ACEH SELATAN</option>
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
                
                <button type="button" id="btn-regis" onclick="Registration()" value="Daftar">Daftar</button>
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
            </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    document.querySelector('app-bar').style.display = 'none';
    document.querySelector('footer-bar').style.display = 'none';
  },

};

export default SignUp;
