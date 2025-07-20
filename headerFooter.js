
// headerFooter.js - Advanced Dark Popup with Icons and Hover Effects

const headerHTML = `
<header class="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg fixed top-0 left-0 w-full z-50">
  <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
    <div class="flex items-center space-x-2">
      <span class="text-2xl font-bold">HealthFit</span>
    </div>
    <button id="hamburger" class="sm:hidden focus:outline-none">
      <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
    <nav class="hidden sm:flex space-x-6 font-medium">
      <a href="index.html" class="hover:text-red-500">Home</a>
      <a href="zym.html" class="hover:text-red-500">Gym</a>
      <a href="calisthetic.html" class="hover:text-red-500">Calisthenics</a>
      <a href="cardio.html" class="hover:text-red-500">Cardio</a>
    </nav>
  </div>
</header>

<!-- Sliding Sidebar (Mobile) -->
<div id="sideDrawer" class="fixed top-0 left-0 h-full w-72 sm:w-80 bg-gray-900 text-white shadow-2xl z-50 transform -translate-x-full transition-transform duration-500 ease-in-out p-5 overflow-y-auto sm:max-w-[300px] w-full">
  <!-- Header -->
    <div class="mb-6 flex justify-center relative">
  <span class="text-2xl sm:text-5xl font-extrabold text-center">HealthFit</span>
  <button id="closeDrawer" class="absolute right-0 text-3xl font-bold hover:text-red-500">&times;</button>
</div>

  <!-- Nav Menu -->
  <nav class="flex flex-col space-y-4">
    <a href="index.html" class="flex items-center bg-blue-700 rounded-xl px-5 py-3 hover:bg-red-600 transition"><i class="fas fa-home mr-3"></i>Home</a>
    <a href="zym.html" class="flex items-center bg-blue-700 rounded-xl px-5 py-3 hover:bg-red-600 transition"><i class="fas fa-dumbbell mr-3"></i>Gym</a>
    <a href="calisthetic.html" class="flex items-center bg-blue-700 rounded-xl px-5 py-3 hover:bg-red-600 transition"><i class="fas fa-person-walking mr-3"></i>Calisthenics</a>
    <a href="cardio.html" class="flex items-center bg-blue-700 rounded-xl px-5 py-3 hover:bg-red-600 transition"><i class="fas fa-running mr-3"></i>Cardio</a>
  </nav>
</div>

<!-- Click Overlay -->
<div id="drawerOverlay" class="fixed inset-0 bg-black bg-opacity-40 hidden z-40 transition-opacity duration-300"></div>
`;


document.getElementById("header").innerHTML = headerHTML;

const footerHTML = `
<footer class="bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center py-6 mt-auto">
  <p class="text-lg font-semibold">&copy; 2025 HealthFit. All rights reserved.</p>
  <p class="text-sm mt-1">Made for fitness lovers by SKG Group</p>
  <div class="flex justify-center space-x-4 mt-3">
    <a href="https://www.instagram.com/decent_boy0310?igsh=M3ZsOWliM2F4a3Rh"><img src="insta-logo.svg" class="w-5 h-5" alt="Instagram" /></a>
    <a href="https://www.facebook.com/sahil.kataria.703129"><img src="Fb-logo.svg" class="w-5 h-5" alt="Facebook" /></a>
    <a href="https://youtube.com/@medicines4you?si=-i3S7JGgw9y0AB88"><img src="Utube-logo.svg" class="w-6 h-6" alt="YouTube" /></a>
  </div>
</footer>
`;

document.getElementById("footer").innerHTML = footerHTML;

// Drawer logic
setTimeout(() => {
  const hamburger = document.getElementById("hamburger");
  const drawer = document.getElementById("sideDrawer");
  const overlay = document.getElementById("drawerOverlay");
  const close = document.getElementById("closeDrawer");

  hamburger.addEventListener("click", () => {
    drawer.classList.remove("-translate-x-full");
    overlay.classList.remove("hidden");
  });

  close.addEventListener("click", () => {
    drawer.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
  });

  overlay.addEventListener("click", () => {
    drawer.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
  });
}, 300);
