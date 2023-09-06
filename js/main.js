const { createApp } = Vue;

createApp({
  data() {
    return {
      email: "Hello Vue!",
    };
  },

  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((result) => {
        console.log(result.data.response);
      });
  },
}).mount("#app");
