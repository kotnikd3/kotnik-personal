<template>
	<div>
		<!-- Navbar -->
		<section class="section">
			<div class="container">
				<div class="level">
					<div class="level-left">
						<div class="level-item">
							<div class="field has-addons social-icons">
								<span class="has-tooltip-arrow has-tooltip-bottom" data-tooltip="Github"><a class="color-bluee" href="https://github.com/kotnikd3"><font-awesome-icon :icon="['fab', 'github']" size='3x'/></a></span>
								<span class="has-tooltip-arrow has-tooltip-bottom" data-tooltip="Goodreads"><a href="https://www.goodreads.com/user/show/103410209-denis-kotnik"><font-awesome-icon :icon="['fab', 'goodreads']" size='3x'/></a></span>
							</div>
						</div>
					</div>
					<div class="level-right">
						<div class="level-item">
							<div class="field has-addons">
								<p class="control">
									<button @click="toggleClass('sl')" :class="['button', { 'is-link' : selectedLang == 'sl' }]">SL</button>
								</p>
								<p class="control">
									<button @click="toggleClass('en')" :class="['button', { 'is-link' : selectedLang == 'en' }]">EN</button>
								</p>
								<p class="control">
									<button @click="toggleClass('nl')" :class="['button', { 'is-link' : selectedLang == 'nl' }]">NL</button>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- Introduction -->
		<section class="section">
			<div class="container">
				<div class="columns is-vcentered">
					<div class="column">
						<h1 class="title">Denis Kotnik</h1>
						<h2 class="subtitle" v-text="about[selectedLang]"></h2>
						<p v-html="introduction[selectedLang]"></p>
				 	</div>
				 	<div class="column has-text-centered">
						<img :src="imageDenis" alt="Denis Kotnik">
					</div>
				</div>
			</div>
		</section>
		<!-- Opinions -->
		<section v-show="selectedLang == 'sl'" class="section">
			<div class="container">
				<h1 class="title is-4">O mnenjih in resnici</h1>
				<p v-html="opinions[selectedLang]"></p>
			</div>
		</section>
		<!-- Philosophy -->
		<section v-show="selectedLang == 'sl'" class="section">
			<div class="container">
				<h1 class="title is-4">O potrebi po filozofiji</h1>
				<div class="columns">
					<div class="column is-two-thirds">
						<p v-html="philosophy[selectedLang]"></p>
					</div>
					<div class="column has-text-centered">
						<img :src="imagePhilosophy" alt="philosophy">
					</div>
				</div>
			</div>
		</section>
		<!-- Capitalism -->
		<section v-show="selectedLang == 'sl'" class="section">
			<div class="container">
				<h1 class="title is-4">Filozof proti kapitalizmu</h1>
				<p v-html="capitalism[selectedLang]"></p>
			</div>
		</section>
		<!-- Postmodernism -->
		<section v-show="selectedLang == 'sl'" class="section">
			<div class="container">
				<h1 class="title is-4">O postmodernizmu</h1>
				<p v-html="postmodernism[selectedLang]"></p>
			</div>
		</section>
		<!-- Footer -->
		<footer class="footer">
			<div class="container has-text-centered">
				<p class="has-text-grey">Denis Kotnik <font-awesome-icon :icon="['far', 'copyright']" flip="horizontal"/> 2021</p>
			</div>
		</footer>
	</div>
</template>

<script>
import { translations } from './Translations.js';
import imageDenis from './assets/denis_kotnik.jpg';
import imagePhilosophy from './assets/philosophy.jpg';

export default {
	name: 'App',
	data() {
		// Merge two dictionaries: Object.assign({}, a, b);
		return Object.assign({}, translations, {
			selectedLang: 'sl',
			imageDenis: imageDenis,
			imagePhilosophy: imagePhilosophy
		});
	},
	methods: {
		toggleClass(lang) {
			this.selectedLang = lang;
		}
	}
}
</script>