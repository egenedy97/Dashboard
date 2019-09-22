<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import firebase from 'firebase'
import { db } from './main'
export default {
  name: 'App',
}
</script>

<style>
  @import './assets/css/icons.css';
  @import './assets/css/style.css' ; 
</style>
