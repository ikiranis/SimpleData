<template>
    <Nav />
    <router-view/>

</template>

<script>
	import Nav from "@/components/Nav"
    import { useFields } from "@/functions/fields";

	export default {
		name: 'App',
		components: {
			Nav
		},
        setup() {
            useFields()
        }
	}
</script>
