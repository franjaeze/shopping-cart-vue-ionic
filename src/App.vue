<template>
  <ion-app>        
 
    <Header ></Header>
    <ion-router-outlet />
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet,   
     } from '@ionic/vue';
import Header from './components/Header.vue'
</script>
