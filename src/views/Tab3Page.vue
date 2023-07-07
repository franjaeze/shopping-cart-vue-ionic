<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Bill</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Bill</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-card>
        <ion-icon :icon="cart" size="large"/>
        <ion-text>Amount of items ordered {{ totalItems }}</ion-text>
        <ion-card-title>
          Items
        </ion-card-title>
        <ion-card-content>
          <ion-list>
            <ion-item v-for="item in items" :key="item.id">
              <b>{{ item.name }}</b>--  x {{item.count}} -- $ {{item.price}} = ${{item.price * item.count}}
            </ion-item>
          </ion-list>
          <br>
            <ion-text> <b>Total: {{ totalCost }}</b></ion-text>
            

        </ion-card-content>
      </ion-card>
 
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent,IonCard,IonCardContent,IonCardTitle, IonIcon,IonText,IonList,IonItem} from '@ionic/vue';
import { cart } from 'ionicons/icons';
import { useCartStore } from '../store/cartStore.js';
  import { storeToRefs } from "pinia";
  import { ref,onMounted} from 'vue';

  const cartStore = useCartStore();
const {   totalItems, items,totalCost } = storeToRefs(cartStore);
 
 let total = ref (0)

 
 
 
</script>
