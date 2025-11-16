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
      <span class="copyright">Copyright 2020, All Right Reserved</span>

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
  background: white;
  border-top: 1px solid #ececec;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  gap: 80px;
  margin-bottom: 40px;
}

.col-fixed {
  flex: 0 0 150px;
}

.col-grow {
  flex: 1 1 0;
}

.col h4 {
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  margin-bottom: 26px;
}

.col p {
  font-size: 16px;
  line-height: 27px;
  margin: 0;
}

.menu {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.menu a {
  font-size: 14px;
  color: #444;
  text-decoration: none;
  white-space: nowrap;
}

.menu a:hover {
  color: #6f4bff;
}

.footer-bottom {
  padding-top: 22px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  font-size: 13px;
  color: #555;
  padding-bottom: clamp(20px, 5vw, 60px);
}

.footer-bottom a:hover {
  color: #6f4bff;
}

.copyright,
.links a {
  font-size: 16px;
  font-weight: 400;
  font-family: Montserrat, sans-serif;
  line-height: 27px;
  color: #828282;
}

.links {
  display: flex;
  gap: 16px;
}

@media (max-width: 900px) {
  .footer-top {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 54px;
  }

  .footer-top > .col:nth-child(1) {
    order: 1;
    padding: 30px 0;
  }

  .footer-top > .col:nth-child(4) {
    order: 2;
  }

  .footer-top > .col:nth-child(2) {
    order: 3;
  }

  .footer-top > .col:nth-child(3) {
    order: 4;
  }

  .menu {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 24px;
  }

  .col p {
    max-width: 540px;
    margin: 0 auto;
  }

  .footer-bottom {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 12px;
  }

  .links {
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
}

@media (max-width: 400px) {
  .footer-top {
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    gap: 24px;
  }

  .footer-top > .col:nth-child(1) {
    order: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .footer-top > .col:nth-child(4) {
    order: 2;
    width: 100%;
    padding-bottom: 20px;
  }

  .menu {
    flex-direction: column;
    gap: 18px;
  }

  .menu a {
    white-space: nowrap;
  }

  .footer-top > .col:nth-child(2) {
    order: 3;
  }

  .footer-top > .col:nth-child(3) {
    order: 4;
  }

  .col p {
    max-width: 310px;
    margin: 0 auto;
    font-size: 15px;
    line-height: 24px;
  }

  .footer-bottom {
    margin-top: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
    text-align: center;
    padding-top: 0;
  }

  .links {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
}
</style>
