<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <h1 class="mt-0 mb-3 header-title">
            <b>نظام التعليم</b>
          </h1>
          <h4 class="mt-0 mb-3 header-title">
            <button class="btn btn-success" v-on:click="isHidden = !isHidden">
              <b>اضافه ماده دراسيه</b>
            </button>
            <div class="col-md-4" style="float:left; margin-left:56%;"></div>
          </h4>
          <br />
          <app-Register-Subject v-if="!isHidden"></app-Register-Subject>
          <div class="table-responsive">
            <table class="table table-striped mb-0">
              <thead class="thead-light">
                <tr>
                  <th>
                    <b>اسم الماده</b>
                  </th>
                  <th>
                    <b>العام الدراسي</b>
                  </th>
                  <th>
                    <b>رقم الفصل</b>
                  </th>
                  <th>
                    <b>المرحله الدراسيه</b>
                  </th>
                  <th>
                    <b>اسم المعلم</b>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="s in Subjects">
                  <td>
                    <router-link :to= "'/Subject/' + s.id  "  >{{s.Subjectname}}</router-link>
                  </td>
                  <td>{{s.Semester}}</td>

                  <td>{{s.classroom}}</td>
                  <td>{{s.eductionallevel}}</td>

                  <td>{{s.Teacher}}</td>
                </tr>

                <!-- <app-Edit-User></app-Edit-User> -->
              </tbody>
            </table>
            <!--end /table-->
          </div>
          <!--end /tableresponsive-->
          <div class="row">
            <div class="col-sm-12 text-right">
              <button
                type="submit"
                v-on:click="fetchData"
                class="btn btn-danger px-5 py-2"
              >اظهار الماده</button>
            </div>
          </div>
        </div>
        <!--end card-body-->
      </div>
      <!--end card-->
    </div>
    <!-- end col -->
  </div>
  <!--end row-->
</template>
<script>
import RegisterSubject from "@/components/Learning/RegisterSubject";
import firebase from "firebase";
import { db } from "@/main";
export default {
  data() {
    {
      return {
        isHidden: true,
        Subjects: []
      };
    }
  },
  firestore() {
    return {
      Ss: db.collection("Subjects").orderBy("createdAt")
    };
  },
  components: {
    appRegisterSubject: RegisterSubject
  },
  methods: {
    fetchData() {
      this.$http
        .get("")
        .then(response => {
          return response.json();
        })
        .then(data => {
          const resultArray = [];
          for (let key in data) {
            resultArray.push(data[key]);
          }
          this.Subjects = resultArray;
        });
    }
  }
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css?family=Tajawal&display=swap");

h1,
th {
  font-family: "Tajawal", sans-serif;
  font-size: 30px;
}
button,
b {
  font-family: "Tajawal", sans-serif;
}
</style>
