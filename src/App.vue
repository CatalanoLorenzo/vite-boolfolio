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
    }
  },
  methods: {
    getProjects(url) {
      axios
        .get(url)
        .then(response => {
          console.log(response);
          this.projects = response.data.projects.data
        })
        .catch(error => {
          console.error(error.message);
        });
    }
  },
  mounted() {
    this.getProjects('http://127.0.0.1:8000/api/projects')
  },
}
</script>


<template>
  <header>

  </header>
  <main>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="card" v-for="project in projects">
            <img class="card-img-top" :src="this.baseApi +'storage/'+ project.cover" alt="Title">
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
                    <span class="badge bg-primary" v-for="singletype in project.type">{{singletype.name}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer>

  </footer>
</template>

<style lang="scss"></style>
