<template lang="html">
    <BasicInfoForm />
    <div v-show="false">
        <h1>Business Registration Services</h1>
        <ul>
            <li>Business(Sole Trader) - $740</li>
            <li>Business(Partnership) - $800</li>
            <li>Company (LTD / LLC) - $1500</li>
            <li>Incorporated Body (NGO) - $2500</li>
            <li>Un-Incorporated Body (NGO) - $2500</li>

        </ul>
    </div>
</template>
<script setup>
import BasicInfoForm
    from '@/components/BasicInfoForm.vue';
</script>
<style lang="scss"></style>