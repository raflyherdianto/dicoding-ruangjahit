/* eslint-disable quote-props */
import API_ENDPOINT from '../globals/api-endpoint';
// import getData from '../helper/fetch-helper';
// import postData from '../helper/fetch-helper';

class TailorDataSource {
  static async getAllTailor() {
    const response = await fetch(API_ENDPOINT.TAILOR);
    const responseJson = await response.json();
    return responseJson.data;
  }

  static async getTailorDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_TAILOR(id));
    const responseJson = await response.json();
    return responseJson.data;
  }

  static async getTailorLoginProduct() {
    const token = localStorage.getItem('token');
    const response = await fetch(API_ENDPOINT.TAILOR_LOGIN_PRODUCT, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    const responseJson = await response.json();
    return responseJson.data;
  }
}

export default TailorDataSource;
