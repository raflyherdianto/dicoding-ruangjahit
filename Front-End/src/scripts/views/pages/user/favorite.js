/* eslint-disable linebreak-style */
/* eslint-disable no-shadow */
import FavoriteProductIdb from '../../../data/favorite-product-idb';
import { createProductItemTemplate } from '../../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <app-bar-user></app-bar-user>
    <div class="container-product">
      <h4>Favorite Product</h4>
      <hr>
      <div class="products-content">
          <div class="product">
            <div class="row" id="products">
            </div>
          </div>
      </div>
      <div class="none" id="none"></div>
    </div>
    `;
  },

  async afterRender() {
    // document.querySelector('hero-element').style.display = 'none';
    const products = await FavoriteProductIdb.getAllProducts();
    const productContainer = document.querySelector('#products');
    const productNoneContainer = document.querySelector('#none');

    if (products.length < 1) {
      productNoneContainer.innerHTML = `
      <div class="alert">
      <h1><i class="bi bi-exclamation-circle-fill"></i></h1>
      <h2>There is no one product to show.</h2>
      </div>
      `;
    } else {
      products.forEach((product) => {
        productContainer.innerHTML += createProductItemTemplate(product);
      });
    }
  },
};

export default Favorite;
