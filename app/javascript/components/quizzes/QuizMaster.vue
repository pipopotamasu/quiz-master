<template>
  <v-app id="inspire">
    <v-layout row>
      <v-flex xs12 sm8 offset-sm2>
        <v-card>
          <quiz-header></quiz-header>
          <quiz-list></quiz-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import QuizHeader from "./QuizHeader.vue"
import QuizList from "./QuizList.vue"

export default {
  components: {
    QuizHeader,
    QuizList
  }
}
</script>