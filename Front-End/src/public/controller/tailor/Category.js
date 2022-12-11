/* eslint-disable no-shadow */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */

import Swal from 'sweetalert2';

function categoryAdd() {
  const name = document.getElementById('categoryName');
  const slug = document.getElementById('slug');

  const data = JSON.stringify({
    name: name.value,
    slug: slug.value,
  });

  const url = 'https://backend-ruangjahit-production.up.railway.app/api/categories';
  const token = localStorage.getItem('token');

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: data,
  })
    .then((response) => response.json().then((data) => {
      console.log(response.status);
      if (response.status == 200 || response.status == 201) {
        // alert('Login Success, Selamat Datang! ' + username.value);
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: 'Kategori berhasil ditambahkan!',
        });
      } else {
        console.log(data);
        alert('Gagal Menambahkan Kategori');
      }
    }))
    .catch((error) => {
      alert(`Error, Terjadi kesalahan ${error}`);
    });
}
