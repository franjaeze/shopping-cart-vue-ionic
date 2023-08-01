<template>
  <ion-page>
     
     
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Bill</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-grid>
        <ion-row>
          <ion-col size="0" size-md="3">
          </ion-col>
          <ion-col size="12" size-md="6">
            <ion-card>
              <div class="padding">
              <ion-icon    :icon="cart" size="large" />
              <ion-text>Amount of items ordered <span class="number">{{ totalItems }}</span> </ion-text></div>
              <div class="padding">
              <ion-card-title class="cart-title">
                Cart
              </ion-card-title></div>
              <ion-card-content>
                <ion-list>
                  <ion-item v-for="item in items" :key="item.id"> 
                   
                    <b>{{ item.name }}</b>-- x {{ item.count }} -- $ {{ item.price }} = ${{ item.price * item.count }}
                  </ion-item>
                </ion-list>
                <br>
                <ion-text> <b>Total:  <span class="total">$ {{ totalCost }}</span></b></ion-text>
                <ion-button v-if="first" @click="showbox" expand="block" size="small" color="success"> Pay & Place
                  order!</ion-button>
 

              </ion-card-content>
            </ion-card>
            <div v-if="showpayment">
              <h1> Choose your payment method!</h1>

              <ion-radio-group value="PayPal">
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
              <h1 class= 'success move'  @click="moveIsTrue"> Thank you so much! Your order have been placed. Enjoy your meal and let us know how did it all have
                been</h1>


            </div>
          </ion-col>
          <ion-col size="0" size-md="3"></ion-col>
        </ion-row></ion-grid>
    </ion-content>

  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonButton, IonRadio, IonRadioGroup, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonCardTitle, IonIcon, IonText, IonList, IonItem, IonRow, IonCol, IonGrid } from '@ionic/vue';
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
let move = ref(false)

const moveIsTrue = () => move.value=!move.value; 

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
  last.value = true;

}

 

</script>
<style>
.success{
  color: tomato;
 
 
}

.success.move{
  color: tomato;
  animation: move 4s ease-in-out ;
 
}

@keyframes move {
  0%  {
    transform: translateY(1rem);
  }
  30% {
    transform: translateY(-5rem);
    color: rgb(209, 182, 95);
  }
  60% {
    transform: translateY(-5rem);
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
    color: rgb(139, 201, 58);
  }
  80% {
    transform: translateY(7rem);
    color: rgb(58, 103, 201);
  }
  90% {
    transform: translateY(7rem);
    color: rgb(201, 58, 77);
  }
  100% {
    transform: translateY(-4rem);
    color: rgb(201, 58, 77);
  }
}

.padding{
  padding:1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

 .cart-title{
  font-weight: bold;
  letter-spacing: 1.22px;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 1.75rem;
 }
 .number{
  font-weight: bold;
  font-size: 1.15rem;
 }
.total{
  font-weight: bold;
  font-size: .95rem;
  color: forestgreen;
}

</style>