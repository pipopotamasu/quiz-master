import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

new Vue({
  el: "#quiz-master",
  template: `<v-app>
              <v-content>
                <v-container>Hello world</v-container>
              </v-content>
            </v-app>`
});
