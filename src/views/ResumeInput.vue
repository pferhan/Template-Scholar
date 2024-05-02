<template>
  <div class="resumeinput"></div>
    <header>
      <figure class="imgHome">
        <router-link :to="{ name: 'homepage'}">
          <img src="../assets/home.png" alt="Home">
        </router-link>
      </figure>

      <h1>Resume</h1>
    </header>

    <div id="container">

      <div id="personalInfo">
        <h2>Personal Information</h2>
          <label for="first-name">First Name:</label>
          <input type="text" id="first-name" name="first-name" v-model="firstName" required><br><br>
            
          <label for="last-name">Last Name:</label>
          <input type="text" id="last-name" name="last-name" v-model="lastName" required><br><br>
                        
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" v-model="email" required><br><br>
          
          <label for="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" v-model="phone" required><br><br>
          <hr>
      </div>
        <!--add pronouns, github, additional websites, location, title?-->

      <div id="education">
        <h2>Education</h2>
        <button @click="addEducationForm">Add Education</button>
        <div v-for="(education, index) in educations" :key="index">
          <div v-if="education.visible">
            <label for="degree">Degree:</label>
            <input type="text" id="degree" name="degree" v-model="education.degree"><br><br>
            
            <label for="major">Major:</label>
            <input type="text" id="major" name="major" v-model="education.major"><br><br>
            
            <label for="institution">Institution:</label>
            <input type="text" id="institution" name="institution" v-model="education.institution"><br><br>
            
            <label for="graduationYear">Graduation Year:</label>
            <input type="number" id="graduationYear" name="graduationYear" v-model="education.graduationYear"><br><br>
            
            <label for="gpa">GPA:</label>
            <input type="number" id="gpa" name="gpa" v-model="education.gpa"><br><br>
            
            <button @click="completeEducation(index)">Complete</button>
            <hr>
          </div>
        </div>
        <ul>
          <li v-for="(education, index) in completedEducations" :key="index">
            {{ education.degree }} - {{ education.major }} - {{ education.institution }} - {{ education.graduationYear }} - {{ education.gpa }}
          </li>
        </ul>
      </div>

      <div id="relevantProjects">
        <h2>Relevant Projects</h2>
        <button @click="addProjectForm">Add Project</button>

        <div v-for="(project, index) in projects" :key="index">
          <div v-if="project.visible">
            <label for="projectTitle">Project Title:</label>
            <input type="text" id="projectTitle" name="projectTitle" v-model="project.projectTitle"><br><br>

            <label for="projectDetails">Details:</label><br><br>
            <textarea id="projectDetails" name="projectDetails" rows="4" cols="50" v-model="project.projectDetails"></textarea><br><br>

            <button @click="completeProject(index)">Complete</button>
            <hr>
          </div>
        </div>
        <ul>
          <li v-for="(project, index) in completedProjects" :key="index">
            {{ project.title }} - {{ project.details }}
          </li>
        </ul>
      </div>

      <div id="skills">
        <h2>Skills</h2>
          
          <input type="text" v-model="newSkillName">
          <button @click="addNewSkill">Add Skill</button>
          <ul>
            <li v-for="(skill, index) in skills" :key="index">{{ skill }}</li>
          </ul>
          <button v-if="skills.length > 0" @click="clearSkills">Clear Skills</button>
          <hr>
        </div>
        <!--add option for drop down menu to select skills/give suggestions - API? -->

      <div id="certifications">
        <h2>Certification</h2>
            
          <input type="text" id="newCertification" v-model="newCertificationName">
          <button @click="addNewCertification">Add Certification</button>
          <ul>
            <li v-for="(certification, index) in certifications" :key="index">{{ certification }}</li>
          </ul>
          <button v-if="certifications.length > 0" @click="clearCertifications">Clear Certifications</button>
          <hr>
      </div>

      <div id="employment">
        <h2>Employment</h2>
        <button @click="addEmploymentForm">Add Employment</button>

        <div v-for="(employment, index) in employments" :key="index">
          <div v-if="employment.visible">
            <label for="company">Company:</label>
            <input type="text" id="company" name="company" v-model="employment.company"><br><br>

            <label for="jobTitle">Job Title:</label>
            <input type="text" id="jobTitle" name="jobTitle" v-model="employment.jobTitle"><br><br>

            <label for="duration">Duration:</label>
            <input type="number" id="duration" name="duration" v-model="employment.duration"><br><br>

            <label for="jobDescription">Description:</label><br><br>
            <textarea id="jobDescription" name="jobDescription" rows="4" cols="50" v-model="employment.jobDescription"></textarea><br><br>

            <button @click="completeEmployment(index)">Complete</button>
            <hr>
          </div>
        </div>  
        <ul>
          <li v-for="(employment, index) in completedEmployments" :key="index">
            {{ employment.company }} - {{ employment.jobTitle }} - {{ employment.duration }} - {{ employment.jobDescription }}
          </li>
        </ul>
      </div>

      <div id="awards">
        <h2>Awards</h2>
          <input type="text" id="newAward" v-model="newAwardName">
          <button @click="addNewAward">Add Award</button>
          <ul>
            <li v-for="(award, index) in awards" :key="index">{{ award }}</li>
          </ul>
          <button v-if="awards.length > 0" @click="clearAwards">Clear Awards</button>
      </div>

      <button v-if="!showStyledResume" @click="generateResume">Generate Resume</button> 
      <StyledResume v-if="showStyledResume" :resumeData="generatedResumeData" />
      <button v-if="showStyledResume" @click="generatePDF">Generate PDF</button>
  </div>
