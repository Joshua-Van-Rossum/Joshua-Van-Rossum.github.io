const contents = document.querySelectorAll('.resume-content');
let currentIndex = 0;

// Initialize: hide all, then show the first visible one (not content0)
function showContent(index) {
contents.forEach((el, i) => {
el.style.display = (i === index) ? 'block' : 'none';
});
}

function nextItem() {
currentIndex = (currentIndex + 1) % contents.length;
showContent(currentIndex);
}

function prevItem() {
currentIndex = (currentIndex - 1 + contents.length) % contents.length;
showContent(currentIndex);
}

// Start by showing the second item (index 1), hiding content0
currentIndex = 1;
showContent(currentIndex);

