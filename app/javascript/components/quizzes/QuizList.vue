<template>
  <v-list two-line>
    <v-subheader>Quiz List</v-subheader>
    <v-divider></v-divider>
    <v-list-tile
      :key="1"
    >
      <quiz-content></quiz-content>
    </v-list-tile>
  </v-list>
</template>

<script>
import QuizContent from './QuizContent.vue'

export default {
  components: {
    QuizContent
  }
}
</script>