 const projects = [
    {
        title: 'Full-Court-Stats.com',
        description: 'A web platform for NBA fans to create custom statistics for ranking and comparing basketball players. Currently in early stages and running on a free Render instance.',
        link: 'https://full-court-stats.com'
    },
    // Add more projects here
];
let currentIndex = 0;
const projectTitle = document.getElementById('project-title');
const projectDescription = document.getElementById('project-description');
const projectLink = document.getElementById('project-link');
const nextProjectButton = document.getElementById('next-project');

function displayProject(index) {
    const project = projects[index];
    projectTitle.textContent = project.title;
    projectDescription.textContent = project.description;
    projectLink.href = project.link;
}

nextProjectButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % projects.length;
    displayProject(currentIndex);
});

displayProject(currentIndex);



// Job Carousel
let currentJobIndex = 0;
const jobCards = document.querySelectorAll('.job-card');
const jobDots = document.querySelectorAll('.experience-carousel .dot');

function showJob(index) {
    jobCards.forEach(card => card.classList.remove('active'));
    jobDots.forEach(dot => dot.classList.remove('active'));
    
    jobCards[index].classList.add('active');
    jobDots[index].classList.add('active');
    currentJobIndex = index;
}

function nextJob() {
    let newIndex = (currentJobIndex + 1) % jobCards.length;
    showJob(newIndex);
}

function prevJob() {
    let newIndex = (currentJobIndex - 1 + jobCards.length) % jobCards.length;
    showJob(newIndex);
}

jobDots.forEach(dot => {
    dot.addEventListener('click', () => {
        showJob(parseInt(dot.dataset.index));
    });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevJob();
    } else if (e.key === 'ArrowRight') {
        nextJob();
    }
});


