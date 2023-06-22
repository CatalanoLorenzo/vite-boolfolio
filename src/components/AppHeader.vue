<script>
export default {
    name: "AppHeader",
    methods: {
    isCurrentPage(url) {
      return window.location.pathname === url;
    }
}
}
</script>
<template>
    <header >

        <div class="container-fluid position-fixed z-3 w-100">
            <div class="row justify-content-center">
                <div class="col">
                    <!--  <nav class="navbar navbar-expand-md  navbar-dark  shadow  position-sticky justify-content-between d-flex">
            
                        <button class="btn  navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsnavbar"
                            aria-expanded="false" aria-controls="collapsnavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <h1 class="navbar-brand">LORENZO CATALANO</h1>
                        <div class="collapse navbar-collapse " id="collapsnavbar">
                            <ul class="navbar-nav ">
                                <li class="nav-item">
                                    <router-link class="nav-link fw-bold" :to="{ name: MenuHeader[0].toLowerCase() }">Home</router-link>
                                </li>
                                <li class="nav-item" v-for="menu_item in MenuHeader" >
                                    <router-link class="nav-link fw-bold " :to="{ name: menu_item.toLowerCase() }" v-if="!(menu_item == 'Home')">
                                        <div>{{ menu_item }}</div>
                                    </router-link>
                                </li>
                            </ul>
                        </div>
            
                    </nav> -->

                    
                    <nav class="navbar navbar-expand-lg navbar-dark shadow-lg">
                        <div class="container">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#Toggle1" aria-controls="navbarTogglerDemo01"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                           <a class="navbar-brand" href="/#jumbo">
                               LORENZO CATALANO
                            <img src="../assets/img/logo.png" alt="logo" class="h-100 " width="30">
                        </a>

                            <div class="collapse navbar-collapse" id="Toggle1">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-center">
                                    <li class="nav-item">
                                        <a class="nav-link"  href="/#jumbo">HOME</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link"  href="/#about">ABOUT</a>
                                    </li>
                                    <li class="nav-item" >
                                        <a class="nav-link"  href="/#contacts">CONTACTS</a>
                                    </li>
                                    <li class="nav-item" >
                                        <a class="nav-link"  href="/Projects">PROJECTS</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>
