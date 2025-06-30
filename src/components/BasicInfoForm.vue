<template lang="html">
    <div id="signUpForm">
        <h1>Sign Up</h1>
        <h2>Details of the Individual</h2>
        <h3>One Time BasicInfoFormData - Prt 1</h3>
        <form @submit.prevent="SaveBasicInfo">
            <label> First Name: <input v-model="BasicInfoFormData.firstName" type="text" /> </label>
            <label> Middle Name(s): <input v-model="BasicInfoFormData.middleName" type="text" /> </label>
            <label> Last Name: <input v-model="BasicInfoFormData.lastName" type="text" /> </label>
            <label> Occupation: <input v-model="BasicInfoFormData.occupation" type="text" /> </label>
            <label> Nationality At Birth: <input v-model="BasicInfoFormData.nationalityAtBirth" type="text" /> </label>
            <label> Current Nationality <br>(if different from above): <input
                    v-model="BasicInfoFormData.currentNationality" type="text" /> </label>
            <label> Birth Certificate Pin: <input v-model="BasicInfoFormData.birthCertificatePin" type="number" />
            </label>
            <label> Date of Birth: <input v-model="BasicInfoFormData.dateOfBirth" type="date" /> </label>
            <div id="genderRadio">
                <label>Gender:</label>
                <label>Male <input type="radio" v-model="BasicInfoFormData.gender" value="Male" /> </label>
                <label> Female <input type="radio" v-model="BasicInfoFormData.gender" value="Female" /> </label>
            </div>
            <p>Selected gender: {{ BasicInfoFormData.gender }}</p>
            <label v-if="BasicInfoFormData.gender === 'Female'">Married? <input type="checkbox"
                    v-model="married"></label>
            <label v-if="(BasicInfoFormData.gender === 'Female') && married">
                Marriage Certificate <input type="file"></label>
            <button type="submit">Next</button>
        </form>
    </div>
</template>

<script setup>
import { BasicInfoFormData } from '@/composables/staticData'
import { ref } from 'vue'
import { SaveBasicInfo } from "@/composables/dbSchema";

const married = ref(false)
const isAgent = ref(false)
const isFemale = ref(false)

function handleSubmit() {
    console.log('BasicInfoFormData submitted:', BasicInfoFormData.value)
    // PerBasicInfoFormData validation, then API call
}
</script>
<style lang="scss" scoped>
#signUpForm {
    display: flex;
    flex-flow: column nowrap;
    gap: 1em;
    width: 100%;
    align-items: center;
    overflow-y: scroll;
    height: 90vh;
}

input {
    align-self: flex-start;
    width: 100%;
}

input[type="checkbox"] {
    width: 10%;
}

label {
    width: 90%;
    font-size: 1.2rem;
    font-weight: 600;
}

button {
    align-self: center;
    width: 40%;
    height: 3em;
}

#genderRadio {
    display: flex;
}
</style>