
// headerFooter.js - Advanced Dark Popup with Icons and Hover Effects

const headerHTML = `
<header class="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg sticky top-0 z-50">
  <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
    <div class="flex items-center space-x-2">
       <img src="images/logo.png" alt="logo" class="w-8 h-8 rounded-full" />
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

<!-- Styled Side Drawer -->
<div id="sideDrawer" class="fixed top-0 left-0 h-full w-72 bg-gradient-to-br from-blue-100 to-indigo-200 text-gray-900 shadow-2xl z-50 transform -translate-x-full transition-transform duration-500 ease-in-out p-4 overflow-y-auto">
  <div class="flex justify-between items-center p-5 border-b border-indigo-300">
    <h2 class="text-xl font-bold text-indigo-800">Menu</h2>
    <button id="closeDrawer" class="text-3xl font-bold text-white hover:text-red-500">&times;</button>
  </div>
  <nav class="flex flex-col space-y-3 text-base">
    <a href=""index.html"" class="flex items-center space-x-3 px-4 py-3 pink-600 hover:bg-blue-600 hover:text-white transition-colors"><i class="fas fa-user-plus w-5"></i><span>🏠 Home</span></a>
    <a href="zym.html" class="flex items-center space-x-3 px-4 py-3 blue-600 hover:bg-blue-600 hover:text-white transition-colors"><i class="fas fa-dumbbell w-5"></i><span>💪 Gym</span></a>
    <a href="calisthetic.html" class="flex items-center space-x-3 px-4 py-3 blue-600 hover:bg-blue-600 hover:text-white transition-colors"><i class="fas fa-person-walking w-5"></i><span>🤸 Calisthenics</span></a>
    <a href="cardio.html" class="flex items-center space-x-3 px-4 py-3 blue-600 hover:bg-blue-600 hover:text-white transition-colors"><i class="fas fa-running w-5"></i><span>🏃 Cardio</span></a>
    
  </nav>
</div>

<div id="drawerOverlay" class="fixed inset-0 bg-black bg-opacity-40 hidden z-40 transition-opacity duration-300"></div>
`;

document.getElementById("header").innerHTML = headerHTML;

const footerHTML = `
<footer class="bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center py-6 mt-auto">
  <p class="text-lg font-semibold">&copy; 2025 HealthFit. All rights reserved.</p>
  <p class="text-sm mt-1">Made for fitness lovers by SKG Group</p>
  <div class="flex justify-center space-x-4 mt-3">
    <a href="#"><img src="icons/instagram.svg" class="w-5 h-5" alt="Instagram" /></a>
    <a href="#"><img src="icons/facebook.svg" class="w-5 h-5" alt="Facebook" /></a>
    <a href="#"><img src="icons/youtube.svg" class="w-5 h-5" alt="YouTube" /></a>
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
