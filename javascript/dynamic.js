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
    name: 'Nardii',
    un: '@nardi',
    profile: '../images/nardi.png',
    tought:
      "Utop Web is dollar for dollar the best money I've spent on continued education as a developer. So much A+ content.",
  },
  {
    name: 'Meshu Amare',
    un: '@meshu',
    profile: '../images/meshu.png',
    tought:
      'What an incredible XSTATE course you have on @Utop Web @DavidKPiano. Amazing tool and amazing way to reach our brains :D',
  },
  {
    name: 'shimekit Adam',
    un: '@ketkit',
    profile: '../images/shime.png',
    tought:
      'I’ve been using @Utop Web for years now. It’s crazy seeing it grow over the years. ',
  },
  {
    name: 'Degisew Mengist',
    un: '@dagi',
    profile: '../images/degisew photo.jpg',
    tought:
      "OMG @sarah_edo's Intro to Vue course on @Utop Web is *so good*. ",
  },
  {
    name: 'Nigatu Misikir',
    un: '@mynigat',
    profile: '../images/nigatu.png',
    tought:
      "I just completed 'JavaScript: The Hard Parts, v2' by @willsentance on @Utop Web! https://t.co/fB36c8Ohiv No better resource for full understanding Closures.",
  },
  {
    name: 'Habtamu Z',
    un: '@sebez',
    profile: '../images/sebez.png',
    tought:
      'Just finished "Accessibility in JavaScript Applications" by @marcysutton on @UtopWeb 🎉 ',
  },
  {
    name: 'Habit habita',
    un: '@habit',
    profile: '../images/habit.png',
    tought:
      'Shout-out to @JemYoung and @willsentance for their amazing courses in @FrontendMasters!! Not only the content is amazing but they are also incredibly easy to watch and stay engaged.',
  },
  {
    name: 'Endex',
    un: '@endex',
    profile: '../images/endex.png',
    tought:
      'Im in love with Frontend Masters and @holtbt!! Just working my way through the React lessons and I just love the way @holtbt explains the concepts and configs he runs. Awesome job!! #reactjs',
  },
  {
    name: 'Kasanra kaptcho',
    un: '@dagi',
    profile: '../images/tenthimg.png',
    tought:
      'Thank you @FrontendMasters &amp; @stevekinney for this awesome course State Management with Redux. Finally got confident with Redux.',
  },
  {
    name: 'Yordi simegn',
    un: '@yordi',
    profile: '../images/eleventhimg.png',
    tought:
      "I'm finishing up @FrontendMasters course \"Full Stack for Front-End Engineers, v2\" and it is one of the most enlightening courses I've taken on how the web works and learning about all of the intimidating ideas around servers, packets, proxies, etc. Highly recommend!",
  },
  {
    name: 'David Kefale',
    un: '@david',
    profile: '../images/twelvthimg.png',
    tought:
      "@holtbt Hey Brian, many thanks for your course on containers and Docker on @FrontendMasters! SO glad to finally grasp how they work. I've lost many hours to failing with Docker because I didn't understand the internals. No more! Looking forward to Intro to Linux. Thanks!",
  },
  {
    name: 'Manchini gemo',
    un: '@Manchini',
    profile: '../images/sertenimg.png',
    tought:
      "@holtbt React course on @FrontendMasters provided more insight and helped me appreciate React more. I already know some of the things being taught but i had no problem re-learning it. So far that is the best React course I've",
  },
  {
    name: 'Befike Bro',
    un: '@Befike',
    profile: '../images/fourtenimg.png',
    tought:
      "@UtopWeb is like a fully fledged University at this point. There're many courses to chose from industry leading professionals. Having the ability to learn what you want when you want it is phenomenal.",
  },
  {
    name: 'Ruth Ayalew',
    un: '@Ruth',
    profile: '../images/fiftenimg.png',
    tought:
      "I have recently spent most of my time on @FrontendMasters, 👩🏻‍💻 with the beginning path🤓 , I tend to understand things clearly rather than doing without understanding it. Can't recommend FM enough, its content is amazing, feel like it is tailor-made for me 🤪🤓.",
  },
  {
    name: 'Danny Munna',
    un: '@Danny',
    profile: '../images/sixtenimg.png',
    tought:
      'I loved, LOVED, Javascript the Hardparts taught by @willsentance on @FrontendMasters. What an incredible deep dive. #FrontEnd #webdevelopment',
  },
  {
    name: 'Kismet raphel',
    un: '@kismet',
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
<img src="${speaker.profile}"/>
</div>
<div class="second-div">
<b>${speaker.name}</b>
<small>${speaker.un}</small>
<p>
${speaker.tought}
</p>
</div>
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
  document.querySelector('.inner-container :nth-child( 9)').style.display = 'flex';
  document.querySelector('.inner-container :nth-child(10)').style.display = 'flex';
  document.querySelector('.inner-container :nth-child(11)').style.display = 'flex';
  document.querySelector('.inner-container :nth-child(12)').style.display = 'flex';
  document.querySelector('.inner-container :nth-child(13)').style.display = 'flex';
  document.querySelector('.inner-container :nth-child(14)').style.display = 'flex';
  document.querySelector('.inner-container :nth-child(15)').style.display = 'flex';
  document.querySelector('.inner-container :nth-child(16)').style.display = 'flex';
  showLessBtn.style.display = 'block';
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
  showMoreBtn.style.display = 'block';
  showLessBtn.style.display = 'none';
});
