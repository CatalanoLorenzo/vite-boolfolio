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
    <section>

        <ul class="nav nav-tabs" id="navId" role="tablist">
            <li class="nav-item" v-for="menu_item in MenuHeader">
                <router-link class="nav-link" :to="{ name: menu_item.toLowerCase() }">
                    <div>{{menu_item}}</div>
                </router-link>
            </li>
            
        </ul>
    </section>
</template>
