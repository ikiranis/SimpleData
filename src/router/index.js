import { createWebHistory, createRouter } from "vue-router"
import App from "@/App"
import DisplayData from "@/components/DisplayData"

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
			component: DisplayData
		},
	]
})

export default router
