<script>
import axios from 'axios';
export default {
    name: "HomeView",


    data() {
        return {
            baseApi: 'http://127.0.0.1:8000/',
            projectsPath: 'api/projects',
            loading: true,
            projects: [],
            links: '',


        }
    },
    methods: {
        getProjects(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response);
                    this.projects = response.data.projects;

                })
                .catch(error => {
                    console.error(error.message);
                });
        },
    },
    mounted() {
        this.getProjects('http://127.0.0.1:8000/api/projects')
    }
}
</script>
<template>
    <main>
        <div class="container">
            <div class="row row-cols-2">
                <div class="card col" v-for="project in projects.data">
                    <router-link :to="{ name: 'single-project', params: {slug: project.slug} }">

                    <img class="card-img-top" :src="this.baseApi + 'storage/' + project.cover" alt="Title">
                </router-link>

                    <div class="card-body">
                        <h4 class="card-title">{{ project.title }}</h4>
                        <p class="card-text">
                            Source Link: {{ project.link }}
                        </p>
                        <p class="card-text">
                            Project Link: {{ project.source }}
                        </p>
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <span class="badge bg-primary">{{ project.type.name }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <!-- <a @click="getProjects(links.at(0).url)"  class="page-link" v-if="link.url">Previous</a> -->
                            <li class="page-item" v-for="link in projects.links"
                                :class="!link.url ? 'disabled' : '' || link.active ? 'active' : ''">
                                <a @click="getProjects(link.url)" v-if="link.url" class="page-link" v-html="link.label"></a>
                            </li>
                            <!-- <a @click="getProjects(link.at(-1).url)"  class="page-link" v-if="link.url">Next</a> -->
                        </ul>
                    </nav>
                </div>

            </div>
        </div>
    </main>
</template>