<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from "vue";
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

const cards = ref<HTMLDivElement[]>([]);

function drawLines() {
  const canvas = document.getElementById("canvas-lines") as HTMLCanvasElement;
  const ctx = canvas.getContext("2d")!;

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "#8a7ff0";
  ctx.lineWidth = 3;

  for (let i = 0; i < cards.value.length - 1; i++) {
    const a = cards.value[i].getBoundingClientRect();
    const b = cards.value[i + 1].getBoundingClientRect();

    const parent = canvas.getBoundingClientRect();

    const ax = a.left + a.width / 2 - parent.left;
    const ay = a.top + a.height / 2 - parent.top;

    const bx = b.left + b.width / 2 - parent.left;
    const by = b.top + b.height / 2 - parent.top;

    ctx.beginPath();
    ctx.moveTo(ax, ay);
    ctx.lineTo(bx, by);
    ctx.stroke();
  }
}

onMounted(async () => {
  await nextTick(); // ждём рендер карточек
  drawLines();
  window.addEventListener("resize", drawLines);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", drawLines);
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
      <div v-for="step in steps" :key="step.id" class="step-card" ref="cards">
        <div class="step-id">{{ step.id }}</div>
        <h3 class="step-title">{{ step.title }}</h3>
        <p class="step-text">{{ step.text }}</p>
      </div>

      <canvas id="canvas-lines"></canvas>
    </div>
  </section>
</template>

<style scoped>
.getting-started {
  padding: 80px 120px;
  position: relative;
}

.title {
  font-size: 42px;
  font-weight: 700;
  font-family: "Museo Sans Cyrl", sans-serif;
  color: #333;
  margin-bottom: 60px;
  line-height: 48px;
}

.title span {
  background: #ece8ff;
  padding: 0 6px;
}

.steps {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 360px);
  grid-template-rows: repeat(2, auto);
  gap: 60px 120px;
}

#canvas-lines {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.step-card {
  border: 2px solid #cfc8ff;
  border-radius: 16px;
  padding: 20px;
  width: 360px;
  background: #fff;
  position: relative;
  z-index: 2;
}

.step-id {
  color: #8a7ff0;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
}

.step-title {
  font-size: 18px;
  font-weight: 700;
  font-family: "Museo Sans Cyrl", sans-serif;
  margin-bottom: 12px;
}
</style>
