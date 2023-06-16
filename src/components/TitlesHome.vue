<script>
import Info from '../assets/data/info.json'
export default {
    name: 'TitlesHome',
    data() {
        return {
            info: Info,
            titles: Info[1].titles,
            presentation: Info[0].presentation
        }
    },
    mounted() {

    }
}
</script>
<template>
    <section>
        <div class="container">
            <div class="row row-cols-1 row-cols-md-2 g-5">
                <div class="col imgprofile text-center  overflow-hidden p-0 my-5 ">
                    <img src="../assets/img/profiloimg.jpg" alt="imgprofile" class="h-100 w-100 object-fit-cover ">
                </div>
                <div class="col ">
                    <div class="card " v-for="item,index in info" :class="index > 0 ? 'my-5' : '' ">
                        <div class="card-header">
                            <h1 class="text-center text-white p-4">{{ item.title }}</h1>
                        </div>
                        <div class="card-body shadow ">
                            <ul class="" v-if="Array.isArray(item.content)">
                                <li v-for="text in item.content">
                                    <h2><strong>{{ text }}</strong></h2>
                                </li>
                            </ul>
                            <h2 v-else>
                                <strong>{{ item.content }}</strong>
                            </h2>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    
</template>