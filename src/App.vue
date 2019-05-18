<template>
  <div>
	<!--Jumbotron-->
	<div class="jumbotron text-center">
	  <div class="container">
		<div class="row align-items-center first-row">
		  <div class="offset-md-3 col-md-6">
			<h1 class="display-3">Denis Kotnik</h1>
		  </div>
		  <div class="col-md-3 buttons">
			<a @click="toggleClass('slo')" href="#" onclick="return false;" :class="['list-group-item', { 'list-group-item-info': selectedLang=='slo' }]">Slovenščina (SLO)</a>
			<a @click="toggleClass('en')" href="#" onclick="return false;" :class="['list-group-item', { 'list-group-item-info': selectedLang=='en' }]">English (UK)</a>
		  </div>
		</div>
		<div class="row second-row">
			<div class="col">
				<h3 v-text="welcome[selectedLang]"></h3>
			</div>
		</div>
		<div class="row">
			<div class="col">
				<ul @mouseleave="mouseOut" class="list-inline social-icons">
					<li class="list-inline-item">
						<a @mouseover="mouseOver('denis.kotnik@gmail.com')" href="mailto:denis.kotnik@gmail.com"><i class="fas fa-envelope fa-3x"></i></a>
					</li>
					<li class="list-inline-item">
						<a @mouseover="mouseOver(socialCvText[selectedLang])" :href="socialCvHref[selectedLang]"><i class="far fa-address-card fa-3x"></i></a>
					</li>
					<li class="list-inline-item">
						<a @mouseover="mouseOver('Github')" href="https://github.com/kotnikd3"><i class="fab fa-github fa-3x"></i></a>
					</li> 
					<!-- <li class="list-inline-item">
						<a @mouseover="mouseOver('Facebook')" href="https://www.facebook.com/kotnikd3"><i class="fab fa-facebook-square fa-3x"></i></a>
					</li> -->
				</ul>
				<p v-text="socialText" :class="['color-blue', {'visible': socialTextShow, 'invisible': !socialTextShow}]"></p>
			</div>
		</div>
	  </div>
	</div>
	<!--Content-->	
	<div class="container">
	  <div class="row align-items-center">
		<div class="col-md-6">
		  <p v-text="name[selectedLang]"></p>
		  <p v-html="born[selectedLang].replace('_XX_', yearsDenis)"></p>
		  <p v-html="graduation[selectedLang]"></p>
		  <p v-text="hobi[selectedLang]"></p>
		</div>
		<div class="col-md-6">
		  <div class="image-wrapper" >
			  <img class="rounded img-fluid mx-auto d-block" :src="imageDenis" alt="Denis Kotnik">
		  </div>
		</div>
	  </div>
	</div>
	<!--Footer-->
	<div class="container">
		<div class="row text-center footer">
			<div class="col">
				<p class="text-muted small">Denis Kotnik <i class="far fa-copyright"></i> 2019</p>
			</div>
		</div>
	</div>
  </div>
</template>

<script>
export default {
  mounted: function(){
	// When instance has been mounted, get anchor tag from URL and optionally set language.
	var anchor = location.hash.replace('#','');
	if(this.supportedLang.includes(anchor)) {
	  this.selectedLang = anchor;
	}
  },
  data() {
	return {
	  supportedLang: ['slo', 'en'],
	  selectedLang: 'slo',
	  birthDenis: new Date('April 13, 91 00:00:00'),
	  imageDenis: require('./assets/me_mangart.jpg'),

	  socialTextShow: false,
	  socialText: "if you read this, you are a hacker?!",
	  socialCvHref: {'slo' : require('./Latex_CV/CV_Denis_Kotnik.pdf'), 'en' : '#'},
	  socialCvText: {'slo' : 'Curriculum Vitae (SLO)', 'en' : 'Curriculum Vitae (EN) - work in progress'},

	  welcome: {'slo' : 'Dobrodošli na moji osebni spletni strani', 'en' : 'Welcome to my personal website'},
	  name: {'slo' : 'Moje ime je Denis Kotnik.', 'en' : 'My name is Denis Kotnik.'},
	  born: {'slo' : 'Rojen sem aprila 1991 v Novem mestu, tako da sem danes star _XX_ let. Živim v Ljubljani in na vasi <a href="https://sl.wikipedia.org/wiki/Jezero,_Trebnje">Jezero</a>, ki se nahaja v bližini Trebnjega.', 'en' : 'I was born in Novo mesto on april 1991, what makes me _XX_ years old. I\'m living in Ljubljana and <a href="https://sl.wikipedia.org/wiki/Jezero,_Trebnje">Jezero</a>, a village near town Trebnje.'},
	  graduation: {'slo' : '<a href="https://repozitorij.uni-lj.si/IzpisGradiva.php?id=68903&lang=slv">Diplomiral</a> in <a href="https://repozitorij.uni-lj.si/IzpisGradiva.php?id=100897&lang=slv">magistriral</a> sem s področja umetne inteligence oz. strojnega učenja na <a href="http://www.fri.uni-lj.si/sl">Fakulteti za računalništvo in informatiko</a> v Ljubljani, zaposlen pa sem v podjetju <a href="http://www.cgs-labs.com/">CGS Labs</a>.', en : 'I graduated with my <a href="https://repozitorij.uni-lj.si/IzpisGradiva.php?id=68903&lang=slv">bachelor</a> and <a href="https://repozitorij.uni-lj.si/IzpisGradiva.php?id=100897&lang=slv">master</a> degree in artificial intelligence/machine learning from University of Ljubljana, <a href="http://www.fri.uni-lj.si/en">Faculty of Computer and Information Science</a>. I\'m employed as software developer at the company <a href="http://www.cgs-labs.com/">CGS Labs</a>.'},
	  hobi: {'slo' : 'Zanimajo me tudi filozofija, psihoterapija in borilne veščine (tajski boks in Wing Chun), igram na kitaro, pojem (v zboru), hodim v hribe, včasih pa napišem tudi kakšno poezijo.', 'en' : 'I\'m also interested in philosophy, psychotherapy and martial arts (Muay Thai and Wing Chun), (choral) singing, guitar playing, mountain hiking and occasionally writing poetry.'}
	}
  },
  methods: {
	toggleClass(lang) {
	  this.selectedLang = lang;
	},
	mouseOver(socialText) {
	  this.socialText = socialText;
	  this.socialTextShow = true;
	},
	mouseOut() {
	  this.socialTextShow = false;
	}
  },
  computed: {
	yearsDenis () {
	  return new Date(Date.now() -  this.birthDenis).getFullYear() - 1970;
	}
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Varela+Round');
/* @import url('https://fonts.googleapis.com/css?family=Roboto'); */

#app {
    font-family: 'Varela Round', Helvetica, Arial, sans-serif;
    /* font-family: 'Roboto', sans-serif; */
}


  .first-row, .second-row {
	  margin-bottom: 20px;
  }
  body {
	font-size: 25px;
	color: #2c3e50;
  }
  .footer {
	  margin: 50px 0 20px 0; /* top right bottom left*/
  }
  .footer p {
	  margin: 0;
  }
  a, .color-blue {
	color: #337ab7;
  }
  .list-group-item-info {
	  color: #31708f;
	  background-color: #d9edf7;
  }
  .invisible {
	visibility: hidden;
  }
  .visible {
	visibility: visible;
  }
  .jumbotron {
	padding-bottom: 0px;
	background:transparent !important;
  }
  .buttons {
	font-size: small;
  }
  @media(min-width:768px) {
	.social-icons > li {
	  padding-right: 40px;
	  padding-left: 40px;
	}
  }
</style>
