/* eslint-disable linebreak-style */
/* eslint-disable eol-last */

class AppBarUser extends HTMLElement {
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
                      <a class="nav-link" aria-current="page" href="#/user-home">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#/user-product">Product</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#/user-tailor">Tailor</a>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Favorite
                      </a>
                      <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#/user-favorite">Favorite Product</a></li>
                        <li><a class="dropdown-item" href="#/user-favorite">Favorite Tailors</a></li>
                      </ul>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#/user-about-us">About Us</a>
                    </li>
                  </ul>
                  <li class="btnLeft"><a href="#/user-product-cart" class="text-white" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="bi bi-bag-fill"></i><sub id="count">  0</sub></a></li>
                  <li class="btnRight"><a href="#/user-profile" class="text-white"><i class="bi bi-person-circle"></i></a></li>
                </div>
              </div>
        </nav>
    </header>
    <!-- Filter Modal -->
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasRightLabel">My Cart</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>

          <div class="offcanvas-body my-cart">
            <div class="content-order-list">
              <div class="card mb-4">
                  <div class="card-head">
                      <img class="card-img-left example-card-img-responsive" src="../product/1.png"/>
                  </div>
                  
                  <div class="card-body">
                      <h4 class="card-title h5 h4-sm">Blouse</h4>
                      <p class="card-price">Harga : Rp. 80.000,-</p>
                      <p class="card-quantity">Kuantitas : 1 pcs</p>
                  </div>
              </div>

              <div class="card mb-4">
                  <div class="card-head">
                      <img class="card-img-left example-card-img-responsive" src="../product/1.png"/>
                  </div>
                  
                  <div class="card-body">
                      <h4 class="card-title h5 h4-sm">Blouse</h4>
                      <p class="card-price">Harga : Rp. 80.000,-</p>
                      <p class="card-quantity">Kuantitas : 1 pcs</p>
                  </div>
              </div>

              <div class="card mb-4">
                  <div class="card-head">
                      <img class="card-img-left example-card-img-responsive" src="../product/1.png"/>
                  </div>
                  
                  <div class="card-body">
                      <h4 class="card-title h5 h4-sm">Blouse</h4>
                      <p class="card-price">Harga : Rp. 80.000,-</p>
                      <p class="card-quantity">Kuantitas : 1 pcs</p>
                  </div>
              </div>
            </div>

            <div class="total-order">
                <p class="card-quantity">Total : Rp. 240.000,- </p>
                <a href="#" class="btn-checkout">Lanjut Pembayaran</a>
            </div>
          </div>
      </div>
    `;
  }
}

customElements.define('app-bar-user', AppBarUser);