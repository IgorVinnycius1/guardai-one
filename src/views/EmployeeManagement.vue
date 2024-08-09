<script>
import { changeEmployeePermissions, createEmployee, getEmployeesByStockId } from '@/functions/employeeFunctions';
import { getStockById } from '@/functions/stockFunctions';

export default {
    name: 'EmployeeManagement',
    data() {
        return {
            stock: {},
            employees: []
        }
    },
    methods: {
        async fetchEmployees() {
            this.employees = await getEmployeesByStockId(this.stock.id)
        },

        async createEmployeeHandler(firstName, secondName, username, password) {
            const response = await createEmployee(this.stock.id, {
                firstName, secondName, username, password
            })

            if (!response) {
                console.log("erro criando funcionario")
                return
            }

            // Entrega todas as permissões para o funcionario
            await changeEmployeePermissions(response.id, {
                canCreateItem: true,
                canCreateCategory: true,
                canCreateMovement: true,

                canEditItem: true,
                canEditCategoty: true,

                canDeleteItem: true,
                canDeleteCategory: true,
            })

            this.fetchEmployees()
        }
    },
    async created() {
        this.stock = await getStockById(this.$route.params.id)
        this.fetchEmployees()
    }
}
</script>

<template>
<h1>Tela de Gestão de funcionarios</h1>
<h2 class="text-2xl font-semibold text-center">Funcionários</h2>

<i>Controle exato de funcionario em desenvolvimento</i>
<button v-for="employee in employees"
        class="py-2 px-4 bg-sky-500 mt-2 text-white">
    {{ employee.firstName }}
</button>

<hr class="my-4">

<div>
    <button class="py-2 px-4 bg-sky-500 mt-2 text-white"
            @click="createEmployeeHandler('Igor', 'Vynyccyuss', 'igor_estoque_a', 'senha123')">Criar usuário</button>
    <i>Ta com dados hardcoded</i>
</div>
</template>

<style scoped></style>