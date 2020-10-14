<template>
    <div class="container">

        <div>
            Simple Data App
        </div>

    </div>

</template>

<script>

	import { useFields } from "@/functions/fields"

	export default {
		name: 'App',

		setup() {
			useFields()
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
