<template>
  <q-layout class="background">
    <q-footer class="bg-color">
        <q-toolbar class="toolbar">
          <div class="q-pa-md q-gutter-sm">          
            <q-btn class="full-width" flat style="color: #000000" label="Tap to order" to="/meny" />            
          </div>
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