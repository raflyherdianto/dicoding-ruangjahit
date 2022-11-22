const Home = {
  async render() {
    return `
    <section class="hero rows containers">
      <div>
        <h1>Buat Desain Impianmu<br>bersama RuangJahit!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, commodi sequi saepe praesentium aliquid doloremque est laudantium blanditiis voluptate corrupti aspernatur!</p>
        <a href="#/product" class="hero-btn">Pesan Sekarang!</a>
      </div>
      <div class="rows">
        <img src="./assets/header.png" width="650px" alt="">
      </div>
    </section>

    <section class="first">
    <h2>Top Selling Item</h2>
    </section>

    <section class="second">
        <h2>Mengapa harus memilih Ruangjahit?</h2>
    </section>

    <section class="third">
        <h2>Our Top Tailor</h2>
        <div class="row">
            <div class="col">
                <div class="card">
                    
                    <h5 class="m-1"><img src="/tailors/tailor1.png" width="100px" class="img-fluid float-start rounded-circle p-2" alt=""><br>Lorem Ipsum<br><span><a href="#">see more</a></span></h5>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    
                    <h5 class="m-1"><img src="/tailors/tailor1.png" width="100px" class="img-fluid float-start rounded-circle p-2" alt=""><br>Lorem Ipsum<br><span><a href="#">see more</a></span></h5>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    
                    <h5 class="m-1"><img src="/tailors/tailor1.png" width="100px" class="img-fluid float-start rounded-circle p-2" alt=""><br>Lorem Ipsum<br><span><a href="#">see more</a></span></h5>
                </div>
            </div>
            <div class="col">
                <div class="card">
                    
                    <h5 class="m-1"><img src="/tailors/tailor1.png" width="100px" class="img-fluid float-start rounded-circle p-2" alt=""><br>Lorem Ipsum<br><span><a href="#">see more</a></span></h5>
                </div>
            </div>
        </div>
    </section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Home;
