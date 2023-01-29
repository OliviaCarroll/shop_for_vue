<template>
    <form name="login-form">
        <div class="mb-3">
            <label for="username">Username: </label>
            <input id="username" type="text" />
        </div>
        <div class="mb-3">
            <label for="password">Password: </label>
            <input id="password" type="password" />
        </div>
        <button class="btn btn-outline-dark" type="submit">Login</button>
    </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
    name: "LoginView",
    components: {},
    setup() {
        const router = useRouter();
        return {};
    },
});
</script>
