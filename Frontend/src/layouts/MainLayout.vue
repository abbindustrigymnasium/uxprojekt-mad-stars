<template>
  <q-layout class="background">
    <q-footer class="bg-color">
        <q-toolbar class="toolbar">
          <!-- <div class="q-pa-md q-gutter-sm">
            <q-btn align="left" class="btn-fixed-width" color="primary" label="Align to left" />
            <q-btn align="right" class="btn-fixed-width" color="secondary" label="Align to right" />
            <q-btn align="between" class="btn-fixed-width" color="accent" label="Align between" icon="flight_takeoff" />           
          </div> -->
         
          <div class="q-pa-md q-gutter-sm">          
            <q-btn class="full-width" flat style="color: #000000" label="Tap to order" to="/meny" />            
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
  </q-layout>
</template>

<style>
  .background {
    background-image: url("../assets/homebackground.png");
    background-size: cover;
    background-repeat: no-repeat;
  }
  .bg-color {
    background-color: rgb(221, 229, 180);
    align-items: center;
    justify-content: center;
  }
  .order-btn {
    justify-self: center;
  }
  .toolbar {
    height: 10%;
    justify-items: center;
    align-items: center;
  }
</style>