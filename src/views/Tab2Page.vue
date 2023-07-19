<template>
  <ion-page>
 
    <ion-content :fullscreen="true">
      
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
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonIcon, IonButton, IonRow, IonCol, IonGrid } from '@ionic/vue';
import { getDrinks } from '../services/foodServices.js'
import listItem from '@/components/listItem.vue';
import { reactive, onMounted, ref } from 'vue'
import { cart } from 'ionicons/icons';
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
  const res = await getDrinks()
  resultado.encontrado = res.slice(0, 25).map(({ name, price, dsc, img, id }) => ({ name, price, dsc, img, id }));
}






</script> 
<style>


.recomendation {
  font-weight: 800;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #8a3402aa;
}

.recomendationbox {
  border-color: #8a3402fb;
  border-radius: 2%;
  border-style: double;
  background-color: #8a340225;
  margin: 3px;
  padding: 3px;

  transition: 0.5s all;
}

.recomendationbox:hover {
  border-color: #ad8604fb;
  color: rgba(88, 1, 1, 0.733);
  border-radius: 5%;
  border-style: double;
  background-color: #8a340225;
  margin: 3px;
  padding: 3px;
  transform: scale(1.05);
}
</style>