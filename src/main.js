import Vue from 'vue'
import App from './App'
import router from './router'
import Vuelidate from 'vuelidate'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { firestorePlugin } from 'vuefire'
import 'firebase/firestore'
import settings from 'firebase'
import * as firebase from 'firebase/app';

Vue.use(BootstrapVue);
Vue.use(Vuelidate);
Vue.use(firestorePlugin);

Vue.config.productionTip = false

var firebaseConfig = {
    apiKey: "AIzaSyBPKfS1YtU4hcahwxRO7QZcIRoofvfbtXE",
    authDomain: "myadminpanel-9fa45.firebaseapp.com",
    databaseURL: "https://myadminpanel-9fa45.firebaseio.com",
    projectId: "myadminpanel-9fa45",
    storageBucket: "",
    messagingSenderId: "368276040063",
    appId: "1:368276040063:web:869d8ffc764bdb1496524a"
};

firebase.initializeApp(firebaseConfig);
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// firebase.firestore().settings(settings);
export const db = firebase.firestore()
