<template>
  <v-card>
    <v-card-title v-html="quiz.content" class="quiz-content grey lighten-2">
    </v-card-title>

    <v-card-text v-if="!answered">
      <v-text-field label="Input answer" required v-model="input"></v-text-field>
    </v-card-text>

    <v-card-text v-else>
      <answer-result
        :corrected="corrected"
        :yourAnswer="input"
        :correctAnswer="quiz.answer"
        :answerIsNumber="answerIsNumber"
        :answerToWord="answerToWord"
      >
      </answer-result>
    </v-card-text>

    <modal-actions :close="reset" :checkAnswer="checkAnswer" :answered="answered"></modal-actions>
  </v-card>
</template>

<script>
import ModalActions from "./ModalActions.vue"
import AnswerResult from "./AnswerResult.vue"
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
    ModalActions,
    AnswerResult
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
    reset () {
      this.close()
      this.initialize()
    },
    initialize () {
      this.input = ''
      this.answered = false
      this.corrected = false
    }
  }
}
</script>

<style scoped>
.quiz-content {
  font-size: 1.2em;
  padding-bottom: 0px;
}
</style>