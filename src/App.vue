<template>
    <open-file @update="getData"/>

    <div v-for="item in data" :key="item.id">
        <div>{{ item.id }}</div>
        <div>{{ item.name }}</div>
        <div>{{ item.city }}</div>
    </div>
</template>

<script>

	import {ref} from 'vue'
	import OpenFile from './components/OpenFile.vue'

	export default {
		name: 'App',
		components: {
			OpenFile
		},

		setup() {
			let data = ref([])

			function getData(myData) {
				data.value = myData
			}

			return {
				data,
                getData
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
