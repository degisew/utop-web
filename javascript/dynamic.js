const navMenu = document.querySelector('.nav-menu');
const humberger = document.getElementById('menu-button');
const feedbackSection = document.querySelector('.feedback-section');
const feedback = document.getElementById('feedback');
humberger.addEventListener('click', (e) => {
  e.preventDefault();
  navMenu.classList.toggle('visible');
});

const speakers = [
  {
    name: 'Benard patcho',
    profile: '../images/firstimg.png',
    tought:
      "Utop Web is dollar for dollar the best money I've spent on continued education as a developer. So much A+ content.",
  },
  {
    name: 'Meshu Amare',
    profile: '../images/secondimg.png',
    tought:
      'What an incredible XSTATE course you have on @Utop Web @DavidKPiano. Amazing tool and amazing way to reach our brains :D',
  },
  {
    name: 'Surafel Getachew',
    profile: '../images/thirdimg.png',
    tought:
      'I’ve been using @Utop Web for years now. It’s crazy seeing it grow over the years and how there’s just so much great content to learn from. I feel like every company should have a subscription for their devs on there. The best bang for your buck.',
  },
  {
    name: 'Sonick Mumba',
    profile: '../images/fourthimg.png',
    tought:
      "OMG @sarah_edo's Intro to Vue course on @Utop Web is *so good*. I've made a few attempts to learn but this is the first time the lightbulb has fully come on. https://t.co/Nwp7QzbyqW",
  },
  {
    name: 'Saeqa sultani',
    profile: '../images/fifthimg.png',
    tought:
      "I just completed 'JavaScript: The Hard Parts, v2' by @willsentance on @Utop Web! https://t.co/fB36c8Ohiv No better resource for full understanding Closures, asynchronous JS and classes and prototypes. Thanks @willsentance",
  },
  {
    name: 'Sarah edwardo',
    profile: '../images/sixthimg.png',
    tought:
      'Just finished "Accessibility in JavaScript Applications" by @marcysutton on @UtopWeb 🎉 10/10, would recommend! Good pace, great explanations, lots of code examples. Now I\'m excited to make some #a11y improvements to my own projects! 🧠⚙️ https://t.co/gvliKoyehW',
  },
  {
    name: 'Edmund Ralf',
    profile: '../images/seventhimg.png',
    tought:
      'Shout-out to @JemYoung and @willsentance for their amazing courses in @FrontendMasters!! Not only the content is amazing but they are also incredibly easy to watch and stay engaged.',
  },
  {
    name: 'kasandra captcho',
    profile: '../images/eightimg.png',
    tought:
      'Im in love with Frontend Masters and @holtbt!! Just working my way through the React lessons and I just love the way @holtbt explains the concepts and configs he runs. Awesome job!! #reactjs',
  },
  {
    name: 'Degisew Mengist',
    profile: '../images/tenthimg.png',
    tought:
      'Thank you @FrontendMasters &amp; @stevekinney for this awesome course State Management with Redux. Finally got confident with Redux.',
  },
  {
    name: 'Yordi simegn',
    profile: '../images/eleventhimg.png',
    tought:
      "I'm finishing up @FrontendMasters course \"Full Stack for Front-End Engineers, v2\" and it is one of the most enlightening courses I've taken on how the web works and learning about all of the intimidating ideas around servers, packets, proxies, etc. Highly recommend!",
  },
  {
    name: 'David Kefale',
    profile: '../images/twelvthimg.png',
    tought:
      "@holtbt Hey Brian, many thanks for your course on containers and Docker on @FrontendMasters! SO glad to finally grasp how they work. I've lost many hours to failing with Docker because I didn't understand the internals. No more! Looking forward to Intro to Linux. Thanks!",
  },
  {
    name: 'Manchini gemo',
    profile: '../images/sertenimg.png',
    tought:
      "@holtbt React course on @FrontendMasters provided more insight and helped me appreciate React more. I already know some of the things being taught but i had no problem re-learning it. So far that is the best React course I've",
  },
  {
    name: 'Befike Bro',
    profile: '../images/fourtenimg.png',
    tought:
      "@FrontendMasters is like a fully fledged University at this point. There're many courses to chose from industry leading professionals. Having the ability to learn what you want when you want it is phenomenal.",
  },
  {
    name: 'Ruth Ayalew',
    profile: '../images/fiftenimg.png',
    tought:
      "I have recently spent most of my time on @FrontendMasters, 👩🏻‍💻 with the beginning path🤓 , I tend to understand things clearly rather than doing without understanding it. Can't recommend FM enough, its content is amazing, feel like it is tailor-made for me 🤪🤓.",
  },
  {
    name: 'Dany Munna',
    profile: '../images/sixtenimg.png',
    tought:
      'I loved, LOVED, Javascript the Hardparts taught by @willsentance on @FrontendMasters. What an incredible deep dive. #FrontEnd #webdevelopment',
  },
  {
    name: 'Kismet raphel',
    profile: '../images/lastimg.png',
    tought:
      'I’m helping out the @algolia API clients team on their journey to learn JavaScript and I can confirm 100% that @getify is the best JavaScript instructor out there, hands down. From @YDKJS to the courses on @FrontendMasters, nobody goes deeper than him into how things work.',
  },
];

