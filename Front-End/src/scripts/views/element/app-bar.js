/* eslint-disable linebreak-style */
/* eslint-disable eol-last */

class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header class="app-bar">
        <nav class="navbar navbar-expand-lg app-bar__navigation" id="navigationDrawer">
              <div class="container-fluid">
              <a class="navbar-brand" href="#">
              <img src="./assets/logo-ruangjahit.png" alt="Bootstrap" width="150">
              </a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" id="hamburgerButton" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="">☰</span>
              </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                      <a class="nav-link" aria-current="page" href="#/home">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#/product">Product</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#/tailor">Tailor</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Favorite
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#/favorite">Favorite Product</a></li>
                        <li><a class="dropdown-item" href="#/favorite">Favorite Tailors</a></li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#/about-us">About Us</a>
                    </li>
                  </ul>
                  <li class="login"><a href="#/sign-in" class="text-white">Masuk</a></li>
                  <li class="register"><a href="#/sign-up" class="text-white">Daftar</a></li>
                </div>
              </div>
        </nav>
    </header>
    `;
  }
}

customElements.define('app-bar', AppBar);