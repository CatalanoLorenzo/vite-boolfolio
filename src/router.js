import { createRouter, createWebHistory } from "vue-router";
import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';
import ContactView from './views/ContactView.vue';
import SingleProject from './views/SingleProject.vue'



const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            'path': '/',
            'name': 'home',
            'component': HomeView
        },
        {
            'path': '/about',
            'name': 'about',
            'component': AboutView
        },
        {
            'path': '/contact',
            'name': 'contact',
            'component': ContactView
        },
        {
            path: '/projects/:slug',
            name: 'single-project',
            component: SingleProject
        },
    ]
})

export { router }