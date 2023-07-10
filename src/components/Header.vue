<template>
    <ion-page>
        <ion-header>
            <ion-toolbar class="ion-toolbar--end">
                <ion-title> <img src="../../public/logo.png" alt="logo">Menu <ion-icon class="alignment" aria-hidden="true"
                        size="large" :icon="cart" />
                    <!-- {{ cartItems }} --> </ion-title>
            </ion-toolbar>

        </ion-header>
        <ion-content :fullscreen="true">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">Menu</ion-title>
                </ion-toolbar>
            </ion-header>
        </ion-content>
    </ion-page>
</template>

<script lang="ts" >
import { cart } from 'ionicons/icons';
import {
    IonContent,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,

} from "@ionic/vue";


export default {
    name: "Header",



    components: {
        IonContent,
        IonPage,
        IonHeader,
        IonToolbar,
        IonTitle,

    },

    setup() {
  
    
    return {
      cart
    };
  },
}
</script>
 






