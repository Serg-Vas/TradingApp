<script setup lang="ts">
import { ref } from "vue";

interface FaqItem {
  title: string;
  text: string;
}

const faqs: FaqItem[] = [
  {
    title: "How do I change my details?",
    text: "We provide only the best trading software. The trading terminal MetaTrader4 is the most popular...",
  },
  {
    title: "What platforms will I be able to use?",
    text: "We provide only the best trading software. The trading terminal MetaTrader4 is the most popular...",
  },
  {
    title: "How do I change my details?",
    text: "We provide only the best trading software. The trading terminal MetaTrader4 is the most popular...",
  },
  {
    title: "How do I change my details?",
    text: "We provide only the best trading software. The trading terminal MetaTrader4 is the most popular...",
  },
  {
    title: "How do I change my details?",
    text: "We provide only the best trading software. The trading terminal MetaTrader4 is the most popular...",
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
      <div
        v-for="(item, i) in faqs"
        :key="i"
        class="faq-item"
        :class="{ open: active === i }"
      >
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
  padding: 18px 22px;
  cursor: pointer;
  transition: 0.25s;
}

.faq-item.open {
  border-color: #9f84ff;
}

.faq-header {
  font-size: 24px;
  font-weight: 600;
}

.icon {
  border: none;
  background: none;
  font-size: 24px;
  font-weight: 300;
  cursor: pointer;
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
</style>
