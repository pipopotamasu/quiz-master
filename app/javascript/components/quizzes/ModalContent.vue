<template>
  <v-card>
    <v-card-title v-html="quiz.content" class="quiz-content grey lighten-2">
    </v-card-title>

    <v-card-text v-if="!answered">
      <v-text-field label="Input answer" required v-model="input"></v-text-field>
    </v-card-text>

    <v-card-text v-else>
      <div v-if="corrected">
        <span>icon</span>
        <span>Your Answer: {{ this.input }}</span>
      </div>
      <div v-else>
        <span>icon</span>
        <span>Your Answer: {{ this.input }}</span>
        <span v-if="!answerIsNumber">Correct Answer: {{ this.quiz.answer }}</span>
        <span v-if="answerIsNumber">Correct Answer: {{ this.quiz.answer }} or {{ answerToWord }}</span>
      </div>
    </v-card-text>

    <modal-actions :close="close" :checkAnswer="checkAnswer" :answered="answered"></modal-actions>
  </v-card>
</template>

<script>
import ModalActions from "./ModalActions"
import converter from "number-to-words"

export default {
  data () {
    return {
      input: '',
      answered: false,
      corrected: false
    }
  },
  props: {
    close: {
      type: Function,
      required: true
    },
    quiz: {
      type: Object,
      required: true
    }
  },
  components: {
    ModalActions
  },
  computed: {
    isCorrectAnswer () {
      if (this.answerIsNumber) {
        return (
          this.input === this.quiz.answer ||
          this.input === this.answerToWord
        )
      } else {
        return this.input === this.quiz.answer
      }
    },
    answerIsNumber () {
      return isFinite(this.quiz.answer)
    },
    answerToWord () {
      return converter.toWords(this.quiz.answer)
    }
  },
  methods: {
    checkAnswer () {
      this.answered = true
      if (this.isCorrectAnswer) {
        this.corrected = true
      }
    },
  }
}
</script>

<style scoped>
.quiz-content {
  font-size: 1.2em;
  padding-bottom: 0px;
}
</style>