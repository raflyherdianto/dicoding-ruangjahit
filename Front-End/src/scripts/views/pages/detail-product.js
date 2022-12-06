/* eslint-disable linebreak-style */
import UrlParser from '../../routes/url-parser';
import ProductDataSource from '../../data/productdb-source';
import { createProductDetailTemplate } from '../templates/template-creator';

const DetailProduct = {
  async render() {
    return `
            <div class="detail-products" id="detail-products"></div>
        `;
  },

  async afterRender() {
    // document.querySelector('hero-element').style.display = 'none';
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const product = await ProductDataSource.getProductDetail(url.id);
    const productContainer = document.querySelector('#detail-products');
    productContainer.innerHTML = createProductDetailTemplate(product);
  },
};

export default DetailProduct;
