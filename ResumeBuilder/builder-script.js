let currentSummary = "";
let jobTitle = "";




//skills
const skills = [
  "Data Analysis",
  "Data Visualization",
  "Process Automation",
  "Problem Solving",
  "Project Management",
  "Continual Improvement",
  "Analytical Thinking",
  "Database Management",
  "Microsoft Power Platform",
  "PowerBI & Tableau",
  "Statistical Modeling",
  "Data Cleaning & Wrangling",
  "Data Mining",
  "Python",
  "Numpy & Pandas",
  "Pytorch & TensorFlow",
  "Scikit-Learn",
  "R",
  "Excel",
  ".Net",
  "AI & Machine Learning",
  "SQL",
  "Java",
  "AWS",
  "Snowflake"
];

// Grab elements
const textarea = document.getElementById("summary-textarea");
const presetButtons = document.querySelectorAll(".summary-preset");
const profileText = document.getElementById("profile-text");
const jobTextArea = document.getElementById("jobtitle-textarea");

// Update profile text whenever summary changes
function updateSummary(text) {
  currentSummary = text;
  textarea.value = text;
  profileText.textContent = text; // 👈 sync <p> content
}

function updateJobTitle(text) {
    jobTitle = text;
    jobTextArea.value = text;
    document.querySelector(".job-title").textContent = text;
}

// When a preset button is clicked
presetButtons.forEach(button => {
  button.addEventListener("click", () => {
    const presetText = button.getAttribute("data-preset");
    updateSummary(presetText);
  });
});

// When user edits the textarea
textarea.addEventListener("input", () => {
  updateSummary(textarea.value);
});

jobTextArea.addEventListener("input", () => {
    updateJobTitle(jobTextArea.value);
});

const skillsOptions = document.getElementById("skills-options");
const col1 = document.getElementById("skills-list-1");
const col2 = document.getElementById("skills-list-2");

// Keep track of selection order
let selectedSkills = [];

// Build checkboxes
skills.forEach(skill => {
  const label = document.createElement("label");
  label.style.display = "block";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.value = skill;

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      // Add skill to selection list
      selectedSkills.push(skill);
    } else {
      // Remove skill
      selectedSkills = selectedSkills.filter(s => s !== skill);
    }
    renderSkills();
  });

  label.appendChild(checkbox);
  label.append(" " + skill);
  skillsOptions.appendChild(label);
});

// Render alternating skills into columns
function renderSkills() {
  col1.innerHTML = "";
  col2.innerHTML = "";

  selectedSkills.forEach((skill, index) => {
    const li = document.createElement("li");
    li.textContent = skill;

    // Alternate placement
    if (index % 2 === 0) {
      col1.appendChild(li);
    } else {
      col2.appendChild(li);
    }
  });
}

// Get all project checkboxes
const projectCheckboxes = document.querySelectorAll('#ProjectsPicker input[type="checkbox"]');

projectCheckboxes.forEach(cb => {
  cb.addEventListener("change", () => {
    const targetId = cb.getAttribute("data-target");
    const projectDiv = document.getElementById(targetId);

    if (cb.checked) {
      projectDiv.style.display = "block";
    } else {
      projectDiv.style.display = "none";
    }
  });
});

const certToggle = document.getElementById("cert-toggle");
const certSection = document.getElementById("cert-section");

// Show/hide certifications based on checkbox
certToggle.addEventListener("change", () => {
  if (certToggle.checked) {
    certSection.style.display = "block";
  } else {
    certSection.style.display = "none";
  }
});


// Grab all responsibility checkboxes
const respToggles = document.querySelectorAll(".resp-toggle");

respToggles.forEach(cb => {
  cb.addEventListener("change", () => {
    const targetId = cb.getAttribute("data-target");
    const li = document.getElementById(targetId);

    if (cb.checked) {
      li.style.display = "list-item";
    } else {
      li.style.display = "none";
    }
  });
});


const mastersToggle = document.getElementById("masters-toggle");
const edu1 = document.getElementById("edu1");
const edu2 = document.getElementById("edu2");

// Function to update which education container is visible
function updateEducationDisplay() {
  if (mastersToggle.checked) {
    edu1.style.display = "flex";
    edu2.style.display = "none";
  } else {
    edu1.style.display = "none";
    edu2.style.display = "block";
  }
}

// Initialize on page load
updateEducationDisplay();

// Update when toggle changes
mastersToggle.addEventListener("change", updateEducationDisplay);

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("downloadPDF");
  const resumeElement = document.getElementById("resume");

  if (!button || !resumeElement) {
    console.error("Could not find #downloadBtn or #resume in the DOM.");
    return;
  }

  button.addEventListener("click", () => {
    const opt = {
        margin: [0, 0, 0, 0],
        filename: "Resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, scrollX: 0, scrollY: 0 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
        };

    html2pdf().set(opt).from(resumeElement).save();
  });
});


