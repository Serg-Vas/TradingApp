<script setup>
import { onMounted, nextTick, ref, onBeforeUnmount } from "vue";
import { createLineController } from "../utils/lineController";

const steps = [
  {
    id: "01.",
    title: "Register",
    text: "Complete the simple registration to get your trading credentials."
  },
  {
    id: "02.",
    title: "Verification",
    text: "Big Invest is required to verify your identity, upload your documents quickly and get approval in minutes."
  },
  {
    id: "03.",
    title: "Deposit funds",
    text: "Big Invest accepts credit cards and bank wires. Just use the secure deposit form and follow the steps."
  },
  {
    id: "04.",
    title: "Start Trading",
    text: "Once your deposit has been credited, you can begin trading instantly. In no time you will see profits rolling into your account."
  }
];

const cards = ref([]);
const controller = createLineController();
const breakpoint = 900;

const updateLinesVisibility = () => {
  if (window.innerWidth > breakpoint) controller.show();
  else controller.hide();
};

onMounted(async () => {
  await nextTick();
  controller.init(cards.value);
  updateLinesVisibility();
  window.addEventListener("resize", updateLinesVisibility);
});

onBeforeUnmount(() => {
  controller.destroy();
  window.removeEventListener("resize", updateLinesVisibility);
});
</script>

<template>
  <section class="getting-started">
    <h2 class="title">
      Getting Started Is
      <br />
      <span>Fast & Easy</span>
    </h2>

    <div class="steps">
      <div
        v-for="(step, index) in steps"
        :key="step.id"
        class="step-card"
        :class="'card-' + (index + 1)"
        ref="cards"
      >
        <div class="step-id">{{ step.id }}</div>
        <h3 class="step-title">{{ step.title }}</h3>
        <p class="step-text">{{ step.text }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.getting-started {
  flex-direction: column;
}

.title span {
  background: #ece8ff;
  padding: 0 6px;
}

.steps {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 483px));
  gap: 0 clamp(20px, 8vw, 200px);
  align-items: start;
  padding-bottom: 200px;
}

.step-card {
  display: flex;
  flex-direction: column;
  gap: clamp(10px, 2vw, 20px);
  width: 100%;
  border: 2px solid #6248FF;
  border-radius: 30px;
  padding: clamp(24px, 4vw, 32px);
  background: #fff;
  z-index: 2;
  box-sizing: border-box;
  min-width: 0;
}

.card-2 {
  transform: translateY(160px);
}
.card-3 {
  transform: translateY(100px);
}
.card-4 {
  transform: translateY(280px);
}

#canvas-lines {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.step-id {
  color: #6248FF;
  font-size: 15px;
  font-weight: 600;
}

.step-title {
  font-size: 24px;
  font-weight: 700;
  font-family: "Museo Sans Cyrl", sans-serif;
  margin: 0;
  color: #333333;
}

@media (max-width: 400px) {
  .getting-started {
    padding: 40px 24px;
  }
}

@media (max-width: 900px) {
  .steps {
    grid-template-columns: 1fr;
    gap: 40px 0;
    padding-bottom: 0;
  }

  .step-card {
    justify-self: center;
    max-width: 483px;
  }

  .card-2,
  .card-3,
  .card-4 {
    transform: translateY(0);
  }
}
</style>
