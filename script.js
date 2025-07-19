document.addEventListener('DOMContentLoaded', () => {
  const header = `
    <header class="bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-xl sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 class="text-2xl font-bold">FitLife Pro Max</h1>
        <nav class="space-x-4">
          <a href=class=\"hover:underline\">Home</a>
          <a href=zym.html\" class=\"hover:underline\">Gym</a>
          <a href=pages/calisthetic.html\" class=\"hover:underline\">Calisthenics</a>
          <a href=cardio.html\" class=\"hover:underline\">Cardio</a>
        </nav>
      </div>
    </header>
  `;

  const footer = `
    <footer class="bg-gray-900 text-white text-center py-6 mt-12">
      <p>&copy; 2025 FitLife Ultra Pro Max. All rights reserved.</p>
      <p class="text-sm">Made with ❤️ for fitness lovers</p>
    </footer>
  `;

  document.getElementById('header').innerHTML = header;
  document.getElementById('footer').innerHTML = footer;
});
