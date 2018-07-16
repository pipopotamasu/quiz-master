<template>
  <div>
    <v-list-tile-content class="quiz-content">
      <v-list-tile-title v-html="'1. How many letters are there in the English alphabet?'" class="quiz-title"></v-list-tile-title>
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
      :title="'1. How many letters are there in the English alphabet?'"></answer-modal>
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