<template>
  <v-list two-line>
    <v-subheader>Quiz List</v-subheader>
    <v-divider></v-divider>

    <v-list-tile :key="i" v-for="(quiz, i) in quizzes">
      <quiz-item :quiz="quiz" :index="i"></quiz-item>
    </v-list-tile>
  </v-list>
</template>

<script>
import QuizItem from './QuizItem.vue'

export default {
  components: {
    QuizItem
  },
  props: {
    quizzes: {
      type: Array,
      required: true
    }
  }
}
</script>