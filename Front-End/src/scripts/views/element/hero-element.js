/* eslint-disable linebreak-style */
/* eslint-disable eol-last */

class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="hero rows containers">
      <div>
        <h1>Buat Desain Impianmu<br>bersama RuangJahit!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, commodi sequi saepe praesentium aliquid doloremque est laudantium blanditiis voluptate corrupti aspernatur!</p>
        <a href="#/product" class="hero-btn">Pesan Sekarang!</a>
      </div>
      <div class="rows">
        <img src="./assets/header.png" width="650px" alt="">
      </div>
    </section>
    `;
  }
}

customElements.define('hero-element', HeroElement);