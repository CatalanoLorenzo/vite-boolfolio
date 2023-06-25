<script>
import Info from '../assets/data/info.json';
import axios from 'axios';
export default {
    name: "HomeView",
    data() {
        return {
            info: Info,
            name: '',
            email: '',
            mesage: '',
            errors: {},
            loading: false,
            seccess: false
        }
    },
    methods: {
        hrefDynamic(btnname, info) {
            if (btnname == 'E-mail') {
                return 'mailto:' + info
            }
            else if (btnname == 'Whatsapp') {
                return 'tel:+' + info
            } else {
                return info
            }
        },
        classbtnDynamic(btnname) {
            if (btnname == 'E-mail') {
                return 'btn-danger'
            }
            else if (btnname == 'Whatsapp') {
                return 'btn-success'
            } else if (btnname == 'LinkedIn') {
                return 'btn-primary'
            } else {
                return 'btn-warning'
            }
        },
        submitForn() {
            this.loading = true
            console.log(this.name);
            console.log(this.email);
            console.log(this.mesage);
            const data = {
                name: this.name,
                email: this.email,
                message: this.mesage
            }
            //pulizia degli errori
            this.errors = {}
            //chiamata aziox dell'email
            axios
                .post('http://localhost:8000/api/contacts', data)
                .then(response => {
                    console.log(response);
                    if (!response.data.success) {
                        this.errors = response.data.errors
                    } else {
                        this.name = '',
                            this.email = '',
                            this.mesage = ''
                    }
                    this.loading = false
                })
                .catch(err => { console.log(err); })
        }
    },
    mounted() {
        // elements
        var elements_to_watch = document.querySelectorAll('.watch');

        // callback
        var callback = function (items) {
            items.forEach((item) => {
                if (item.isIntersecting) {
                    item.target.classList.add("in-page");
                } else {
                    item.target.classList.remove("in-page");
                }
            });
        }

        // observer
        var observer = new IntersectionObserver(callback, { threshold: 0.5 });

        // apply
        elements_to_watch.forEach((element) => {
            observer.observe(element);
        })
    }
}
</script>
<template>
    <video class="video-bg w-100 position-fixed object-fit-cover z-0 opacity-50" src="../assets/media/video-bg.mp4" autoplay
        muted loop>
    </video>
    <section class="position-relative z-1 w-100 watch " id="jumbo">
        <div class="container-fluid ">
            <div class="row align-items-center justify-content-center">
                <div class="col-8 p-2">
                    <h1 class="text-center  title  d-flex align-items-center justify-content-center display-1 fw-bold ">
                        LORENZO CATALANO <br>
                        FULL-STACK WEB DEVELOPER
                    </h1>
                </div>
            </div>
        </div>
    </section>
    <section class="position-relative z-1 w-100 watch ">
        <div class="container-fluid ">
            <div class="row align-items-center justify-content-center">
                <div class="col-7 p-5">
                    <h2 class="text-center slogan d-flex align-items-center justify-content-center display-1 fw-bold pb-5 mb-5 ">
                        MI REINVENTO PER IL FUTURO<br>
                        CUSTODISCO IL MIO PASSATO.
                    </h2>
                </div>
            </div>
        </div>
    </section>
    <section id="about" class="z-2 position-relative w-100">
        <div class="container-fluid h-100 ">
            <div class="row h-100 justify-content-center align-items-center row-cols-1 row-cols-md-2">
                <div class="col p-5 d-flex justify-content-center flex-column description ">

                    <h3 class="who-i fade-in watch fw-bold ">Chi sono?</h3>
                    <h4 class=" fade-in watch fw-bold ">
                        Fin da sempre appassionato di tecnologia e del mondo informatico, 
                        ho deciso di intraprendere il percorso formativo di Boolean,
                         dove ho  potuto: migliorare e mettere in pratica le mie competenze per realizzare dei veri progetti. <br>
                          Il mio punto di forza è l'essere portato al lavoro in team affinché possa confrontarmi e migliorarmi per  
                           stabilire un ambiente lavorativo sereno e costruttivo.
                    </h4>

                </div>
                <div class="col">
                    <div class="laptop overflow-hidden rounded-4 fade-in watch">
                        <img class="object-fit-lg-contain w-100 "
                            src="../assets/img/Progetto_senza_titolo-removebg-preview.png" alt=" laptop whit logo">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="languages" class="z-2 position-relative w-100">
        <div class="container-fluid h-100 ">
            <h3 class="p-5 fade-in watch text-center">
                Linguaggi che uso
            </h3>
            <div class="row h-75 justify-content-center align-items-center row-cols-1 row-cols-md-2">
                <div class="col fade-in watch p-5">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                        
                        <div class="carousel-inner h-75">
                            <div class="carousel-item active">
                                <img class="d-block w-100 ratio-16x9" src="../assets/img/logoCSS.svg" alt="First slide">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100 ratio-16x9" src="../assets/img/logoHTML5.svg" alt="Second slide">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100 ratio-16x9" src="../assets/img/logoLaravel.svg" alt="Third slide">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100 ratio-16x9" src="../assets/img/logoJScript.svg" alt="Second slide">
                            </div>
                            
                            <div class="carousel-item">
                                <img class="d-block w-100 ratio-16x9" src="../assets/img/logoMYSQL.svg" alt="Second slide">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100 ratio-16x9" src="../assets/img/logoNODE.svg" alt="Third slide">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100 ratio-16x9" src="../assets/img/logoPHP.svg" alt="Second slide">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100 ratio-16x9" src="../assets/img/logoSass.svg" alt="Third slide">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100 ratio-16x9" src="../assets/img/logoVITEJS.svg" alt="Second slide">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100 ratio-16x9" src="../assets/img/logoVUEJS.svg" alt="Third slide">
                            </div>
                        </div>
                        <a class="carousel-control-prev pe-5 me-5" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only pe-5 me-5">Previous</span>
                        </a>
                        <a class="carousel-control-next ps-5 ms-5" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only ps-5 ms-5">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="contacts" class="z-2 position-relative w-100">
        <div class="container-fluid h-100" >
            <h3 class="p-5 fade-in watch text-center">Contattami</h3>
            <div class="row h-75 justify-content-center align-items-center">
                <div class="col-6 fade-in watch">
                    <form @submit.Prevent="submitForn()">
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" v-model="name" class="form-control" name="name" id="name"
                            aria-describedby="helpId" placeholder="Scrivi il tuo nome">
                            <small id="helpId" class="form-text text-muted text-warning-emphasis">massimo 50 caratteri</small> <br>
                            <p v-for="(error, index) in errors.name" :key="`mesage-error-${index}`">{{ error }}</p>
                            <label for="email" class="form-label">E-mail</label>
                            <input type="email" v-model="email" class="form-control" name="email" id="email"
                            aria-describedby="helpId" placeholder="Scrivi il tuo indirizzo E-mail">
                            <small id="helpId" class="form-text text-muted text-warning-emphasis">Help text</small> <br>
                            <div class="mb-3">
                                <label for="message" class="form-label"></label>
                                <textarea class="form-control" v-model="mesage" name="message" id="message"
                                rows="3"></textarea>
                            </div>
                        </div>
                        <button :disabled="loading" type="submit" class="btn btn-primary btn-lg">Invia</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

</template>