const elements = {
  heading: document.getElementById("heading"),
  textSection: document.getElementById("text-section"),
  resume: document.getElementById("download-resume"),
  footerLinks: document.getElementById("footer-links"),
};

const swedish = {
  lang: "sv",
  heading:
    '<h1 class="josefin white font-jumbo">Hej</h1>' +
    '<h1 class="josefin green font-jumbo">.</h1>',
  textSection:
    '<p class="josefin white inline font-xl">' +
    "Jag heter Robin Karlsson och är en nyexaminerad systemutvecklare. År 2020 tog jag min examen från Systemvetenskapliga programmet på Örebro universitet. Jag är 28 år <del>gammal</del> ung och bor i Arboga." +
    "<br><br>" +
    "Just nu letar jag efter möjligheter att vidareutveckla mina kunskaper, där centralt just nu är </p>" +
    '<p class="josefin green inline font-xl">.NET</p>' +
    '<p class="josefin white inline font-xl"> och </p>' +
    '<p class="josefin green inline font-xl">webb</p>' +
    '<p class="josefin white inline font-xl">.</p>' +
    "<br><br>" +
    '<p class="josefin white inline font-xl">På fritiden håller jag på mycket med musik, umgås med vänner och familj; och om tillfälle finns spelas gärna något sällskaps- eller datorspel</p>' +
    '<p class="josefin green inline font-xl">.</p>',
  resume:
    '<p class="josefin white font-xxl">CV</p>' + '<hr class="line-on-hover"/>',
  resumeLang: "sv",
  resumeDataContent: "Öppna PDF",
  footerLinks:
    '<a href="https://github.com/stigrobin?tab=repositories" target="_blank" class="josefin white font-xxl">PROJEKT</a>' +
    '<a href="mailto:stigrobin@hotmail.se" class="josefin white font-xxl">KONTAKT</a>',
};

const english = {
  lang: "en",
  heading:
    '<h1 class="josefin white font-jumbo">Hi</h1>' +
    '<h1 class="josefin green font-jumbo">.</h1>',
  textSection:
    '<p class="josefin white inline font-xl">' +
    "My name is Robin Karlsson, a 28 years <del>old</del> young newly graduated sytems developer. I recently finished my bachelor's degree in informatics at Örebro University." +
    "<br><br>" +
    "I am now looking for opportunities to expand my skill set in IT, and to help people find good IT solutions. As for today I have invested most of my time in </p>" +
    '<p class="josefin green inline font-xl">.NET</p>' +
    '<p class="josefin white inline font-xl"> and </p>' +
    '<p class="josefin green inline font-xl">web</p>' +
    '<p class="josefin white inline font-xl">.</p>' +
    "<br><br>" +
    '<p class="josefin white inline font-xl">In my spare time I enjoy making music, spending time with friends and family; and on some occasion, play some video- or board game</p>' +
    '<p class="josefin green inline font-xl">.</p>',
  resume:
    '<p class="josefin white font-xxl">Resume</p>' +
    '<hr class="line-on-hover"/>',
  resumeLang: "en",
  resumeDataContent: "Open PDF",
  footerLinks:
    '<a href="https://github.com/stigrobin?tab=repositories" target="_blank" class="josefin white font-xxl">PROJECTS</a>' +
    '<a href="mailto:stigrobin@hotmail.se" class="josefin white font-xxl">CONTACT</a>',
};

function changeLanguage(language) {
  elements.heading.innerHTML = language.heading;
  elements.textSection.innerHTML = language.textSection;
  elements.resume.innerHTML = language.resume;
  elements.resume.lang = language.resumeLang;
  elements.resume.dataset.content = language.resumeDataContent;
  elements.footerLinks.innerHTML = language.footerLinks;

  setActiveLanguage();
}

function setActiveLanguage() {
  let sv = document.querySelector("a[data-language=sv]");
  let en = document.querySelector("a[data-language=en]");
  if (elements.resume.lang == "sv") {
    sv.firstElementChild.classList.add("border-white");
    sv.classList.add("no-click");
    en.firstElementChild.classList.add("low-brightness");

    sv.firstElementChild.classList.remove("low-brightness");
    en.classList.remove("no-click");
    en.firstElementChild.classList.remove("border-white");
  } else {
    en.firstElementChild.classList.add("border-white");
    en.classList.add("no-click");
    sv.firstElementChild.classList.add("low-brightness");

    en.firstElementChild.classList.remove("low-brightness");
    sv.classList.remove("no-click");
    sv.firstElementChild.classList.remove("border-white");
  }
}

document.querySelectorAll("a.lang-link").forEach((e) => {
  e.addEventListener(
    "click",
    changeLanguage.bind(this, e.dataset.language == "sv" ? swedish : english),
    { once: false }
  );
});

document.addEventListener('DOMContentLoaded', () => {
    setActiveLanguage();
})
