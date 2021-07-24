import Vue from 'vue'
import Router from 'vue-router'
import Championships from "@/components/Championships";

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/championships',
            name: 'championships',
            component: Championships
        }
    ]
})

export default router;
