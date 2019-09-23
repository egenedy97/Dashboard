<template>
    <div class="card">
        <div class="card-body">
            <h4 class="mt-0 header-title"><b>نموذج اضافه مستخدم</b></h4>
                <p class="text-muted ms-3">Custom stylr example.</p>
                    <form class="" @submit.prevent="addMember(firstname,lastname,mobile, email ,nationality ,classroom , eductionallevel, sex ,role )">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="username"><b>الاسم الاول</b></label>
                                    <input type="text" class="form-control" id="username" required="" v-model="firstname" 
                                    @blur="$v.firstname.$touch()" :class="{vs :$v.firstname.$error}" 
                                    >
                                    <!-- {{firstname}} -->
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="username"><b>الاسم الثاني</b></label>
                                    <input type="text" class="form-control" id="username" required="" v-model="lastname"
                                    @blur="$v.lastname.$touch()" :class="{vs :$v.lastname.$error}" 
                                    >
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="useremail"><b>الايميل</b></label>
                                    <input type="email" class="form-control" id="useremail"  required="" v-model="email"
                                    @blur="$v.email.$touch()" :class="{vs :$v.email.$error}" 
                                    >
                                    <!-- <p> {{email}} </p> -->
                                </div>
                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="subject"><b>الجوال</b></label>
                                                    <input type="number" class="form-control" id="subject" required="true" 
                                                    v-model="mobile"  @blur="$v.mobile.$touch()" :class="{vs :$v.mobile.$error}" 
                                                    >
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="subject"><b>الجنسيه</b></label>
                                                    <input type="text" class="form-control" id="subject" required="true" v-model="nationality" 
                                                    @blur="$v.nationality.$touch()" :class="{vs :$v.nationality.$error}" 
                                                    >
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="subject"><b>رقم الفصل</b></label>
                                                    <input type="number" class="form-control" id="subject" required="true" 
                                                     v-model="classroom"
                                                    @blur="$v.classroom.$touch()" :class="{vs :$v.classroom.$error}" 
                                                    >
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="subject"><b>المرحله الدراسيه</b></label>
                                                    <input type="string" class="form-control" id="subject" required="true" v-model="eductionallevel"
                                                    @blur="$v.eductionallevel.$touch()" :class="{vs :$v.eductionallevel.$error}" 
                                                    
                                                     >
                                                </div>
                                            </div>
                                             <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="subject"><b>النوع</b></label>
                                                     <input type="string" class="form-control" id="subject" required="true" v-model="sex"
                                                     @blur="$v.sex.$touch()" :class="{vs :$v.sex.$error}" 
                                                     >
                                                      
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="subject"><b>المسمي الوظيفي</b></label>
                                                     <input type="string" class="form-control" id="subject" required="true" v-model="role" @blur="$v.role.$touch()" :class="{vs :$v.role.$error}" >
                                                    
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
                                                <button type="submit" class="btn btn-danger px-5 py-2" :disabled="$v.$invalid">اضافه المستخدم</button>
                                            </div>
                                        </div>
                                    </form>
                                    
        </div><!--end card-body-->
    </div><!--end card-->
</template>

<script>

import firebase from 'firebase'
import { db } from '../main'
import { required, email, numeric, minValue,maxValue, minLength, sameAs, requiredUnless } from 'vuelidate/lib/validators'

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
    validations:{ 
        firstname:{
            required,
            minLen:minLength(3)
        },
        lastname:{
            required,
            minLen:minLength(3)
        },
        email:{
            required,
            email
        },
        mobile:{
            required,
            minLen:minLength(10)
        },
        sex:{
            required
        },
        nationality:{
            required
        } ,
        classroom:{
            required
        } ,
        role:{
            required
        },
        eductionallevel:{
            required
        }
    },
    methods:{
        addMember(firstname,lastname,mobile, email ,nationality ,classroom , eductionallevel, sex ,role )    
            {
                const formData = {
                    firstname:this.firstname,
                    lastname:this.lastname,
                    mobile:this.mobile,
                    email:this.email,
                    nationality:this.nationality,
                    classroom:this.classroom,
                    eductionallevel:this.eductionallevel,
                    sex:this.sex,
                    role:this.role,
                    
                }
                console.log(formData)
                    // const createdAt = new Date()
                    // db.collection('UserAdding').add({ firstname,lastname,mobile,
                    // email ,nationality ,classroom , eductionallevel, sex ,role ,createdAt })
                    // this.firstname = ''
                    // this.lastname = ''
                    // this.mobile = ''
                    // this.email = '',
                    // this.nationality = ''
                    // this.classroom = ''
                    // this.eductionallevel = ''
                    // this.sex = ''
                    // this.role = ''
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

.vs  {
    border: 1px solid red;
    background-color: #ffc9aa;
}

</style>
