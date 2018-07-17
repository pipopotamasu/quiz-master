<template>
  <div>
    <v-list-tile-content class="quiz-content">
      <span>{{ questionNumber }}.</span>
      <v-list-tile-title class="quiz-title">{{ quiz.content }}</v-list-tile-title>
      <v-btn
          color="blue"
          dark
          @click="openModal"
      >
        ANSWER
      </v-btn>
    </v-list-tile-content>
    <answer-modal
      :dialog="dialog"
      :close="closeModal"
      :content="quiz.content"></answer-modal>
  </div>
</template>

<script>
import AnswerModal from './AnswerModal.vue'

export default {
  data () {
    return {
      dialog: false
    }
  },
  props: {
    quiz: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  computed: {
    questionNumber () {
      return this.index + 1
    }
  },
  components: {
    AnswerModal
  },
  methods: {
    openModal () {
      this.dialog = true
    },
    closeModal () {
      this.dialog = false
    }
  }
}

</script>

<style scoped>
.quiz-content {
  display: inline;
}

.quiz-title {
  display: inline;
}
</style>