<template>
    <div class="login">
        <h1>This will be a login page</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'LoginPage',
    components: {
    },
    setup() {
    const router = useRouter();
    return { 
    }
}
,
});
</script>