import { defineStore } from "pinia";

export const useSnackbarStore = defineStore("snackbar", {
  state: () => ({
    show: false,
    message: "",
    timeout: 3000,
  }),
  actions: {
    showSnackbar(message: string, timeout = 3000) {
      this.message = message;
      this.timeout = timeout;
      this.show = true;
    },
  },
});
