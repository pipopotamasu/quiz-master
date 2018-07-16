import Vue from "vue";
import Vuetify from "vuetify";
import QuizMaster from "@/components/quizzes/QuizMaster.vue";

Vue.use(Vuetify);

new Vue({
  el: "#quiz-master",
  components: {
    QuizMaster
  },
  template: `<quiz-master></quiz-master>`
});
