<template>
  <div>
    <p>
      {{ count }}
      {{ doubleCount }}
    </p>
    <button @click="increment(1)">Increment</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

export default defineComponent({
  setup() {
    const store = useCounterStore();

    const { count, doubleCount } = storeToRefs(store);

    const {
      increment
    } = store

    return {
      count,
      doubleCount,
      increment
    };
  },
});
</script>
