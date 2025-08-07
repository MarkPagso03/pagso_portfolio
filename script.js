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

const skills_container = document.getElementById("skills");

skills.forEach(skill => {
  skills_container.innerHTML += `
    <div class="bg-white rounded-2xl p-6 flex flex-col items-center shadow w-28 h-36">
      <img src="${skill.icon}" alt="${skill.name}" class="w-12 h-12 mb-4">
      <p class="text-sm font-semibold text-center">${skill.name}</p>
    </div>
  `;
});

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
  // Add more projects here
];

const projects_container = document.getElementById('project-grid');

projects.forEach(project => {
  projects_container.innerHTML += `
    <div onclick="window.open('${project.link}', '_blank')" class="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
      <img src="${project.image}" class="rounded-lg mb-4" alt="${project.title}">
      <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
      <p class="mb-4">${project.description}</p>
<!--          <a href="${project.link}" class="text-blue-600 hover:underline" target="_blank">Preview Website</a>-->
    </div>
  `;
});
