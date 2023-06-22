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
                    if (response.data.success) {
                        this.project = response.data.project;

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
        this.getProjects('http://127.0.0.1:8000/api/projects/' + this.$route.params.slug)
    },

}
</script>
<template>
    <main>
        <video class="video-bg w-100 position-fixed object-fit-cover z-0 opacity-50" src="../assets/media/video-bg.mp4"
            autoplay muted loop>
        </video>
        <h1 class="pt-5 text-dark">{{ project.title }}</h1>
        <h4><span class="badge bg-primary">{{ project.type?.name }}</span></h4>
        <div class="container">
            <div class="row row-cols-1 row-cols-md-2 g-5">
                <div class="col opacity-100 rounded-5 r overflow-hidden">
                    <img class="w-100 object-fit-cover  rounded-5 imgproject"
                        :src="this.baseApi + 'storage/' + project.cover" alt="project.title">
                </div>
                <div class="col colInfo text-dark">
                    <div class="shadow-lg card rounded-5 mx-auto h-100 ">
                        <div class="card-body card-body-home">
                            <h4 class="card-text fs-5 px-5 py-1 text-center text-md-start">Info project:</h4>
                            <p class="card-text  px-5 py-1">
                                {{ project.content }}
                            </p>
                            <h4 class="card-text fs-5 px-5 py-1 text-center text-md-start">Tecnologies used:</h4>
                            <ul class="row text-sm-start row-cols-1 row-cols-md-5 gap-2 my-0 mx-5 p-0">
                                <li v-for="technology in project.technologies"
                                    class="list-unstyled col  overflow-hidden shadow-lg px-0 ">
                                    <img class="imgTecnology object-fit-contain  rounded-5 w-100"
                                        :src="this.baseApi + 'storage/' + technology.cover" alt="" width="70" height="35">
                                </li>
                            </ul>
                            <h4 class="card-text fs-5 p-5 ">
                                <div class="d-flex justify-content-between">
                                    <a :href="project.link" class=" btn btn-project">
                                        Page Project
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="#5853a2"
                                            viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                            <path
                                                d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM96 96H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
                                        </svg>
                                    </a>
                                    <a class="btn btn-project" :href="project.source" role="button">
                                        Project Link from
                                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" fill="#5853a2"
                                            viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                                            <path
                                                d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z" />
                                        </svg>
                                    </a>
                                </div>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="d-flex justify-content-center justify-content-md-end">
            <router-link class="btn btn-lg text-light-emphasis shadow-lg fw-bold btn-project mt-4 me-5"
                :to="{ name: 'projects' }" role="button">Back to Projects</router-link>
        </div>
    </main>
</template>
