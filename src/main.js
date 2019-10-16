import Vue from 'vue'
import App from './App'
import router from './router'
import Vuelidate from 'vuelidate'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueResource from 'vue-resource'
import { firestorePlugin } from 'vuefire'
import firestore from 'firebase/firestore'
// import firebaseApp from 'firebase'
import settings from 'firebase'
import * as firebase from 'firebase/app';

Vue.use(BootstrapVue);
Vue.use(Vuelidate);
Vue.use(firestorePlugin);
Vue.use(VueResource);
Vue.http.options.root = "https://dashboard2-da033.firebaseio.com/Subjects.json" ; 

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyAs1iJkIG0AvWzzPjE4RtYhxq7CJ0dzU1I",
  authDomain: "dashboard2-da033.firebaseapp.com",
  databaseURL: "https://dashboard2-da033.firebaseio.com",
  projectId: "dashboard2-da033",
  storageBucket: "",
  messagingSenderId: "877054405178",
  appId: "1:877054405178:web:adb4575b5896986177a303"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// firebaseApp.firestore().settings({timestampsInSnapShots: true});
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
// firebaseApp.firestore().settings({timestampsInSnapshots:true});
export const db = firebaseApp.firestore();
// export let UsersRef =  db.ref('Users');
// export default firebaseApp.firestore() ;
// const Users = firebase.storage().ref();


