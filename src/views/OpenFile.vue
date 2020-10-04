<template>
    <open-file v-model:data="data" />
</template>

<script>
	import OpenFile from "@/components/OpenFile"

	export default {
		components: {
			OpenFile
		}
	}
</script>
