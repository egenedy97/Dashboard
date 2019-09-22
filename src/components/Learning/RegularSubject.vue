<template>
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h1 class="mt-0 mb-3 header-title"><b>نظام التعليم</b></h1>
                        <h4 class="mt-0 mb-3 header-title">
                            <button class="btn btn-success" v-on:click="isHidden = !isHidden"><b> اضافه ماده دراسيه  </b></button> 
                           <div class="col-md-4" style="float:left; margin-left:56%;">
                           </div>
                        </h4>
                        <br>
                        <app-Register-Subject v-if="!isHidden"></app-Register-Subject>
                            <div class="table-responsive">
                                <table class="table table-striped mb-0">
                                    <thead class="thead-light">
                                        <tr>
                                            <th><b>اسم الماده </b></th>
                                            <th><b>العام الدراسي</b></th>
                                            <th><b>رقم الفصل</b></th>
                                            <th><b>المرحله الدراسيه</b></th>
                                            <th><b>اسم المعلم  </b></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            <tr>
                                            
                                                <td>SubjectName </td>
                                                <td> Semester</td>
                                                <td>classroom </td>
                                                <td>eductionallevel </td>
                                                <td>Teacher</td>
                                        
                                            </tr>
                                           
                                            <!-- <app-Edit-User></app-Edit-User> -->

                                            </tbody>
                                        </table><!--end /table-->
                                    </div><!--end /tableresponsive-->



                                </div><!--end card-body-->
                            </div><!--end card-->
                        </div> <!-- end col -->
                    </div><!--end row-->
</template>
<script>
import RegisterSubject from '@/components/Learning/RegisterSubject'
export default {
     data (){
        {
          return{          
                    isHidden:true
                }
        }
    },
    components:{
        appRegisterSubject:RegisterSubject , 
    }
}
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Tajawal&display=swap');

h1 ,th {
    font-family: 'Tajawal', sans-serif;
    font-size: 30px;
}
button ,b {
        font-family: 'Tajawal', sans-serif;

}
</style>
