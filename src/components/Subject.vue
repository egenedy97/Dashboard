<template>
  <div>
    <div class="row">
      <div class="col-12">
        <div class="card-body">
          <h1 class="mt-0 mb-3 header-title">
            <b>تاريخ مصر الحديثه</b>
            <p>ID: {{ Subject.id }}</p>
            <app-Register-Lessons></app-Register-Lessons>
          </h1>
          <div class="responsive">
            <div class="row">
              <Lesson></Lesson>
            </div>
          </div>
        </div>
        <!--end /tableresponsive-->
      </div>
      <!--end card-body-->
    </div>
    <!-- end col -->
    <!--end row-->
    <app-Footer></app-Footer>
  </div>
</template>
<script>
import Lesson from "@/components/Lesson";
import MyFooter from "@/components/Shared/MyFooter";
import RegisterLessons from "@/components/Learning/Lessons/RegisterLessons";
export default {
  data() {
    return {
      Subject: {
        SubjectName: "",
        Lessons: [],
        id: this.$route.params.id
      }
    };
  },
  components: {
    Lesson: Lesson,
    appFooter: MyFooter,
    appRegisterLessons: RegisterLessons
  },
  watch:{
      'route'(to , from ){
          this.id = to.params.id;
      }
  },
  methods: {
      
  }
};
</script>
<style >
@import url("https://fonts.googleapis.com/css?family=Tajawal&display=swap");

button,
a,
p {
  font-family: "Tajawal", sans-serif;
}
h1,
h3 {
  font-family: "Tajawal", sans-serif;
}
b {
  font-family: "Tajawal", sans-serif;
}
</style>
