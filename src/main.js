import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import Contact from "./components/Contact.vue"
import NewContact from "./components/NewContact"
import BaseCard from "./components/problem-two/BaseCard"

let app = createApp(App).use(router)

// Global components
app.component('friend-contact', Contact)
app.component('new-friend', NewContact)
app.component('base-card', BaseCard)

app.mount('#app')