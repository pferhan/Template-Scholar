<template>
    <div class="cvhome"></div>

    <header>
        <figure class="imgHome">
            <router-link :to="{ name: 'homepage'}">
                <img src="../assets/home.png" alt="Home">
            </router-link>
        </figure>

        <h1>CV</h1>
    </header>

    <main>
        <section>
            <h2>Definition:</h2>
            <a>A CV, or curriculum vitae, is similar to a RESUME. It is a longer academic list that includes more experiences, certifications, publications, and coursework.</a>
            
            <h2>Why is it helpful?</h2>
            <ul>
                <li>Provides a more in-depth explanation and list of qualifications and suitability for a job</li>
                <li>Helps employers dig deeper on candidate's background and determine if they're a good fit for a position</li> 
            </ul>
    
            <h2>How is it used?</h2>
            <ul>
                <li>Integral part of job applications</li>
                <li>Outline for conversation in job interviews</li>
                <li>Used as a running list of all accomplishments and involvements</li>
            </ul>

            <h2>Why us?</h2>
            <ul>
                <li>You only have to worry about the content, we do the rest</li>
                <li>Easily formatted and no hassle to update</li>
                <li>We are here to make being a student your only job!</li>
            </ul>
        </section>

        <router-link to="">
            <button>Get Started</button>
        </router-link>
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
}

h1 {
    margin: 0;
    font-family: 'Andale Mono';
    font-weight: bold;
}

main {
    padding: 20px;
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
    border: 1px solid #cfe5e4;
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

figure {
    text-align: center;
    margin-bottom: 0px;
}

button {
    display: block;
    margin: 0 auto;
    background-color: rgb(156, 84, 182);
    color: rgb(233, 233, 233);
    padding: 30px 60px;
    font-size: 25px;
    border: none;
    text-align: center;
    cursor:pointer;
}

button:hover {
    background-color: rgb(49, 199, 69);
}

h2 {
    color:#333;
    font-size: 30px;
    font-weight: bold;
    font-family: 'Andale Mono';
    margin-bottom: 10px;
}

a {
    color: #555;
    font-size: 22px;
    line-height: 1.5;
    margin-bottom: 20px;
    font-family: 'Verdana';
}

ul {
    list-style-type: disc;
    color: #555;
    font-size: 22px;
    font-family: 'Verdana';
    margin-bottom: 20px;
}

li {
    margin-bottom: 8px;
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

</script>