import { createRouter, createWebHashHistory } from 'vue-router'
import RepoView from '../views/RepoView.vue'
import RootView from '../views/RootView.vue'

const routes = [
    { name: 'repos', path: '/:user/repos', component: RepoView},
    //{ name: 'forks', path: '/forks', component: ForkView},
    { name: 'root', path: '/', component: RootView}
]
const router = createRouter({
history: createWebHashHistory(),
routes: routes
})
export default router