</template>

<style scoped>
body {
    font-family: Arial, sans-serif;
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

h2 {
    color:#333;
    font-size: 24px;
    font-weight: bold;
    font-family: 'Andale Mono';
    margin-bottom: 10px;
}

label {
    font-family: 'Verdana';
    color: #555;
    font-size: 16px;
}

main {
    padding: 20px;
}

.image-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
}

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="url"],
textarea,
button {
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

button {
    background-color: #46973e;
    color: #fff;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #2e6528;
}

ul {
    list-style-type: none;
    padding: 0;
}

.section {
    margin-bottom: 30px;
}

.section-title {
    margin-bottom: 10px;
    color: #007bff;
}

.section-content {
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 20px;
    background-color: #fff;
}

.section-content input[type="text"],
.section-content input[type="email"],
.section-content input[type="tel"],
.section-content input[type="url"],
.section-content textarea {
    width: calc(100% - 20px);
}

.section-content textarea {
    resize: vertical;
}

.section-content button {
    display: block;
    margin-top: 10px;
}

.imgHome {
    width: 50px;
    height: 50px;
}

.imgHome img {
    width: 50%;
    height: 50%;
}

#generateResume {
    display: block;
    margin: 0 auto;
    background-color: rgb(188, 47, 19);
    color: rgb(233, 233, 233);
    padding: 30px 60px;
    font-size: 25px;
    border: none;
    text-align: center;
    cursor:pointer;
}

#generateResume:hover {
    background-color: rgb(49, 199, 69);
}
</style>

<script>
import html2pdf from 'html2pdf.js';
import StyledResume from './StyledResume.vue';

export default {
  components: {
    StyledResume
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      newSkillName: '',
      skills: [],
      newCertificationName: '',
      certifications: [],
      newAwardName: '',
      awards: [],
      employments: [],
      completedEmployments: [],
      educations: [],
      completedEducations: [],
      projects: [],
      completedProjects: [],
      showStyledResume: false,
      generatedResumeData: {}
    };
  },
  methods: {
    addNewSkill() {
      if (this.newSkillName.trim() !== '') {
        this.skills.push(this.newSkillName);
        this.newSkillName = '';
      }
    },
    clearSkills() {
      this.skills = [];
    },
    addNewCertification() {
      if (this.newCertificationName.trim() !== '') {
        this.certifications.push(this.newCertificationName);
        this.newCertificationName = '';
      }
    },
    clearCertifications() {
      this.certifications = [];
    },
    addNewAward() {
      if (this.newAwardName.trim() !== '') {
        this.awards.push(this.newAwardName);
        this.newAwardName = '';
      }
    },
    clearAwards() {
      this.awards = [];
    },
    addEmploymentForm() {
      this.employments.push({company: '', jobTitle: '', duration: 0, jobDescription: '', visible: true})
    },
    completeEmployment(index) {
      this.employments[index].visible = false;
      this.completedEmployments.push(this.employments[index]);
    },
    addEducationForm() {
      this.educations.push({ degree: '', major: '', institution: '', graduationYear: '', gpa: '', visible: true});
    },     
    completeEducation(index) {
      this.educations[index].visible = false;
      this.completedEducations.push(this.educations[index]);
    },
    addProjectForm() {
      this.projects.push({ projectTitle: '', projectDetails: '', visible: true});
    },
    completeProject(index) {
      this.projects[index].visible = false;
      this.completedProjects.push(this.projects[index]);
    },
    generateResume() {
      const resumeData = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone,
        skills: this.skills,
        certifications: this.certifications,
        awards: this.awards,
        completedEmployments: this.completedEmployments,
        completedEducations: this.completedEducations,
        completedProjects: this.completedProjects,
      };

      this.generatedResumeData = resumeData;

      this.showStyledResume = true;
    },
    generatePDF() {
      const element = document.querySelector('.styled-resume');

      html2pdf()
        .from(element)
        .save('resume.pdf');
    }
  }
};
</script>