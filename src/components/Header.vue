<template>
            
        <ion-header  >
            <ion-toolbar  >
       <!--          <ion-title class="ion-toolbar--end"> --><div class="toolbar" >

       
                   <img  class= "inline" src="../../public/logo.png" alt="logo">
                  <h1 class="menu-title">Menu </h1> 
                  <div class="shoppingCart">   <div class="padding"><ion-icon class="inline" aria-hidden="true"    size="large" :icon="cart" />
                  {{ cartItems }} </div> </div><!-- </ion-title> --></div>
            </ion-toolbar>

        </ion-header>
   
     
</template>

<script lang="ts" >
import { cart } from 'ionicons/icons';
import {
    IonContent,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonIcon

} from "@ionic/vue";
import { storeToRefs } from 'pinia';
import { useCartStore } from '../store/cartStore.js';
import {ref } from "vue";


export default {
    name: "Header",



    components: {
        IonContent,
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,IonIcon

    },

    setup() {
      const cartStore = useCartStore();
const { totalItems } = storeToRefs(cartStore);

const cartItems = ref(totalItems)

    
    return {
      cart, cartItems
    
    };
  },
}
</script>
<style>

.shoppingCart ion-icon{
  margin-right: 0.5rem;
  fill: #724b12;
 
}
 
</style>
 






