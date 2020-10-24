import {createWebHistory, createRouter} from "vue-router"
import Home from "@/views/Home"
import List from "@/views/List"
import OpenFile from "@/views/OpenFile"
import SaveFile from "@/views/SaveFile"
import InputData from "@/views/InputData";
import Record from "@/views/Record";

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
		},
		{
			path: '/record/:id',
			name: 'record',
			component: Record,
			props: true
		}
	]
})

export default router
