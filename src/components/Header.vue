<script lang="ts" setup>
import { ref } from 'vue';
import '../styles/langDialog.css';

const currentLang = ref("EN");
const langRef = ref<HTMLDialogElement | null>(null);
const isOpen = ref(false);

function toggleLang() {
  if (!langRef.value) 
  return;

  if (isOpen.value) {
    langRef.value.close();
    isOpen.value = false;
  } else {
    langRef.value.show();
    isOpen.value = true;
  }
}

function selectLang(lang: string) {
  currentLang.value = lang;

  langRef.value?.close();
  isOpen.value = false;
}
</script>

<template>
    <header>
        <div class="left-side">
            <div class="logo">LOGO</div>

            <nav class="navigation">
                <ul>
                    <li><a href="#">How it works</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Instructions</a></li>
                    <li><a href="#">Accounts</a></li>
                    <li><a href="#">Platforms</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </div>

        <div class="actions">
            <div class="lang-container">
                <div class="lang" @click="toggleLang()">
                    {{ currentLang }}
                    <span class="arrow">&#709;</span>
                </div>
                <dialog ref="langRef" class="lang-dialog">
                    <button class="lang-option" @click="selectLang('EN')">EN</button>
                    <button class="lang-option" @click="selectLang('UA')">UA</button>
                </dialog>
            </div>
            <button class="sign-btn">SIGN IN FOR FREE</button>
            <div class="hamburger">&#9776;</div>
        </div>
    </header>
</template>

<style scoped>
.logo {
    font-weight: 700;
    font-size: 15px;
    font-family: "Museo Sans Cyrl", sans-serif;
    line-height: 16px;
}

header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    padding: 0 120px;
    background-color: #fff;
    box-sizing: border-box;
    padding-inline: clamp(20px, 4vw, 120px);
}

.left-side {
    display: flex;
    align-items: center;
    gap: 48px;
}

.navigation ul {
    display: flex;
    align-items: center;
    gap: 32px;
    margin: 0;
    padding: 0;
}

.navigation a {
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
    line-height: 16px;
    font-weight: 600;
    color: #333;
    text-decoration: none;
    white-space: nowrap;
}

.actions {
    display: flex;
    align-items: center;
    gap: 32px;
}

.lang {
    font-size: 15px;
    font-weight: 600;
    line-height: 16px;
    border: 1px solid #333;
    border-radius: 40px;
    padding: 10px 16px;
    font-family: "Museo Sans Cyrl", sans-serif;
    display: flex;
    align-items: center;
    gap: 10px;
}

.hamburger {
    display: none;
    font-size: 28px;
    cursor: pointer;
}

.sign-btn {
    padding: 13px 24px;
    font-size: 14px;
}

@media (max-width: 768px) {
    header {
        padding: 0 40px;
    }

    .navigation {
        display: none;
    }

    .lang {
        display: none;
    }

    .hamburger {
        display: block;
    }

    .left-side {
        gap: 0;
    }

    .actions {
        gap: 24px;
    }
}

@media (max-width: 320px) {
    header {
        padding: 0 20px;
    }

    .sign-btn {
        display: none;
    }

    .hamburger {
        font-size: 24px;
    }

    .logo {
        font-size: 14px;
    }
}
</style>
