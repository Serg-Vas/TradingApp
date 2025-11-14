<script setup lang="ts">
</script>

<template>
  <footer class="footer">
    <div class="footer-top">

      <div class="col">
        <div class="logo">LOGO</div>
      </div>

      <div class="col">
        <h4>Information and high risk warning:</h4>
        <p>
          Trading with foreign exchange (FX), contract for differences (CFDs)
          and precious metals carries a high level of risk that may not be
          suitable for all investors. Leverage creates additional risk and loss
          exposure. Before you decide to trade foreign exchange or contract for
          differences, carefully consider your investment objectives, experience
          level, and risk tolerance.
        </p>
      </div>

      <div class="col">
        <h4>Legal disclaimer:</h4>
        <p>
          Forex trading entails significant risks and is not appropriate for all
          investors. The possibility of incurring substantial losses should be
          taken into account. It is therefore important to understand the
          possible consequences of investing. Traders should weigh their earning
          potential against the risks involved and act accordingly. Interactive
          Trade Ltd operating under brand and using domainLink domain within the
          European Economic Area.
        </p>
      </div>

      <div class="col menu">
        <a href="#">About us</a>
        <a href="#">Instructions</a>
        <a href="#">Platforms</a>
        <a href="#">Contact Us</a>
        <a href="#">Sign in</a>
        <a href="#">Sign up for free</a>
      </div>
    </div>

    <div class="footer-bottom">
      <span>Copyright 2020, All Right Reserved</span>

      <div class="links">
        <a href="#">Terms and Conditions</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Risk Warnings</a>
        <a href="#">Anti-Money Laundering</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 60px 0 40px;
  background: #ffffff;
  color: #333;
  border-top: 1px solid #ececec;
}

.footer-top {
  display: grid;
  grid-template-columns: 150px 1fr 1fr 150px;
  gap: 40px;
  align-items: flex-start;
  margin-bottom: 50px;
}

.logo {
  font-size: 20px;
  font-weight: 700;
}

.col h4 {
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 10px;
}

.col p {
  font-size: 14px;
  line-height: 1.55;
  color: #555;
  margin-bottom: 0;
}

.menu {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.menu a {
  font-size: 14px;
  color: #444;
  text-decoration: none;
}
.menu a:hover {
  color: #6f4bff;
}

.footer-bottom {
  border-top: 1px solid #eee;
  padding-top: 22px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  font-size: 13px;
  color: #555;
}

.footer-bottom a {
  color: #444;
  text-decoration: none;
  margin-left: 18px;
}
.footer-bottom a:hover {
  color: #6f4bff;
}

@media (max-width: 1100px) {
  .footer-top {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 750px) {
  .footer-top {
    grid-template-columns: 1fr;
  }
  .menu {
    margin-top: 10px;
  }
}
</style>
