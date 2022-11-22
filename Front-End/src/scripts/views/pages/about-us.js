const AboutUs = {
  async render() {
    return `
        <section class="about-ruangjahit">
            <div class="ruangjahit-description">
            <h1>Tentang RuangJahit</h1>
            <p>RuangJahit adalah donec leo ligula, tempus id vehicula eget, dictum at velit. Quisque gravida nunc elit, id aliquam diam
            tincidunt sit amet. Phasellus volutpat justo vel ex scelerisque, id tempus est pulvinar. Donec sollicitudin molestie fringilla.
            Donec ornare ullamcorper risus, quis rhoncus.
            </p>
            </div>

            <div class="ruangjahit-image">
                <img src="../assets/ruangjahit-image-2.jpg" alt="RuangJahit Image">
            </div>
        </section>

        <section class="about-team">
            <div class="team-description">
            <h1>Tentang Kami</h1>
            <p>Kami adalah mahasiswa-mahasiswi Indonesia yang ... Ut scelerisque posuere tellus,
            tempus pretium arcu elementum et. Praesent et molestie risus. Vivamus viverra tortor vitae mollis dignissim.
            Aliquam tincidunt vestibulum lacus, eget varius elit porttitor a. Mauris consectetur nulla.
            </p> 
            </div>

            <div class="team-profile">
                <div class="card-profile">
                    <img src="../users/man.png" alt="Hagi Azzam Azzikri">
                    <a href="https://www.linkedin.com/in/hagi-azzam-azzikri-108929215/"><button>Connect</button></a>
                    <h2>Back-End | Developer</h2>
                    <h1>Hagi Azzam Azzikri</h1>
                </div>

                <div class="card-profile">
                    <img src="../users/woman.png" alt="Anisa Fitrianida Lutfiajati P.">
                    <a href="https://www.linkedin.com/in/anisa-f-466150141/"><button>Connect</button></a>
                    <h2>Front-End | Developer</h2>
                    <h1>Anisa Fitrianida Lutfiajati P.</h1>
                </div>
                
                <div class="card-profile">
                    <img src="../users/woman.png" alt="Nilam Magfira Az-zahra">
                    <a href="https://www.linkedin.com/in/nilam-magfira-az-zahra-24a40a20a"/><button>Connect</button></a>
                    <h2>Front-End | Developer</h2>
                    <h1>Nilam Magfira Az-zahra</h1>
                </div>

                <div class="card-profile">
                    <img src="../users/man.png" alt="Mochammad Rafly Herdianto">
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