const showMoreBtn = document.createElement('button');
showMoreBtn.textContent = 'Show More';
showMoreBtn.type = 'button';
showMoreBtn.className = 'see-more-btn';

const showLessBtn = document.createElement('button');
showLessBtn.textContent = 'Show Less';
showLessBtn.type = 'button';
showLessBtn.className = 'see-less-btn';

speakers.forEach((speaker) => {
  feedback.innerHTML
    += `
<div class="cards">
<div class="profile-name-div">
<img src="${speaker.profile}">
<b>${speaker.name}</b>
</div>

<p>
${speaker.tought}
</p>
</div>
`;
});
feedbackSection.append(showMoreBtn);
feedbackSection.append(showLessBtn);
showLessBtn.style.display = 'none';
showLessBtn.style.marginBottom = '10px';
showMoreBtn.style.marginBottom = '10px';
showLessBtn.style.marginTop = '10px';
showMoreBtn.style.marginTop = '10px';

// let currentItem = 8;
showMoreBtn.addEventListener('click', () => {
  document.querySelector('.inner-container :nth-child( 9)').style.display = 'inline-block';
  document.querySelector('.inner-container :nth-child(10)').style.display = 'inline-block';
  document.querySelector('.inner-container :nth-child(11)').style.display = 'inline-block';
  document.querySelector('.inner-container :nth-child(12)').style.display = 'inline-block';
  document.querySelector('.inner-container :nth-child(13)').style.display = 'inline-block';
  document.querySelector('.inner-container :nth-child(14)').style.display = 'inline-block';
  document.querySelector('.inner-container :nth-child(15)').style.display = 'inline-block';
  document.querySelector('.inner-container :nth-child(16)').style.display = 'inline-block';
  showLessBtn.style.display = 'inline-block';
  showMoreBtn.style.display = 'none';
});

showLessBtn.addEventListener('click', () => {
  document.querySelector('.inner-container :nth-child( 9)').style.display = 'none';
  document.querySelector('.inner-container :nth-child(10)').style.display = 'none';
  document.querySelector('.inner-container :nth-child(11)').style.display = 'none';
  document.querySelector('.inner-container :nth-child(12)').style.display = 'none';
  document.querySelector('.inner-container :nth-child(13)').style.display = 'none';
  document.querySelector('.inner-container :nth-child(14)').style.display = 'none';
  document.querySelector('.inner-container :nth-child(15)').style.display = 'none';
  document.querySelector('.inner-container :nth-child(16)').style.display = 'none';
  showMoreBtn.style.display = 'inline-block';
  showLessBtn.style.display = 'none';
});
