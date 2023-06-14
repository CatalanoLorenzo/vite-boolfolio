<script>
export default {
    name: "AppHeader",
}
</script>

<template>
    <!-- Nav tabs -->
    <ul class="nav nav-tabs" id="navId" role="tablist">
        <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'home' }">
                <div>Home</div>
            </router-link>
        </li>
        <li class="nav-item" role="presentation">
            <router-link class="nav-link" :to="{ name: 'about' }">
                <div>About</div>
            </router-link>
        </li>
        <li class="nav-item" role="presentation">
            <router-link class="nav-link" :to="{ name: 'contact' }">
                <div>Contact</div>
            </router-link>
        </li>
    </ul>

  
</template>
