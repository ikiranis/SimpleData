import {createWebHistory, createRouter} from "vue-router"
import Home from "@/views/Home"
import List from "@/views/List"

const history = createWebHistory()
const router = createRouter({
	history,
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/list',
			component: List
		},
	]
})

export default router
