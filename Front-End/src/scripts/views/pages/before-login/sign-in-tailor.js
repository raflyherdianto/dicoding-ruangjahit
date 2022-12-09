const SignInTailor = {
  async render() {
    return `
    <div class="container-signin">
      <div class="left-side">
          <div class="box-signin">
              <h3>Halo, Apa Kabar ?</h3>
              <p>silakan berikan informasi untuk <br>
                  mendaftarkan Akun
              </p>
              <p><br>ingin karya anda dikenal banyak orang?<br>ayo bergabung menjadi bagian dari <b>RuangJahit</b></p>
              <input type="button" value="Daftar Penjahit" onclick="location.href='#/sign-up-tailor';">
          </div>
      </div>

      <div class="right-side">
          <img src="./assets/logo-ruangjahit.png" class="" alt="Logo RuangJahit">
          <div class="container-input">
            <form action="#" class="signin-input" id="form-login">
                <h3>Masuk Penjahit</h3>
                <div class="input-field">
                    <input type="text" id="username-tailor" name="username" placeholder="Nama Pengguna" required>
                </div>
                <div class="input-field">
                    <input type="password" id="password-tailor" name="password" placeholder="Kata Sandi" required>
                </div>
                <a href="#">Lupa kata sandi ?</a>
                <input type="button" class="btn-masuk" id="btn-login" name="btn-login" onclick="LoginTailor()" value="Masuk">
            </form>
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

export default SignInTailor;
