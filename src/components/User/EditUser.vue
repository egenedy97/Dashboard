<template>
     <!-- تعديل  --> 
    <tr>
        <td>
            <div class="form-group">
                <label for="username"><b>الاسم</b></label>
                <input type="text" class="form-control" id="username" required="">
            </div>
        </td>
        <td>
            <div class="form-group">
                <label for="useremail"><b>الايميل</b></label>
                <input type="email" class="form-control" id="useremail" required="">
            </div>
        </td>
        <td>
            <div class="form-group">
                <label for="useremail"><b>الجوال</b></label>
                <input type="number" class="form-control" id="useremail" required="">
            </div>
        </td>
        <td>
            <div class="form-group">
                <label for="useremail"><b>الجنسيه</b></label>
                <input type="number" class="form-control" id="useremail" required="">
            </div>
        </td>
        <td>
            <div class="form-group">                                                    
                <label for="subject"><b>رقم الفصل</b></label>
                <input type="text" class="form-control" id="subject" required="true" minlength="9" maxlength="9">
            </div>
        </td>
        <td>
            <div class="form-group">                                                    
                <label for="subject"><b> المرحله الدراسيه</b></label>
                <input type="text" id="subject" required="true" minlength="9" maxlength="9" class="form-control form-control-lg mb-2">
            </div>
        </td>
        <td>
            <div class="form-group">
                <label for="subject"><b>الدور</b></label>
                <select class="form-control form-control-lg mb-2">
                    <option>admin</option>
                    <option>معلم</option>
                    <option>طالب</option>
                    <option> مشرف </option>
                </select>   
            </div>
        </td>
        <td>
            <div class="form-group">
                <label for="subject"><b>النوع</b></label>
                <select class="form-control form-control-lg mb-4">
                    <option>ذكر</option>
                    <option>انثي</option>
                </select>   
            </div>
        </td>
        <td>                                                       
            <button class="btn btn-success" type='submit'>تعديل</button>
        </td>
        </tr>
</template>

<script>
export default {
    
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Tajawal&display=swap');

label , select , option , button{
        font-family: 'Tajawal', sans-serif;
}
</style>
