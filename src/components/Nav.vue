<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link class="navbar-brand" to="/">Simple Data</router-link>
        <ul class="navbar-nav mr-auto">
            <li v-for="route in routes" :key="route.path" class="nav-item">
                <router-link :to="route.to" class="nav-link" :class="{ active: isActive(route.to) }">{{route.text}}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
	import { computed } from "vue"
	import { useRouter } from "vue-router"

	export default {
		setup() {
			const routes = [
				{ to: "/list", text: "List" },
			]
			const router = useRouter()
			const activeRoute = computed(() => router.currentRoute.value.path)
			const isActive = path => path === activeRoute.value

			return { isActive, routes }
		}
	};
</script>
