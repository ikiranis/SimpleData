<template>
    <a @click="saveFile"><span class="btn btn-success">Download Data</span></a>
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
				// console.log(props.data.toJson())
				let file = new Blob([JSON.stringify(props.data,  null, 4)], {type: 'application/json'});
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
