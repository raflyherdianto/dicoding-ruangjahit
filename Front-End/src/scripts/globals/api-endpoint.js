/* eslint-disable linebreak-style */
import CONFIG from './config';

const API_ENDPOINT = {
  PRODUCTS: `${CONFIG.API_BASE_URL}/products`,
  PRODUCTS_DETAIL: (id) => `${CONFIG.API_BASE_URL}/products/${id}`,
  TAILOR: `${CONFIG.API_BASE_URL}/tailors`,
  DETAIL_TAILOR: (id) => `${CONFIG.API_BASE_URL}/tailors/${id}`,
  LIST: `${CONFIG.API_BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.API_BASE_URL}/detail/${id}`,
  ADD_REVIEW: `${CONFIG.API_BASE_URL}/review`,
  PROVINCE: `${CONFIG.API_BASE_URL}/provinces`,
  REGENCY: `${CONFIG.API_BASE_URL}/regencies`,
  TAILOR_LOGIN_PRODUCT: `${CONFIG.API_BASE_URL}/admin/products`,
  CATEGORY: `${CONFIG.API_BASE_URL}/categories`,
  USER: `${CONFIG.API_BASE_URL}/user`,
};

export default API_ENDPOINT;
