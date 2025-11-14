<script setup lang="ts">
import { ref } from "vue";

const name = ref("");
const email = ref("");
const message = ref("");

function sendForm() {
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
        <p><strong>Phone:</strong><br />442038957261</p>

        <p><strong>Email:</strong><br />help@google.com</p>

        <p>
          <strong>Address:</strong><br />
          Trust Company Complex, Ajeltake Road, Ajeltake Island,
          Majuro, Republic of the Marshall Islands, MH 96960
        </p>
      </div>
    </div>

    <div class="right">
      <form class="form" @submit.prevent="sendForm">
        <input v-model="name" type="text" placeholder="Name" />
        <input v-model="email" type="email" placeholder="Email" />
        <textarea v-model="message" placeholder="Message"></textarea>

        <button type="submit" class="btn">SEND</button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.contact {
  display: flex;
  align-items: flex-start;
  gap: 60px;
}

.title {
  text-align: center;
}

.subtitle {
  font-size: 16px;
  color: #555;
  margin-bottom: 25px;
  max-width: 420px;
}

.small {
  font-size: 14px;
  color: #666;
  margin-bottom: 25px;
}

.info p {
  margin-bottom: 15px;
  font-size: 15px;
  color: #444;
}

.form {
  background: white;
  border: 2px solid #a88fff;
  border-radius: 16px;
  padding: 80px;
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
}

input,
textarea {
  width: 100%;
  border: 1px solid #E0E0E0;
  /* background: #fafafa; */
  border-radius: 8px;
  padding: 12px 14px;
  font-size: 16px;
  outline: none;
  transition: 0.2s;
  font-family: 'Montserrat', sans-serif;
}

input:focus,
textarea:focus {
  border-color: #8c6bff;
  background: #fff;
}

textarea {
  height: 95px;
  resize: none;
}

.btn {
  margin-top: 10px;
  width: 130px;
  align-self: center;
  background: #6d47ff;
  color: white;
  font-size: 15px;
  padding: 10px 0;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.25s;
  letter-spacing: 0.5px;
}

.btn:hover {
  background: #5b34ef;
}
</style>
