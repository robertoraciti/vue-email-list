const { createApp } = Vue;

createApp({
  data() {
    return {
      emails: [],
    };
  },

  methods: {
    generateRandomEmail() {
      for (let i = 0; i < 10; i++) {
        axios
          .get("https://flynn.boolean.careers/exercises/api/random/mail")
          .then((result) => {
            console.log(result.data.response);
            const email = result.data.response;
            this.emails.push(email);
          });
      }
    },
  },

  mounted() {
    this.generateRandomEmail();
  },
}).mount("#app");
