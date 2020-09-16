<template>
    <open-file v-model:data="data"/>

    <save-file :data="data"/>

    <display-data :data="data"/>


</template>

<script>

	import {ref} from 'vue'
	import OpenFile from './components/OpenFile'
	import SaveFile from "./components/SaveFile";
	import DisplayData from "./components/DisplayData";

	export default {
		name: 'App',
		components: {
			SaveFile,
			OpenFile,
			DisplayData
		},

		setup() {
			const data = ref(null)

			return {
				data
			}
		}
	}
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
