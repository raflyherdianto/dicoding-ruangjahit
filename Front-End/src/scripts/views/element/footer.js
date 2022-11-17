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
               <h2>Tentang RuangJahit</h2>
               <p>Lorem ipsum dolor sit amet consectetur.</p>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Navigasi</h4>
  	 			<ul>
                   <li><a href="#/home">Home</a></li>
                   <li><a href="#/product">Product</a></li>
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
                   <img src="https://rekreartive.com/wp-content/uploads/2018/11/Logo-Unsika-Universitas-Singaperbangsa-Karawang-Original-PNG.png" alt="Logo UNSIKA" width="54px">
                   <img src="https://www.unhas.ac.id/wp-content/uploads/2022/09/Logo-Resmi-Unhas-1.png" alt="Logo UNHAS" width="50px">
                   <img src="https://rekreartive.com/wp-content/uploads/2018/10/Logo-Polinema-Politeknik-Negeri-Malang-PNG-1140x1138.png" alt="Logo POLINEMA" width="52px"><br>
                   <img src="https://www.dicoding.com/blog/wp-content/uploads/2014/12/dicoding-header-logo.png" alt="Logo DICODING" width="70px">
                   <img src="https://lh3.googleusercontent.com/-nRrSWU--Dfk/X2LaaEbsIyI/AAAAAAAAAQA/n7AH_xi8iAI9WT7aslf0YGAt4Ab_lElvwCLcBGAsYHQ/s1600/1600313957610819-0.png" alt="Logo KAMPUS MERDEKA" width="58px">
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