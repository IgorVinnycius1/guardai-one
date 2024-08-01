<script>
import { getCategoryByStock } from '@/functions/categoryFunctions';
import { getStockById } from '@/functions/stockFunctions';

export default {
    name: 'StockView',
    data() {
        return {
            stock: {},
            categories: []
        }
    },
    async created() {
        this.stock = await getStockById(this.$route.params.id)
        this.categories = await getCategoryByStock(this.stock.id)
    }
}
</script>

<template>
<h1>Nome do estoque: {{ stock.name }}</h1>

<h2 class="text-lg text-center font-semibold">Compartimentos</h2>
<button v-for="category in categories"
        class="py-2 px-4 bg-sky-500 mt-2 text-white">
    {{ category.name }}
</button>
</template>

<style scoped></style>
