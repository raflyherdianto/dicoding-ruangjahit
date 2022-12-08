const ProductCart = {
  async render() {
    return `
    <app-bar-user></app-bar-user>
      <div class="container-product-cart">
        <h1>Daftar Pesanan</h1>
        <div class="separator"></div>

        <div class="content-order-list">
            <div class="card">
                <div class="card-head">
                    <img class="card-img-left example-card-img-responsive" src="../product/1.png"/>
                </div>
                
                <div class="card-body">
                    <h4 class="card-title h5 h4-sm">Blouse</h4>
                    <p class="card-price">Harga : Rp. 80.000,-</p>
                    <p class="card-quantity">Kuantitas : 1 pcs</p>
                    <p class="card-description">Catatan : Mauris quis pellentesque eros, vitae dictum massa.</p>
                </div>

                <div class="card-btn">
                    <a href="#" class="btn-delete"><i class="bi bi-x-lg"></i></a>
                </div>
            </div>

            <div class="card">
                <div class="card-head">
                    <img class="card-img-left example-card-img-responsive" src="../product/1.png"/>
                </div>
                
                <div class="card-body">
                    <h4 class="card-title h5 h4-sm">Blouse</h4>
                    <p class="card-price">Harga : Rp. 80.000,-</p>
                    <p class="card-quantity">Kuantitas : 1 pcs</p>
                    <p class="card-description">Catatan : Mauris quis pellentesque eros, vitae dictum massa.</p>
                </div>

                <div class="card-btn">
                    <a href="#" class="btn-delete"><i class="bi bi-x-lg"></i></a>
                </div>
            </div>

            <div class="card">
                <div class="card-head">
                    <img class="card-img-left example-card-img-responsive" src="../product/1.png"/>
                </div>
                
                <div class="card-body">
                    <h4 class="card-title h5 h4-sm">Blouse</h4>
                    <p class="card-price">Harga : Rp. 80.000,-</p>
                    <p class="card-quantity">Kuantitas : 1 pcs</p>
                    <p class="card-description">Catatan : Mauris quis pellentesque eros, vitae dictum massa.</p>
                </div>

                <div class="card-btn">
                    <a href="#" class="btn-delete"><i class="bi bi-x-lg"></i></a>
                </div>
            </div>
        </div>

        <div class="total-order">
            <p class="card-quantity">Total : Rp. 240.000,- </p>
            <a href="#" class="btn-checkout">Lanjut Pembayaran</a>
        </div>

      </div>

    
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default ProductCart;
