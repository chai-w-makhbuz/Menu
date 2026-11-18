// Check menu images from page1.png through page100.png.
const totalPages = 100;
const menuContainer = document.getElementById('menu-pages');

for (let i = 1; i <= totalPages; i++) {
  const page = document.createElement('div');
  page.style.display = 'none'; // Never display an image before it loads.

  const image = document.createElement('img');
  image.alt = `Menu Page ${i}`;
  image.className = 'menu-page';
  image.loading = i === 1 ? 'eager' : 'lazy';

  const divider = document.createElement('div');
  divider.className = 'page-divider';

  page.appendChild(image);
  page.appendChild(divider);
  menuContainer.appendChild(page); // Keep page order even if images load out of order.

  image.onload = () => {
    page.style.display = 'block';
  };

  image.onerror = () => {
    page.remove(); // Missing image: show nothing, including no divider.
  };

  image.src = `page${i}.png`;
}
