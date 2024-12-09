# Vertical Carousel with Infinite Loop and Middle Card Highlight

A simple and responsive vertical carousel implementation that displays three cards at a time with a focus on the middle card. The carousel supports smooth transitions and infinite looping for an engaging user experience.

## Features

- Displays three cards at a time on the screen.
- The middle card is dynamically highlighted, larger, and more prominent.
- Smooth scrolling transitions between cards.
- Infinite looping using clones of the first and last cards for seamless experience.

---

## Setup Instructions

### Prerequisites

Ensure you have the following installed:

- A modern web browser (Google Chrome, Firefox, Edge, etc.).
- A code editor (e.g., Visual Studio Code).

### Steps to Run the Project Locally

1. Clone this repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   Open the project folder and locate the index.html file.
   ```

Use a Live Server to preview the carousel:

If using Visual Studio Code, install the Live Server extension.
Right-click index.html and choose Open with Live Server.
Interact with the carousel by scrolling up or down using your mouse or touchpad.

Technology Choices and Rationale

1. HTML
   Used to create the structure of the carousel, including the container and card elements.
2. CSS
   Designed for styling the carousel, ensuring responsiveness, and applying animations.
   Applied scaling and opacity for the middle card to create a dynamic, visually appealing effect.
3. JavaScript
   Handles the carousel logic, including scroll events, dynamic positioning, infinite looping, and smooth transitions.
   Rationale:
   Chose plain HTML, CSS, and JavaScript for simplicity, flexibility, and browser compatibility.
   Avoided using external libraries or frameworks to keep the project lightweight.
   Known Limitations / Trade-offs
   No Mobile-Specific Adjustments:
   The carousel is optimized for desktop browsers. On mobile, touch scrolling may need additional enhancements for better usability.
   Limited Customization:
   Card styles, transition speeds, and the number of visible cards are hard-coded. Adding configurability requires additional JavaScript logic.
   Performance Overhead for Large Data:
   If a large number of items are added to the carousel, the cloning logic might slow down rendering.
   Future Improvements
   Touch Support:

Implement touch gestures for better mobile user experience.
Dynamic Item Loading:

Add lazy loading for cards when dealing with a large dataset to optimize performance.
Accessibility Enhancements:

Include ARIA roles and keyboard navigation support to improve accessibility.
Customizable Carousel:

Provide configurable options for:
Number of visible cards.
Transition speed and effects.
Dynamic theming.
Mobile-First Design:

Redesign the carousel for better usability on smaller screens.
Contribution
Contributions are welcome! Please feel free to submit pull requests or open issues for suggestions or bugs.

## License
This project is licensed under the MIT License
