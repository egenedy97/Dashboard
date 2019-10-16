<template>
  <div class="card">
    <div class="card-body">
      <h4 class="mt-0 header-title">
        <b>نموذج اضافه درس</b>
      </h4>
      <p class="text-muted ms-3">Custom stylr example.</p>
      <form class @submit.prevent="onSubmit()">
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <label for="username">
                <b>اسم الدرس</b>
              </label>
              <input
                type="text"
                class="form-control"
                id="username"
                required             
              />
              <!-- <p v-if="!$v.Subjectname.required" style="color:red;"><b>مطلوب اسم الماده </b></p> -->
              <!-- {{$v}} -->
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label for="useremail">
                <b>رابط الدرس</b>
              </label>
              <input
                type="text"
                class="form-control"
                id="useremail"
                required
               
              />
              <!-- <p v-if="!$v.Semester.required" style="color:red;"><b> مطلوب العام الدراسي  </b></p> -->
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label for="subject">
                <b>اسم المعلم</b>
              </label>
              <input
                type="string"
                class="form-control"
                id="subject"
                required="true"
             
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label class="mb-2">الوصف</label>
              <textarea
                id="textarea"
                class="form-control"
                rows="3"
                placeholder="ادخل الوصف الخاص بالدرس"
              ></textarea>
            </div>
          </div>
        </div>
        <!-- </form> -->
        <div class="row">
          <div class="col-sm-12 text-right">
            <button
              type="submit"
              class="btn btn-danger px-5 py-2"
            >اضافه درس </button>
          </div>
        </div>
      </form>
    </div>
    <!--end card-body-->
  </div>
  <!--end card-->
</template>

<script>
export default {
    data(){
        return{
            LessonsName:'',
            Link:'',
            
        }
    },

};
</script>

<style scoped>
    button{
  font-family: "Tajawal", sans-serif;
}
</style>
