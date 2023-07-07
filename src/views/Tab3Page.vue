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
        <ion-icon :icon="cart" size="large" />
        <ion-text>Amount of items ordered {{ totalItems }}</ion-text>
        <ion-card-title>
          Items
        </ion-card-title>
        <ion-card-content>
          <ion-list>
            <ion-item v-for="item in items" :key="item.id">
              <b>{{ item.name }}</b>-- x {{ item.count }} -- $ {{ item.price }} = ${{ item.price * item.count }}
            </ion-item>
          </ion-list>
          <br>
          <ion-text> <b>Total: {{ totalCost }}</b></ion-text>
          <ion-button  v-if="first" @click="showbox" expand="block" size="small" color="success"> Pay & Place order!</ion-button>


        </ion-card-content>
      </ion-card>
      <div v-if="showpayment">
        <h1> Choose your payment method!</h1>
      
      <ion-radio-group  value="PayPal">
        <ion-radio value="PayPal">PayPal</ion-radio><br />
        <ion-radio value="Credit Card">Credit Card</ion-radio><br />
        <ion-radio value="Cash">Cash</ion-radio><br />
        <ion-radio value="Cripto">Cripto $$</ion-radio>
      </ion-radio-group>
      <ion-button @click="shownext" expand="block" size="small" color="success"> Continue</ion-button>
</div>
<div v-if="payment2">
        <h1> One step ahead and we are done!</h1>
      
      <ion-button @click="enjoy" expand="block" size="small" color="success"> Place Order!</ion-button>
</div>
<div v-if="last">
        <h1> Thank you so much! Your order have been placed. Enjoy your meal and let us know how did it all have been</h1>
      
      
</div>

    </ion-content>
    
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonButton,IonRadio,IonRadioGroup, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardTitle, IonIcon, IonText, IonList, IonItem } from '@ionic/vue';
import { cart } from 'ionicons/icons';
import { useCartStore } from '../store/cartStore.js';
import { storeToRefs } from "pinia";
import { ref, onMounted } from 'vue';

const cartStore = useCartStore();
const { totalItems, items, totalCost } = storeToRefs(cartStore);

let total = ref(0)
let first = ref(true)
let showpayment = ref(false)
let payment2 = ref(false)
let last = ref(false)

let showbox = () => {
  showpayment.value = !showpayment.value
  first.value = false;
}

let shownext = () => {
  showpayment.value = false
  payment2.value = true;
}
let enjoy = () => {
  payment2.value = false;
  last.value=true;

}

</script>
