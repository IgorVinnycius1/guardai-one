<script>
import { createStock, getStocksByUserId } from '@/functions/stockFunctions';

export default {
    name: 'ManagerHomeView',
    data() {
        return {
            user: {},
            stocks: []
        }
    },
    async created() {
        this.user = JSON.parse(localStorage.getItem("User"))

        this.getStocksHandler()
    },
    methods: {
        async getStocksHandler() {
            this.stocks = await getStocksByUserId(this.user.id)
        },

        async createStockHandler(stockName, stockDescription) {
            await createStock({ name: stockName, description: stockDescription })

            this.getStocksHandler()
        }
    }
}
</script>

<template><!-- Preciso verificar a permição do usuário pra ir pro estoque -->

<h1>Bem vindo {{ user.firstName }}</h1>
<p>Aqui você acompanha tudo o que acontece nos seus estoques</p>

<h2 class="text-lg text-center font-semibold text-amber-500">Seus estoques: </h2>
<button v-for="stock in stocks"
        class="py-2 px-4 bg-sky-500 mt-2 text-white"
        @click="$router.push(`/stock/${stock.id}`)">
    {{ stock.name }}
</button>

<hr class="my-4">

<div>
    <button class="py-2 px-4 bg-sky-500 mt-2 text-white"
            @click="createStockHandler('Estoque do Igor', 'sdasdasd')">Criar estoque</button>
    <i>Ta com dados hardcoded</i>
</div>
</template>

<style scoped></style>
