/* eslint-disable no-tabs */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */

class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="row">
            <div class="footer-col">
                <h4>Tentang RuangJahit</h4>
                <p style="padding-right:16px">RuangJahit adalah website yang menghubungkan Pelanggan dan Penyedia Jasa Jahit yang bertujuan memperluas potensi Penyedia Jasa Jahit di Indonesia.</p>
            </div>
            <div class="footer-col">
                <h4>Navigasi</h4>
                <ul>
                    <li><a href="#/home">Home</a></li>
                    <li><a href="#/product">Product</a></li>
                    <li><a href="#/tailor">Tailor</a></li>
                    <li><a href="#/favorite">Favorite</a></li>
                    <li><a href="#/about-us">About Us</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Kontak Kami</h4>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/hagi-azzam-azzikri-108929215/">Hagi</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/anisa-f-466150141/">Anisa</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/nilam-magfira-az-zahra-24a40a20a/">Nilam</a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/mochraflyherdianto/">Rafly</a>
                    </li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Didukung oleh</h4>
                <div class="support-list">
                    <img src="./assets/logo-unsika.png" alt="Logo UNSIKA" width="50px">
                    <img src="./assets/logo-unhas.png" alt="Logo UNHAS" width="40px">
                    <img src="./assets/logo-polinema.png" alt="Logo POLINEMA" width="50px"><br>
                    <img src="./assets/logo-dicoding.png" alt="Logo DICODING" width="70px">
                    <img src="./assets/logo-kampusmerdeka.png" alt="Logo KAMPUS MERDEKA" width="58px">
                </div>
            </div>
        </div>
        <hr>
        <div class="footer-copyright">
            <p>Copyright © 2022 - RuangJahit. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
    `;
  }
}

customElements.define('footer-bar', Footer);