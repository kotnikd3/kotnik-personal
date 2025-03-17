<template>
    <div>
        <!-- Tabs: language buttons -->
         <div class="section">
            <div class="buttons has-addons is-right">
                <button @click="selectedLang = 'sl'" :class="['button', { 'is-ghost': selectedLang === 'sl' }]">SL</button>
                <button @click="selectedLang = 'en'" :class="['button', { 'is-ghost': selectedLang === 'en' }]">EN</button>
            </div>
        </div>
        <!-- Introduction -->
        <section class="section">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <h4 class="title is-4" v-text="t('about')"></h4>
                        <p v-html="t('introduction')"></p>
                    </div>
                    <div class="column has-text-centered">
                        <img src="./assets/denis_kotnik.webp" alt="Denis Kotnik" />
                    </div>
                </div>
            </div>
        </section>
        <!-- Footer -->
        <footer class="footer">
            <div class="container has-text-centered">
                <p class="has-text-grey">Denis Kotnik <font-awesome-icon icon="fa-regular fa-copyright" /> 2025</p>
            </div>
        </footer>
    </div>
</template>

<script>
import { useI18n } from 'vue-i18n';

export default {
    name: 'App',
    setup() {
        const { t, locale } = useI18n()
        return { t, locale }
    },
    computed: {
        selectedLang: {
            get() {
                return this.locale;
            },
            set(lang) {
                this.locale = lang;
            }
        }
    }
}
</script>
