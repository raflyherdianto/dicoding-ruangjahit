/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable linebreak-style */
import FavoriteProductIdb from '../data/favorite-product-idb';
import { createLikeProductButtonTemplate, createUnlikeProductButtonTemplate } from '../views/templates/template-creator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, product }) {
    this._likeButtonContainer = likeButtonContainer;
    this._product = product;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._product;

    if (await this._isproductExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isproductExist(id) {
    const product = await FavoriteProductIdb.getProduct(id);
    return !!product;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeProductButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteProductIdb.putProduct(this._product);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeProductButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteProductIdb.deleteProduct(this._product.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
