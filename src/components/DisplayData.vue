<template>
    <table class="table mt-5">
        <thead>
            <tr>
                <th scope="col">id</th>
                <th scope="col">Name</th>
                <th scope="col">City</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in data" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.city }}</td>
            </tr>
        </tbody>
    </table>

</template>

<script>
	export default {
		props: {
			data: {
				required: true,
				type: Array
			}
		}
	}
</script>
