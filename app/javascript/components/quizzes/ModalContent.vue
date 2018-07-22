<template>
  <v-card>
    <v-card-title v-html="quiz.content" class="quiz-content grey lighten-2">
    </v-card-title>

    <v-card-text v-if="!answered">
      <v-alert :value="has_error" type="error">
        Answer is required.
      </v-alert>
      <v-text-field class="answer-input" label="Input answer" required v-model="input"></v-text-field>
    </v-card-text>

    <v-card-text v-else>
      <answer-result
        :yourAnswer="input"
        :correctAnswer="quiz.answer"
      >
      </answer-result>
    </v-card-text>

    <modal-actions :close="reset" :updateAnswerStatus="updateAnswerStatus" :answered="answered"></modal-actions>
  </v-card>
</template>

<script>
import ModalActions from "./ModalActions.vue"
import AnswerResult from "./AnswerResult.vue"

export default {
  data () {
    return {
      input: '',
      answered: false,
      has_error: false
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
  methods: {
    updateAnswerStatus () {
      if (this.input === '') {
        this.has_error = true
        return
      }

      this.answered = true
    },
    reset () {
      this.close()
      this.initialize()
    },
    initialize () {
      this.input = ''
      this.answered = false
      this.has_error = false
    }
  }
}
</script>

<style scoped>
.quiz-content {
  font-size: 1.2em;
}

.v-alert {
  height: 3em;
}
</style>