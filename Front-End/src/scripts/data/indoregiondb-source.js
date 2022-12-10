import API_ENDPOINT from '../globals/api-endpoint';
// import getData from '../helper/fetch-helper';
// import postData from '../helper/fetch-helper';

class IndoRegionDataSource {
  static async getAllProvince() {
    const response = await fetch(API_ENDPOINT.PROVINCE);
    const responseJson = await response.json();
    return responseJson.data;
  }

  static async getAllRegencies() {
    const response = await fetch(API_ENDPOINT.REGENCY);
    const responseJson = await response.json();
    return responseJson.data;
  }
}

export default IndoRegionDataSource;
