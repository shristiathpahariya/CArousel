const container = document.querySelector('.carousel-container');
const items = document.querySelectorAll('.carousel-item');

// Clone first and last items for seamless looping
const firstClone = items[0].cloneNode(true);
const lastClone = items[items.length - 1].cloneNode(true);

container.appendChild(firstClone);
container.insertBefore(lastClone, items[0]);

const allItems = document.querySelectorAll('.carousel-item');
let currentIndex = 1; // Start at the first real item
let isScrolling = false;

function updateCarousel() {
  allItems.forEach((item, index) => {
    item.classList.remove('middle');
    if (index === currentIndex) {
      item.classList.add('middle');
    }
  });

  // Translate the container to bring the current item into focus
  const translateY = -(currentIndex - 1) * 35; // Each card takes 35vh (25vh height + 10vh margin)
  container.style.transform = `translateY(${translateY}vh)`;
}

// Handle scroll events
window.addEventListener('wheel', (event) => {
  if (isScrolling) return; // Prevent repeated scrolls during animation
  isScrolling = true;

  // Determine scroll direction
  if (event.deltaY > 0) {
    currentIndex += 1; // Scroll down
  } else {
    currentIndex -= 1; // Scroll up
  }

  // Handle looping logic
  if (currentIndex === allItems.length - 1) {
    setTimeout(() => {
      currentIndex = 1;
      container.style.transition = 'none'; // Disable transition for seamless looping
      updateCarousel();
      setTimeout(() => (container.style.transition = 'transform 0.5s ease-in-out')); // Re-enable transition
    }, 500);
  } else if (currentIndex === 0) {
    setTimeout(() => {
      currentIndex = allItems.length - 2;
      container.style.transition = 'none'; // Disable transition for seamless looping
      updateCarousel();
      setTimeout(() => (container.style.transition = 'transform 0.5s ease-in-out')); // Re-enable transition
    }, 500);
  }

  updateCarousel();

  // Allow scrolling again after the animation
  setTimeout(() => (isScrolling = false), 500);
});

// Initialize the carousel
updateCarousel();
