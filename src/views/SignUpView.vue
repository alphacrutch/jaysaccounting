<template lang="html">
    <div id="logInView">
        <form @submit.prevent="LogIn">
            <label required> Email: <input type="email" v-model="email"></label>
        </form>
    </div>
</template>
<script>

import { form } from '@/composables/staticData';
import { ref } from 'vue'
import { LogInAPI } from '@/composables/fireInit';

const email = ref('')
const password = ref('')

function LogIn() {
    let random = Math.floor(1000 + Math.random() * 9000);
    password.value = "ps-" + random;
    LogInAPI(email.value, password.value);
}

</script>
<style lang="scss">
#logInView {
    height: 90vh;
    width: 100%;
}
</style>