<template>
  <div>
    <div style="background:transparent !important" class="jumbotron text-center">
      <div class="container">
        <div class="row align-items-center">
          <div class="offset-md-3 col-md-6">
            <h1 class="display-3">Denis Kotnik</h1>
          </div>
          <div class="col-md-3 buttons">
            <a @click="toggleClass('slo')" href="#" onclick="return false;" :class="['list-group-item', { 'list-group-item-info': selectedLang=='slo' }]">Slovenščina (SLO)</a>
            <a @click="toggleClass('en')" href="#" onclick="return false;" :class="['list-group-item', { 'list-group-item-info': selectedLang=='en' }]">English (UK)</a>
          </div>
        </div>
      </div>
      <p v-text="welcome[selectedLang]"></p>
      <br>
      <div>
        <ul @mouseleave="mouseOut" class="list-inline social-icons">
          <li class="list-inline-item">
              <a @mouseover="mouseOver(socialMail)" href="mailto:denis.kotnik@gmail.com"><i class="fas fa-envelope fa-3x"></i></a>
          </li>
          <li class="list-inline-item">
            <a @mouseover="mouseOver(socialCvText[selectedLang])" :href="socialCvHref[selectedLang]"><i class="far fa-address-card fa-3x"></i></a>
          </li>
          <li class="list-inline-item">
            <a @mouseover="mouseOver(socialGithub)" href="https://github.com/kotnikd3"><i class="fab fa-github fa-3x"></i></a>
          </li> 
          <li class="list-inline-item">
            <a @mouseover="mouseOver(socialFacebook)" href="https://www.facebook.com/kotnikd3"><i class="fab fa-facebook-square fa-3x"></i></a>
          </li>
        </ul>
        <p v-text="socialText" :class="['color-blue', {'visible': socialTextShow, 'invisible': !socialTextShow}]"></p>
      </div>
    </div>
      
    <div class="container">
      <div class="row">
          <div class="col-md-12">
            <h1 v-text="about[selectedLang]"></h1>
          </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <p v-text="name[selectedLang]"></p>
          <p v-html="born[selectedLang].replace('_XX_', yearsDenis)"></p>
          <p v-html="graduation[selectedLang]"></p>
          <p v-text="hobi[selectedLang]"></p>
        </div>
        <div class="col-md-6">
          <div class="image-wrapper" >
              <img class="rounded img-fluid mx-auto d-block" :src="imageDenis" alt="">
          </div>
        </div>
      </div>
      <div class="row">
          <div class="col-md-12">
            <h1 v-text="proffesional[selectedLang]"></h1>
          </div>
      </div>
      <div class="row">
        <div class="col-md-6">
            <p v-html="cgs[selectedLang]"></p>
            <p v-text="prog_languages[selectedLang]"></p>
            <p v-text="rws[selectedLang]"></p>
        </div>
        <div class="col-md-6">
              <ul>
                <li v-text="linux[selectedLang]"></li>
                <li>Microsoft Certified Professional, Microsoft Exam 483: Programming in C#, 2017</li>
                <li v-text="famnit[selectedLang]"></li>
                <li>OTT <span v-text="certificate[selectedLang]"></span>, 2014</li>
                <li>Comtrade d.o.o., <span v-text="comtrade[selectedLang]"></span> Bodi smart, bodi eko, 2013</li>
                <li>CISCO CCNA Exploration: Network Fundamentals, 2010</li>
                <li v-text="admin_rozna[selectedLang]"></li>
                <li>
                  Coursera <span v-text="courses[selectedLang]"></span>
                  <ul>
                    <li>Front-End Web UI Frameworks and Tools, 2017</li>
                    <li>Introduction to Game Development, 2015
                      <ul>
                        <li>Unity 3D <span v-text="project[selectedLang]"></span>: <a href="https://www.youtube.com/watch?v=UZjLVe7J1jM">YouTube</a></li>
                        <li>WebGL <span v-text="project[selectedLang]"></span>: <a href="http://www.kotnik.si/broadside_pirates_webgl/"><span v-text="game[selectedLang]"></span></a></li>
                      </ul>
                    </li>
                    <li>Machine Learning, 2014</li>
                    <li>Learning How to Learn, 2013</li>
                    <li>Introduction to music production, 2013</li>
                    <li>An Introduction to Interactive Programming in Python, 2013</li>
                  </ul>
                </li>
              </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import './../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

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
      imageDenis: require('./assets/me.jpg'),

      socialTextShow: false,
      socialText: "if you read this, let me know",
      socialCvHref: {'slo' : require('./Latex_CV/CV_Denis_Kotnik.pdf'), 'en' : '#'},
      socialCvText: {'slo' : 'Curriculum Vitae (SLO)', 'en' : 'Curriculum Vitae (EN) - work in progress'},
      socialMail: 'denis.kotnik@gmail.com',
      socialGithub: 'Github',
      socialFacebook: 'Facebook',
      
      welcome: {'slo' : 'Dobrodošli na moji osebni spletni strani', 'en' : 'Welcome to my personal website'},
      about: {'slo' : 'Na kratko o meni', 'en' : 'About me'},
      name: {'slo' : 'Moje ime je Denis Kotnik.', 'en' : 'My name is Denis Kotnik.'},
      born: {'slo' : 'Rojen sem aprila 1991 v Novem mestu, tako da sem danes star _XX_ let. Živim v Ljubljani in na vasi <a href="https://sl.wikipedia.org/wiki/Jezero,_Trebnje">Jezero</a>, ki se nahaja v bližini Trebnjega.', 'en' : 'I was born in Novo mesto on april 1991, what makes me _XX_ years old. I\'m living in Ljubljana and <a href="https://sl.wikipedia.org/wiki/Jezero,_Trebnje">Jezero</a>, a village near town Trebnje.'},
      graduation: {'slo' : '<a href="https://repozitorij.uni-lj.si/IzpisGradiva.php?id=68903&lang=slv">Diplomiral</a> in <a href="https://repozitorij.uni-lj.si/IzpisGradiva.php?id=100897&lang=slv">magistriral</a> sem s področja umetne inteligence oz. strojnega učenja na <a href="http://www.fri.uni-lj.si/sl">Fakulteti za računalništvo in informatiko</a> v Ljubljani.', en : 'I graduated with my <a href="https://repozitorij.uni-lj.si/IzpisGradiva.php?id=68903&lang=slv">bachelor</a> and <a href="https://repozitorij.uni-lj.si/IzpisGradiva.php?id=100897&lang=slv">master</a> degree in artificial intelligence/machine learning from University of Ljubljana, <a href="http://www.fri.uni-lj.si/en">Faculty of Computer and Information Science</a>.'},
      hobi: {'slo' : 'Ukvarjam se tudi s filozofijo in psihoanalizo, igram na kitaro, pojem v zboru, zanimajo me borilne veščine (predvsem Wing Chun), včasih pa napišem tudi kakšno poezijo.', 'en' : 'I\'m also interested in philosophy, psychoanalysis, (choral) singing, guitar playing, martial arts (especially Wing Chun) and occasionally writing poetry.'},
      proffesional: {'slo' : 'Moja strokovna pot', 'en' : 'My proffesional path'},
      cgs: {'slo' : 'Zaposlen sem v podjetju <a href="http://www.cgs-labs.com/">CGS Labs</a> na oddelku Okolje, kjer se ukvarjam z razvijanjem in vzdrževanjem informacijskih sistemov za cestno meteorologijo.', 'en' : 'I\'m employed as software developer at the company <a href="http://www.cgs-labs.com/">CGS Labs</a> in Environment department, where I\'m developing and maintaining information systems in domain of road meteorology.'},
      prog_languages: {'slo' : 'Razvijam predvsem v programskih jezikih Java in Python ter okoljih Laravel (PHP 7, Vue.js 2) in Microsoft .NET (C#, ASP.NET Web Forms, sistemske storitve in konzolne aplikacije za Windows).', 'en' : 'I\m developing mainly in Java and Python programming languages, along with Laravel (PHP 7, Vue.js 2) and Microsoft .NET frameworks (C#, ASP.NET Web Forms, system services and console applications for Windows OS).'},
      rws: {'slo' : 'Vzdržujem cestnovremenske postaje po Sloveniji, podatkovne baze (MicrosoftS SQL Server, MySQL) ter strežnike (Windows 2012 R2, Cent OS, Debian Squeeze).', 'en' : 'I also maintain road weather stations in Slovenia, a databases (Microsoft SQL Sever, MySQL) and servers (Microsoft Windows 2012 R2, CentOS, Debian Squeeze).'},
      linux: {'slo' : 'Linux Ubuntu uporabnik', 'en' : 'Linux Ubuntu user'},
      famnit: {'slo' : 'Famnit, Univerza na Primorskem, sodelovanje na projektu Po kreativni poti do praktičnega znanja, 2015', 'en' : 'Famnit, University of Primorska, project Po kreativni poti do praktičnega znanja, 2015'},
      certificate: {'slo' : 'certifikat', 'en' : 'certificate'},
      comtrade: {'slo' : 'poletna šola', 'en' : 'summer school'},
      admin_rozna: {'slo' : 'Pomočnik administratorja omrežja, Rožna dolina, 2016-2017', 'en' : 'Administrator assistant for internet network, Rožna dolina, 2016-2017'},
      courses: {'slo' : 'tečaji', 'en' : 'courses'},
      project: {'slo' : 'projekt', 'en' : 'project'},
      game: {'slo' : 'igra', 'en' : 'game'}
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
  body {
    font-family: 'Indie Flower', cursive;
    font-size: 20px;
  }
  p.copyright {
      padding: 10px 0;
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
    padding-bottom: 32px;
    
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
