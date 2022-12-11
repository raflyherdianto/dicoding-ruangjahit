/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
/* eslint-disable import/prefer-default-export */
import CONFIG from '../../globals/config';

const createProductItemTemplate = (product) => `
    <div class="card">
        <div class="image-container">
            <div class="header-product">
                <div class="d-flex justify-content-between align-items-center">
                </div>
            </div>
        </div>

        <div class="product-detail-constainer p-2">
            <div class="justify-content-between align-items-center">
                <h5 class="product-name"><a href="#/detail-product/${product.id}">${product.name}</a></h5>
                <p class="price">Rp. ${product.price}</p>
            </div>

            <div class="d-flex justify-content-between align-items-center pt-1">
                <div>
                    <i class="bi bi-star-fill rating-star"></i>
                    <span class="rating-number">${product.rating}</span>
                </div>
                <span class="btn-buy"><a href="#/product-cart">Add to cart</a></span>
            </div>
        </div>
    </div>
`;

const createProductDetailTemplate = (product) => `
    <div class="container detail">
        <div class="row">
            <div class="col-md-5">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://picsum.photos/100" class="d-block w-100 pb-1" alt="...">
                    </div>
                    ${product.image_products.map((image_products) => `
                        <div class="carousel-item">
                            <img src="https://picsum.photos/200" class="d-block w-100 pb-1" alt="...">
                        </div>
                    `)}
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                    </button>
                </div>
        
                </div>
                <div class="col-md-7">
                <h1 class="name-product">${product.name}</h1>
                <div class="detail-product">
                    <p><b>Rating:</b>${product.rating}<i class="bi bi-star-fill"></i></p>
                    <p><b>Stock: </b><span>${product.stock}</span></p>
                    <p class="price pt-3 pb-3">Rp. ${product.price},-</p>
                </div>
                <form action="#" method="post">
                    <div class="color">
                        <label for="label" class="pb-2 label-form">Color :</label>

                        <input type="checkbox" class="btn-check" name="options" id="black" value="black" autocomplete="off">
                        <label class="btn form-color" for="black" style="background-color: #000;"></label>
                    </div>
                    <div class="size-chart pb-3">
                        <label for="label" class="pb-2 label-form">Size :</label>

                        <input type="checkbox" class="btn-check input-size" name="options" id="s" autocomplete="off">
                        <label class="btn form-size" for="s">S</label>
                        
                        <input type="checkbox" class="btn-check input-size" name="options" id="m" autocomplete="off">
                        <label class="btn form-size" for="m">M</label>
            
                        <input type="checkbox" class="btn-check input-size" name="options" id="l" autocomplete="off">
                        <label class="btn form-size" for="l">L</label>
            
                        <input type="checkbox" class="btn-check input-size" name="options" id="xl" autocomplete="off">
                        <label class="btn form-size" for="xl">XL</label>
                    </div>
                    <div class="quantity">
                        <div class="input-group label-form mb-3">
                        <span class="input-group-text" id="inputGroup-sizing-default">Quantity:</span>
                        <input type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
                        </div>
                    </div>
                    <div class="btn-product">
                        <input type="submit" name="search" class="buy-now" value="Buy Now">
                        <input type="submit" name="search" class="add-cart" value="Add to cart">
                    </div>
                </form>
                
                </div>
                <div class="col-12 pt-5 pb-0">
                <h5 class="sub-title">Description</h5>
                <hr>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo numquam alias velit officia expedita consectetur perspiciatis, ad exercitationem vero tenetur. Accusantium aliquam culpa numquam asperiores aliquid, repellendus praesentium quos minus?</p>
                <h5 class="sub-title">Reviews</h5>
                <hr>
                <div class="product-review">

                    <ul>
                      <li class="review-item">
                        ${product.reviews.map((reviews) => `
                            <div class="review-content">
                            <p class="reviewer_name" id="name">${reviews.user_id}</p>
                            <p class="reviewer_date" id="rate">${reviews.star}</p>
                            <p class="reviewer_comment" id="comment-rate">"${reviews.description}"</p>
                            </div>
                        `).join('<br>')}
                      </li>
                    </ul>
                  </div>
                </div>
            </div>
        </div>
`;

const createUserDetailTemplate = (data) => `
    <p style="font-size: 1.5rem;"><strong>${data.name}</strong></p>
    <p>${data.username}</p>
    <p>${data.first_phone} - ${data.first_address}</p>
`;

const createUserPictureTemplate = (data) => `
    <img src="https://ui-avatars.com/api/?name=${data.username}&size=250" class="img-fluid" alt="">
`;

const createTailorDetailTemplate = (data) => `
    <p style="font-size: 1.5rem;"><strong>${data.store_name}</strong></p>
    <p><strong>${data.username} </strong> ${data.name}</p>
    <p>${data.first_phone} - ${data.first_address}</p>
    <small>
    <span class="category" style="font-size: 0.8rem;">${data.store_status}</span>
    </small>
`;

const createLikeProductButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like like-solid">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
  </button>
`;

const createUnlikeProductButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"/></svg>
  </button>
`;

const createTailorItemTemplate = (tailor) => `
    <div class="card">
        <img src="${tailor.photo}" class="img-fluid float-start rounded-circle p-2" alt="...">
        <div class="card-body">
            <h5 class="card-title">${tailor.name}</h5>
            <p class="card-text">${tailor.first_address}</p>
            <a href="#/detail-tailor/${tailor.id}" class="btn-detail">Detail</a>
        </div>
    </div>
`;

const createProvinceItemTemplate = (province) => `
<option value="${province.id}">${province.name}</option>
`;

const createRegencyItemTemplate = (regency) => `
<option value="${regency.id}">${regency.name}</option>
`;

const createLoginTailorProductTemplate = (product) => `
                        <td scope="col">${product.id}</td>
                        <td scope="col">${product.name}</td>
                        <td scope="col">${product.category_product.name}</td>
                        <td scope="col">${product.price}</td>
                        <td scope="col">${product.description}</td>
                        <td scope="col">${product.rating}</td>
                        <td scope="col">${product.stock}</td>
                        <td scope="col">${product.color}</td>
                        <td scope="col">${product.weight}</td>
                        <td scope="col">${product.size}</td>
                        <td scope="col">
                        <button class="btn btn-warning">Delete</button>
                        <button class="btn btn-warning" type="button" data-bs-toggle="modal" data-bs-target="#edit-productModal">Edit</button>
                        </td>
`;
const createCategoryTailorTemplate = (category_product) => `
                        <td scope="col">${category_product.id}</td>
                        <td scope="col">${category_product.name}</td>
`;

export {
  createProductItemTemplate,
  createProductDetailTemplate,
  createLikeProductButtonTemplate,
  createUnlikeProductButtonTemplate,
  createTailorItemTemplate,
  createProvinceItemTemplate,
  createRegencyItemTemplate,
  createLoginTailorProductTemplate,
  createCategoryTailorTemplate,
  createUserDetailTemplate,
  createTailorDetailTemplate,
};
