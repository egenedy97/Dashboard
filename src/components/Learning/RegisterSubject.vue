<template>
    <div class="card">
        <div class="card-body">
            <h4 class="mt-0 header-title"><b>نموذج اضافه ماده دراسيه</b></h4>
                <p class="text-muted ms-3">Custom stylr example.</p>
                    <form class="" @submit.prevent="onSubmit" >
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group" >
                                    <label for="username"><b>اسم الماده</b></label>
                                    <input type="text" class="form-control"  id="username" required="" v-model="Subjectname" @blur="$v.Subjectname.$touch()" :class="{vs :$v.Subjectname.$error}" >
                                    <!-- <p v-if="!$v.Subjectname.required" style="color:red;"><b>مطلوب اسم الماده </b></p> -->
                                    <!-- {{$v}} -->
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="useremail"><b>العام الدراسي </b></label>
                                    <input type="number" class="form-control" id="useremail"  required="" v-model="Semester" @blur="$v.Semester.$touch()" :class="{vs :$v.Semester.$error}">
                                    <!-- <p v-if="!$v.Semester.required" style="color:red;"><b> مطلوب العام الدراسي  </b></p> -->

                                </div>
                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="subject"><b>رقم الفصل</b></label>
                                                    <input type="text" class="form-control" id="subject" required="true"  v-model="classroom" @blur="$v.classroom.$touch()" :class="{vs :$v.classroom.$error}" >
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="subject"><b>المرحله الدراسيه</b></label>
                                                    <input type="string" class="form-control" id="subject" required="true" v-model="eductionallevel" @blur="$v.eductionallevel.$touch()" :class="{vs :$v.eductionallevel.$error}">
                                                </div>
                                            </div>
                                             <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="subject"><b>اسم المعلم </b></label>
                                                     <input type="string" class="form-control" id="subject" required="true" v-model="Teacher" @blur="$v.Teacher.$touch()" :class="{vs :$v.Teacher.$error}">
                                                </div>
                                            </div>
                                        </div>
                                    <!-- </form> -->
                                     <div class="row">
                                            <div class="col-sm-12 text-right">
                                                <button type="submit" :disabled="$v.$invalid" class="btn btn-danger px-5 py-2">اضافه ماده</button>
                                            </div>
                                        </div>
                                    </form>
                                    
        </div><!--end card-body-->
    </div><!--end card-->
</template>

<script>
import { required, email, numeric, minValue,maxValue, minLength, sameAs, requiredUnless } from 'vuelidate/lib/validators'

export default {
    data()
    {
        return{
            Subjectname:'',
            Semester:'',
            classroom:'', 
            eductionallevel:'' ,
            Teacher :''
        }
    },
    validations:{
        Subjectname:{
            required,
            minLen : minLength(3)
        },
        Semester:{
            required,
            minVal : minValue(2000),
            maxVal : maxValue(2999),
        },
        classroom:{
            required,
        },
        eductionallevel:{
            required,
        },
        Teacher:{
            required,
             minLen : minLength(3),
        }

    },
    methods:{
        onSubmit(){
            const formData = {
          Subjectname: this.Subjectname,
          Semester: this.Semester,
          Teacher: this.Teacher,
          eductionallevel: this.eductionallevel,
          classroom: this.classroom,
        
        }
         console.log(formData)
            // this.$store.dispatch('RegisterSubject', formData)
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Tajawal&display=swap');

label , option ,select ,h4  , p{ 
    font-family: 'Tajawal', sans-serif;
    /* font-size: 30px; */
}


.vs  {
    border: 1px solid red;
    background-color: #ffc9aa;
}

button {
        font-family: 'Tajawal', sans-serif;
}
  button[disabled],
   button[disabled]:hover,
   button[disabled]:active {
    /* border: 1px solid #ccc; */
    background-color: #f1646c;
    color: #FFF;
    cursor: not-allowed;
  }
</style>
