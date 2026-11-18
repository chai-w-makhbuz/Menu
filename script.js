// Display only images that successfully load, from page1.png to page100.png.
const totalPages = 100;
const menuContainer = document.getElementById('menu-pages');

if (menuContainer) {
  const checks = Array.from({ length: totalPages }, (_, index) => {
    const number = index + 1;
    return new Promise((resolve) => {
      const image = new Image();
      image.alt = `Menu Page ${number}`;
      image.className = 'menu-page';
      image.onload = () => resolve(image);
      image.onerror = () => resolve(null);
      image.src = `page${number}.png`;
    });
  });

  Promise.all(checks).then((images) => {
    const fragment = document.createDocumentFragment();
    for (const image of images) {
      if (!image) continue;
      fragment.appendChild(image);
      const divider = document.createElement('div');
      divider.className = 'page-divider';
      fragment.appendChild(divider);
    }
    menuContainer.appendChild(fragment);
  });
}
