/* eslint-disable linebreak-style */
import UrlParser from '../../../routes/url-parser';
import ProductDataSource from '../../../data/productdb-source';
import { createProductDetailTemplate } from '../../templates/template-creator';
import LikeButtonPresenter from '../../../utils/like-button-presenter';

const DetailProductTailor = {
  async render() {
    return `
            <app-bar-tailor></app-bar-tailor>
            <div class="detail-products" id="detail-products"></div>
            <div class="container form-rating">
              <h5 class="sub-title">Comment and Rate</h5>
              <hr>
              <form id="form-rate" name="form-rate" onsubmit="return false">
              <span onmouseover="starmark(this)" onclick="starmark(this)" id="1one" style="font-size:40px;cursor:pointer;"><input value="1" style="display: none;"><i class="bi bi-star"></i></span>
              <span onmouseover="starmark(this)" onclick="starmark(this)" id="2one" style="font-size:40px;cursor:pointer;"><input value="2" style="display: none;"><i class="bi bi-star"></i></span>
              <span onmouseover="starmark(this)" onclick="starmark(this)" id="3one" style="font-size:40px;cursor:pointer;"><input value="3" style="display: none;"><i class="bi bi-star"></i></span>
              <span onmouseover="starmark(this)" onclick="starmark(this)" id="4one" style="font-size:40px;cursor:pointer;"><input value="4" style="display: none;"><i class="bi bi-star"></i></span>
              <span onmouseover="starmark(this)" onclick="starmark(this)" id="5one" style="font-size:40px;cursor:pointer;"><input value="5" style="display: none;"><i class="bi bi-star"></i></span>
              <br/>
              <textarea  style="margin-top:5px;" class="form-control" rows="3" id="comment" placeholder="Enter your review"></textarea>

              <button  onclick="result()" type="button" style="margin-top:10px;margin-left:5px;" class="btn btn-lg btn-warning">Submit</button>
              </form>
            </div>
            <div id="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    // document.querySelector('hero-element').style.display = 'none';
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    
    const product = await ProductDataSource.getDetailProduct(url.id);
    const productContainer = document.querySelector('#detail-products');
    productContainer.innerHTML += createProductDetailTemplate(product);

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

export default DetailProductTailor;
