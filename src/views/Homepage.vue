<template>
    <div class="homepage"></div>

    <header>
        <figure class="imgHome">
            <router-link :to="{ name: 'homepage'}">
                <img src="../assets/home.png" alt="Home">
            </router-link>
        </figure>

        <h1>Template Scholar</h1>
    </header>

    <main>
        <div class="search-bar">
            <h4>What would you like to design today?</h4>

            <input 
                id="search" 
                type="search" 
                placeholder="Start typing to search..." 
                v-model="searchTerm"
            />

            <button @click="displaySearch">Search</button>
        </div>

        <div v-if="showSearchResults" id="searchResults">
            <div v-for="result in searchResults" :key="result.name">
                <a :href="result.link">{{ result.name }}</a>
                <br>
            </div>
        </div>

        <section class="container">
            <div class="search-display"></div>
            <div class="posts-container"></div>
        </section>

        <section class="image-container">
            <figure>
                <router-link :to="{ name: 'resumehome'}">
                    <img src="../assets/resume.png" alt="Resumes">
                </router-link>
                <figcaption>Resume Templates</figcaption>
            </figure>

            <figure>
                <router-link :to="{ name: 'posterhome'}">
                    <img src="../assets/poster.png" alt="Posters">
                </router-link>
                <figcaption>Academic Poster Templates</figcaption>
            </figure>
            
            <figure>
                <router-link :to="{ name: 'cvhome'}">
                    <img src="../assets/cv.png" alt="CV">
                </router-link>
                <figcaption>CV Templates</figcaption>
            </figure>

            <figure>
                <router-link :to="{ name: 'assignmenttrackerhome'}">
                    <img src="../assets/assignment-tracker.jpeg" alt="Assignment Tracker">
                </router-link>
                <figcaption>Assignment Tracker Templates</figcaption>
            </figure>

            <figure>
                <router-link :to="{ name: 'presentationhome'}">
                    <img src="../assets/presentation.png" alt="Presentation">
                </router-link>
                <figcaption>Presentation Templates</figcaption>
            </figure>
            
            <figure>
                <router-link :to="{ name: 'citationgeneratorhome'}">
                    <img src="../assets/references.png" alt="Citation Generator">
                </router-link>
                <figcaption>Citation Generator</figcaption>
            </figure>
        </section>
    </main>

    <footer>
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Suggestion</p>
    </footer>  

</template>


<style scoped>
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #cfe5e4; 
}

header {
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 20px; 
    position: sticky;
    top: -54px; 
    z-index: 2;
    font-family: 'Andale Mono';
}

h1 {
    margin: 0;
    font-family: 'Andale Mono';
    font-weight: bold;
}

main {
    padding: 20px;
    background-color: #cfe5e4; 
}

.image-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
img {
    width: 250px;
    height: 250px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;
    padding: 10px;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
}

img:hover {
    transform: scale(1.1);
}

.imgHome {
    width: 50px;
    height: 50px;
}

.imgHome img {
    width: 50%;
    height: 50%;
    border: 1px solid #333;
}

.search-bar {
    border: 3px solid #ccc;
    background-color: #333;
    color: #fff;
    font-weight: lighter;
    padding: 10px;
    text-align: center;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
}

figure {
    text-align: center;
    margin-bottom: 0px;
}

figcaption {
    margin-top: 0px;
    font-weight: bold;
    color: #000000;
    display: block;
    text-align: center;
    font-family: 'Andale Mono';
}

a {
    color: #555;
    font-size: 22px;
    line-height: 1.5;
    margin-bottom: 20px;
    font-family: 'Verdana';
}

footer { 
    padding: 10px;
    background-color: #333;
    color: #fff;
    text-align: center;
    bottom: -54px; 
    z-index: 2;
  }
</style>
  

<script>
export default {
  data() {
    return {
      searchTerm: '',
      itemsOnPage: [
        { name: 'Resume', link: '/resumehome' },
        { name: 'Academic Poster', link: '/posterhome' },
        { name: 'CV', link: '/cvhome' },
        { name: 'Homework Tracker', link: '/assignmenttrackerhome' },
        { name: 'Presentation', link: '/presentationhome' },
        { name: 'Reference Page', link: '/citationgeneratorhome' },
      ],
      showSearchResults: false
    };
  },
  methods: {
    displaySearch() {
        this.showSearchResults = true;
    },
    search() {
      const searchTerm = this.searchTerm.toLowerCase();
      return this.itemsOnPage.filter(item => item.name.toLowerCase().includes(searchTerm));
    }
  },
  computed: {
    searchResults() {
      return this.search();
    }
  }
};
</script>