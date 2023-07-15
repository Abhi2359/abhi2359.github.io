projectsList = [
  
   
  {
    title: ' Personal Projects ',
    projects: [
      {
        title: 'Aayurgyan',
        description:
          'Get acquainted with knowledge about medicinal plants with help of this blogging website',
        image:
          '/assets/aayurgyan.png',
        url: 'https://www.youtube.com/watch?v=EwktaLOXMz4',
        github: 'https://github.com/Abhi2359/Aayurgyan',
        badges: [
          { name: 'Next JS', color: 'bg-gray-800' },
          { name: 'Swiper', color: 'bg-green-600' },
          { name: 'Tailwind', color: 'bg-sky-400' },
        ],
      },
      {
        title: 'Job Search',
        description:
          'A mobile native application which is helpful in finding jobs based on your interest and you can apply by clicking the jobs description ',
        image:
          '/assets/jobsearch.jpeg',
        url: 'https://expo.dev/@abhikc/react_native?serviceType=classic&distribution=expo-go',
        github: 'https://github.com/Abhi2359/React_native_Job_search',
        badges: [
          { name: 'React Native', color: 'bg-gray-700' },
        
        ],
      },
     
    ],
  },
  {
    title: 'Projects I worked on while learning ',
    projects: [
      {
        title: 'Crypto Tracker',
        description:
          'An application with the help of which you can track the price of various cryptocurrency ',
        image:
          '/assets/cryptotracker.png',
        url: 'https://abhi2359.github.io/Crypto-Tracker/',
        github: 'https://github.com/Abhi2359/Crypto-Tracker',
        badges: [
          { name: 'React', color: 'bg-blue-400' },
         
          { name: 'Tailwind', color: 'bg-sky-400' },
        ],
      },
      {
        title: 'Weather Application',
        description:
          'An Application which shows current weather of various cities across the world  and its background is subject to weather change', 
        image:
          'assets/weatherapp.png',
        url: 'https://abhi2359.github.io/Weather-app/',
        github: 'https://github.com/Abhi2359/Weather-app',
        badges: [
          { name: 'React', color: 'bg-blue-400' },
        
          { name: 'Tailwind', color: 'bg-sky-400' },
        ],
      },
      {
        title: 'Movie rating app',
        description:
          'A simple and minimal clone of IMDB movie rating app that shows rating and descriptions of different movies based on their popularity',
        image:
          '/assets/imdb.png',
        url: 'https://imdbclone-murex.vercel.app/',
        github: 'https://github.com/Abhi2359/imdbclone',
        badges: [
          { name: 'React', color: 'bg-blue-500' },
      
          { name: 'React-skeleton', color: 'bg-sky-400' },
        ],
      },
    ],
  },
  {
    title: 'Challenges I worked on when I was bored:',
    projects: [
      {
        title: 'Front End Challenge',
        description:
          'A simple web UI component for Ecommerce(Sneakers) applications which is dynamic in which you can click to view different samples of products and can add them to cart',
        image:
          '/assets/challenge2.png',
        url: 'https://frontendchallenge-2-ce2clbfnh-abhi2359.vercel.app/?vercelToolbarCode=AVLOaCrXDrETzJU',
        github: 'https://github.com/Abhi2359/frontendchallenge-2',
        badges: [
         { name: 'React', color: 'bg-gray-700' },
          
        ],
      },
      {
        title: ' Front End  Challenge',
        description:
          'A Pomodoro Timer in which you can set different break time(Long,short and pomodoro) depending upon your need.',
        image:
          '/assets/challenge3.png',
        url: 'https://frontendchallenge-3.vercel.app/',
        github: 'https://github.com/Abhi2359/frontendchallenge-3',
        badges: [
          { name: 'React', color: 'bg-orange-500' },
          { name: 'React-countdown', color: 'bg-green-500' },
        
        ],
      },
      {
        title: 'Front end Challenge',
        description:
          'An interactive Page having synchronized changes occuring in  form and card at the same time',
        image:
          '/assets/challenge1.png',
        
        github: 'https://github.com/Abhi2359/frontendchallenge-1',
        badges: [
          { name: 'React', color: 'bg-blue-500' },
          
        ],
      },
      {
        title: 'Vowel Counter',
        description:
          'A Vowel Counter can be used to count number of vowels till the written words',
        image:
          '/assets/Vowelcounter.png',
        
          url: 'http://counterofvowels.000webhostapp.com/',
        github: 'https://github.com/Abhi2359/Vowel-Counter',
        badges: [
          { name: 'Vanilla Js', color: 'bg-blue-500' },
          
        ],
      },
    ],
  },
];

var darkMode = !window.matchMedia('(prefers-color-scheme: dark)').matches;
function toggle() {
  darkMode = !darkMode;
  const video_dark = document.getElementById('back_video_dark');
  const video_light = document.getElementById('back_video_light');
  if (darkMode) {
    document.getElementById('moon').style.display = 'none';
    document.getElementById('sun').style.display = 'block';
    document.getElementsByTagName('HTML')[0].classList.add('dark');
    if (video_dark) video_dark.classList.remove('opacity-0');
    if (video_light) video_light.classList.add('opacity-0');
  } else {
    document.getElementById('moon').style.display = 'block';
    document.getElementById('sun').style.display = 'none';
    document.getElementsByTagName('HTML')[0].classList.remove('dark');
    if (video_dark) video_dark.classList.add('opacity-0');
    if (video_light) video_light.classList.remove('opacity-0');
  }
}
toggle();

var avatar_opacity = 100;
const changeAvatarOpacity = () => {
  avatar_opacity = avatar_opacity === 100 ? 0 : 100;
  document
    .getElementById('avatar')
    .setAttribute('style', `opacity: ${avatar_opacity}`);
};

