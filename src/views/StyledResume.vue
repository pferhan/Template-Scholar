<template>
    <div class="styled-resume">
        <h2>{{ resumeData.firstName }} {{ resumeData.lastName }}</h2>
        <h4>{{ resumeData.email }}  |  {{ resumeData.phone }}</h4>
        
        <div v-if="resumeData.completedEducations && resumeData.completedEducations.length">
            <h3>Education</h3>
            <ol>
                <li v-for="(education, index) in resumeData.completedEducations" :key="index">
                    <p><strong>{{ education.institution }}</strong></p>
                    <p><em>{{ education.degree }}:</em> {{ education.graduationYear }}</p>
                    <p>Major: {{ education.major }}</p>
                    <p>GPA: {{ education.gpa }}</p>
                </li>
            </ol>
        </div>

        <div v-if="resumeData.completedEmployments && resumeData.completedEmployments.length">
            <h3>Employment History</h3>
            <ol>
                <li v-for="(employment, index) in resumeData.completedEmployments" :key="index">
                    <p><strong>{{ employment.company }}</strong></p>
                    <p><strong>Job Title:</strong> {{ employment.jobTitle }}</p>
                    <p><strong>Years Experience:</strong> {{ employment.duration }}</p>
                    <p><strong>Description:</strong> {{ employment.jobDescription }}</p>
                </li>
            </ol>
        </div>
        
        <div v-if="resumeData.completedProjects && resumeData.completedProjects.length">
            <h3>Relevant Projects</h3>
            <ol>
                <li v-for="(project, index) in resumeData.completedProjects" :key="index">
                    <p><strong>Project Title:</strong> {{ project.projectTitle }}</p>
                    <p><strong>Details:</strong> {{ project.projectDetails }}</p>
                </li>
            </ol>
        </div>
        
        <div v-if="resumeData.skills && resumeData.skills.length">
            <h3>Skills</h3>
            <ul>
                <li v-for="(skill, index) in resumeData.skills" :key="'skill-' + index">{{ skill }}</li>
            </ul>
        </div>
        
        <div v-if="resumeData.certifications && resumeData.certifications.length">
            <h3>Certifications</h3>
            <ul>
                <li v-for="(certification, index) in resumeData.certifications" :key="'certification-' + index">{{ certification }}</li>
            </ul>
        </div>
        
        <div v-if="resumeData.awards && resumeData.awards.length">
            <h3>Awards</h3>
            <ul>
                <li v-for="(award, index) in resumeData.awards" :key="'award-' + index">{{ award }}</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.styled-resume {
    font-family: Arial, sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f9f9f9;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.styled-resume h2 {
    color: #000000;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
}

.styled-resume h3 {
    color: #000000;
    font-size: 20px;
    font-weight: bold;
}

.styled-resume h4 {
    text-align: center;
}

.styled-resume ol {
    list-style: none;
    padding: 0;
}

.styled-resume ul {
    padding: 5;
}

.styled-resume li {
    margin-bottom: 20px;
}

.styled-resume p {
    margin: 10px 0;
}

.styled-resume p strong {
    font-weight: bold;
}

.styled-resume p:last-child {
    margin-bottom: 0;
}
</style>

<script>
export default {
    props: {
     resumeData: Object 
  },
};
</script>