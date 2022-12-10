import API_ENDPOINT from '../globals/api-endpoint';

class UserDataSource {
  static async getUserData() {
    const token = localStorage.getItem('token');
    const response = await fetch(API_ENDPOINT.USER, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    const responseJson = await response.json();
    return responseJson.data;
  }
}

export default UserDataSource;
