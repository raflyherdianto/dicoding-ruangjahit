class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
        .search-box {
            margin: auto;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
            border-radius: 5px;
            display: flex;
            width: 50%;
        }
        
        .search-box input {
            position: relative;
            display: inline-block;
            font-size: 20px;
            box-sizing: border-box;
            transition: .5s;
        }
        
        .search-box input[type="search"] {
            background-color: #fff;
            width: 100%;
            height: 50px;
            border: 2px solid #FF8A00;
            border-right: none;
            outline: none;
            padding: 0 25px;
            border-radius: 5px 0 0 5px;
        }
        
        .search-box [type="submit"] {
            position: relative;
            border-radius: 0 5px 5px 0;
            width: 50px;
            height: 50px;
            border-style: none;
            cursor: pointer;
            background-color: #FF8A00;
            color: #fff;
        }
        
        .search-box input[type="submit"]:hover {
            cursor: pointer;
        }

        .search-box > button > svg {
          height: 18px;
          width: 18px
        }

        @media screen and (max-width: 1200px) {  
            .search-box {
                width: 70%;
            }
        } 
        
        @media screen and (max-width: 600px) { 
            .search-box {
                width: 90%;
            }
        } 
        </style>

        <div class="search-box">
            <input type="search" id="searchElement" placeholder="Search">
            <button id="searchElementButton" type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 
              1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
            </button>
        </div>
     `;

    this.shadowDOM.querySelector('#searchElementButton').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);
