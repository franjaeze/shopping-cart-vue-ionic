<template>
  <ion-card class='header' :style="{ backgroundImage: 'url(' + (food.img ? food.img : defaultImage) + ')' }">
 
    <ion-card-header>
    
      <ion-card-subtitle class="alingicons">
        <!--   <img class="imgthumb" :src="food.img">  -->
        <p class="classicText"> {{ food!.dsc }}</p>
      </ion-card-subtitle>
      <ion-card-title class="alingicons">
        <p class="generalTitle"> {{ food!.name }}</p>

      </ion-card-title>

    </ion-card-header> {{console.log (food.img) }}
   
    <ion-card-content class="alingicons">
      <div class="price">$ {{ food!.price }}    </div> 
      <div class="price2"><span class="cursor plus-minus" @click="addValue">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>
      </span>
      <span class="cursor plus-minus" @click="removeValue">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/></svg>
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
      console.log(this.food)
    
      this.cart.addItem(this.food)
      console.log(this.totalItems)

    },
    removeValue() {
      this.removeItem(this.food)
      console.log(this.totalItems)
    }

  },

  data() {
    return {
      addCircleOutline,
      removeCircleOutline,
      defaultImage: "../../public/chili.png"
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
  background-color: #d2c392; 
  border: 5px groove black;
  border-radius: 2% ;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
  max-height: 50vh;
  
 

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
  font-size: .8rem;
  font-weight: 300;
  color: #000000;
  letter-spacing: 0.3em;
 
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
/*   background-color: #e2dabe75; */
  border-radius: 25%;
 transition: all 0.3s;
  padding-right: .2rem;
  padding-left: .2rem;

}
.price:hover {
  color: #be9e1c;
  text-shadow: 0px 0px 5px #181818, 0px 0px 10px #242322d9, 0px 0px 10px #110e07,
    0px 0px 20px #221b11;
}

.price2 {
 
  color: #f5f5f5;
  
    display: flex;
  margin-right: 1rem;
  text-align: center;
  justify-items: center;
/*   background-color: #74706375; */
  border-radius: 25%;
  padding-top: .25rem;
  padding-right: .2rem;
  padding-left: .2rem;
}
.plus-minus{
  margin-left:.7rem;
  font-size:1.5rem;
  fill:#947706;
  transition: 0.4s all
 ;
}

.plus-minus:hover{
  fill: #f3d046;
  font-size: 1.78rem;
  transform: scale(1.05);
}
.plus-minus:active{
  fill: #574707;
  transform: scale(.9);
}
 

</style>