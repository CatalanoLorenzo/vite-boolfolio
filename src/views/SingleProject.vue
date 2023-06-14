<script>
import axios from 'axios';
export default {
    name: "SingleProject",
    data() {
        return {
            baseApi: 'http://127.0.0.1:8000/',
            projectsPath: 'api/projects',
            loading: true,
            project: [],
            links: '',


        }
    },
    methods: {
        getProjects(url) {
            axios
                .get(url)
                .then(response => {
                    console.log(response);
                    this.project = response.data.project;

                })
                .catch(error => {
                    console.error(error.message);
                });
        },
    },
    mounted() {
        this.getProjects('http://127.0.0.1:8000/api/projects/' + this.$route.params.slug)
    },
  
}
</script>
<template>
    <main>
       <div class="container">
        <div class="row">
            <div class="col">
                <div class="card">
                    <img class="card-img-top" :src="this.baseApi + 'storage/' + project.cover" alt="project.title">
                    <div class="card-body">
                        <h4 class="card-title">{{ project.title }}</h4>
                        <p class="card-text">
                            Source Link: {{ project.link }}
                        </p>
                        <p class="card-text">
                            Project Link: {{ project.source }}
                        </p>
                        <p class="card-text">
                            Project Link: {{ project.content }}
                        </p>
                        <ul>
                            <li v-for="technology in project.technologies">
                                <div class="card">
                                    <div class="card-header">
                                        <img :src="this.baseApi + 'storage/' + technology.cover" alt="">
                                    </div>
                                    <div class="card-body">
                                        <p></p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div class="container">
                            <div class="row">
                                <div class="col">
                                    <span class="badge bg-primary">{{ project.type?.name }}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </div>
    </main>
</template>