<script setup lang="ts">
import { ref } from "vue";

const testimonials = [
  {
    img: "https://i.pravatar.cc/80?img=12",
    name: "Albert Abello",
    role: "Director of Growth",
    text: `This magical product actually works! It has radically changed the way we build our audiences. Increasing new customer sales by 6x in our most mature market.`,
  },
  {
    img: "https://i.pravatar.cc/80?img=23",
    name: "Sarah Johnson",
    role: "Head of Marketing",
    text: `Big Invest is our secret weapon. Conversions went up by 42% in just a month.`,
  },
  {
    img: "https://i.pravatar.cc/80?img=28",
    name: "Daniel Cooper",
    role: "Product Manager",
    text: `Super intuitive and powerful. Highly recommend it!`,
  },
  {
    img: "https://i.pravatar.cc/80?img=33",
    name: "Emily Roberts",
    role: "VP of Sales",
    text: `We scaled twice as fast without hiring extra staff. Amazing tool.`,
  },
];

const index = ref(0);

function prev() {
  index.value = index.value === 0 ? testimonials.length - 1 : index.value - 1;
}
function next() {
  index.value = index.value === testimonials.length - 1 ? 0 : index.value + 1;
}
</script>

<template>
  <section class="testimonials">
    <div class="left">
      <h2 class="title">
        People love Big<br />
        <span>Invest</span>
      </h2>

      <div class="controls">
        <button @click="prev">‹</button>
        <button @click="next">›</button>
      </div>
    </div>

    <div class="right">
      <div class="user">
        <img :src="testimonials[index].img" />
        <div>
          <h4>{{ testimonials[index].name }}</h4>
          <p class="role">{{ testimonials[index].role }}</p>
        </div>
      </div>

      <div class="quote">❝</div>

      <p class="text">
        {{ testimonials[index].text }}
      </p>

      <div class="count">
        {{ String(index + 1).padStart(2, "0") }} /
        {{ String(testimonials.length).padStart(2, "0") }}
      </div>
    </div>
  </section>
</template>

<style scoped>

.testimonials {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 60px;
}

.left {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.title span {
  background: #eee9ff;
  padding: 0 8px;
}

.controls {
  display: flex;
  gap: 14px;
}

.controls button {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: 1px solid #ddd;
  background: #fff;
  cursor: pointer;
}

.controls button:hover {
  background: #f0efff;
}

.right {
  max-width: 480px;
}

.user {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 10px;
}

.user img {
  width: 46px;
  height: 46px;
  border-radius: 50%;
}

.role {
  color: #6c6c6c;
}

.quote {
  color: #8364ff;
  margin: 8px 0;
}

.text {
  margin-bottom: 12px;
}

.count {
  color: #7b6fff;
}

</style>
