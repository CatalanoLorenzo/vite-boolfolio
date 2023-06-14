<script>
import axios from 'axios';
export default {
  components: {
  },
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
  },
  currentPage(url){

  },
}

</script>


<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card" v-for="project in projects.data">
            <img class="card-img-top" :src="this.baseApi + 'storage/' + project.cover" alt="Title">
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
                <li class="page-item" v-for="link in projects.links" :class="!link.url ? 'disabled' : ''||link.active ? 'actived' : ''">
                  <a @click="getProjects(link.url)"  class="page-link" v-if="link.label === 'Next &raquo;'">Next</a>
                  <a @click="getProjects(link.url)"  class="page-link" v-else-if="link.label === '&laquo; Previous'">Previous</a>
                  <a @click="getProjects(link.url)"  class="page-link" v-else >{{link.label}}</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss"></style>
