<template>
  <q-page class="flex flex-center">
    <ul>
      <li v-for="cake in cakes" :key="cake.id">
        {{cake.title}}
      </li>
    </ul>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  created() {
    this.$axios.get('http://localhost:3000/cakes').then(res => {
      this.cakes = res.data
    })
  },
  data() {
    return {
      cakes: []
    }
  }
}
</script>
