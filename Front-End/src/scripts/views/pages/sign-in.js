const SignIn = {
  async render() {
    return `
    <div class="container-signin">
      <div class="left-side">
          <div class="box-signin">
              <h3>Halo, Apa Kabar ?</h3>
              <p>silakan berikan informasi untuk <br>
                  mendaftarkan Akun
              </p>
              <p>Belum memiliki Akun? <a href="#/sign-up">Daftar sekarang</a></p>
              <input type="submit" value="Daftar" onclick="location.href='#/sign-up';">
          </div>
      </div>

      <div class="right-side">
          <img src="./assets/logo-ruangjahit.png" alt="Logo RuangJahit">
          <div class="container-input">
              <form action="#" class="signin-input">
                  <h3>Masuk</h3>
                  <div class="input-field">
                      <i class="bi bi-person-check"></i>
                      <input type="text" placeholder="Nama Pengguna" required>
                  </div>
                  <div class="input-field">

                      <input type="password" placeholder="Kata Sandi" required>
                  </div>
                  <a href="#">Lupa kata sandi ?</a>
                  <input type="submit" value="Masuk">
              </form>
              <div class="separator">
                  <div class="block"></div>
                  <p>Atau</p>
                  <div class="block"></div>
              </div>
              <div class="social-media">
                  <input type="button" value="Lanjutkan dengan Google">
              </div>
          </div>
      </div>
    </div>
    `;
  },

  async afterRender() {
    document.querySelector('app-bar').style.display = 'none';
    document.querySelector('hero-element').style.display = 'none';
    const footerBar = document.querySelector('footer-bar');
    footerBar.style.display = 'none';
  },
};

export default SignIn;
