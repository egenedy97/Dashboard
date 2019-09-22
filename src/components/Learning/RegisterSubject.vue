<template>
    <div class="card">
        <div class="card-body">
            <h4 class="mt-0 header-title"><b>نموذج اضافه ماده دراسيه</b></h4>
                <p class="text-muted ms-3">Custom stylr example.</p>
                    <form class="" @submit.prevent="onSubmit" @submit="addSubject(Subjectname,Semester,classroom, eductionallevel ,Teacher )">
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="username"><b>اسم الماده</b></label>
                                    <input type="text" class="form-control" id="username" required="" v-model="Subjectname">
                                    <!-- {{firstname}} -->
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="useremail"><b>العام الدراسي </b></label>
                                    <input type="number" class="form-control" id="useremail"  required="" v-model="Semester">
                                </div>
                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label for="subject"><b>رقم الفصل</b></label>
                                                    <input type="text" class="form-control" id="subject" required="true"  v-model="classroom">
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
                                                    <label for="subject"><b>اسم المعلم </b></label>
                                                     <input type="string" class="form-control" id="subject" required="true" v-model="Teacher">
                                                </div>
                                            </div>
                                        </div>
                                    <!-- </form> -->
                                     <div class="row">
                                            <div class="col-sm-12 text-right">
                                                <button type="submit" class="btn btn-danger px-5 py-2">اضافه ماده</button>
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
        }

    },
    methods:{
        onSubmit:{
            
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


.input.invalid input {
    border: 1px solid red;
    background-color: #ffc9aa;
}

button {
        font-family: 'Tajawal', sans-serif;
}
</style>
