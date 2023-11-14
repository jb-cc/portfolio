<template>
  <div>
    <!--    <NuxtWelcome />-->
    <!--    <Button label=" test" />-->
    <div class="surface-section px-4 py-8 md:px-6 lg:px-8">
      <div class="text-700 text-center">
        <div class="text-900 font-bold text-5xl mb-3">
          Hi, I am Jonas Beer 👋
        </div>
        <div class="text-700 text-2xl mb-5">
          And I am an aspiring fullstack developer, <br />
          currently studying Creative Computing at the UAS St. Pölten.
        </div>
        <div class="text-700 text-xl mb-5">
          This portfolio is a work in progress, so expect changes in the next
          1-6 business years 🤝
        </div>
        <div class="text-700 text-xl mb-5">
          In the meantime, you can contact me via email:
        </div>
        <Button
          label="Send me an email"
          class="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"
          @click="sendMail()"
        ></Button>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "primeflex/primeflex.css";
Button {
  margin: 0 auto;
  display: block;
  background-color: #19749f;
}
</style>

<script setup>
const sendMail = () => {
  window.open("mailto: contact@jonasbeer.com");
};
</script>
