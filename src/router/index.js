import {createWebHistory, createRouter} from "vue-router"
import App from "@/App"
import List from "@/views/List"

const history = createWebHistory()
const router = createRouter({
	history,
	routes: [
		{
			path: '/',
			component: App
		},
		{
			path: '/list',
			component: List
		},
	]
})

export default router
