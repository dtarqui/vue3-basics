import {
  createRouter,
  createWebHistory
} from 'vue-router'

const routes = [{
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/events',
    name: 'Events',
    component: () => import('../views/Events.vue'),
  },
  {
    path: '/styling',
    name: 'Styling',
    component: () => import('../views/Styling.vue'),
  },
  {
    path: '/conditionals',
    name: 'Conditionals',
    component: () => import('../views/Conditionals.vue'),
  },
  {
    path: '/game',
    name: 'Monster Slayer',
    component: () => import('../views/MonsterSlayer.vue'),
  },
  {
    path: '/scenes',
    name: 'Vue Behind Scenes',
    component: () => import('../views/BehindScenes.vue'),
  },
  {
    path: '/components',
    name: 'Components',
    component: () => import('../views/Components.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router