<script>
export default {
    name: "LoginInputText",
    data() {
        return {
            value: ""
        }
    },
    props: {
        placeholder: String,
        password: Boolean
    }
}
</script>

<template>
<fieldset>
    <input class="w-full bg-gray-200 px-4 py-2 rounded placeholder:text-gray-400"
           :placeholder="placeholder"
           :type="password ? 'password' : 'text'"
           :value="value">
</fieldset>
</template>

<style scoped></style>
