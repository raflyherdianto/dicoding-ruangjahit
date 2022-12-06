/* eslint-disable import/prefer-default-export */
import CONFIG from '../../globals/config';

const createProductItemTemplate = (product) => `
    <a href="#/detail-product/${product.id}">
    <div class="card">
        <div class="image-container">
        <div class="header-product">
            <div class="d-flex justify-content-between align-items-center">
            <span class="like-btn"><i class="bi bi-bookmark-heart"></i></i></span>
            </div>
        </div>
        <img src="${CONFIG.LARGE_BASE_IMAGE_URL + product.pictureId}" class="img-fluid rounded thumbnail-image">
        </div>

        <div class="product-detail-container p-2">
            <div class="justify-content-between align-items-center">
            <h5 class="product-name">${product.name}</h5>
            <p class="price">${product.city}</p>
            </div>

            <div class="d-flex justify-content-between align-items-center pt-1">
            <div>
                <i class="fa fa-star-o rating-star"></i>
                <span class="rating-number">${product.rating}</span>
            </div>
            <span class="btn-buy">Add to cart</span>
            
            </div>
        </div>
    </div>
    </a>

`;

const createProductDetailTemplate = (product) => `
    <div class="container detail">
        <div class="row">
            <div class="col-md-5">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="${CONFIG.LARGE_BASE_IMAGE_URL + product.pictureId}" class="d-block w-100 pb-1" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="${CONFIG.LARGE_BASE_IMAGE_URL + product.pictureId}" class="d-block w-100 pb-1" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="${CONFIG.LARGE_BASE_IMAGE_URL + product.pictureId}" class="d-block w-100 pb-1" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="${CONFIG.LARGE_BASE_IMAGE_URL + product.pictureId}" class="d-block w-100 pb-1" alt="...">
                    </div>
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
        
                <div class="small-img-group">
                    <div class="small-img-col">
                    <img src="${CONFIG.LARGE_BASE_IMAGE_URL + product.pictureId}" width="100%" class="small-img" alt="...">
                    </div>
                    <div class="small-img-col">
                    <img src="${CONFIG.LARGE_BASE_IMAGE_URL + product.pictureId}" width="100%" class="small-img" alt="...">
                    </div>
                    <div class="small-img-col">
                    <img src="${CONFIG.LARGE_BASE_IMAGE_URL + product.pictureId}" width="100%" class="small-img" alt="...">
                    </div>
                    <div class="small-img-col">
                    <img src="${CONFIG.LARGE_BASE_IMAGE_URL + product.pictureId}" width="100%" class="small-img" alt="...">
                    </div>
                </div>
                </div>
                <div class="col-md-7">
                <h1 class="name-product">Blouse Wanita</h1>
                <div class="detail-product">
                    <p><b>Rating:</b> 5<i class="bi bi-star-fill"></i> (200)</p>
                    <p><b>Stock: </b><span>10</span></p>
                    <p class="price pt-3 pb-3">Rp. 100.000,-</p>
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
                        ${product.customerReviews.map((review) => `
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3177/3177440.png"
                            alt="Foto dari akun ${review.name}"
                            width="48"
                            height="48"
                            class="reviewer_photo"
                            >
                        <div class="review-content">
                        <p class="reviewer_name">${review.name}</p>
                        <p class="reviewer_date">${review.date}</p>
                        <p class="reviewer_comment">"${review.review}"</p>
                        </div>
                        `).join('<br>')}
                      </li>
                    </ul>
                  </div>
                </div>
            </div>
        </div>
`;
export {
  createProductItemTemplate,
  createProductDetailTemplate,
};
