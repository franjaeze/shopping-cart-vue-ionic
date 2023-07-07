<template>
  <ion-page>
    <ion-header class="ion-toolbar--end">
      <ion-toolbar >
        <ion-title >Drinks </ion-title>
      </ion-toolbar>
      <ion-icon class="alignment" aria-hidden="true" size="large" :icon="cart" /><p class="margin">{{  cartItems}}</p>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Drinks</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-button v-if="!recomendation" @click="getRecomendation"> Get Recomendation</ion-button>
  <div v-if="recomendation" >  
    <h1 class="recomendation">Pick of the day</h1> <div class="recomendationbox">{{  recomendation.name}} <b> ----- >  $</b>{{ recomendation.price }}<br>
                              <img  class="imgthumb" :src="recomendation.img"></div>
</div>
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
import { getDrinks  } from '../services/foodServices.js'
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
         const res = await getDrinks()
        resultado.encontrado = res.slice(0, 25).map(({ name, price, dsc, img,id }) => ({ name, price, dsc, img, id }));
    }

 
 
 


</script> 
<style>
.imgthumb{
  width:150px;
  border-radius:5%
}

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

.recomendation{
  font-weight: 800;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #8a3402aa;
}
.recomendationbox{
  border-color: #8a3402fb;
  border-radius: 2%;
  border-style: double;
  background-color: #8a340225;
  margin: 3px;
  padding: 3px;
   
  transition: 0.5s all;
}
.recomendationbox:hover{
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