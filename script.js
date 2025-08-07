//declarations
const catchy_phrase = `
        I'm a Computer Engineering student passionate about creating innovative and impactful digital solutions.<br>
        I love transforming ideas into clean, functional, and efficient systems.<br>
        My drive comes from a curiosity for building technology that solves real-world problems.
`;

const about_me_phrase = `
        I'm a passionate and versatile Web Developer and Computer Engineering student with a solid foundation in both software development and hardware systems. My journey in tech has equipped me with the ability to build full-stack applications using modern technologies such as HTML, CSS, JavaScript, Laravel, Django, C++, and Python. Beyond the web, I delve into embedded systems and microcontroller programming — particularly with Arduino — where I bring digital systems to life by integrating code with electronics.<br><br>
        I thrive on solving real-world problems through technology, whether it's developing responsive web interfaces, crafting backend logic, or designing hardware-based prototypes. My background in computer engineering allows me to approach problems from a systems perspective, blending creativity with technical precision. From software applications to microcontroller-based solutions, I enjoy the challenge of transforming innovative ideas into practical, scalable, and meaningful digital experiences.<br><br>
        I'm constantly expanding my skills and exploring how the synergy between software and hardware can drive innovation in fields like IoT, automation, and smart systems.
`;

const educationHistory = [
  {
    title: "Bachelor of Science in Computer Engineering",
    school: "Pangasinan State University - Urdaneta Campus",
    duration: "2022 – Present"
  },
  {
    title: "Junior and Senior High School Education",
    school: "Turac National High School",
    duration: "2016 – 2022"
  },
  {
    title: "Elementary Education",
    school: "Magtaking Elementary School",
    duration: "2010 – 2016"
  }
];

const certificates = [
  { title: "Safety Awareness 101: OSH", date: "April 28, 2025" },
  { title: "The AI Revolution in Education: Opportunities and challenges", date: "April 28, 2025" },
  { title: "40-Hour Basic Occupational Safety and Health (Bosh) Training", date: "February 18-21, 2025" },
  { title: "Ethical Hacking – JPCS ITalks", date: "October 12, 2024" },
{ title: "Resource Speaker: Capacity Building on Basic Programming<br> and Arduino Uno R3", date: "March 09, 2023" },
//  { title: "Software Development Lifecycle Fundamentals – Great Learning", date: "2024" },
//  { title: "OOPs In Python – Great Learning", date: "2023" },
//  { title: "Python Fundamentals for Beginners – Great Learning", date: "2023" },
//  { title: "Python OpenCV – Simplilearn", date: "2023" },
//  { title: "Java Programming – Great Learning", date: "2023" },
  { title: "Seminar on Neural Networks", date: "December 13, 2022" },
//  { title: "C++ Tutorial – Great Learning", date: "2022" }
  { title: `Unpaid Certifications: Fundamentals of Programming and Languages
            <div class="md:flex-row pl-6 gap-16 hidden lg:flex">
              <div>
                <p class="font-semibold">SoloLearn</p>
                <ul class="list-disc pl-10">
                  <li>JavaScript</li>
                  <li>SQL</li>
                  <li>Responsive Web Design</li>
                  <li>HTML</li>
                  <li>Java</li>
                  <li>Introduction to C++</li>
                  <li>CSS</li>
                  <li>PHP</li>
                  <li>JQuery</li>
                </ul>
              </div>

              <div class="flex flex-col">
                <p class="font-semibold">GreatLearning</p>
                <ul class="list-disc pl-10 mb-10">
                  <li>Android Studio</li>
                  <li>Python Basic Programs</li>
                  <li>OOPs in Java</li>
                  <li>C++ Tutorial</li>
                </ul>

                <p class="font-semibold">Simplilearn</p>
                <ul class="list-disc pl-10">
                  <li>Python for Beginners</li>
                </ul>
              </div>

            </div>
  `, date: "" }
];

