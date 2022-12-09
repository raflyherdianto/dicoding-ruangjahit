/* eslint-disable no-undef */
/* eslint-disable prefer-destructuring */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
// form rating

let count;

function starmark(item) {
  count = item.id[0];
  sessionStorage.starRating = count;
  const subid = item.id.substring(1);
  for (let i = 0; i < 5; i++) {
    if (i < count) {
      document.getElementById((i + 1) + subid).style.color = 'orange';
    } else {
      document.getElementById((i + 1) + subid).style.color = 'black';
    }
  }
}

function result() {
  const name = document.getElementById('name');
  const rate = document.getElementById('rate');
  const commentRate = document.getElementById('comment-rate');

  name.innerHTML = document.getElementById('name-form').value;
  if (count == 1) {
    rate.innerHTML += '<i class="bi-star-fill star-checked">';
  }
  if (count == 2) {
    rate.innerHTML += '<i class="bi-star-fill star-checked"><i class="bi-star-fill star-checked">';
  }
  if (count == 3) {
    rate.innerHTML += '<i class="bi-star-fill star-checked"><i class="bi-star-fill star-checked"><i class="bi-star-fill star-checked">';
  }
  if (count == 4) {
    rate.innerHTML += '<i class="bi-star-fill star-checked"><i class="bi-star-fill star-checked"><i class="bi-star-fill star-checked"><i class="bi-star-fill star-checked">';
  }
  if (count == 5) {
    rate.innerHTML += '<i class="bi-star-fill star-checked"><i class="bi-star-fill star-checked"><i class="bi-star-fill star-checked"><i class="bi-star-fill star-checked"><i class="bi-star-fill star-checked">';
  }
  commentRate.innerHTML = document.getElementById('comment').value;
}

// offcanvar cart
const bsOffcanvas = new bootstrap.Offcanvas('#myOffcanvas');
