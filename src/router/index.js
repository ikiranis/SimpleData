import {createWebHistory, createRouter} from "vue-router"
import Home from "@/views/Home"
import List from "@/views/List"
import OpenFile from "@/views/OpenFile"
import SaveFile from "@/views/SaveFile"
import InputData from "@/views/InputData";

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
		{
			path: '/openFile',
			component: OpenFile
		},
		{
			path: '/saveFile',
			component: SaveFile
		},
		{
			path: '/inputData',
			component: InputData
		}
	]
})

export default router
