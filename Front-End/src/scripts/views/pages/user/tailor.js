import Swal from 'sweetalert2';
import TailorDataSource from '../../../data/tailordb-source';
import IndoRegionDataSource from '../../../data/indoregiondb-source';
import { createTailorItemTemplate, createRegencyItemTemplate } from '../../templates/template-creator';
import '../../components/search-bar';

const TailorUser = {
  async render() {
    return `
    <app-bar-user></app-bar-user>
      <div class="container-tailor">
        <search-bar></search-bar>
        <div class="show-filter">
          <button id="showFilterButton" data-bs-toggle="modal" data-bs-target="#filterTailorModal">
            Search by <span>Filter 
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg></span>
          </button>
        </div> 

        <div class="tailors-content">
          <div class="tailor">
            <div class="row" id="tailors">

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
              <select class="form-select" id="regency_id" aria-label="Default select example">
                <option selected>Select by Regency</option>
                </select>
            </div>
            
            <input type="submit" name="search" value="Search">
          </aside>

        </div>
      </div>

      <!-- Filter Modal -->
      <div class="modal fade" id="filterTailorModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Filter Search</h5>
            </div>
            <div class="modal-body">
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
                <select class="form-select" id="regency_id_filter" aria-label="Default select example">
                <option selected>Select by Regency</option>
                </select>
              </div>
              
              <input type="submit" name="search" value="Search">
            </div>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const searchElement = document.querySelector('search-bar');
    const tailors = await TailorDataSource.getAllTailor();
    const tailorContainer = document.querySelector('#tailors');
    tailors.forEach((tailor) => {
      tailorContainer.innerHTML += createTailorItemTemplate(tailor);
    });

    const onButtonSearchClicked = async () => {
      const searchValue = searchElement.value;
      const filterTailor = tailors.filter((data) => data.first_address.toLowerCase().includes(searchValue));

      if (filterTailor.length > 0) {
        tailorContainer.innerHTML = '';
        filterTailor.forEach((user) => {
          tailorContainer.innerHTML += createTailorItemTemplate(user);
        });
      } else {
        Swal.fire({
          icon: 'warning',
          title: 'Tailor not found!',
          confirmButtonColor: '#FF8A00',
          showConfirmButton: false,
        });
      }
    };
    searchElement.clickEvent = onButtonSearchClicked;

    const regencies = await IndoRegionDataSource.getAllRegencies();
    const regencyContainer = document.querySelector('#regency_id');
    const regencyContainerFilter = document.querySelector('#regency_id_filter');
    regencies.forEach((regency) => {
      regencyContainer.innerHTML += createRegencyItemTemplate(regency);
    });
    regencies.forEach((regency) => {
      regencyContainerFilter.innerHTML += createRegencyItemTemplate(regency);
    });
  },
};

export default TailorUser;
