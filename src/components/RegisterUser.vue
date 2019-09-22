<template>
    <div class="card">
        <div class="card-body">
            <h4 class="mt-0 header-title"><b>نموذج اضافه مستخدم</b></h4>
                <p class="text-muted ms-3">Custom stylr example.</p>
                    <form class="" @submit="addMember(firstname,lastname,mobile, email ,nationality ,classroom , eductionallevel, sex ,role )">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="username"><b>الاسم الاول</b></label>
                                    <input type="text" class="form-control" id="username" required="" v-model="firstname">
                                    <!-- {{firstname}} -->
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="username"><b>الاسم الثاني</b></label>
                                    <input type="text" class="form-control" id="username" required="" v-model="lastname">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="useremail"><b>الايميل</b></label>
                                    <input type="email" class="form-control" id="useremail"  required="" v-model="email">
                                    <!-- <p> {{email}} </p> -->
                                </div>
                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="subject"><b>الجوال</b></label>
                                                    <input type="number" class="form-control" id="subject" required="true" 
                                                    v-model="mobile">
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="subject"><b>الجنسيه</b></label>
                                                    <input type="text" class="form-control" id="subject" required="true" v-model="nationality" >
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="subject"><b>رقم الفصل</b></label>
                                                    <input type="text" class="form-control" id="subject" required="true" 
                                                    minlength="9" maxlength="9" v-model="classroom">
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="subject"><b>المرحله الدراسيه</b></label>
                                                    <input type="string" class="form-control" id="subject" required="true" v-model="eductionallevel" >
                                                </div>
                                            </div>
                                             <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="subject"><b>النوع</b></label>
                                                     <input type="string" class="form-control" id="subject" required="true" v-model="sex">
                                                      
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="subject"><b>المسمي الوظيفي</b></label>
                                                     <input type="string" class="form-control" id="subject" required="true" v-model="role">
                                                    
                                                    <!-- <select class="form-control form-control-lg mb-4" v-model="role">
                                                        <option value="admin">admin</option>
                                                        <option value="teacher">معلم</option>
                                                        <option value="student">طالب</option>
                                                        <option value="moshref"> مشرف </option>
                                                    </select>    -->
                                                </div>
                                            </div>
                                        </div>
                                        <!-- <div class="row"> 
                                            <div class="col-md-12">                            
                                                <div class="form-group">
                                                    <label for="message"><b>الرساله</b></label>
                                                    <textarea class="form-control" rows="5" id="message"></textarea>
                                                </div>
                                            </div>
                                        </div> -->
                                        <div class="row">
                                            <div class="col-sm-12 text-right">
                                                <button type="submit" class="btn btn-danger px-5 py-2">اضافه المستخدم</button>
                                            </div>
                                        </div>
                                    </form>
                                    
        </div><!--end card-body-->
    </div><!--end card-->
</template>

<script>
import firebase from 'firebase'
import { db } from '../main'
export default {
    data (){
        {
            return{
                email:'',
                firstname:'',
                lastname:'',
                mobile:'',
                sex:'',
                nationality:'',
                classroom:'',
                role:'',
                eductionallevel:'',

            }
        }
    },
    firestore () {
        return {
        UserAdding: db.collection('UserAdding').orderBy('createdAt')
        }
    },
    methods:{
        addMember(firstname,lastname,mobile, email ,nationality ,classroom , eductionallevel, sex ,role )    
            {
                const createdAt = new Date()
                db.collection('UserAdding').add({ firstname,lastname,mobile,
                email ,nationality ,classroom , eductionallevel, sex ,role ,createdAt })
                this.firstname = ''
                this.lastname = ''
                this.mobile = ''
                this.email = '',
                this.nationality = ''
                this.classroom = ''
                this.eductionallevel = ''
                this.sex = ''
                this.role = ''
            }
    }
    
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Tajawal&display=swap');

label , option ,select ,h4 { 
    font-family: 'Tajawal', sans-serif;
    /* font-size: 30px; */
}
button {
        font-family: 'Tajawal', sans-serif;
}
/*Form validation*/ 
.invalid {
    border-color:red;
}
.err{
    color:red;
}

</style>
