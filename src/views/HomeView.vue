<template>
  <div class="home">
    <section id="home-section">
      <h1>Jay's Accounting Service</h1>

      <h3> Streamline Your Business Setup & Compliance — All in One Place </h3>
      <hr>
      <label>Easily submit your information, documents, and photos for:</label>
      <ul>
        <li>✅ Accounting Services</li>
        <li>✅ Business Registration</li>
        <li>✅ OPR (Procurement Registration)</li>
        <li>✅ Tax Filing & Compliance</li>
        <li>✅ Post-Incorporation Services</li>
      </ul>
      <p><i><b> Secure. Simple. Fast.</b></i></p>

      <p>
        Let’s get your business moving — start by signing up today.
      </p>
      <button @click="createMergedSheet"> Create Sheet</button>
    </section>
    <section id="serviceSelectionHolder" v-if="showServiceSelection">
      <h2> Choose Your Service</h2>
      <select id="serviceSelection" v-model="chosenService">
        <option v-for="service in Services" :value="service.Name" :key="service.Name">{{ service.Name }}
        </option>
      </select>
      <button @click="GoToServicePage" id="nextBtn">Next</button>

    </section>
    <div class="authOptions">
      <button @click="signIn" class="authBtn">Sign Up</button>
      <div>or</div>
      <button @click="logIn" class="authBtn">Log In</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Services } from '@/composables/staticData';
import { createMergedSheet } from '@/composables/excelFactory';

const router = useRouter();
const chosenService = ref('');
const showServiceSelection = ref(false);

const GoToServicePage = () => {
  const selected = Services.value.find(s => s.Name === chosenService.value)
  if (selected) {
    router.push(selected.route)
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
  height: 90vh;
  width: 95vw;
}

#home-section {
  height: 90%;
  width: 98%;
  background-color: rgba(0, 255, 255, 0.336);
  border-radius: 2em;
}

.authOptions {
  gap: 1em;
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  align-items: center;
  justify-content: center;
}

#serviceSelectionHolder {
  width: 98%;
  height: 30%;
}

select {
  width: 80%;
  height: 20%;
}

#nextBtn {
  width: 50%;
  height: 15%;
  font-size: 1.3rem;

}

li {
  text-align: left;
}

.authBtn {
  width: 35%;
}
</style>