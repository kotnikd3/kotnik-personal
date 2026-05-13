<template>
    <div>
        <!-- Tabs: language buttons -->
         <div class="section">
            <div class="container">
                <!-- Main container -->
                <nav class="level">
                    <!-- Left side -->
                    <div class="level-left">
                        <div class="level-item">
                            <a href="https://github.com/kotnikd3" target="_blank" rel="noopener noreferrer" style="margin-right: 30px; display: inline-flex; flex-direction: column; align-items: center;">
                                <font-awesome-icon :icon="['fab', 'github']" size='3x'/>
                                <span style="margin-top: 5px;">GitHub</span>
                            </a>
                            <a :href="selectedLang === 'sl' ? 'https://www.psihoterapija-kotnik.si/' : 'https://www.psychotherapy-kotnik.com/'" target="_blank" rel="noopener noreferrer" style="display: inline-flex; flex-direction: column; align-items: center;">
                                <font-awesome-icon :icon="['fa', 'couch']" size='3x'/>
                                <span style="margin-top: 5px;" v-text="selectedLang === 'sl' ? 'Psihoterapija Kotnik' : 'Psychotherapy Kotnik'"></span>
                            </a>
                        </div>
                    </div>
                    <!-- Right side -->
                    <div class="level-right">
                        <div class="level-item">
                            <div class="buttons has-addons is-right">
                                <button @click="selectedLang = 'sl'" :class="['button', { 'is-ghost': selectedLang === 'sl' }]">SL</button>
                                <button @click="selectedLang = 'en'" :class="['button', { 'is-ghost': selectedLang === 'en' }]">EN</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
        <!-- Introduction -->
        <section class="section">
            <div class="container">
                <div class="columns is-vcentered">
                    <div class="column is-golden-main">
                        <h1 class="title is-4" v-text="t('about')"></h1>
                        <p v-html="t('introduction')"></p>
                    </div>
                    <div class="column is-golden-side has-text-centered">
                        <img src="./assets/denis_kotnik.webp" alt="Denis Kotnik" style="width: 70%;"/>
                    </div>
                </div>
            </div>
        </section>
        <!-- Footer -->
        <footer class="footer">
            <div class="container has-text-centered">
                <p class="has-text-grey">Denis Kotnik <font-awesome-icon icon="fa-regular fa-copyright"/> 2026</p>
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
