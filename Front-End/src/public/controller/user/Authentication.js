/* eslint-disable array-callback-return */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable quote-props */
/* eslint-disable camelcase */
/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
// Login
function Login() {
  const username = document.getElementById('username');
  const password = document.getElementById('password');

  const data = JSON.stringify({
    username: username.value,
    password: password.value,
  });

  const url = 'https://backend-ruangjahit-production.up.railway.app/api/login';

  fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: data,
  })
    .then((response) => response.json().then((data) => {
      console.log(response.status);
      if (response.status == 200) {
        // alert('Login Success, Selamat Datang! ' + username.value);
        window.location = '#/user-home';
        username.value = '';
        password.value = '';
        localStorage.setItem('token', data.data.token);
      } else {
        alert('Login Gagal');
      }
    }))
    .catch((error) => {
      alert(`Error, Terjadi kesalahan ${error}`);
    });
}

// Regis
function Registration() {
  const name = document.getElementById('name');
  const username = document.getElementById('username');
  const first_address = document.getElementById('first_address');
  const first_phone = document.getElementById('first_phone');
  const province_id = document.getElementById('province_id');
  const regency_id = document.getElementById('regency_id');
  const zip_code = document.getElementById('zip_code');
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const password_confirmation = document.getElementById('password_confirmation');

  const data = JSON.stringify({
    name: name.value,
    username: username.value,
    email: email.value,
    password: password.value,
    password_confirmation: password_confirmation.value,
    first_address: first_address.value,
    province_id: province_id.value,
    regency_id: regency_id.value,
    zip_code: zip_code.value,
    first_phone: first_phone.value,
  });
  const url = 'https://backend-ruangjahit-production.up.railway.app/api/register';
  fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    body: data,
  }).then((response) => response.json().then((data) => {
    console.log(response.status);
    if (response.status == 200) {
      // alert('Data Berhasil Disimpan!');
      window.location = '#/sign-in';
      name.value = '';
      username.value = '';
      email.value = '';
      password.value = '';
      password_confirmation.value = '';
      first_address.value = '';
      province_id.value = '';
      regency_id.value = '';
      zip_code.value = '';
      first_phone.value = '';
    } else {
      console.log(data);
      alert(`Error, terjadi kesalahan ${data.message}`);
    }
  })).catch((error) => {
    alert(`Error, terjadi kesalahan ${error}`);
  });
}

// Logout
const Logout = () => {
  token = localStorage.getItem('token');
  console.log(token);

  fetch('https://backend-ruangjahit-production.up.railway.app/api/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })
    .then((response) => response.json().then((data) => {
      console.log(response.status);
      if (response.status == 200) {
        alert('Logout Success');
        window.location = '#/home';
        localStorage.removeItem('token');
      } else {
        alert('Logout Gagal');
      }
    }));
};
