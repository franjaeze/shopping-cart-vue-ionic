<template>
    <ion-card>
     
      <ion-card-header>
 
        <ion-card-title class="alingicons">
          {{ food!.name }}<span class="alingicons"  >  <span class="cursor" @click="addValue"><IonIcon :icon="addCircleOutline" size="large"></IonIcon>  </span>
        <span class="cursor" @click="removeValue"><IonIcon :icon="removeCircleOutline" size="large"></IonIcon>  
            </span>       </span>  
        </ion-card-title>
        <ion-card-subtitle class="alingicons">
         <img class="imgthumb" :src="food.img">         
      
          <p  >  {{ food!.dsc }}</p>   
        
        </ion-card-subtitle>
      </ion-card-header>   <div class="price">$ {{ food!.price }}     </div>  
      <ion-card-content>
 
        
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
  import { addCircleOutline, removeCircleOutline,  } from 'ionicons/icons';
  import { useCartStore } from '../store/cartStore.js';
  import { storeToRefs } from "pinia";

  import   { useLoginStore } from "../store/login";



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
    const {   totalItems } = storeToRefs(cart);
    const { addItem, removeItem } = cart
    const store = useLoginStore();
    const { logout } = store;
    
    return {
       addItem,removeItem,totalItems,logout, cart
    };
  },

    methods:{
        addValue(){
            this.logout()
         console.log(this.totalItems)
         this.cart.addItem(this.food)
         
        },
        removeValue(){
            this.removeItem(this.food)
            console.log(this.totalItems)
        }

    },

    data(){
     return      {
        addCircleOutline,
        removeCircleOutline
    }
    }
  
  };
  </script>
  <style>
.alingicons{
    display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;

}
.price {
    display: inline-flex;  
    font-size: 22px;
    justify-content:flex-end;
  align-items: flex-end;

}
.cursor {
  cursor: pointer;

}
.imgthumb{
  width:150px;
  border-radius:5%;
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
}

</style>