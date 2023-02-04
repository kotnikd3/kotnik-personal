<template>
	<div>
		<!-- Navbar -->
		<section class="section">
			<div class="container">
				<div class="level">
					<div class="level-left">
						<div class="level-item">
							<div class="field has-addons social-icons">
								<span class="has-tooltip-arrow has-tooltip-bottom" data-tooltip="Github"><a href="https://github.com/kotnikd3"><font-awesome-icon :icon="['fab', 'github']" size='3x'/></a></span>
								<span class="has-tooltip-arrow has-tooltip-bottom" data-tooltip="Goodreads"><a href="https://www.goodreads.com/user/show/103410209-denis-kotnik"><font-awesome-icon :icon="['fab', 'goodreads']" size='3x'/></a></span>
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
						<h4 class="title is-4" v-text="about[selectedLang]"></h4>
						<p v-html="introduction[selectedLang]"></p>
					</div>
					<div class="column has-text-centered">
						<img src="./assets/denis_kotnik_2.jpeg" alt="Denis Kotnik">
					</div>
				</div>
			</div>
		</section>
		<!-- Content -->
		<section v-show="selectedLang == 'sl'" class="section">
			<div class="container">
				<h4 class="title is-4">Kazalo</h4>
				<div class="content">
					<ul>
						<li><a href="#opinions">O mnenjih in resnici</a></li>
						<li><a href="#philosophy">O potrebi po filozofiji</a></li>
						<li><a href="#capitalism">Filozof proti kapitalizmu</a></li>
						<li><a href="#postmodernism">O postmodernizmu</a></li>
						<li><a href="#selfDevelopment">O delu na sebi</a></li>
						<li><a href="#freeWill">O svobodni volji</a></li>
						<li><a href="#transfer">O transferju</a></li>
					</ul>
				</div>
			</div>
		</section>
		<!-- Opinions -->
		<section v-show="selectedLang == 'sl'" class="section" id="opinions">
			<div class="container">
				<h4 class="title is-4">O mnenjih in resnici</h4>
				<p v-html="opinions[selectedLang]"></p>
			</div>
		</section>
		<!-- Philosophy -->
		<section v-show="selectedLang == 'sl'" class="section" id="philosophy">
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
		</section>
		<!-- Capitalism -->
		<section v-show="selectedLang == 'sl'" class="section" id="capitalism">
			<div class="container">
				<h4 class="title is-4">Filozof proti kapitalizmu</h4>
				<p v-html="capitalism[selectedLang]"></p>
			</div>
		</section>
		<!-- Postmodernism -->
		<section v-show="selectedLang == 'sl'" class="section" id="postmodernism">
			<div class="container">
				<h4 class="title is-4">O postmodernizmu</h4>
				<p v-html="postmodernism[selectedLang]"></p>
			</div>
		</section>
		<!-- Self development -->
		<section v-show="selectedLang == 'sl'" class="section" id="selfDevelopment">
			<div class="container">
				<h4 class="title is-4">O delu na sebi</h4>
				<p v-html="selfDevelopment[selectedLang]"></p>
			</div>
		</section>
		<!-- Free will -->
		<section v-show="selectedLang == 'sl'" class="section" id="freeWill">
			<div class="container">
				<h4 class="title is-4">O svobodni volji</h4>
				<p v-html="freeWill[selectedLang]"></p>
			</div>
		</section>
		<!-- Transfer -->
		<section v-show="selectedLang == 'sl'" class="section" id="transfer">
			<div class="container">
				<h4 class="title is-4">O transferju</h4>
				<p v-html="transfer[selectedLang]"></p>
			</div>
		</section>
		<!-- Footer -->
		<footer class="footer">
			<div class="container has-text-centered">
				<p class="has-text-grey">Denis Kotnik <font-awesome-icon :icon="['far', 'copyright']" flip="horizontal"/> 2023</p>
			</div>
		</footer>
	</div>
</template>

<script>
import { translations } from './Translations.js';

export default {
	name: 'App',
	data() {
		// Merge two dictionaries: Object.assign({}, a, b);
		return Object.assign({}, translations, {
			selectedLang: 'sl',  // sl, en, nl
		});
	}
}
</script>