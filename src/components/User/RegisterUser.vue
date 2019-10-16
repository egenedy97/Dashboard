<template>
  <div class="card">
    <div class="card-body">
      <h4 class="mt-0 header-title">
        <b>نموذج اضافه مستخدم</b>
      </h4>
      <p class="text-muted ms-3">Custom stylr example.</p>
      <form
        class
        @submit.prevent="addUser(firstname,lastname,mobile, email ,nationality ,school , link, sex ,role )"
      >
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <label for="username">
                <b>الاسم الاول</b>
              </label>
              <input
                type="text"
                class="form-control"
                id="username"
                required
                v-model="firstname"
                @blur="$v.firstname.$touch()"
                :class="{vs :$v.firstname.$error}"
              />
              <!-- {{firstname}} -->
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label for="username">
                <b>الاسم الثاني</b>
              </label>
              <input
                type="text"
                class="form-control"
                id="username"
                required
                v-model="lastname"
                @blur="$v.lastname.$touch()"
                :class="{vs :$v.lastname.$error}"
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label for="username">
                <b>المدرسة</b>
              </label>
              <select
                class="form-control form-control-lg mb-4"
                v-model="school"
                @blur="$v.school.$touch()"
                :class="{vs :$v.school.$error}"
              >
                <option value="Elkateeb">
                  <b>مدرسه الخطيب</b>
                </option>
                <option value="Elmassria">
                  <b>مدرسه المصريه</b>
                </option>
              </select>
            </div>
          </div>

          <div class="col-md-4">
            <div class="form-group">
              <label for="useremail">
                <b>الايميل</b>
              </label>
              <input
                type="email"
                class="form-control"
                id="useremail"
                required
                v-model="email"
                @blur="$v.email.$touch()"
                :class="{vs :$v.email.$error}"
              />
              <!-- <p> {{email}} </p> -->
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label for="subject">
                <b>الجوال</b>
              </label>
              <input
                type="number"
                class="form-control"
                id="subject"
                required="true"
                v-model="mobile"
                @blur="$v.mobile.$touch()"
                :class="{vs :$v.mobile.$error}"
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label for="subject">
                <b>الجنسيه</b>
              </label>

              <select
                class="form-control"
                id="subject"
                required="true"
                v-model="nationality"
                @blur="$v.nationality.$touch()"
                :class="{vs :$v.nationality.$error}"
              >
                <option value disabled>-- select one --</option>
                <option value="afghan">Afghan</option>
                <option value="albanian">Albanian</option>
                <option value="algerian">Algerian</option>
                <option value="american">American</option>
                <option value="andorran">Andorran</option>
                <option value="angolan">Angolan</option>
                <option value="antiguans">Antiguans</option>
                <option value="argentinean">Argentinean</option>
                <option value="armenian">Armenian</option>
                <option value="australian">Australian</option>
                <option value="austrian">Austrian</option>
                <option value="azerbaijani">Azerbaijani</option>
                <option value="bahamian">Bahamian</option>
                <option value="bahraini">Bahraini</option>
                <option value="bangladeshi">Bangladeshi</option>
                <option value="barbadian">Barbadian</option>
                <option value="barbudans">Barbudans</option>
                <option value="batswana">Batswana</option>
                <option value="belarusian">Belarusian</option>
                <option value="belgian">Belgian</option>
                <option value="belizean">Belizean</option>
                <option value="beninese">Beninese</option>
                <option value="bhutanese">Bhutanese</option>
                <option value="bolivian">Bolivian</option>
                <option value="bosnian">Bosnian</option>
                <option value="brazilian">Brazilian</option>
                <option value="british">British</option>
                <option value="bruneian">Bruneian</option>
                <option value="bulgarian">Bulgarian</option>
                <option value="burkinabe">Burkinabe</option>
                <option value="burmese">Burmese</option>
                <option value="burundian">Burundian</option>
                <option value="cambodian">Cambodian</option>
                <option value="cameroonian">Cameroonian</option>
                <option value="canadian">Canadian</option>
                <option value="cape verdean">Cape Verdean</option>
                <option value="central african">Central African</option>
                <option value="chadian">Chadian</option>
                <option value="chilean">Chilean</option>
                <option value="chinese">Chinese</option>
                <option value="colombian">Colombian</option>
                <option value="comoran">Comoran</option>
                <option value="congolese">Congolese</option>
                <option value="costa rican">Costa Rican</option>
                <option value="croatian">Croatian</option>
                <option value="cuban">Cuban</option>
                <option value="cypriot">Cypriot</option>
                <option value="czech">Czech</option>
                <option value="danish">Danish</option>
                <option value="djibouti">Djibouti</option>
                <option value="dominican">Dominican</option>
                <option value="dutch">Dutch</option>
                <option value="east timorese">East Timorese</option>
                <option value="ecuadorean">Ecuadorean</option>
                <option value="egyptian">Egyptian</option>
                <option value="emirian">Emirian</option>
                <option value="equatorial guinean">Equatorial Guinean</option>
                <option value="eritrean">Eritrean</option>
                <option value="estonian">Estonian</option>
                <option value="ethiopian">Ethiopian</option>
                <option value="fijian">Fijian</option>
                <option value="filipino">Filipino</option>
                <option value="finnish">Finnish</option>
                <option value="french">French</option>
                <option value="gabonese">Gabonese</option>
                <option value="gambian">Gambian</option>
                <option value="georgian">Georgian</option>
                <option value="german">German</option>
                <option value="ghanaian">Ghanaian</option>
                <option value="greek">Greek</option>
                <option value="grenadian">Grenadian</option>
                <option value="guatemalan">Guatemalan</option>
                <option value="guinea-bissauan">Guinea-Bissauan</option>
                <option value="guinean">Guinean</option>
                <option value="guyanese">Guyanese</option>
                <option value="haitian">Haitian</option>
                <option value="herzegovinian">Herzegovinian</option>
                <option value="honduran">Honduran</option>
                <option value="hungarian">Hungarian</option>
                <option value="icelander">Icelander</option>
                <option value="indian">Indian</option>
                <option value="indonesian">Indonesian</option>
                <option value="iranian">Iranian</option>
                <option value="iraqi">Iraqi</option>
                <option value="irish">Irish</option>
                <option value="israeli">Israeli</option>
                <option value="italian">Italian</option>
                <option value="ivorian">Ivorian</option>
                <option value="jamaican">Jamaican</option>
                <option value="japanese">Japanese</option>
                <option value="jordanian">Jordanian</option>
                <option value="kazakhstani">Kazakhstani</option>
                <option value="kenyan">Kenyan</option>
                <option value="kittian and nevisian">Kittian and Nevisian</option>
                <option value="kuwaiti">Kuwaiti</option>
                <option value="kyrgyz">Kyrgyz</option>
                <option value="laotian">Laotian</option>
                <option value="latvian">Latvian</option>
                <option value="lebanese">Lebanese</option>
                <option value="liberian">Liberian</option>
                <option value="libyan">Libyan</option>
                <option value="liechtensteiner">Liechtensteiner</option>
                <option value="lithuanian">Lithuanian</option>
                <option value="luxembourger">Luxembourger</option>
                <option value="macedonian">Macedonian</option>
                <option value="malagasy">Malagasy</option>
                <option value="malawian">Malawian</option>
                <option value="malaysian">Malaysian</option>
                <option value="maldivan">Maldivan</option>
                <option value="malian">Malian</option>
                <option value="maltese">Maltese</option>
                <option value="marshallese">Marshallese</option>
                <option value="mauritanian">Mauritanian</option>
                <option value="mauritian">Mauritian</option>
                <option value="mexican">Mexican</option>
                <option value="micronesian">Micronesian</option>
                <option value="moldovan">Moldovan</option>
                <option value="monacan">Monacan</option>
                <option value="mongolian">Mongolian</option>
                <option value="moroccan">Moroccan</option>
                <option value="mosotho">Mosotho</option>
                <option value="motswana">Motswana</option>
                <option value="mozambican">Mozambican</option>
                <option value="namibian">Namibian</option>
                <option value="nauruan">Nauruan</option>
                <option value="nepalese">Nepalese</option>
                <option value="new zealander">New Zealander</option>
                <option value="ni-vanuatu">Ni-Vanuatu</option>
                <option value="nicaraguan">Nicaraguan</option>
                <option value="nigerien">Nigerien</option>
                <option value="north korean">North Korean</option>
                <option value="northern irish">Northern Irish</option>
                <option value="norwegian">Norwegian</option>
                <option value="omani">Omani</option>
                <option value="pakistani">Pakistani</option>
                <option value="palauan">Palauan</option>
                <option value="panamanian">Panamanian</option>
                <option value="papua new guinean">Papua New Guinean</option>
                <option value="paraguayan">Paraguayan</option>
                <option value="peruvian">Peruvian</option>
                <option value="polish">Polish</option>
                <option value="portuguese">Portuguese</option>
                <option value="qatari">Qatari</option>
                <option value="romanian">Romanian</option>
                <option value="russian">Russian</option>
                <option value="rwandan">Rwandan</option>
                <option value="saint lucian">Saint Lucian</option>
                <option value="salvadoran">Salvadoran</option>
                <option value="samoan">Samoan</option>
                <option value="san marinese">San Marinese</option>
                <option value="sao tomean">Sao Tomean</option>
                <option value="saudi">Saudi</option>
                <option value="scottish">Scottish</option>
                <option value="senegalese">Senegalese</option>
                <option value="serbian">Serbian</option>
                <option value="seychellois">Seychellois</option>
                <option value="sierra leonean">Sierra Leonean</option>
                <option value="singaporean">Singaporean</option>
                <option value="slovakian">Slovakian</option>
                <option value="slovenian">Slovenian</option>
                <option value="solomon islander">Solomon Islander</option>
                <option value="somali">Somali</option>
                <option value="south african">South African</option>
                <option value="south korean">South Korean</option>
                <option value="spanish">Spanish</option>
                <option value="sri lankan">Sri Lankan</option>
                <option value="sudanese">Sudanese</option>
                <option value="surinamer">Surinamer</option>
                <option value="swazi">Swazi</option>
                <option value="swedish">Swedish</option>
                <option value="swiss">Swiss</option>
                <option value="syrian">Syrian</option>
                <option value="taiwanese">Taiwanese</option>
                <option value="tajik">Tajik</option>
                <option value="tanzanian">Tanzanian</option>
                <option value="thai">Thai</option>
                <option value="togolese">Togolese</option>
                <option value="tongan">Tongan</option>
                <option value="trinidadian or tobagonian">Trinidadian or Tobagonian</option>
                <option value="tunisian">Tunisian</option>
                <option value="turkish">Turkish</option>
                <option value="tuvaluan">Tuvaluan</option>
                <option value="ugandan">Ugandan</option>
                <option value="ukrainian">Ukrainian</option>
                <option value="uruguayan">Uruguayan</option>
                <option value="uzbekistani">Uzbekistani</option>
                <option value="venezuelan">Venezuelan</option>
                <option value="vietnamese">Vietnamese</option>
                <option value="welsh">Welsh</option>
                <option value="yemenite">Yemenite</option>
                <option value="zambian">Zambian</option>
                <option value="zimbabwean">Zimbabwean</option>
              </select>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label for="subject">
                <b>رابط فيديو المقدمه</b>
              </label>
              <input
                type="string"
                class="form-control"
                id="subject"
                required="true"
                v-model="link"
                @blur="$v.link.$touch()"
                :class="{vs :$v.link.$error}"
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label for="subject">
                <b>النوع</b>
              </label>

              <select
                class="form-control form-control-lg mb-4"
                v-model="sex"
                @blur="$v.sex.$touch()"
                :class="{vs :$v.sex.$error}"
              >
                <option value="male">ذكر</option>
                <option value="female">أنثي</option>
              </select>
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label for="subject">
                <b>المسمي الوظيفي</b>
              </label>
              <!-- <input type="string" class="form-control" id="subject" required="true" v-model="role" @blur="$v.role.$touch()" :class="{vs :$v.role.$error}" > -->

              <select
                class="form-control form-control-lg mb-4"
                v-model="role"
                @blur="$v.role.$touch()"
                :class="{vs :$v.role.$error}"
              >
                <option value="admin">admin</option>
                <option value="teacher">معلم</option>
                <option value="student">طالب</option>
                <option value="moshref">مشرف</option>
              </select>
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
        </div>-->
        <div class="row">
          <div class="col-sm-12 text-right">
            <button
              type="submit"
              class="btn btn-danger px-5 py-2"
              :disabled="$v.$invalid"
            >اضافه المستخدم</button>
          </div>
        </div>
      </form>
    </div>
    <!--end card-body-->
  </div>
  <!--end card-->
