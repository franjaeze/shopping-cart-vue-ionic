<template>
  <ion-card class='header' :style="{ backgroundImage: 'url(' + food.img + ')' }">

    <ion-card-header>

      <ion-card-subtitle class="alingicons">
        <!--   <img class="imgthumb" :src="food.img">  -->
        <p class="classicText"> {{ food!.dsc }}</p>
      </ion-card-subtitle>
      <ion-card-title class="alingicons">
        <p class="generalTitle"> {{ food!.name }}</p>

      </ion-card-title>

    </ion-card-header>
   
    <ion-card-content class="alingicons">
      <div class="price">$ {{ food!.price }} </div> 
      <div class="price2"><span class="cursor" @click="addValue">
        <IonIcon :icon="addCircleOutline" size="large"></IonIcon>
      </span>
      <span class="cursor" @click="removeValue">
        <IonIcon :icon="removeCircleOutline" size="large"></IonIcon>
      </span></div>
    </ion-card-content>
  </ion-card>
</template>
  
<script lang="ts" >
import {
  IonIcon,
  IonCard,
  IonCardTitle,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonListHeader,
  IonLabel,
  IonItem,
  IonList,
} from "@ionic/vue";
import { addCircleOutline, removeCircleOutline, } from 'ionicons/icons';
import { useCartStore } from '../store/cartStore.js';
import { storeToRefs } from "pinia";

import { useLoginStore } from "../store/login";



export default {
  name: "listItem",
  props: {
    food: Object,

  },


  components: {
    IonIcon,
    IonCardContent,
    IonCard,
    IonCardTitle,
    IonCardHeader,
    IonCardSubtitle,
    IonListHeader,
    IonLabel,
    IonItem,
    IonList,
  },

  setup() {
    const cart = useCartStore();
    const { totalItems } = storeToRefs(cart);
    const { addItem, removeItem } = cart
    const store = useLoginStore();
    const { logout } = store;

    return {
      addItem, removeItem, totalItems, logout, cart
    };
  },

  methods: {
    addValue() {
      this.logout()
      console.log(this.totalItems)
      this.cart.addItem(this.food)

    },
    removeValue() {
      this.removeItem(this.food)
      console.log(this.totalItems)
    }

  },

  data() {
    return {
      addCircleOutline,
      removeCircleOutline
    }
  }

};
</script>
<style>
.alingicons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;

}

 

.cursor {
  cursor: pointer;

}

.imgthumb {
  max-width: 25%;
  border-radius: 5%;
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
}

.header {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
 background-color: #a09368;
 

}
 

.generalTitle {
  position: relative;
  font-family: 'Roboto', Arial, sans-serif;
  font-size: 30px;
  font-weight: 700;
  color: #f5f5f5;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  perspective: 500px;
  text-shadow: 0px 0px 5px #504f4b, 0px 0px 10px #6d6345d9, 0px 0px 10px #9c8249,
    0px 0px 20px #a57229;
}

.classicText {
  position: relative;
  font-family: 'Roboto', Arial, sans-serif;
  font-size: 22px;
  font-weight: 300;
  color: #000000;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  perspective: 500px;
  text-shadow: 0px 0px 15px #ebe5dc, 0px 0px 15px #eccf76d9, 0px 0px 20px #ee804c,
    0px 0px 25px #c93103;
  text-align: start;
  background-color: #c9c5b875;
  border-radius: 5%;
}

.price {
  font-family: 'Roboto', Arial, sans-serif;
  font-size: 30px;
  font-weight: 700;
  color: #292525;
  letter-spacing: 0.2em;
  text-shadow: 0px 0px 5px #947706, 0px 0px 10px #e2c15dd9, 0px 0px 10px #eed49d,
    0px 0px 20px #aa9c88;
    display: flex;
  margin-left: 3rem;
  text-align: center;
  justify-items: center;
  background-color: #e2dabe75;
  border-radius: 25%;
 
  padding-right: .2rem;
  padding-left: .2rem;

}

.price2 {
 
  color: #f5f5f5;
  
    display: flex;
  margin-right: 1rem;
  text-align: center;
  justify-items: center;
  background-color: #74706375;
  border-radius: 25%;
  padding-top: .25rem;
  padding-right: .2rem;
  padding-left: .2rem;
}



</style>