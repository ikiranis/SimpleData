<template>
    <a @click="saveFile">
        <img class="bi"
             src="@/../node_modules/bootstrap-icons/icons/cloud-arrow-down-fill.svg"
             title="Κατέβασμα αρχείου">
    </a>
</template>

<script>
	import {useStore} from "vuex";
	import {computed} from "vue";

	export default {
		setup() {
			const store = useStore()

			const data = computed(() => {
				return store.state.data
			})

			function saveFile() {
				// console.log(props.data.toJson())
				let file = new Blob([JSON.stringify(data.value,  null, 4)], {type: 'application/json'});
				let link = document.createElement('a');
				link.href = window.URL.createObjectURL(file);
				link.download = "myData.json";
				link.click();
			}

			return {
				saveFile
			}
		}
	}

</script>
