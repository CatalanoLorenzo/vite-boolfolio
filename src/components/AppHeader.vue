<script>
import MenuHeader from '../assets/data/MenuHeader';
export default {
    name: "AppHeader",
    data() {
        return {
            MenuHeader,
        }
    },
}
</script>
<template>
    <header>

        <nav class="navbar w-100 navbar-expand-lg navbar-dark my-0 shadow  position-fixed">

            <button class="btn  navbar-toggler mx-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapsnavbar"
                aria-expanded="false" aria-controls="collapsnavbar">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse justify-content-between" id="collapsnavbar">
                <router-link class="navbar-brand ps-5 text-light" :to="{ name: MenuHeader[0].toLowerCase() }">MY WEBSITE</router-link>
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0 pe-5">
                    <li class="nav-item" v-for="menu_item in MenuHeader" >
                        <router-link class="nav-link fw-bold p-2" :to="{ name: menu_item.toLowerCase() }" v-if="!(menu_item == 'Home')">
                            <div>{{ menu_item }}</div>
                        </router-link>
                    </li>
                </ul>
            </div>

        </nav>
    </header>
</template>
