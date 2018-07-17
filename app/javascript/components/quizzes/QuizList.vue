<template>
  <v-list two-line>
    <v-subheader>Quiz List</v-subheader>
    <v-divider></v-divider>

    <v-list-tile :key="i" v-for="(quiz, i) in quizzes">
      <quiz-content :quiz="quiz" :index="i"></quiz-content>
    </v-list-tile>
  </v-list>
</template>

<script>
import QuizContent from './QuizContent.vue'

export default {
  components: {
    QuizContent
  },
  props: {
    quizzes: {
      type: Array,
      required: true
    }
  }
}
</script>