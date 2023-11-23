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
          In the meantime have fun with the following links:
        </div>
        <Button
            label="GitHub"
            class="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"
            @click="openGithub()"
        ></Button>
        <Button
            label="Email"
            class="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"
            @click="sendMail()"
        ></Button>
        <Button
            label="LinkedIn"
            class="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"
            @click="openLinkedIn()"
        ></Button>
        <Button
            label="CV"
            class="font-bold px-5 py-3 p-button-raised p-button-rounded white-space-nowrap"
            @click="openCV()"
        ></Button>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
@import "primeflex/primeflex.css";
Button {
  display: block;
  background-color: #19749f;
  margin: auto auto 1rem;
}
</style>

<script setup>
const sendMail = () => {
  window.open("mailto: contact@jonasbeer.com");
};

const openLinkedIn = () => {
  window.open("https://www.linkedin.com/in/jonas-beer-9596ba261/");
};

const openGithub = () => {
  window.open("https://github.com/jb-cc");
};

const openCV = () => {
  window.open("https://jrbeer.notion.site/jrbeer/Latest-CV-e622b6fde4a94b368e370f1763ea03ed");
};
</script>
