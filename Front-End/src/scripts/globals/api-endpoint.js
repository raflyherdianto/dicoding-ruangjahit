/* eslint-disable linebreak-style */
import CONFIG from './config';

const API_ENDPOINT = {
  TAILOR: `${CONFIG.API_BASE_URL}/tailors`,
  DETAIL_TAILOR: (id) => `${CONFIG.API_BASE_URL}/tailors/${id}`,
  LIST: `${CONFIG.API_BASE_URL}/list`,
  DETAIL: (id) => `${CONFIG.API_BASE_URL}/detail/${id}`,
  ADD_REVIEW: `${CONFIG.API_BASE_URL}/review`,
};

export default API_ENDPOINT;
