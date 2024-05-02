import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/Homepage.vue'
import ResumeHome from '../views/ResumeHome.vue'
import AssignmentTrackerHome from '../views/AssignmentTrackerHome.vue'
import CitationGeneratorHome from '../views/CitationGeneratorHome.vue'
import CVHome from '../views/CVHome.vue'
import PosterHome from '../views/PosterHome.vue'
import PresentationHome from '../views/PresentationHome.vue'
import ResumeInput from '../views/ResumeInput.vue'
import StyledResume from '@/views/StyledResume.vue'

const routes = [
  {
    path: '/homepage',
    name: 'homepage',
    component: Homepage
  }, 
  {
    path: '/resumehome',
    name: 'resumehome',
    component: ResumeHome
  },
  {
    path: '/assignmenttrackerhome',
    name: 'assignmenttrackerhome',
    component: AssignmentTrackerHome
  },
  {
    path: '/citationgeneratorhome',
    name: 'citationgeneratorhome',
    component: CitationGeneratorHome
  },
  {
    path: '/cvhome',
    name: 'cvhome',
    component: CVHome
  },
  {
    path: '/posterhome',
    name: 'posterhome',
    component: PosterHome
  },
  {
    path: '/presentationhome',
    name: 'presentationhome',
    component: PresentationHome
  },
  {
    path: '/resumeinput',
    name: 'resumeinput',
    component: ResumeInput
  },
  {
    path: '/styledresume',
    name: 'styledresume',
    component: StyledResume
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router