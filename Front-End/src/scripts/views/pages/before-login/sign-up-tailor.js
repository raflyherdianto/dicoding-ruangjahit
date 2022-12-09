const SignUpTailor = {
  async render() {
    return `
    <div class="container-signup">
        <div class="left-side">
            <img src="./assets/logo-ruangjahit.png" alt="Logo RuangJahit">
            <form action="#" class="signup-input" id="form-regis">
                <h3>Daftar Akun Penjahit</h3>
                <div class="input-field">
                    <input type="text" id="name_tailor" name="name_tailor" placeholder="Nama Lengkap" required>
                </div>
  
                <div class="input-field">
                    <input type="text" id="username_tailor" name="username_tailor" placeholder="Nama Pengguna" required>
                </div>
  
                <div class="input-field">
                    <input type="text" id="first_address_tailor" name="first_address_tailor" placeholder="Alamat" required>
                </div>
  
                <div class="input-field">
                    <input type="number" id="first_phone_tailor" name="first_phone_tailor" placeholder="No. HP" required>
                </div>
  
                <select class="form-select" id="data-provinsi" aria-label="Default select example">
                </select>

                <select class="form-select" id="data-kabupaten" aria-label="Default select example">
                </select>

                <div class="input-field">
                    <input type="number" id="zip_code_tailor" name="zip_code_tailor" placeholder="Kode Pos" required>
                </div>
  
                <div class="input-field">
                    <input type="email" id="email_tailor" name="email_tailor" placeholder="E-mail" required>
                </div>
  
                <div class="input-field">
                    <input type="password" id="password_tailor" name="password_tailor" placeholder="Password" required>
                </div>
                <div class="input-field">
                    <input type="password" id="password_confirmation_tailor" name="password_confir" placeholder="Password Confirmation" required>
                </div>
                
                <button class="btn-daftar" type="button" id="btn-regis" onclick="RegistrationTailor()" value="Daftar">Daftar</button>
            </form>
        </div>
  
        <div class="right-side">
            <div class="box-signin">
                <h3>Selamat Datang Kembali !</h3>
                <p>silakan masuk ke akun Anda <br>
                    dengan memberikan detail informasi akun <br>
                    untuk melanjutkan
                </p>
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
  },

};

export default SignUpTailor;
