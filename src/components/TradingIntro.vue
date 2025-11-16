<script lang="ts" setup>
</script>

<template>
  <section class="violet trading-intro">
    <div class="text">
      <h1>Trade everywhere.<br />Invest here!</h1>
      <p>
        We provide only the best trading software. The trading terminalMetaTrader4 is the most popular and convenient platform for access to global exchanges. You can work anywhere.
      </p>
      <button>START TRADING</button>
    </div>

    <div class="image-container">
      <img src="/images/tradingIntro.png" alt="Trading Intro Image" />
    </div>
  </section>
</template>

<style scoped>
.trading-intro {
  display: flex;
  align-items: center;
  gap: 40px;
}
h1 {
    flex: 1 1 585px;
    max-width: 585px;
}
p {
  flex: 1 1 483px;
  max-width: 483px;
}

.image-container img {
  width: 100%;
  max-width: 600px; /* можешь поставить больше */
  height: auto;
}

@media (max-width: 900px) {
  .trading-intro {
    text-align: center;
    gap: 32px;
    flex-direction: column;
  }

  .text {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1, p {
    flex: none;
    max-width: 100%;
  }

  .image-container {
    text-align: center;
  }

  .image-container img {
    max-width: 418px;
  }
}


@media (max-width: 400px) {
  .trading-intro {
    gap: 24px;
  }

  h1 {
    font-size: 40px;
    line-height: 44px;
    text-align: left;
  }

  p {
    text-align: left;
  }

  .image-container img {
    max-width: 260px;
  }
}
</style>
