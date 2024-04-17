<template>
  <div class="home">
    <p>{{ name }}</p>
    <button @click="changeName">Click me</button>
    <p v-if="name==='Hannah'">Great name!</p>
  </div>
</template>

<style scoped>

</style>

<script>
export default {
  name: 'HomeView',
  mounted() {
    
  },
  data: () => {
    return {
      name: "Hannah"
    }
  },
  methods: {
    changeName() {
      this.name = "Alex"
    }
  }
}
</script>
