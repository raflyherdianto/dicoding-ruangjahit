/* eslint-disable linebreak-style */
/* eslint-disable eol-last */

class AppBarLogin extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header class="app-bar">
      <div class="app-bar__brand">
        <img src="./assets/logo-ruangjahit.png" width="150px" alt="Logo Ruang Jahit">
      </div>
      <nav id="navigationDrawer" class="app-bar__navigation">
        <div>
          <ul>
              <li><a href="#/home" class="nav-link">Home</a></li>
              <li><a href="#/product" class="nav-link">Product</a></li>
              <li><a href="#/tailor" class="nav-link">Tailor</a></li>
              <li><a href="#/favorite" class="nav-link">Favorite</a></li>
              <li><a href="#/about-us" class="nav-link">About Us</a></li>

              <li class="login"><a href="#/sign-in"><i class="bi bi-bag-fill"></i></a></li>
              <li class="register"><a href="#/sign-up">Daftar</a></li>
          </ul>

        </div>
      </nav>
      <div class="app-bar__menu">
        <input type="checkbox" id="hamburgerButton">
        <label for="hamburgerButton" class="btn-toggle">☰</label>
      </div>
    </header>
    `;
  }
}

customElements.define('app-bar_login', AppBarLogin);