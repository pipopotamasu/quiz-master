<template>
  <div>
    <v-list-tile-content class="quiz-item">
      <span>{{ questionNumber }}.</span>
      <v-list-tile-title class="quiz-title">{{ removedTagsContent }}</v-list-tile-title>
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
      :quiz="quiz"></answer-modal>
  </div>
</template>

<script>
import AnswerModal from './AnswerModal.vue'
import striptags from 'striptags'

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
    },
    removedTagsContent () {
      return striptags(this.quiz.content)
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
.quiz-item {
  display: inline;
}

.quiz-title {
  display: inline;
}
</style>