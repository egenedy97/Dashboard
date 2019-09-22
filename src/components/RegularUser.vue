<template>
    <!-- <div class='RegularUser'> -->
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h1 class="mt-0 mb-3 header-title"><b>المستخدمين لدينا</b></h1>
                        <h4 class="mt-0 mb-3 header-title">
                            <button class="btn btn-success" v-on:click="isHidden = !isHidden"><b> اضافه مستخدم </b></button> 
                           <div class="col-md-4" style="float:left; margin-left:56%;">
                                <app-Search-User ></app-Search-User>
                           </div>
                        </h4>
                        <br>
                        <app-Register-User v-if="!isHidden"></app-Register-User>
                            <div class="table-responsive">
                                <table class="table table-striped mb-0">
                                    <thead class="thead-light">
                                        <tr>
                                            <th><b>الاسم</b></th>
                                            <th><b>الايميل</b></th>
                                            <th><b>الجوال</b></th>
                                            <th><b>الجنسيه</b></th>
                                            <th><b>رقم الفصل </b></th>
                                            <th><b>المرحله الدراسيه</b></th>
                                            <th><b>المسمي الوظيفي</b></th>
                                            <th><b>النوع</b>  </th>
                                            <th><b>تعديل او حذف </b>  </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            <tr v-for="(Mr, idx) in UserAdding" :key="idx">
                                            
                                                <td>{{Mr.firstname}} </td>
                                                <td>{{Mr.email}} </td>
                                                <td>{{Mr.mobile}} </td>
                                                <td><b>{{Mr.nationality}} </b></td>
                                                <td><b>{{Mr.classroom}} </b></td>
                                                <td><b>{{Mr.eductionallevel}} </b></td>
                                                <td><b>{{Mr.role}} </b></td>
                                                <td><b>{{Mr.sex}} </b></td>
                                                <td>                                                       
                                                    <a href="#" class="mr-2"><i class="fas fa-edit text-info font-16"></i></a>
                                                    <a href="#" @click="deleteMe(Mr.id)"><i class="fas fa-trash-alt text-danger font-16"></i>
                                                </a></td>
                                            </tr>
                                           
                                            <!-- <app-Edit-User></app-Edit-User> -->

                                            </tbody>
                                        </table><!--end /table-->
                                    </div><!--end /tableresponsive-->



                                </div><!--end card-body-->
                            </div><!--end card-->
                        </div> <!-- end col -->
                    </div><!--end row-->
    <!-- </div> -->
</template>

<script>
import RegisterUser from '@/components/RegisterUser' 
import SearchUser from '@/components/SearchUser'
import EditUser from '@/components/EditUser' 
import 'firebase/firestore'
import firebase from 'firebase'
import { db } from '../main'

export default {
   data (){
        {
          return{          
                    isHidden:true
                }
        }
    },
    components:{
        appRegisterUser: RegisterUser,
        appSearchUser: SearchUser,
        appEditUser : EditUser,
        }
    ,
    firestore () {
        return {
        UserAdding: db.collection('UserAdding').orderBy('createdAt')
        }
    },
    methods:{
         deleteMe (id) {
      db.collection('UserAdding').doc(id).delete()
    }
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
