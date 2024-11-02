<template>
    <div>
        <!-- Introduction -->
        <section class="section is-medium">
            <div class="container">
                <div class="columns">
                    <div class="column">
                        <h4 class="title is-4" v-text="about[selectedLang]"></h4>
                        <p v-html="introduction[selectedLang]"></p>
                    </div>
                    <div class="column has-text-centered">
                        <img src="./assets/denis_kotnik.jpg" alt="Denis Kotnik" />
                    </div>
                </div>
            </div>
        </section>
        <!-- <section v-show="selectedLang == 'sl'" class="section">
            <div class="container">
                <h4 class="title is-4">Kazalo</h4>
                <div class="content">
                    <ul>
                        <li><a href="#mnenja">O mnenjih in resnici</a></li>
                        <li><a href="#filozofija">O potrebi po filozofiji</a></li>
                        <li><a href="#kapitalizem">Filozof proti kapitalizmu</a></li>
                        <li><a href="#postmodernizem">O postmodernizmu</a></li>
                        <li><a href="#delo">O delu na sebi</a></li>
                        <li><a href="#svoboda">O svobodni volji</a></li>
                        <li><a href="#transfer">O transferju</a></li>
                        <li><a href="#identiteta">O (ne)identiteti človeka</a></li>
                        <li><a href="#drugi">O odgovornosti do Drugega</a></li>
                        <li><a href="#narcisizem">O narcisizmu</a></li>
                    </ul>
                </div>
            </div>
        </section> -->
        <!-- Opinions -->
        <!-- <section v-show="selectedLang == 'sl'" class="section" id="mnenja">
            <div class="container">
                <h4 class="title is-4">O mnenjih in resnici</h4>
                <p v-html="opinions[selectedLang]"></p>
            </div>
        </section> -->
        <!-- Philosophy -->
        <!-- <section v-show="selectedLang == 'sl'" class="section" id="filozofija">
            <div class="container">
                <h4 class="title is-4">O potrebi po filozofiji</h4>
                <div class="columns">
                    <div class="column is-two-thirds">
                        <p v-html="philosophy[selectedLang]"></p>
                    </div>
                    <div class="column has-text-centered">
                        <img src="./assets/philosophy.jpg" alt="philosophy">
                    </div>
                </div>
            </div>
        </section> -->
        <!-- Capitalism -->
        <!-- <section v-show="selectedLang == 'sl'" class="section" id="kapitalizem">
                <div class="container">
                    <h4 class="title is-4">Filozof proti kapitalizmu</h4>
                    <p v-html="capitalism[selectedLang]"></p>
                </div>
            </section> -->
        <!-- Postmodernism -->
        <!-- <section v-show="selectedLang == 'sl'" class="section" id="postmodernizem">
                <div class="container">
                    <h4 class="title is-4">O postmodernizmu</h4>
                    <p v-html="postmodernism[selectedLang]"></p>
                </div>
            </section> -->
        <!-- Self development -->
        <!-- <section v-show="selectedLang == 'sl'" class="section" id="delo">
                <div class="container">
                    <h4 class="title is-4">O delu na sebi</h4>
                    <p v-html="selfDevelopment[selectedLang]"></p>
                </div>
            </section> -->
        <!-- Free will -->
        <!-- <section v-show="selectedLang == 'sl'" class="section" id="svoboda">
                <div class="container">
                    <h4 class="title is-4">O svobodni volji</h4>
                    <p v-html="freeWill[selectedLang]"></p>
                </div>
            </section> -->
        <!-- Transfer -->
        <!-- <section v-show="selectedLang == 'sl'" class="section" id="transfer">
                <div class="container">
                    <h4 class="title is-4">O transferju</h4>
                    <p v-html="transfer[selectedLang]"></p>
                </div>
            </section> -->
        <!-- Identity -->
        <!-- <section v-show="selectedLang == 'sl'" class="section" id="identiteta">
                <div class="container">
                    <h4 class="title is-4">O (ne)identiteti človeka</h4>
                    <p v-html="identity[selectedLang]"></p>
                </div>
            </section> -->
        <!-- Other -->
        <!-- <section v-show="selectedLang == 'sl'" class="section" id="drugi">
                <div class="container">
                    <h4 class="title is-4">O odgovornosti do Drugega</h4>
                    <p v-html="other[selectedLang]"></p>
                </div>
            </section> -->
        <!-- Narcissism -->
        <!-- <section v-show="selectedLang == 'sl'" class="section" id="narcisizem">
                <div class="container">
                    <h4 class="title is-4">O narcisizmu</h4>
                    <p v-html="narcissism[selectedLang]"></p>
                </div>
            </section> -->
        <!-- Footer -->
        <footer class="footer">
            <div class="container has-text-centered">
                <p class="has-text-grey">Denis Kotnik <font-awesome-icon icon="fa-regular fa-copyright" /> 2025</p>
            </div>
        </footer>
    </div>
</template>

<script>
import { translations } from './Translations.js'

export default {
    name: 'App',
    data() {
        // Merge two dictionaries: Object.assign({}, a, b);
        return Object.assign({}, translations, {
            selectedLang: 'sl', // sl, en, nl
        })
    },
}
</script>
