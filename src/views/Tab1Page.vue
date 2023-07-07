<template>
  <ion-page>
    <ion-header class="ion-toolbar--end">
      <ion-toolbar >
        <ion-title >Menu </ion-title>
      </ion-toolbar>
      <ion-icon class="alignment" aria-hidden="true" size="large" :icon="cart" /><p class="margin">{{  cartItems}}</p>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-button @click="getRecomendation"> Get Recomendation</ion-button>
  <div v-if="recomendation" >   {{  recomendation.name}} <b> ----- >  $</b>{{ recomendation.price }}<br>
                              <img  class="imgthumb" :src="recomendation.img"></div>

      <listItem v-if="recomendation" :food="state.food"/> 
      <listItem 
        v-for="food in resultado.encontrado"
        :key="food.id"
        :food="food"
      /> 

    </ion-content>
  </ion-page>       
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonButton} from '@ionic/vue';
import { getFood  } from '../services/foodServices.js'
import listItem from '@/components/listItem.vue';
import { reactive, onMounted,ref } from 'vue'
import { cart } from 'ionicons/icons';
import { storeToRefs } from 'pinia';
import { useCartStore } from '../store/cartStore.js';

const cartStore = useCartStore();
const {   totalItems } = storeToRefs(cartStore);
 
const cartItems = ref(totalItems)
const recomendation = ref (null)
const state = reactive({
      food: {} ,
      loading:false
      
    });

  const resultado = reactive({
      encontrado: [] ,
      loading: false,
    });
    
    let getRecomendation = () => {
         let numeroAleatorio = Math.floor(Math.random() * 26);
         recomendation.value = resultado.encontrado[numeroAleatorio]
    
    }

    onMounted(( ) => {
      getMenu()
    })
 
const getMenu =  async () => {
         const res = await getFood()
        resultado.encontrado = res.slice(0, 25).map(({ name, price, dsc, img,id }) => ({ name, price, dsc, img, id }));
    }

 
 
 


</script> 
<style>


.alignment{
  display: inline-flex;
  justify-content:  flex-start;
 margin-right: 15px;

}

.margin{
  margin-right: 15px;
}
.ion-toolbar--end {
  display: inline-flex;
  justify-content:center;
  align-items: center;
  
 
}
</style>