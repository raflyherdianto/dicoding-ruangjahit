const SignUp = {
  async render() {
    return `
    <div class="container-signup">
      <div class="left-side">
          <img src="./assets/logo-ruangjahit.png" alt="Logo RuangJahit">
          <form action="#" class="signup-input">
              <h3>Daftar Akun</h3>
              <div class="input-field">
                  <input type="text" placeholder="Nama Lengkap" required>
              </div>

              <div class="input-field">
                  <input type="text" placeholder="Nama Pengguna" required>
              </div>

              <div class="input-field">
                  <input type="text" placeholder="Alamat" required>
              </div>

              <div class="input-field">
                  <input type="number" placeholder="No. HP" required>
              </div>

              <div class="input-field">
                  <input type="text" placeholder="Kecamatan" required>
              </div>

              <div class="input-field">
                  <input type="text" placeholder="Kelurahan" required>
              </div>

              <div class="input-field">
                  <input type="number" placeholder="Kode Pos" required>
              </div>

              <div class="input-field">
                  <input type="email" placeholder="E-mail" required>
              </div>

              <div class="input-field">
                  <input type="password" placeholder="Password" required>
              </div>
              
              <input type="submit" value="Daftar">
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
