/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable quote-props */
/* eslint-disable camelcase */
/* eslint-disable eqeqeq */
/* eslint-disable no-shadow */
// Login
function LoginTailor() {
  const username = document.getElementById('username-tailor');
  const password = document.getElementById('password-tailor');

  const data = JSON.stringify({
    username: username.value,
    password: password.value,
  });

  const url = 'https://backend-ruangjahit-production.up.railway.app/api/admin/login';

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
        window.location = '#/tailor-home';
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
function RegistrationTailor() {
  const name = document.getElementById('name_tailor');
  const username = document.getElementById('username_tailor');
  const first_address = document.getElementById('first_address_tailor');
  const first_phone = document.getElementById('first_phone_tailor');
  const province_id = document.getElementById('province_id_tailor');
  const regency_id = document.getElementById('regency_id_tailor');
  const zip_code = document.getElementById('zip_code_tailor');
  const email = document.getElementById('email_tailor');
  const password = document.getElementById('password_tailor');
  const password_confirmation = document.getElementById('password_confirmation_tailor');

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
  const url = 'https://backend-ruangjahit-production.up.railway.app/api/admin/register';
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
      window.location = '#/sign-in-tailor';
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
const LogoutTailor = () => {
  // let key = JSON.stringify(localStorage.getItem('token'));

  //     let token = JSON.parse(key);
  token = localStorage.getItem('token');
  console.log(token);

  fetch('https://backend-ruangjahit-production.up.railway.app/api/admin/logout', {
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
