<script>
import LoginInputText from '@/components/LoginInputText.vue';
import { createUser } from '@/functions/userFunctions';

export default {
    name: 'LoginView',
    components: {
        LoginInputText
    },
    methods: {
        async signUpHandler() {
            const userData = {
                firstName: 'Elias',
                secondName: 'Pinheiro',
                email: 'elias@email.com',
                password: 'senha123'
            }

            const result = await createUser(userData)

            // Tem que fazer um tratamento de erro melhor
            if (!result) {
                console.log("Erro ao cadastrar");
                return
            }

            this.$router.push('/home')
        }
    }
}
</script>

<template>
<div class="h-screen flex flex-col bg-sky-600">
    <div class="container px-8 py-8 grow flex flex-col justify-between">

        <!-- Logo do Guardai -->
        <div class="px-8">
            <img class="w-full"
                 src="https://placehold.co/600x400"
                 alt="">
        </div>

        <!-- Textos -->
        <div class="text-white text-center">
            <p>
                Aqui você pode cadastrar sua conta de
                <span class="text-amber-500">gerente</span>
                de estoque
            </p>
        </div>
    </div>

    <!-- Parte principal, que seria o formulário de cadastro -->
    <main class="container px-8 py-8 bg-white rounded-t-3xl">
        <form class="flex flex-col gap-y-4">
            <LoginInputText placeholder="Nome Completo" />

            <LoginInputText placeholder="Nome de usuário" />

            <LoginInputText placeholder="Nome da Empresa" />

            <LoginInputText placeholder="Email" />

            <LoginInputText placeholder="Senha" />

            <button class="w-full bg-sky-500 text-white text-lg font-semibold py-1 px-4 rounded-2xl"
                    @click="(e) => { e.preventDefault(); signUpHandler() }">Cadastrar</button>

            <!-- Que nem a gente tinha conversado, não se se isso vai rolar -->
            <button class="w-full bg-gray-200 text-gray-400 text-sm font-semibold py-2 px-4 rounded-2xl">
                Continuar com o google
            </button>

            <div class="flex justify-center gap-x-2 text-sm">
                <span>Já tem uma conta?</span>

                <button class="text-sky-500">Logar</button>
            </div>
        </form>
    </main>
</div>
</template>

<style scoped></style>
