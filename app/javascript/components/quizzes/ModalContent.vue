<template>
  <v-card>
    <v-card-title v-html="quiz.content" class="quiz-content grey lighten-2">
    </v-card-title>

    <v-card-text v-if="!answered">
      <v-text-field label="Input answer" required v-model="input"></v-text-field>
    </v-card-text>

    <v-card-text v-else>
      <div class="correct" v-if="corrected">
        <i class="far fa-check-circle fa-5x fa-correct"></i>
        <div class="your-answer">
          Your Answer: {{ this.input }}
        </div>
      </div>
      <div class="incorrect" v-else>
        <i class="far fa-times-circle fa-5x fa-incorrect"></i>
        <div class="your-answer">
          Your Answer: {{ this.input }}
        </div>
        <div class="correct-answer">
          <span v-if="!answerIsNumber">Correct Answer: {{ this.quiz.answer }}</span>
          <span v-if="answerIsNumber">Correct Answer: {{ this.quiz.answer }} or {{ answerToWord }}</span>
        </div>
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

.correct,
.incorrect {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.your-answer,
.correct-answer {
  font-size: 1.5em;
  padding-top: 0.5em;
}

.fa-correct {
  color: #00cc00;
}

.fa-incorrect {
  color: #4689ff;
}
</style>