</template>

<script>
// import firebase from 'firebase'
// import { db } from '../main'
import {
  required,
  email,
  numeric,
  minValue,
  maxValue,
  minLength,
  sameAs,
  requiredUnless
} from "vuelidate/lib/validators";
import firebase from 'firebase'
import { db } from '../../main'

export default {
  data() {
    {
      return {
        firstname: "",
        lastname: "",
        school: "",
        email: "",
        mobile: "",
        sex: "",
        nationality: "",
        role: "",
        link: ""
      };
    }
  },

    methods: {
        addUser(firstname,lastname,mobile, email ,nationality ,school , link, sex ,role ){
            const createdAt = new Date() ;
            db.collection('Users').add({
                firstname , lastname , mobile , email , nationality , school , link , sex , role 
            })
            this.$router.go('/')
            // this.firstname = ''
            // this.lastname = ''
            // this.mobile = ''
            // this.email = ''
            // this.nationality = ''
            // this.school = ''    
            // this.link = ''
            // this.sex = ''
            // this.role = ''

        }
    },
  validations: {
    firstname: {
      required,
      minLen: minLength(3)
    },
    lastname: {
      required,
      minLen: minLength(3)
    },
    school: {
      required
    },
    email: {
      required,
      email
    },
    mobile: {
      required,
      minLen: minLength(10)
    },

    sex: {
      required
    },
    nationality: {
      required
    },
    role: {
      required
    },

    link: {
      required
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Tajawal&display=swap");

label,
option,
select,
h4 {
  font-family: "Tajawal", sans-serif;
  /* font-size: 30px; */
}
button {
  font-family: "Tajawal", sans-serif;
}
/*Form validation*/
.invalid {
  border-color: red;
}
.err {
  color: red;
}

.vs {
  border: 1px solid red;
  background-color: #ffc9aa;
}
</style>
