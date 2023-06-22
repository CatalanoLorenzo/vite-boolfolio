<script>
import axios from 'axios';
export default {
    name: "ProjectsView",
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
                    if (response.data.success) {
                        this.projects = response.data.projects;

                    } else {
                        this.$router.push({
                            name: "pagenotfound404"
                        });
                    }
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
        <video class="video-bg w-100 position-fixed object-fit-cover z-0 opacity-50" src="../assets/media/video-bg.mp4" autoplay
        muted loop>
    </video>
        <div class="container p-5">
            <h1 class="pt-5 pb-5 text-darks">My Projects</h1>
            <div class="opacity-100 container  pb-0 mx-auto z-1 presentation position-relative">
                <div class="row p-0 m-0 row-cols-1 row-cols-sm-2 row-cols-md-3  row-cols-xl-8">
                    <div class="col fs-4 p-0 fw-bold text-darks display-1  rounded-5 shadow-lg "
                        v-for="project in projects.data">
                        <div class="shadow-lg card rounded-5 mx-3 my-3">
                            <router-link :to="{ name: 'single-project', params: { slug: project.slug } }" class="text-decoration-none text-darks" >
                                <img class="card-img-top rounded-3 border-1 border"
                                    :src="this.baseApi + 'storage/' + project.cover" height="300" alt="Title">
                                <div class="card-body text-dark-emphasis text-decoration-none ">
                                    <h4 class="card-title text-decoration-none">{{ project.title }}</h4>
                                </div>
                                <div class="card-footer">
                                    <span class="badge bg-primary">{{ project.type.name }}</span>
                                </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="d-flex justify-content-center pt-5">
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
    </main>
</template>