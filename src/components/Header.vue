<template>
            
        <ion-header  >
            <ion-toolbar class="ion-toolbar--end">
                <ion-title class="ion-toolbar--end"> <img  class= "inline" src="../../public/logo.png" alt="logo">Menu <ion-icon class="inline" aria-hidden="true"
                        size="large" :icon="cart" />
                    {{ cartItems }}  </ion-title>
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
 
</style>
 






