<template>
    <div id="app">
        <!-- <app-Navbar></app-Navbar>
        <app-Side-Nav></app-Side-Nav> -->
        <app-Regular-User></app-Regular-User>
        <app-Footer></app-Footer>
    </div>
</template>
<script>
import MyFooter from '@/components/Shared/MyFooter' 
import RegularUser from '@/components/RegularUser' ;
export default {
    components:{
        appRegularUser: RegularUser,
        appFooter: MyFooter,
    }
    
}
</script>
<style scoped>
 @import '../assets/css/icons.css';
  @import '../assets/css/style.css' ;
  @import '../assets/css/metisMenu.min';
  @import url('https://fonts.googleapis.com/css?family=Tajawal&display=swap');

</style>
