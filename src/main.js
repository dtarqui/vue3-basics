import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import Contact from "./components/Contact.vue"
import NewContact from "./components/NewContact"
// import BaseCard from "./components/problem-two/BaseCard"

import BaseCards from './components/project-one/UI/BaseCards.vue';
import BaseButton from './components/project-one/UI/BaseButton.vue';
import BaseDialog from './components/project-one/UI/BaseDialog.vue';
import BaseBadge from './components/vuex/ui/BaseBadge.vue';

import store from './store/index.js';

let app = createApp(App).use(router)

// Global components
app.component('friend-contact', Contact)
app.component('new-friend', NewContact)
// app.component('base-card', BaseCard)
app.use(store);
app.component('base-card', BaseCards);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);
app.component('base-badge', BaseBadge);

app.mount('#app')