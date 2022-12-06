/* eslint-disable linebreak-style */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */

import API_ENDPOINT from '../globals/api-endpoint';
// import getData from '../helper/fetch-helper';
// import postData from '../helper/fetch-helper';

class ProductDataSource {
  static async getAllProduct() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async getProductDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }
}

export default ProductDataSource;
