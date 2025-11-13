<script lang="ts" setup>
</script>

<template>
  <section class="trading-intro">
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
  justify-content: space-between;
  background-color: #e8e4f7;
  padding: 60px 120px;
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

.image-container {
  flex: 1 1 400px;
  text-align: right;
}

.image-container img {
  width: 100%;
  max-width: 482px;
  height: auto;
}

/*728px*/
@media (max-width: 768px) {
  .trading-intro {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 50px 40px;
    gap: 32px;
  }

  .text {
    max-width: 100%;
  }

  .image-container {
    text-align: center;
  }

  .image-container img {
    max-width: 418px;
  }
}

/*320px*/
@media (max-width: 320px) {
  .trading-intro {
    padding: 40px 24px;
    gap: 24px;
  }

  h1 {
    font-size: 40px;
    line-height: 44px;
    text-align: left;
  }

  p {
    font-size: 15px;
    line-height: 24px;
    text-align: left;
  }

  button {
    padding: 16px 48px;
    font-size: 14px;
  }

  .image-container img {
    max-width: 260px;
  }
}
</style>
