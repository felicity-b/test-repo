// images array
const imageNames = [
  { url: '/images/bcookie.png', name: 'Cookie', id:"4" },
  { url: '/images/bdaycake.png', name: 'Birthday Cake', id:"5" },
  { url: '/images/bskit.png', name: 'Biscuit', id:"6" },
  { url: '/images/cadb.png', name: 'Choco Bar', id:"7" },
  { url: '/images/cakebit.png', name: 'Cake bite', id:"8" },
  { url: '/images/cakeblue.png', name: 'Blue Velvet Cake', id:"9" },
  { url: '/images/cakeflat.png', name: 'Flat Cake ', id:"10" },
  { url: '/images/cakepizza.png', name: 'Cake pizza', id:"11" },
  { url: '/images/cakered.png', name: 'Red Velvet Cake', id:"12" },
  { url: '/images/cakesl.png', name: 'More Cake', id:"13" },
  { url: '/images/ccups.png', name: 'cupcake', id:"14" },
  { url: '/images/chocotabs.png', name: 'Choco tabs', id:"15" },
  { url: '/images/chunkcake.png', name: 'Choco tabs', id:"16" },
  { url: '/images/platecake.png', name: 'plate cake', id:"17" },
  { url: '/images/standcake.png', name: 'Cake stand tabs', id:"18" },
  { url: '/images/wrappedc.png', name: 'Wrapped Choco', id:"19" },
];


function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function changeColor(nameElement, imageElement) {
  const nameTextColor = getRandomColor();
  const imageBackgroundColor = getRandomColor();

  nameElement.style.color = nameTextColor;
  imageElement.style.backgroundColor = imageBackgroundColor;
}

function createImageGallery() {
  const galleryContainer = document.getElementById('galleryContainer');

  imageNames.forEach((image, index) => {
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('picture');

    const img = document.createElement('img');
    img.src = image.url;
    img.alt = image.name;

    const nameContainerDiv = document.createElement('div');
    nameContainerDiv.classList.add('name-container');

    const nameDiv = document.createElement('div');
    nameDiv.classList.add('name');
    nameDiv.textContent = image.name;

    nameContainerDiv.appendChild(nameDiv);

    imageDiv.appendChild(img);
    imageDiv.appendChild(nameContainerDiv);

    galleryContainer.appendChild(imageDiv);

    // Attach the click event to the name div
    nameDiv.onclick = () => changeColor(nameDiv, imageDiv);
  });
}

// Call the function to create the image gallery when the page loads
createImageGallery();


  