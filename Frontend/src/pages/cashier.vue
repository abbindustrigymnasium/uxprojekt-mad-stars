<template>
  <div>
    <div
      v-for="order in orders"
      :key="order"
      class="q-pa-sm"
    >
      <q-card
        class="my-card "
        style="width: 300px"
      >
        <q-card-section class="bg-grey text-white">
          <div class="text-h6">Time: {{ timeGetter(order.timestamp) }}</div>
          <div class='text-h6'>Order: {{ order.id }} </div>
        </q-card-section>
        <ul>
          <li
            v-for="orderedCake in order.cakes"
            :key="orderedCake"
            class="text-h6"
          >
            {{ cakeName(orderedCake.cakeId) }}: {{ orderedCake.quantity }}
          </li>
        </ul>
        <q-card-actions align="around">
          <q-btn class='button'>Proccess</q-btn>
          <q-btn class='button'>Done</q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </div>

</template>
<script>

export default {
  mounted () {
    this.$axios.get("http://localhost:3000/cakes").then((result) => {
      this.cakes = result.data
    })
    this.$axios.get("http://localhost:3000/orders").then((result) => {

      this.orders = result.data.sort((a, b) => a.timestamp.localeCompare(b.timestamp))
      console.log(result.data)
    })
  },

  data () {
    return {
      orders: {},
      cakes: {},
      time: 0,
      times: 0
    }
  },

  methods: {
    cakeName: function (cakeId) {
      var i
      for (i = 0; i < this.cakes.length; i++) {
        if (this.cakes[i].id === cakeId) {
          return this.cakes[i].title
        }
      }
    },
    timeGetter: function (timestamp) {
      console.log(Date.now())
      timestamp = Date.parse(timestamp)
      var time = Date.now()
      time = time - timestamp
      return time
    },
  }
};
</script>

<style scoped>
.button {
  width: 100px;
  height: 50px;
}
</style>