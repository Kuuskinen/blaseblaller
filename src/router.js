import Vue from 'vue'
import Router from 'vue-router'
import Championships from "@/components/Championships";
import Leagues from "@/components/Leagues";

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/championships',
            name: 'championships',
            component: Championships
        },
        {
            path: '/leagues',
            name: 'leagues',
            component: Leagues
        }
    ]
})

export default router;