const awards = [
  {
    event: "Institute of Computer Engineers of the Philippines, 6th Regional Convention",
    competition: "CPE Challenge: Programming (C++ Language)",
    result: "1st Runner Up"
  },
  {
    event: "Institute of Computer Engineers of the Philippines, 7th Regional Convention",
    competition: "CPE Challenge: Programming (C++ Language)",
    result: "Champion"
  },
  {
    event: "Institute of Computer Engineers of the Philippines, National CPE Challenge & Student Congress",
    competition: "CPE Challenge: Programming (C++ Language)",
    result: "Participant"
  }
];

const skills = [
  { name: "HTML", icon: "src/technologies_logo/html_logo.png" },
  { name: "CSS", icon: "src/technologies_logo/css_logo.png" },
  { name: "JavaScript", icon: "src/technologies_logo/js_logo.png" },
  { name: "Arduino", icon: "src/technologies_logo/arduino_logo.png" },
  { name: "Tailwind CSS", icon: "src/technologies_logo/tailwind_logo.png" },
  { name: "C++", icon: "src/technologies_logo/c++_logo.png" },
  { name: "Python", icon: "src/technologies_logo/python_logo.png" },
  { name: "Django", icon: "src/technologies_logo/django_logo.png" },
  { name: "Laravel", icon: "src/technologies_logo/laravel_logo.png" },
  { name: "GitHub", icon: "src/technologies_logo/github_logo.png" },
  { name: "MySQL", icon: "src/technologies_logo/mysql_logo.png" },
  { name: "SQLite", icon: "src/technologies_logo/sqlite_logo.png" },
];

const projects = [
  {
    title: "AeroMaster",
    description: "A web-based Django app for generating randomized mock exams with custom admin panels.",
    image: "src/my_projects/AeroMaster.webp",
    link: "https://aeromaster.onrender.com/"
  },
  {
    title: "DILG-CAR RSP Portal",
    description: "Laravel application for submitting dynamic PDS forms with Tailwind CSS design and real-time validation.",
    image: "src/my_projects/DILG-RSPPortal.webp",
    link: "https://darksalmon-eland-495470.hostingersite.com/login"
  },
  {
    title: "Eco Paddy Pro",
    description: "Laravel application for submitting dynamic PDS forms with Tailwind CSS design and real-time validation.",
    image: "src/my_projects/EcoPaddyPro.webp",
    link: "https://markpagso03.github.io/Eco_Paddy_Pro/"
  },
  {
    title: "Kape-Thana Web",
    description: "Laravel application for submitting dynamic PDS forms with Tailwind CSS design and real-time validation.",
    image: "src/my_projects/KapeThanaWeb.webp",
    link: "https://kape-thana-web.onrender.com/"
  },
  {
    title: "Tambay Cap",
    description: "Laravel application for submitting dynamic PDS forms with Tailwind CSS design and real-time validation.",
    image: "src/my_projects/TambayCapWebRecreation.webp",
    link: "https://markpagso03.github.io/TambayCap_site_recreation/"
  },
  {
    title: "PSU Key Management System",
    description: "Laravel application for submitting dynamic PDS forms with Tailwind CSS design and real-time validation.",
    image: "src/my_projects/PSU-keyManagement.webp",
    link: ""
  },
  {
    title: "PSU Equipment Management System",
    description: "Laravel application for submitting dynamic PDS forms with Tailwind CSS design and real-time validation.",
    image: "src/my_projects/PSU-equipmentManagement.webp",
    link: ""
  },
  // Add more projects here
];

  const socialMedia = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/mark.angelu.22/',
      svg: `
        <svg viewBox="-5 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>facebook [#176]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-385.000000, -7399.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z" id="facebook-[#176]"> </path> </g> </g> </g> </g></svg>
      `
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/pagso__/',
      svg: `
        <svg viewBox="0 0 24 24" class="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#0F0F0F"></path> <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 8 5Z" fill="#0F0F0F"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#0F0F0F"></path> </g></svg>
      `
    },
    {
      name: 'GitHub',
      url: 'https://github.com/MarkPagso03',
      svg: `
        <svg viewBox="0 0 20 20" class="w-10 h-10" xmlns="http://www.w3.org/2000/svg" fill="#000000">
          <path d="M10 0C4.48 0 0 4.59 0 10.25c0 4.53 2.865 8.37 6.84 9.72.5.09.682-.22.682-.49 0-.24-.008-.87-.013-1.71-2.782.61-3.37-1.35-3.37-1.35-.455-1.18-1.11-1.49-1.11-1.49-.91-.63.07-.62.07-.62 1.005.07 1.534 1.06 1.534 1.06.895 1.57 2.345 1.12 2.92.86.09-.66.35-1.12.63-1.38-2.22-.26-4.555-1.14-4.555-5.05 0-1.12.39-2.03 1.03-2.75-.104-.26-.45-1.3.098-2.71 0 0 .84-.27 2.75 1.03A9.44 9.44 0 0 1 10 4.87a9.44 9.44 0 0 1 2.5.34c1.91-1.3 2.75-1.03 2.75-1.03.548 1.41.202 2.45.098 2.71.64.72 1.03 1.63 1.03 2.75 0 3.92-2.337 4.79-4.565 5.04.36.31.682.92.682 1.85 0 1.34-.012 2.42-.012 2.75 0 .27.18.59.688.49C17.14 18.62 20 14.78 20 10.25 20 4.59 15.52 0 10 0z"/>
        </svg>
      `
    }
  ];



