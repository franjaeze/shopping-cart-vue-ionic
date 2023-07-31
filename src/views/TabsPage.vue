<template>
  <ion-page> 
    <ion-tabs>
    
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">  
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon aria-hidden="true" :icon="restaurant" />
          <ion-label>  Veggie   <!-- Menu --></ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon aria-hidden="true" :icon="fastFood" />  <!-- :icon="wine" -->
          <ion-label>Traditional   <!-- Drinks --></ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/tabs/tab4">
          <ion-icon aria-hidden="true" :icon="fish" /><!-- :icon="iceCream" -->
          <ion-label> Sushi <!-- Dessert --></ion-label>
        </ion-tab-button>
    

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon aria-hidden="true" :icon="card" />
          <ion-label>Bill</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { restaurant, card,fastFood, fish } from 'ionicons/icons';
 /*  wine,iceCream */
</script>
