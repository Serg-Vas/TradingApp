<script setup lang="ts">
import { ref } from "vue";

const faqs = [
  {
    title: "How do I change my personal details?",
    text: "You can update your profile information anytime from the Settings section of your account. Simply open your dashboard, select “Profile”, and edit the fields you need.",
  },
  {
    title: "What trading platforms are available?",
    text: "Our clients can trade using MetaTrader4, WebTrader, or the mobile app. All platforms offer real-time charts, fast execution, and access to global markets.",
  },
  {
    title: "How do I make my first deposit?",
    text: "Go to the “Finance” page and choose your preferred payment method. We support credit cards, bank transfers, and several secure online payment options.",
  },
  {
    title: "Is my money protected on your platform?",
    text: "Yes, all client funds are stored in segregated accounts, and every transaction is secured with industry-standard encryption to ensure maximum safety.",
  },
  {
    title: "Can I trade from my phone?",
    text: "Absolutely! Download our mobile trading app to monitor markets, open and close trades, and manage your portfolio wherever you are.",
  },
];

const active = ref<number | null>(1); // второй открыт как на макете

function toggle(i: number) {
  active.value = active.value === i ? null : i;
}
</script>

<template>
  <section class="faq">
    <h2 class="title">
      Frequently asked<br />
      <span>questions</span>
    </h2>

    <div class="faq-list">
      <div v-for="(item, i) in faqs" :key="i" class="faq-item" :class="{ open: active === i }">
        <div class="faq-header" @click="toggle(i)">
          <span>{{ item.title }}</span>

          <button class="icon">
            {{ active === i ? "×" : "+" }}
          </button>
        </div>

        <transition name="faq">
          <div v-if="active === i" class="faq-body">
            <p>{{ item.text }}</p>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq {
  flex-direction: column;
}
.title span {
  background: #eee9ff;
  padding: 0 8px;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.faq-item {
  border: 2px solid #6248FF;
  border-radius: 16px;
  padding: clamp(6px, 2vw, 18px) clamp(8px, 3vw, 22px);
  cursor: pointer;
  transition: 0.25s;
}

.faq-item.open {
  border-color: #9f84ff;
}

.faq-header {
  font-size: 24px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.icon {
  border: none;
  background: none;
  font-size: 35px;
  font-weight: 300;
  cursor: pointer;
  color: black;
  user-select: none;
  padding: clamp(0px, 1vw, 10px) clamp(0px, 1vw, 20px);
}

.faq-enter-from,
.faq-leave-to {
  opacity: 0;
  max-height: 0;
}

.faq-enter-to,
.faq-leave-from {
  opacity: 1;
  max-height: 300px;
}

.faq-enter-active,
.faq-leave-active {
  overflow: hidden;
  transition: all 0.25s ease;
}

@media (max-width: 400px) {
  .faq-header {
    font-size: 18px;
  }  
}
</style>
