<template>
    <div class="container">
        <div class="row mt-5">
            <open-file v-model:data="data"/>

            <save-file class="mx-3" :data="data"/>

            <a @click="displayForm = !displayForm" class="mx-2">
                <img class="bi"
                     src="@/../node_modules/bootstrap-icons/icons/card-text.svg"
                     title="Εισαγωγή στοιχείων">
            </a>

            <a @click="displayData = !displayData" class="mx-2">
                <img class="bi"
                     src="@/../node_modules/bootstrap-icons/icons/view-list.svg"
                     title="Εμφάνιση στοιχείων">
            </a>

        </div>

        <input-data v-if="displayForm" class="mt-5 mb-5" @submit="addRecord"/>

        <display-data v-if="displayData" class="mt-5 mb-5"/>
    </div>

</template>

<script>

	import {ref} from 'vue'
	import OpenFile from '@/components/OpenFile'
	import SaveFile from "@/components/SaveFile"
	import DisplayData from "@/components/DisplayData"
	import InputData from "@/components/InputData"
	import {useStore} from "vuex";
	import {computed} from "@vue/reactivity";

	export default {
		name: 'App',

		components: {
			SaveFile,
			OpenFile,
			DisplayData,
			InputData,
		},

		setup() {
			// let data = ref([])
			const store = useStore()
			let displayForm = ref(false)
			let displayData = ref(false)

			const data = computed(() => {
				return store.state.data
			})

			const addRecord = (record) => {
				record.id = Date.now()
				store.commit('add', record)
				displayForm.value = !displayForm.value
				displayData.value = !displayData.value
			}

			return {
				data,
				addRecord,
				displayForm,
				displayData
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
