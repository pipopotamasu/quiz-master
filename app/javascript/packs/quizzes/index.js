import Vue from "vue";
import Vuetify from "vuetify";
import axios from "axios";
import VueAxiosPlugin from "@/plugins/vue_axios";
import QuizMaster from "@/components/quizzes/QuizMaster.vue";
import "babel-polyfill";

Vue.use(VueAxiosPlugin, { axios: axios });
Vue.use(Vuetify);

new Vue({
  el: "#quiz-master",
  components: {
    QuizMaster
  },
  template: `<quiz-master></quiz-master>`
});
