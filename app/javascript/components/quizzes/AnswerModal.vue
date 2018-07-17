<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      max-width="500"
      persistent
    >
      <modal-content :quiz="quiz" :close="close"></modal-content>
    </v-dialog>
  </div>
</template>

<script>
import ModalContent from "./ModalContent.vue"

export default {
  props: {
    dialog: {
      type: Boolean,
      required: true
    },
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
    ModalContent
  }
}
</script>