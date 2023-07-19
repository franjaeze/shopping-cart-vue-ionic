<template>
  <ion-page>

    <ion-content>

      <ion-grid  ><ion-button class="recomendation-button" v-if="!recomendation" @click="getRecomendation"> Get Recomendation</ion-button>
            <div v-if="recomendation" class="recomendationbox">
              <h1 class="recomendation">Pick of the day</h1>


              <listItem :food="recomendation" />
            </div>
        <ion-row>  
 
        
          <ion-col id="main" size="12" size-md="4"
          v-for="food in resultado.encontrado" :key="food.id"
          
          
          
          >  <listItem  :food="food" />
            
          
          </ion-col>
         
        </ion-row></ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">

import { IonPage, IonRow, IonCol, IonGrid, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonButton } from '@ionic/vue';
import { getFood } from '../services/foodServices.js'
import listItem from '@/components/listItem.vue';
import { reactive, onMounted, ref } from 'vue'

import { storeToRefs } from 'pinia';
import { useCartStore } from '../store/cartStore.js';

const cartStore = useCartStore();
const { totalItems } = storeToRefs(cartStore);

const cartItems = ref(totalItems)
const recomendation = ref(null)
const state = reactive({
  food: {},
  loading: false

});

const resultado = reactive({
  encontrado: [],
  loading: false,
});

let getRecomendation = () => {
  let numeroAleatorio = Math.floor(Math.random() * 26);
  recomendation.value = resultado.encontrado[numeroAleatorio]

}

onMounted(() => {
  getMenu()
})

const getMenu = async () => {
  const res = await getFood()
  resultado.encontrado = res.slice(0, 25).map(({ name, price, dsc, img, id }) => ({ name, price, dsc, img, id }));
}






</script> 
<style></style>