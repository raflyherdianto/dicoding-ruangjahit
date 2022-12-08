/* eslint-disable linebreak-style */
import UrlParser from '../../../routes/url-parser';
import ProductDataSource from '../../../data/productdb-source';
import { createProductDetailTemplate } from '../../templates/template-creator';
import LikeButtonPresenter from '../../../utils/like-button-presenter';

const DetailProduct = {
  async render() {
    return `
            <div class="detail-products" id="detail-products"></div>
            <div id="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    // document.querySelector('hero-element').style.display = 'none';
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const product = await ProductDataSource.getProductDetail(url.id);
    const productContainer = document.querySelector('#detail-products');
    productContainer.innerHTML = createProductDetailTemplate(product);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      product: {
        id: product.id,
        name: product.name,
        description: product.description,
        pictureId: product.pictureId,
        city: product.city,
        rating: product.rating,
      },
    });
  },
};

export default DetailProduct;
