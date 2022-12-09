/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable eqeqeq */
/* eslint-disable camelcase */
/* eslint-disable func-names */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
import 'bootstrap/dist/js/bootstrap.bundle';
import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import './views/templates/template-creator';

import swRegister from './utils/sw-register';
// eslint-disable-next-line import/no-cycle
import App from './views/app';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

var myModal = document.getElementById('myModal');
var myInput = document.getElementById('myInput');

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus();
});

const allHoverImages = document.querySelectorAll('.hover-container div img');
const imgContainer = document.querySelector('.img-container');

window.addEventListener('DOMContentLoaded', () => {
  allHoverImages[0].parentElement.classList.add('active');
});

allHoverImages.forEach((image) => {
  image.addEventListener('mouseover', () => {
    imgContainer.querySelector('img').src = image.src;
    // eslint-disable-next-line no-use-before-define
    resetActiveImg();
    image.parentElement.classList.add('active');
  });
});

function resetActiveImg() {
  allHoverImages.forEach((img) => {
    img.parentElement.classList.remove('active');
  });
}
