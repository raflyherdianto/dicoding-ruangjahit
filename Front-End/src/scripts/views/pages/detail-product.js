/* eslint-disable linebreak-style */
import UrlParser from '../../routes/url-parser';
import ProductDataSource from '../../data/productdb-source';
import { createProductDetailTemplate } from '../templates/template-creator';
// import LikeButtonPresenter from '../../utils/like-button-presenter';

const DetailProduct = {
  async render() {
    return `
            <div class="product" id="product"></div>
        `;
  },

  async afterRender() {
    // document.querySelector('hero-element').style.display = 'none';
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const product = await ProductDataSource.getProductDetail(url.id);
    const productContainer = document.querySelector('#product');
    productContainer.innerHTML = createProductDetailTemplate(product);
  },
};

export default DetailProduct;
