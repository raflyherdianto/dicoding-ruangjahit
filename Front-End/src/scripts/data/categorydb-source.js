/* eslint-disable eol-last */
/* eslint-disable quote-props */
import API_ENDPOINT from '../globals/api-endpoint';
// import getData from '../helper/fetch-helper';
// import postData from '../helper/fetch-helper';

class CategoryDataSource {
  static async getAllCategory() {
    const response = await fetch(API_ENDPOINT.CATEGORY);
    const responseJson = await response.json();
    return responseJson.data;
  }
}
export default CategoryDataSource;