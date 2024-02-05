document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        { name: "Project 1", description: "A brief description of Project 1." },
        { name: "Project 2", description: "A brief description of Project 2." },
        // Add more projects as needed
    ];

    const projectsGrid = document.getElementById('projects-grid');
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.innerHTML = `
            <h3>${project.name}</h3>
            <p>${project.description}</p>
        `;
        projectsGrid.appendChild(projectElement);
    });

    // Simple form validation example
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission for demonstration
        alert('Form submitted!'); // Replace with actual form submission logic
    });
});
