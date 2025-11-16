<script setup lang="ts">
import { ref, computed } from "vue";

const name = ref("");
const email = ref("");
const message = ref("");

const focused = ref(false);

function isEmailValid(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

const emailValid = computed(() => isEmailValid(email.value));
const emailInvalid = computed(() => email.value.length > 0 && !isEmailValid(email.value));

const showError = computed(() => focused.value && emailInvalid.value);

function sendForm(e: Event) {
  e.preventDefault();

  if (!emailValid.value) {
    console.log("Email incorrect");
    return;
  }

  console.log({
    name: name.value,
    email: email.value,
    message: message.value,
  });
}
</script>



<template>
  <section class="violet contact">
    <div class="left">
      <h2 class="title">Contact us!</h2>

      <p class="subtitle">
        The support staff and customer service are available
        to help you with any questions or needs you might have.
        Just drop us a line.
      </p>

      <p class="small">
        This site is owned and operated by Kode Tech Solutions LTD
      </p>

      <div class="info">
        <div class="info-item">
          <span class="info-label">Phone:</span>
          <span class="info-value">442038957261</span>
        </div>

        <div class="info-item">
          <span class="info-label">Email:</span>
          <span class="info-value">help@google.com</span>
        </div>

        <div class="info-item">
          <span class="info-label">Address:</span>
          <span class="info-value">
            Trust Company Complex, Ajeltake Road, Ajeltake Island,
            Majuro, Republic of the Marshall Islands, MH 96960
          </span>
        </div>
      </div>

    </div>

    <div class="right">
      <form class="form" @submit.prevent="sendForm" novalidate>

        <input v-model="name" type="text" placeholder="Name" />

        <div class="email-wrapper">
          <input v-model="email" type="email" placeholder="Email" @focus="focused = true"
            :class="{
              'input-valid': emailValid,
              'input-error': emailInvalid
            }" />

          <p v-if="showError" class="error-text">Incorrect email type</p>
        </div>


        <textarea v-model="message" placeholder="Message"></textarea>

        <button type="submit" class="btn">SEND</button>
      </form>
    </div>

  </section>
</template>

<style scoped>

.input-valid:focus {
  border-color: #0EAC00 !important;
}

.input-error:focus {
  border-color: #EB5757 !important;
}

.error-text {
  color: #EB5757;
  margin: 0;
  margin-top: 6px;
  font-size: 14px;
  font-family: 'Museo Sans Cyrl', sans-serif;
}

.contact {
  display: flex;
  align-items: center;
  gap: 60px;
  /* flex-wrap: wrap; */
}

.subtitle {
  margin-bottom: 25px;
  max-width: 420px;
}

.small {
  font-size: 16px;
  margin-bottom: 25px;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 14px;
  max-width: 500px;
}

.info-label {
  color: #333333;
  font-weight: 600;
  line-height: 16px;
  font-family: "Museo Sans Cyrl", sans-serif;
}

.info-value {
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #4F4F4F;
}

.form {
  background: white;
  border: 2px solid #6248FF;
  border-radius: 16px;
  padding: clamp(20px, 6vw, 80px);
  width: clamp(280px, 60vw, 600px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: clamp(12px, 2vw, 20px);
  box-sizing: border-box;
  flex-shrink: 1;
  min-width: 0;
}

input,
textarea {
  box-sizing: border-box;
  width: 100%;
  max-width: 420px;
  border: 1px solid #E0E0E0;
  border-radius: 8px;
  padding: 12px clamp(8px, 2vw, 16px);
  font-size: 16px;
  outline: none;
  transition: 0.2s;
  font-family: 'Montserrat', sans-serif;
  line-height: 26px;
  /* margin: 10px 0; */
}

input:focus,
textarea:focus {
  border-color: #828282;
  background: #fff;
}

input::placeholder,
textarea::placeholder {
  color: #828282;
}

textarea {
  height: 95px;
  resize: none;
}

.btn {
  margin-inline: auto;
  display: block;
}

.btn:hover {
  background: #6248FF;
}
</style>
