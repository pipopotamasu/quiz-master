<template>
  <v-card-actions class="actions">
    <v-spacer></v-spacer>
    <v-btn
      depressed
      @click="close"
    >
      BACK
    </v-btn>
    <v-btn
      color="blue"
      dark
      @click="checkAnswer"
      v-if="!answered"
    >
      ANSWER
    </v-btn>
  </v-card-actions>
</template>

<script>
export default {
  props: {
    close: {
      type: Function,
      required: true
    },
    checkAnswer: {
      type: Function,
      required: true
    },
    answered: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
.actions {
  margin-top: -1.2em;
  padding: 1em;
}
</style>