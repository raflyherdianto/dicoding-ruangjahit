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
}

export default TailorDataSource;
