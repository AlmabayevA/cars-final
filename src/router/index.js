import AMain from "@/components/AMain.vue";
import RentedCars from "@/views/RentedCars.vue";
import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/Home.vue";


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/rented-cars',
        name: 'Rented Cars',
        component: RentedCars
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;