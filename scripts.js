document.addEventListener('DOMContentLoaded', () => {
  const skills = {
      Java: `
        <b>Overview:</b><br>
        Java was the first programming language I learned, forming the foundation of my understanding of programming concepts. Through Java, I gained proficiency in common data structures and algorithms, which have been integral to my coursework and projects throughout college.<br>
        
        <b>Academic Projects:</b><br>
        - Class Projects and Command Line Games: Developed various projects and small games, enhancing problem-solving skills and deepening my understanding of Java's capabilities.<br>
        - NBA Statistics Database GUI: For a database management class, I created a GUI for querying an NBA statistics database, showcasing my ability to integrate front-end and back-end systems effectively.
      `,
      Python: `
        <b>Overview:</b><br>
        I commonly use Python for solving problems on LeetCode and Project Euler. I became most familiar with the language through the development of machine learning models such as CNNs, RNNs, and LLMs using PyTorch and PyTorch Lightning.<br>
        
        <b>Fun Fact:</b><br>
        I am the first cousin twice removed of the creator of Python.
      `,
      SQL: `
      <b>Overview:</b><br>
      Familiar with writing SQL queries and working with Microsoft SQL Server Management Studio.<br>
    
      <b>Internship Experience:</b><br>
      During my internship with Werner Electric Supply, I assisted in data validation during the construction of their new data warehouse.
      `,
      R: `
      <b>Overview:</b><br>
      Used R in my studies for data analysis and data visualization. Familiar with common data analysis packages such as:<br>
      - <b>tidyverse</b><br>
      - <b>ggplot2</b><br>
      - <b>dplyr</b>
      `,
      JavaScript: `
      <b>Overview:</b><br>
      JavaScript is the newest language I'm learning. Currently, I'm working on a personal productivity app that uses Node.js and Express to make API calls to my bank, Gmail, and calendar, centralizing these resources into one app.<br>
    
      <b>Other Projects:</b><br>
      - Developed this webpage to showcase my projects and skills.<br>
      - MancalaBot where you can play Mancala against the computer.
      `,
      'PowerApps/Automate': `
        <b>Overview:</b><br>
        During my internship with Werner Electric Supply, I was responsible for creating a PowerApp for the warehouse team. The app and its associated Power Automate flows significantly reduced the time required for the warehouse to capture and upload photos for customers.<br>
    
        <b>Additional Responsibilities:</b><br>
      - Created other apps and flows for interacting with SharePoint sites.<br>
      - Involved in Microsoft account and license administrative duties for managing permissions.
      `,
      'AI/Machine Learning': `
        <b>Overview:</b><br>
        Worked in Jupyter Notebooks using PyTorch and PyTorch Lightning to develop Convolutional Neural Networks (CNNs) for computer vision and image classification, as well as large language models (LLMs) for text analysis.
      `,
      'Numerical Methods': `
      <b>Overview:</b><br>
      Familiar with numerical methods such as matrix multiplication algorithms, gradient descent, and interpolation. Capable of analyzing algorithm efficiency to optimize performance and accuracy.
      `,
      'Data Analysis': `
      <b>Overview:</b><br>
      Familiar with a variety of data analysis techniques, including:<br>
      <ul>
        <li><b>Data Visualization:</b> Creating insightful charts and graphs to represent data trends and patterns.</li>
        <li><b>Data Cleaning:</b> Handling missing values, normalizing data, and transforming data for accuracy and consistency.</li>
        <li><b>Predictive Modeling:</b> Building and evaluating models to forecast future trends and make data-driven predictions.</li>
        <li><b>Inferential Analysis:</b> Conducting hypothesis testing, regression analysis, and drawing conclusions from data samples.</li>
      </ul>
      `,
      'Power BI': `
        <b>Overview:</b><br>
        Completed a 3-day course titled "Introduction to Power BI" from Heartland Business Systems.<br>
        Collaborated in creating interactive dashboards for business applications for Werner Electric Supply.
      `,
      Git: 'Experience collaborating on group projects invloving managing code versions, creating branches, and merging changes.'
  };

  const buttons = document.querySelectorAll('.info-button');
  buttons.forEach(button => {
      button.addEventListener('click', () => {
          const skill = button.getAttribute('data-skill');
          showPopup(skill, skills[skill]);
      });
  });

  function showPopup(skill, description) {
      // Create the pop-up overlay
      const popupOverlay = document.createElement('div');
      popupOverlay.classList.add('popup-overlay');
      
      // Create the pop-up container
      const popupContainer = document.createElement('div');
      popupContainer.classList.add('popup-container');

      // Create the pop-up content
      const popupContent = document.createElement('div');
      popupContent.classList.add('popup-content');

      // Add the skill and description to the pop-up content
      popupContent.innerHTML = `<h2>${skill}</h2><p>${description}</p>`;

      // Add a close button
      const closeButton = document.createElement('button');
      closeButton.textContent = 'Close';
      closeButton.classList.add('close-button');
      closeButton.addEventListener('click', () => {
          document.body.removeChild(popupOverlay);
      });

      // Append the content and close button to the container
      popupContainer.appendChild(popupContent);
      popupContainer.appendChild(closeButton);

      // Append the container to the overlay
      popupOverlay.appendChild(popupContainer);

      // Append the overlay to the body
      document.body.appendChild(popupOverlay);
  }
});