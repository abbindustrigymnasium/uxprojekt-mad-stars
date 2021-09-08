<template>
  <div class="q-pa-md bg-image">
    <q-layout view="hHh Lpr fFf"> 

      <div class="center" id="app">
        <!-- {{ info[0] }} -->
        
        <!-- <li v-for="item in info">
          <p>{{ item.id }}</p>
          <p>{{ item.previewDescription }}</p>
        </li> -->
        
        <div class="q-pa-md doc-container">
          <div class="column items-center">
            <q-card class="card col" v-for="item in info">
              <q-img class="image" v-bind:src="item.image">
              </q-img>
        
              <div>
                <q-card-actions class="bg-color">
                  <div class="width">
                    <div class="title">{{ item.title }} {{ item.price }}$</div>
                    <!-- <div class="price">{{ item.price }}$</div> -->
                  </div>
                </q-card-actions>
              </div>
            </q-card>
          </div>
        </div>

      </div>
  
      <!-- The Footer -->
      <q-footer class="bg-color">
        <q-toolbar>
          <!-- <div class="q-pa-md q-gutter-sm">
            <q-btn align="left" class="btn-fixed-width" color="primary" label="Align to left" />
            <q-btn align="right" class="btn-fixed-width" color="secondary" label="Align to right" />
            <q-btn align="between" class="btn-fixed-width" color="accent" label="Align between" icon="flight_takeoff" />           
          </div> -->
         
          <div class="q-pa-md q-gutter-sm">          
            <q-btn class="cancel" label="Cancel" to="/" />          
            <q-btn class="cart" icon="shopping_cart" to="/cart" />
            <q-btn class="check-out" label="To Check-Out" to="/check-out" />          
          </div>
          

           <!-- <div class="q-pa-md doc-container">
            <div class="row items-start"> 
              <div class="col">
                <q-btn 
                    class="cancel"
                    label="Cancel"
                    to="/"
                />
              </div>
              <div class="col">
                <q-btn 
                    class="cart"
                    icon="shopping_cart"
                    to="/cart"
                />
              </div>
              <div class="col">
                <q-btn 
                    class="check-out"
                    label="To Check-Out"
                    to="/check-out"
                />
              </div>
            </div>
          </div> -->
        </q-toolbar>
      </q-footer>
  
      <q-page-container>
        <!-- This is where pages get injected -->
        <router-view />
      </q-page-container>
  
    </q-layout>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  // name: 'MenyLayout',

  data () {
    return {
      info: []
    }
  },

  setup () {
    // const leftDrawerOpen = ref(false)
    
    return {
      // leftDrawerOpen,
      // toggleLeftDrawer () {
      //   leftDrawerOpen.value = !leftDrawerOpen.value
      // }

    }
  },
  created () {
    fetch('http://localhost:3000/cakes')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.info = data
      });
  }
}
</script>

<style>
  .bg-image {
    background-image: url(https://raw.githubusercontent.com/abbindustrigymnasium/uxprojekt-mad-stars/main/Frontend/src/assets/jungle-background.png?token=ANBBONGNLDJBBGOXIRVBYSDBHBKJK);
    background-repeat: no-repeat;
    background-size: cover;
  }

  .bg-color {
    background-color: rgb(221, 229, 180);
  }

  .cancel {
    color: black;
    background-color: rgb(231, 29, 54);
  }

  .cart {
    color: black;
    background-color: rgb(0, 91, 66);
    /* justify-content: center !important;
    margin-left: 10px;
    margin-right: 10px; */
  }

  .check-out {
    color: black;
    background-color: rgb(118, 190, 52);
  }

  /* .image {
    max-width: 200px;
    max-height: 200px;
    align-items: center;
  } */

  .card {
    max-width: 65% !important;
    max-height: 65% !important;
    min-width: 65% !important;
    min-height: 65% !important;
    margin-bottom: 10%;
  }

  .title {
    font-size: large;
    size: 85%;
  }

  /* .center {
    justify-content: space center;
  } */

  .price {
    font-size: large;
    text-align: right !important; 
    
  }

  .width {
    width: 100%;
  }
</style>