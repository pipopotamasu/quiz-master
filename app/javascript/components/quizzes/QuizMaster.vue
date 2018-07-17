<template>
  <v-app id="inspire">
    <v-layout row>
      <v-flex xs12 sm8 offset-sm2>
        <v-card>
          <quiz-header></quiz-header>
          <quiz-list :quizzes="quizzes"></quiz-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import QuizHeader from "./QuizHeader.vue"
import QuizList from "./QuizList.vue"

export default {
  data () {
    return {
      quizzes: []
    }
  },
  components: {
    QuizHeader,
    QuizList
  },
  async created () {
    try {
      // TODO: specify content-type to application/json
      const res = await this.axios.get("quizzes.json");
      this.quizzes = res.data.quizzes
    } catch (err) {
      // show error msg
    }
  }
}
</script>