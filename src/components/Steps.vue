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

  const stepsEl = document.querySelector(".steps")!.getBoundingClientRect();

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#6248FF";
  ctx.lineWidth = 3;
  ctx.setLineDash([1, 6]);
  ctx.lineCap = "round";

  function drawCurve(a: DOMRect, b: DOMRect, bend: "right" | "left") {
    ctx.beginPath();

    const ax = a.left + a.width - stepsEl.left;
    const ay = a.top + a.height / 2 - stepsEl.top;

    const bx = b.left - stepsEl.left;
    const by = b.top + b.height / 2 - stepsEl.top;

    const midX = (ax + bx) / 2;

    ctx.moveTo(ax, ay);

    if (bend === "right") {
      ctx.quadraticCurveTo(midX, ay, midX, by);
    } else {
      ctx.quadraticCurveTo(midX, by, midX, ay);
    }

    ctx.lineTo(bx, by);
    ctx.stroke();
  }

  drawCurve(cards.value[0].getBoundingClientRect(), cards.value[1].getBoundingClientRect(), "right");
  drawCurve(cards.value[1].getBoundingClientRect(), cards.value[2].getBoundingClientRect(), "left");
  drawCurve(cards.value[2].getBoundingClientRect(), cards.value[3].getBoundingClientRect(), "right");
}



onMounted(async () => {
  await nextTick();
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
      <div v-for="(step, index) in steps" :key="step.id" class="step-card" :class="'card-' + (index + 1)" ref="cards">
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
  flex-direction: column;
}

.title span {
  background: #ece8ff;
  padding: 0 6px;
}

.steps {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-template-rows: max-content max-content;
  gap: 0 200px;
  align-items: start;
}

.step-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 483px;
  box-sizing: border-box;
  width: fit-content;

  border: 2px solid #6248FF;
  border-radius: 30px;
  padding: 32px;

  background: #fff;
  position: relative;
  z-index: 2;
}

.card-2 {
  transform: translateY(70px);
}

.card-3 {
  transform: translateY(140px);
}

.card-4 {
  transform: translateY(210px);
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

@media (max-width: 320px) {
  .getting-started {
    padding: 40px 24px;
  }
}
</style>
