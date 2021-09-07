<template>
    <div>
    <ul id="example-1">
  <li v-for="order in orders" :key="order.timestamp">
    {{ order.timestamp }}
  </li>
</ul>
      <q-footer style="height: 100px" reveal elevated>
        <q-toolbar>
          <q-btn>Log-Out</q-btn>
          <q-btn>Proccess</q-btn>
          <q-btn>Done</q-btn>
        </q-toolbar>
      </q-footer>  
    </div>
          
</template>
<script>

export default {
  mounted() {
    this.$axios.get("http://localhost:3000/orders").then((result) => {
        console.log(result.data[1].timestamp)
      this.orders = result.data.sort((a, b) => a.timestamp.localeCompare(b.timestamp))
    });
  },
 
  data() {
      return {
         orders: {} 
      }
  },
};
</script>