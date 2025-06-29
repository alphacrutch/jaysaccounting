<template>
  <div class="home">
    <h1> Choose Your Service</h1>
    <select id="serviceSelection" v-model="chosenService">
      <option v-for="service in Services" :value="service.Name" :key="service.Name">{{ service.Name }}
      </option>
    </select>
    <button @click="GoToServicePage" id="nextBtn">Next</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { Services } from '@/composables/staticData';

const router = useRouter();
const chosenService = ref('')

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
  justify-content: space-evenly;
  height: 15em;
  width: 90vw;
}

select {
  width: 80%;
  height: 12%;
}

#nextBtn {
  width: 50%;
  height: 15%;
  font-size: 1.3rem;

}
</style>