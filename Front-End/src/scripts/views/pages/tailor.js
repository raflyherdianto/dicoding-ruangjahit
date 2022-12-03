import '../element/search-bar';

const Tailor = {
  async render() {
    return `
      <div class="container-tailor">
        <search-bar></search-bar>
        <div class="show-filter">
          <button id="showFilterButton">
            Search by <span>Filter 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg></span>
          </button>
        </div> 

        <div class="tailors-content">
            <div class="tailor-list">
                <div class="card">
                    <img src="./tailors/tailor1.jpg" class="img-fluid float-start rounded-circle p-2" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Cameron Williamson</h5>
                        <p class="card-text">4140 Parker Rd. Allentown, New Mexico 31134</p>
                        <a href="#" class="btn-detail">Detail</a>
                    </div>
                </div>

                <div class="card">
                    <img src="./tailors/tailor1.jpg" class="img-fluid float-start rounded-circle p-2" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Cameron Williamson</h5>
                        <p class="card-text">4140 Parker Rd. Allentown, New Mexico 31134</p>
                        <a href="#" class="btn-detail">Detail</a>
                    </div>
                </div>

                <div class="card">
                    <img src="./tailors/tailor1.jpg" class="img-fluid float-start rounded-circle p-2" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Cameron Williamson</h5>
                        <p class="card-text">4140 Parker Rd. Allentown, New Mexico 31134</p>
                        <a href="#" class="btn-detail">Detail</a>
                    </div>
                </div>

                <div class="card">
                    <img src="./tailors/tailor1.jpg" class="img-fluid float-start rounded-circle p-2" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Cameron Williamson</h5>
                        <p class="card-text">4140 Parker Rd. Allentown, New Mexico 31134</p>
                        <a href="#" class="btn-detail">Detail</a>
                    </div>
                </div>

                <div class="card">
                    <img src="./tailors/tailor1.jpg" class="img-fluid float-start rounded-circle p-2" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Cameron Williamson</h5>
                        <p class="card-text">4140 Parker Rd. Allentown, New Mexico 31134</p>
                        <a href="#" class="btn-detail">Detail</a>
                    </div>
                </div>
            </div>

          <aside>
            <h5>Filter Search</h5>
            <div class="category-filter">
              <p>Category</p>
              <div class="category-filter-list">
                <div class="mukenah-filter">
                  <input type="checkbox" name="category" value="mukenah" id="check-mukenah">
                  <label for="check-mukenah">Mukenah</label>
                </div>
                <div class="gorden-filter">
                  <input type="checkbox" name="category" value="gorden" id="check-gorden">
                  <label for="check-gorden">Gorden</label>
                </div>
                <div class="sprei-filter">
                  <input type="checkbox" name="category" value="sprei" id="check-sprei">
                  <label for="check-sprei">Sprei</label>
                </div>
                <div class="kemeja-filter">
                  <input type="checkbox" name="category" value="kemeja" id="check-kemeja">
                  <label for="check-kemeja">Kemeja</label>
                </div>
                <div class="gamis-filter">
                  <input type="checkbox" name="category" value="gamis" id="check-gamis">
                  <label for="check-gamis">Gamis</label>
                </div>
                <div class="celana-filter">
                  <input type="checkbox" name="category" value="celana" id="check-celana">
                  <label for="check-celana">Celana</label>
                </div>
                <div class="rok-filter">
                  <input type="checkbox" name="category" value="rok" id="check-rok">
                  <label for="check-rok">Rok</label>
                </div>
              </div>
            </div>
            
            <div class="rate-filter">
              <p>Rating</p>
              <center class="mb-2">
              <span><i class="bi bi-star-fill checked"></i></span>
              <span><i class="bi bi-star-fill checked"></i></span>
              <span><i class="bi bi-star-fill checked"></i></span>
              <span><i class="bi bi-star-fill checked"></i></span>
              <span><i class="bi bi-star"></i></span>
              </center>
            </div>
            
            <div class="location-filter">
              <p>Location</p>
              <select class="form-select" aria-label="Select your location">
                <option selected>Select your location</option>
                <option value="Aceh">ACEH</option>
                <option value="Sumatera">SUMATERA</option>
                <option value="Jawa Barat">JAWA BARAT</option>
                <option value="Jawa Tengah">JAWA TENGAH</option>
                <option value="Jawa Timur">JAWA TIMUR</option>
                <option value="Kalimantan">KALIMANTAN</option>
              </select>
            </div>
            
            <input type="submit" name="search" value="Search">
          </aside>

        </div>
      </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Tailor;
