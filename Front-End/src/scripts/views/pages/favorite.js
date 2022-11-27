const Favorite = {
  async render() {
    return `
      <div class="container-favorite">
      <h1><i class="fa fa-warning"></i></h1>
      <h2>There is no one product to show.</h2>
      </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default Favorite;
