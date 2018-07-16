<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      max-width="500"
      persistent
    >
      <v-card>
        <v-card-title class="quiz-title grey lighten-2">
          {{ title }}
        </v-card-title>

        <v-card-text>
          <v-text-field label="Input answer" required></v-text-field>
        </v-card-text>

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
          >
            ANSWER
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
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
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.quiz-title {
  font-size: 1.2em;
}

.actions {
  margin-top: -1.2em;
  padding: 1em;
}
</style>