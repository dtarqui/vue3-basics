import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import Contact from "./components/Contact.vue"
import NewContact from "./components/NewContact"
let app = createApp(App).use(router)

app.component('friend-contact', Contact)
app.component('new-friend', NewContact)

app.mount('#app')
