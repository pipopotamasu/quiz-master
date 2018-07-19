<template>
  <div class="answer-result">
    <div class="correct" v-if="corrected">
      <i class="far fa-check-circle fa-5x fa-correct"></i>
      <div class="your-answer">
        Your Answer: {{ yourAnswer }}
      </div>
    </div>
    <div class="incorrect" v-else>
      <i class="far fa-times-circle fa-5x fa-incorrect"></i>
      <div class="your-answer">
        Your Answer: {{ yourAnswer }}
      </div>
      <div class="correct-answer">
        <span v-if="!answerIsNumber">Correct Answer: {{ correctAnswer }}</span>
        <span v-if="answerIsNumber">Correct Answer: {{ correctAnswer }} or {{ answerToWord }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    corrected: {
      types: Boolean,
      require: true
    },
    yourAnswer: {
      types: String,
      require: true
    },
    correctAnswer: {
      types: String,
      require: true
    },
    answerToWord: {
      types: String,
      require: true
    },
    answerIsNumber: {
      types: Boolean,
      require: true
    },
  }
}
</script>

<style scoped>
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