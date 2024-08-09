<script>
import { createCategory, getCategoryByStock } from '@/functions/categoryFunctions';
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
        // Talvez exista uma maneira melhor de pegar e passar os dados do estoque sem ser pela url, pra ter mais segurança
        this.stock = await getStockById(this.$route.params.id)
        this.fetchCategories()
    },
    methods: {
        // metodo de pegar as categorias e metodo de criar a categoria
        async fetchCategories() {
            this.categories = await getCategoryByStock(this.stock.id)
        },

        async createCategoryHandler(categoryName, categoryDescription) {
            await createCategory(this.stock.id, {
                name: categoryName,
                description: categoryDescription
            })

            this.fetchCategories()
        },

        categoryClickHandler() {
            console.log('Clicou na categoria')
            // Ir para a tela de categoria com as opções para criar itens
        }
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

<hr>

<div>
    <button class="py-2 px-4 bg-sky-500 mt-2 text-white"
            @click="createCategoryHandler('Agulhas', 'bla bla bla, faz uns furos')">Criar categoria</button>
    <i>Ta com dados hardcoded</i>
</div>

<div>
    <button class="py-2 px-4 bg-sky-500 mt-2 text-white"
            @click="$router.push(`/stock/${stock.id}/employee-management`)">Tela de funcionarios</button>
</div>
</template>

<style scoped></style>
