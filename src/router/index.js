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
  {
    path: '/provide',
    name: 'Injection And Provide',
    component: () => import('../views/InjectionAndProvide.vue'),
  },
  {
    path: '/comp-adv',
    name: 'Components Advanced',
    component: () => import('../views/ComponensAdvanced.vue'),
  },
  {
    path: '/project-one',
    name: 'Project',
    component: () => import('../views/ProjectOne.vue'),
  },
  {
    path: '/forms',
    name: 'Forms',
    component: () => import('../views/Forms.vue'),
  },
  {
    path: '/http-request',
    name: 'Http Requests',
    component: () => import('../views/HttpRequests.vue'),
  },
  {
    path: '/routing',
    component: () => import('../views/Routing.vue'),
    children: [{
        path: 'teams',
        name: 'Teams',
        meta: {
          needsAuth: true,
        },
        components: {
          footer: () => import('../components/routing/teams/TeamsFooter.vue'),
          default: () => import('../components/routing/teams/TeamsList.vue'),
        },
        children: [{
          name: "team-members",
          path: ':id',
          props: true,
          // alias: '/routing/',
          component: () => import('../components/routing/teams/TeamMembers.vue')
        }, ]
      },
      {
        path: '',
        redirect: '/routing/teams'
      },

      {
        path: 'users',
        name: 'Users',
        components: {
          footer: () => import('../components/routing/users/UsersFooter.vue'),
          default: () => import('../components/routing/users/UsersList.vue')
        },
        beforeEnter(to, from, next) {
          console.log('before user enter')
          console.log(to, from);
          next()
        }
      },
      {
        path: ':notFound(.*)',
        redirect: '/routing/teams'
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // scrollBehavior(to, from, savedPosition) {
  scrollBehavior(_, _2, savedPosition) {
    // console.log(to, from, savedPosition)
    if (savedPosition) {
      return savedPosition;
    }
    return {
      left: 0,
      top: 0
    }; // Go to the start page on change view
  }
})

// Navigation guards
router.beforeEach(function (to, from, next) {
  console.log('Global beforeEach')
  console.log(to, from)
  next() // or next(true)
  // next(false) // to cancel routing

  //  === Restrict navigation == Used for authentication
  // if (to.name === 'team-members') {
  //   next();
  // } else {
  //   next({
  //     name: 'team-members',
  //     params: {
  //       id: 't2'
  //     }
  //   })
  // }
  //  ==== Auth example == look needsAuth value as meta in teams path
  // if (to.meta.needsAuth) {
  //   console.log("Needs Auth!")
  //   next(); // can denegate access 
  // } else {
  //   next();
  // }
})

router.afterEach((to, from) => {
  // sending analytics data
  console.log('Global afterEach')
  console.log(to, from)
})



export default router