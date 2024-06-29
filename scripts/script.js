document.addEventListener('DOMContentLoaded', function () {
    // Get the SVG element
    const svg = document.querySelector('.svg');

    // Function to change SVG background color
    function changeSvgBackgroundColor(color) {
        svg.style.backgroundColor = color;
    }

    // Get all the sections
    const sections = document.querySelectorAll('.sec1');

    // Set up an Intersection Observer to detect when a section is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bgColor = window.getComputedStyle(entry.target).backgroundColor;
                changeSvgBackgroundColor(bgColor);
            }
        });
    }, {
        threshold: 0.1 // Adjust the threshold as needed
    });

    // Observe each section
    sections.forEach(section => {
        observer.observe(section);
    });
});