const catchy_container = document.getElementById("catchy");

catchy_container.innerHTML = catchy_phrase;

const about_me_container = document.getElementById("about_me");

about_me_container.innerHTML = about_me_phrase;


const educationList = document.getElementById("educationList");

educationList.innerHTML = educationHistory.map(item => `
  <li class="flex w-full items-start p-4">
    <div class="w-[80%]">
      <h6 class="font-semibold">${item.title}</h6>
      <p class="text-base text-gray-600">${item.school}</p>
    </div>
    <p class="text-base text-gray-800 whitespace-nowrap pt-2">${item.duration}</p>
  </li>
`).join('');

const certificateList = document.getElementById("certificateList");

certificateList.innerHTML = certificates.map(cert => `
  <li class="flex w-full items-start p-4">
    <div class="w-[80%]">
      <h6 class="font-semibold">${cert.title}</h6>
    </div>
    <p class="text-sm text-gray-800 whitespace-nowrap pt-2">${cert.date}</p>
  </li>
`).join('');

const awardsList = document.getElementById("awardsList");

awardsList.innerHTML = awards.map(item => `
  <li class="flex w-full items-start p-4">
    <div class="w-[80%]">
      <h6 class="font-semibold">${item.event}</h6>
      <p class="text-sm text-gray-600">${item.competition}</p>
    </div>
    <p class="text-sm text-gray-800 whitespace-nowrap pt-2">${item.result}</p>
  </li>
`).join('');


//funtions
const skills_container = document.getElementById("skills");

skills.forEach(skill => {
  skills_container.innerHTML += `
    <div class="bg-white rounded-2xl p-6 flex flex-col items-center shadow w-28 h-36">
      <img src="${skill.icon}" alt="${skill.name}" class="w-12 h-12 mb-4">
      <p class="text-sm font-semibold text-center">${skill.name}</p>
    </div>
  `;
});

const projects_container = document.getElementById('project-grid');

projects.forEach(project => {
  projects_container.innerHTML += `
    <div ${project.link ? `onclick="window.open('${project.link}', '_blank')"` : ``} class="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
      <img src="${project.image}" class="rounded-lg mb-4" alt="${project.title}">
      <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
      <p class="mb-4">${project.description}</p>
<!--          <a href="${project.link}" class="text-blue-600 hover:underline" target="_blank">Preview Website</a>-->
      ${project.link ? ``
        : `<div class="text-gray-400 italic">No Preview Available</div>`
      }
    </div>
  `;
});

  const container = document.getElementById('social-icons');

  socialMedia.forEach(platform => {
    const a = document.createElement('a');
    a.href = platform.url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.innerHTML = platform.svg;
    container.appendChild(a);
  });

