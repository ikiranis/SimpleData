<template>
    <a @click="saveFile">Download Data</a>
</template>

<script>
	// import {ref} from 'vue'

	export default {
		props: {
			data: {
				required: false,
				type: Array
			}
		},
		setup(props) {
			function saveFile() {
				// console.log(props.data[1].city)
				let file = new Blob([JSON.stringify(props.data)], {type: 'application/json'});
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