function createVideoElement(url, id, hidden) {
  const video = document.createElement('video');
  video.autoplay = true;
  video.loop = true;
  video.muted = true;
  video.style.height = '100vh';
  video.style.width = '100%';
  video.style.objectFit = 'cover';
  if (hidden)
    video.classList.add('fixed', 'top-0', 'left-0', 'z-0', 'opacity-0');
  else video.classList.add('fixed', 'top-0', 'left-0', 'z-0');
  video.preload = 'auto';
  video.src = url;
  video.id = id;
  document.getElementsByTagName('body')[0].appendChild(video);
}

window.addEventListener('load', () => {
  if (window.innerWidth < 600) {
    createVideoElement(
      'https://res.cloudinary.com/di4swkq4j/video/upload/v1679815224/light_gk1exr.mp4',
      'back_video_light',
      darkMode
    );
    createVideoElement(
      'https://res.cloudinary.com/di4swkq4j/video/upload/v1679815228/dark_blsdgj.mp4',
      'back_video_dark',
      !darkMode
    );
  } else {
    const viewer = document.createElement('spline-viewer');
    viewer.id = 'spline-viewer';
    viewer.style.height = '100vh';
    viewer.style.width = '100%';
    viewer.classList.add('fixed', 'top-0', 'left-0', 'z-0');
    viewer.url = 'https://prod.spline.design/CLT1A4tbF20C1Ynx/scene.splinecode';
    viewer['loading-anim'] = true;
    document.getElementsByTagName('body')[0].appendChild(viewer);
    const viewer_selection = document.getElementById('spline-viewer');
    viewer_selection.shadowRoot.querySelector('#logo').remove();
  }
});

let viewProjects = false;
document.getElementById('projects').style.display = 'none';
function setViewProjects() {
  viewProjects = !viewProjects;
  const spline_viewer = document.getElementById('spline-viewer');
  if (viewProjects) {
    document.getElementById('projects').style.display = 'flex';
    document.getElementById('projects').classList.add('elementToPopIn');
    window.scrollTo(0, 0);
    setTimeout(() => {
      document.getElementById('home').style.display = 'none';
      if (spline_viewer) spline_viewer.style.display = 'none';
    }, 500);
  } else {
    if (spline_viewer) spline_viewer.style.display = 'block';
    document.getElementById('home').style.display = 'flex';
    document.getElementById('projects').classList.remove('elementToPopIn');
    document.getElementById('projects').classList.add('elementToPopOut');
    setTimeout(() => {
      document.getElementById('projects').style.display = 'none';
    }, 500);
  }
}

function renderProjectSection(projectSection) {
  let htmlText = `<div class="my-6">
  <h2 class="md:text-2xl text-xl font-bold">
    ${projectSection.title}
  </h2>
  <div class="grid lg:grid-cols-3 md:grid-cols-2 mt-6 gap-6 lg:gap-10">
    `;
  projectSection.projects.forEach((project) => {
    htmlText += `<div
    class="card hover:shadow-xl dark:bg-slate-700 hover:scale-[102%]"
  >
    <a href="${project.url}" target="_blank">
      <img
        loading="lazy"
        class="w-full h-64 object-cover"
        src="${project.image}"
        alt="stew"
      />
    </a>

    <div class="m-4 flex flex-col h-full">
      <span class="font-bold dark:text-gray-50">${project.title}</span>
      <div class="block text-gray-500 dark:text-gray-300 flex-1"
        >${project.description}
      </div>
      <div class="mt-3 dark:text-gray-200" id="Github link">
        <a
          href="${project.github}"
          target="_blank"
          class="hover:text-gray-600 text-4xl dark:hover:text-gray-400"
        >
          <i class="bi bi-github"></i>
        </a>
        ${
          project?.url
            ? `<a
        href="${project.url}"
        target="_blank"
        class="hover:text-gray-600 text-4xl ml-1 dark:hover:text-gray-400"
      >
        <i class="bi bi-link-45deg"></i>
      </a>`
            : ''
        }
      </div>
    </div>
    <div id="badges" class="flex flex-wrap absolute top-0 ml-3 gap-2">
  `;
    project.badges.forEach((badge) => {
      htmlText += `
    <div class="badge ${badge.color} text-white">
      <span class="mx-1">${badge.name}</span>
    </div>
  `;
    });
    htmlText += `</div></div>`;
  });
  htmlText += `</div></div>`;
  return htmlText;
}

let htmlText = '';
projectsList.forEach((projectSection, i) => {
  htmlText += renderProjectSection(projectSection);
  if (i !== projectsList.length - 1)
    htmlText +=
      '<hr class="w-full my-8 border-gray-200 dark:border-gray-700" />';
});
document.getElementById('list-projects').innerHTML = htmlText;

// https://stackoverflow.com/questions/1125084/how-to-make-the-window-full-screen-with-javascript-stretching-all-over-the-scre
// Experimental
function requestFullScreen() {
  // Supports most browsers and their versions.
  var el = document.documentElement,
    rfs = // for newer Webkit and Firefox
      el.requestFullscreen ||
      el.webkitRequestFullScreen ||
      el.mozRequestFullScreen ||
      el.msRequestFullscreen;
  if (typeof rfs != 'undefined' && rfs) {
    rfs.call(el);
  } else if (typeof window.ActiveXObject != 'undefined') {
    // for Internet Explorer
    var wscript = new ActiveXObject('WScript.Shell');
    if (wscript != null) {
      wscript.SendKeys('{F11}');
    }
  }
}

requestFullScreen();

document.addEventListener(
  'keydown',
  (e) => {
    if (e.key === 'Enter') {
      requestFullScreen(document.body);
    }
  },
  false
);
