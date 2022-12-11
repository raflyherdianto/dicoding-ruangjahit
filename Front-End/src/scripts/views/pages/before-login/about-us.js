const AboutUs = {
  async render() {
    return `
    <app-bar></app-bar>
        <section class="about-ruangjahit">
            <div class="ruangjahit-description">
            <h1>Tentang RuangJahit</h1>
            <p>RuangJahit adalah website yang menghubungkan Pelanggan dan Penyedia Jasa Jahit baik individu maupun UMKM agar dapat 
            memperluas potensi Penyedia Jasa Jahit untuk dapat dikenal banyak orang dan memudahkan Pelanggan dalam menemukan informasi Penyedia Jasa Jahit terbaik.
            </p>
            </div>

            <div class="ruangjahit-image">
                <img src="../assets/ruangjahit-image-2.jpg" alt="RuangJahit Image">
            </div>
        </section>

        <section class="about-team">
            <div class="team-description">
            <h1>Tentang Kami</h1>
            <p>Kami adalah mahasiswa - mahasiswi Indonesia yang berfokus dalam dunia Software Developer khususnya dalam bidang Front-End Web dan Back End. <br>
            Misi kami kali ini adalah untuk membantu sesama terutama masyarakat disekitar kami. <br>
            Harapan utama pembuatan Website RuangJahit agar dapat membantu individu maupun UMKM dalam meningkatkan dan memperkenalkan produk mereka.
            </p> 
            </div>

            <div class="team-profile">
                <div class="card-profile">
                    <img src="../team/hagi.jpg" alt="Hagi Azzam Azzikri">
                    <a href="https://www.linkedin.com/in/hagi-azzam-azzikri-108929215/"><button>Connect</button></a>
                    <h2>Back-End | Developer</h2>
                    <h1>Hagi Azzam Azzikri</h1>
                </div>

                <div class="card-profile">
                    <img src="../team/anisa.jpg" alt="Anisa Fitrianida Lutfiajati P.">
                    <a href="https://www.linkedin.com/in/anisa-f-466150141/"><button>Connect</button></a>
                    <h2>Front-End | Developer</h2>
                    <h1>Anisa Fitrianida Lutfiajati P.</h1>
                </div>
                
                <div class="card-profile">
                    <img src="../team/nilam.jpg" alt="Nilam Magfira Az-zahra">
                    <a href="https://www.linkedin.com/in/nilam-magfira-az-zahra-24a40a20a"/><button>Connect</button></a>
                    <h2>Front-End | Developer</h2>
                    <h1>Nilam Magfira Az-zahra</h1>
                </div>

                <div class="card-profile">
                    <img src="../team/rafly.jpg" alt="Mochammad Rafly Herdianto">
                    <a href="https://www.linkedin.com/in/mochraflyherdianto/"><button>Connect</button></a>
                    <h2>Back-End | Developer</h2>
                    <h1>Mochammad Rafly Herdianto</h1>
                </div>
            </div>
        </section>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default AboutUs;
