<script setup>
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

      <!-- КНОПКИ ДЛЯ ДЕСКТОПА -->
      <div class="controls controls-left">
        <button @click="prev">‹</button>
        <button @click="next">›</button>
      </div>
    </div>

<div class="right-wrapper">

  <!-- LEFТ QUOTE (ДЕСКТОП) -->
  <div class="quote-desktop">
    <img src="/public/images/quotationMark.png" alt="">
  </div>

  <button class="arrow arrow-left" @click="prev">‹</button>

  <div class="right">

    <div class="user">
      <img :src="testimonials[index].img" />
      <div class="user-info">
        <h4>{{ testimonials[index].name }}</h4>
        <p class="role">{{ testimonials[index].role }}</p>
      </div>
    </div>

    <!-- MOBILE QUOTE -->
    <div class="quote-mobile">
      <img src="/public/images/quotationMark.png" alt="">
    </div>

    <p class="text">{{ testimonials[index].text }}</p>

    <div class="count">
      {{ String(index + 1).padStart(2, '0') }} /
      {{ String(testimonials.length).padStart(2, '0') }}
    </div>

  </div>

  <button class="arrow arrow-right" @click="next">›</button>

</div>




  </section>

</template>

<style scoped>
.testimonials {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: clamp(40px, 6vw, 80px);
  margin-top: clamp(20px, 6vw, 100px);
}

.left {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.title {
  margin: 0;
}

.title span {
  background: #eee9ff;
  padding: 0 8px;
}

.controls {
  display: flex;
  gap: 16px;
}

h4,
.role {
  margin: 0;
  line-height: 30px;
}

button {
  width: 48px !important;
  height: 48px !important;
  border-radius: 50%;
  border: 1.5px solid #d9d9d9;
  background: white;
  cursor: pointer;
  font-size: 20px;
  line-height: 0;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.25s;
  padding: 0;
}

button:focus {
  border-color: #6248ff;
}

button:hover {
  border-color: #6248FF;
}

.right {
  max-width: 520px;
  display: flex;
  flex-direction: column;
}

.user {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 12px;
}

.user img {
  width: 46px;
  height: 46px;
  border-radius: 50%;
}

.role {
  color: #6c6c6c;
  font-size: 16px;
}

.right-wrapper {
  display: flex;
  align-items: center;
  gap: 20px;
}

.quote-desktop img,
.quote-mobile img {
  width: 32px;
  height: 32px;
  object-fit: contain;
  opacity: 0.9;
  filter: drop-shadow(0px 0px 0px #6248FF);
}

.text {
  font-size: 24px;
  line-height: 26px;
}

.count {
  color: #6248FF;
  font-weight: 600;
  font-size: 14px;
}

.quote-mobile {
  display: none;
}

.quote-desktop {
  display: block;
}

.controls-left {
  display: flex;
}

.arrow {
  display: none;
}

@media (max-width: 900px) {
  .testimonials {
    flex-direction: column;
    align-items: stretch;
    text-align: left;
    gap: 40px;
  }

  .left {
    align-items: flex-start;
    text-align: left;
    width: 100%;
  }

  .title {
    text-align: left;
    width: 100%;
  }

  .controls-left {
    display: none;
  }

  .arrow {
    display: flex;
    flex-shrink: 0 !important;
  }

  .right-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    text-align: center;
  }

  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
  }

  .user {
    justify-content: center;
    flex-direction: column;
    order: 1;
  }

  .quote-desktop {
    display: none;
  }

  .quote-mobile {
    display: block;
    order: 2;
  }

  .text {
    order: 3;
    text-align: center;
    font-size: 20px;
    width: 100%;
  }

  .count {
    order: 4;
    text-align: center;
    width: 100%;
  }
}
@media (max-width: 400px) {
  .right-wrapper{
    align-items: flex-end;
  }
}

</style>
