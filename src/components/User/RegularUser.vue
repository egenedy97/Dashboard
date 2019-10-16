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
                                            <th><b>المدرسه</b></th>
                                            <th><b>الايميل</b></th>
                                            <th><b>الجوال</b></th>
                                            <th><b> الجنسيه </b></th>
                                            <th><b> رابط الفيديو</b></th>
                                            <th><b>المسمي الوظيفي</b></th>
                                            <th><b>النوع</b>  </th>
                                            <th><b>تعديل او حذف </b>  </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                            <tr v-for=" (User,idx) in Users" :key="idx">
                                            
                                                <td>{{User.firstname}} {{User.lastname}} </td>
                                                <td><b>{{User.school}} </b></td>
                                                <td>{{User.email}} </td>
                                                <td>{{User.mobile}} </td>
                                                <td><b>{{User.nationality}} </b></td>
                                                <td><b>{{User.link}} </b></td>
                                                <td><b>{{User.role}} </b></td>
                                                <td><b>{{User.sex}} </b></td>                                                
                                                <td>                                                       
                                                    <a href="#" class="mr-2"><i class="fas fa-edit text-info font-16"></i></a>
                                                    <a href="#" ><i class="fas fa-trash-alt text-danger font-16"></i>
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
import RegisterUser from '@/components/User/RegisterUser' 
import SearchUser from '@/components/User/SearchUser'
import EditUser from '@/components/User/EditUser' 
import firebase from 'firebase'
import { db } from '../../main'
import 'firebase/firestore'
// import firebase from 'firebase'
// import { db } from '../main'

export default {
   data (){
        {
          return{          
                    isHidden:true,
                    Users1:[]
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
             Users: db.collection("Users").orderBy("createdAt")
        }
    },
    methods:{
        created()
        {
            db.collection('Users').get().then(snapshot =>{
                snapshot.forEach(doc => {
                    let User = doc.data()
                    User.id = doc.id
                    this.Users1.push(User)
                })
            })
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
