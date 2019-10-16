<template>
    <div id="app">
        <app-Regular-Subject></app-Regular-Subject>
        <br>
        <app-Footer-User></app-Footer-User>
    </div>
</template>
<script>
import MyFooter from '@/components/Shared/MyFooter' 
import RegularSubject from '@/components/Learning/RegularSubject'
export default {
    components:{
        appFooterUser: MyFooter,
        appRegularSubject : RegularSubject,
    }
}
</script>
<style scoped>

</style>
