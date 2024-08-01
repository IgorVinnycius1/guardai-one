<script>
import LoginInputText from '@/components/LoginInputText.vue';
import { loginUser } from '@/functions/userFunctions';

export default {
    name: 'LoginView',
    methods: {
        async login() {
            const result = await loginUser('elias@email.com', 'senha123')

            if (!result) {
                console.log("Erro ao logar")
                return
            }

            this.$router.push('/home')
        }
    },
    components: {
        LoginInputText
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
                Aqui você pode logar na sua conta de
                <span class="text-amber-500">gerente</span>
                de estoque
            </p>
            <p>
                Caso você possua uma conta de funcionário, você pode logar por
                <span class="text-amber-500">aqui</span>
            </p>
        </div>
    </div>

    <!-- Parte principal, que seria o formulário de login -->
    <main class="container px-8 py-8 bg-white rounded-t-3xl">
        <form class="flex flex-col gap-y-4">
            <LoginInputText placeholder="Usuário" />

            <LoginInputText placeholder="Senha"
                            password />

            <button class="self-end text-sm text-sky-600">Vixe, esqueci a senha</button>

            <button @click="(e) => { e.preventDefault(); login() }"
                    class="w-full bg-sky-500 text-white text-lg font-semibold py-1 px-4 rounded-2xl">Logar</button>

            <!-- Que nem a gente tinha conversado, não se se isso vai rolar -->
            <button class="w-full bg-gray-200 text-gray-400 text-sm font-semibold py-2 px-4 rounded-2xl">
                Continuar com o google
            </button>

            <div class="flex justify-center text-sm">
                <span>Não tem uma conta?</span>

                <button class="text-sky-500">Criar uma conta</button>
            </div>
        </form>
    </main>
</div>
</template>

<style scoped></style>
