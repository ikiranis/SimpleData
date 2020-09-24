<template>
    <div class="container">
        <div class="row mt-5">
            <open-file v-model:data="data"/>

            <save-file class="mx-3" :data="data"/>

        </div>

        <input-data class="mt-5" @submit="addRecord" />

        <display-data class="mt-5" :data="data"/>
    </div>

</template>

<script>

	import { ref } from 'vue'
	import OpenFile from '@/components/OpenFile'
	import SaveFile from "@/components/SaveFile";
	import DisplayData from "@/components/DisplayData";
	import InputData from "@/components/InputData";

	export default {
		name: 'App',
		components: {
			SaveFile,
			OpenFile,
			DisplayData,
            InputData,
		},

		setup() {
			let data = ref([])

            const addRecord = (record) => {
				record.id = Date.now()
				data.value.push(record)
            }

			return {
				data,
                addRecord
			}
		}
	}
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }

    .bi {
        width: 2em;
        cursor: pointer;
    }
</style>
