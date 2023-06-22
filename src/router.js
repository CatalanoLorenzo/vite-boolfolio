import { createRouter, createWebHistory } from "vue-router";
import HomeView from './views/HomeView.vue';
import ProjectsView from './views/ProjectsView.vue';
import SingleProject from './views/SingleProject.vue';
import PageNotFound from './views/PageNotFound.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            'path': '/',
            'name': 'home',
            'component': HomeView
        },
        {
            'path': '/projects',
            'name': 'projects',
            'component': ProjectsView
        },
        {
            'path': '/projects/:slug',
            'name': 'single-project',
            'component': SingleProject
        },
        {
            'path': '/:pathMatch(.*)*',
            'name': 'pagenotfound404',
            'component': PageNotFound
        }
    ]
})

export { router }