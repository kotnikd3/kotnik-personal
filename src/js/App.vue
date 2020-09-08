<template>
	<div>
		<section class="section">
			<div class="container">
				<div class="columns">
					<div class="column">
						<section class="section zero-top-padding">
							<div class="level">
								<div class="level-left">
									<div class="level-item">
										<div class="field has-addons social-icons">
											<span class="has-tooltip-arrow has-tooltip-bottom" data-tooltip="Github"><a class="color-bluee" href="https://github.com/kotnikd3"><i class="fab fa-github fa-3x"></i></a></span>
											<span class="has-tooltip-arrow has-tooltip-bottom" data-tooltip="Goodreads"><a href="https://www.goodreads.com/user/show/103410209-denis-kotnik"><i class="fab fa-goodreads fa-3x"></i></a></span>
											<!-- <span v-show="selectedLang == 'sl'" class="has-tooltip-arrow has-tooltip-bottom" :data-tooltip="'Curriculum Vitae (' + selectedLang + ')'"><a :href="cvSl"><i class="far fa-address-card fa-3x"></i></a></span> -->
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
						</section>
						
						<section class="section">
							<div class="container">
								<h1 class="title">Denis Kotnik</h1>
								<h2 class="subtitle" v-text="about[selectedLang]"></h2>
								<p v-html="introduction[selectedLang]"></p>
								<br>
								<p v-html="authors[selectedLang]"></p>
								<br>
								<p v-html="idea[selectedLang]"></p>
								<br>
								<p v-html="why[selectedLang]"></p>
							</div>
						</section>
				 	</div>
				 	<div class="column">
						<img :src="imageDenis" alt="Denis Kotnik">
					</div>
				</div>
			</div>
		</section>
		<!-- Noga. -->
		<footer class="footer">
			<div class="container">
				<div class="content has-text-centered">
					<p class="has-text-grey">Denis Kotnik<span class="icon"><i class="far fa-copyright fa-flip-horizontal"></i></span>2020</p>
				</div>
			</div>
		</footer>
	</div>
</template>

<script>
import { translations } from './Translations.js';

export default {
  data() {
	  // Merge two dictionaries: Object.assign({}, a, b);ad
	  return Object.assign({}, translations, {
		  selectedLang: 'sl',
		  imageDenis: require('../images/me_bw.jpg'),
		  cvSl: require('../Latex_CV/CV_Denis_Kotnik.pdf')
	  });
  },
  methods: {
	toggleClass(lang) {
	  this.selectedLang = lang;
	}
  }
}
</script>