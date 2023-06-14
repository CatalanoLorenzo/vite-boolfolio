<script>
import axios from 'axios';
export default {
    name: "AppHeader",
    data() {
        return {
            baseApi: 'http://127.0.0.1:8000/',
            projectsPath: 'api/projects',
            loading: true,
            projects: [],

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
    <!-- Nav tabs -->
    <ul class="nav nav-tabs" id="navId" role="tablist">
        <li class="nav-item">
            <router-link :to="{ name: 'home' }" class="nav-link active" data-bs-toggle="tab"
                aria-current="page">Home</router-link>
        </li>
        <li class="nav-item" role="presentation">
            <router-link :to="{ name: 'contact' }" class="nav-link" data-bs-toggle="tab">contact</router-link>
        </li>
        <li class="nav-item" role="presentation">
            <router-link :to="{ name: 'about' }" class="nav-link " data-bs-toggle="tab">About</router-link>
        </li>
    </ul>

    <!-- Tab panes -->
    <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="tab1Id" role="tabpanel"></div>
        <div class="tab-pane fade" id="tab2Id" role="tabpanel"></div>
        <div class="tab-pane fade" id="tab3Id" role="tabpanel"></div>
        <div class="tab-pane fade" id="tab4Id" role="tabpanel"></div>
        <div class="tab-pane fade" id="tab5Id" role="tabpanel"></div>
    </div>
</template>
