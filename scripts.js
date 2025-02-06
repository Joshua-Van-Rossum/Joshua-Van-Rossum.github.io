const explanations = [
  "<h3>To showcase some of my skills I've tried to implement some fun demonstrations into this website. Click the arrows below to iterate through them. I am consistently trying to add more. </h3>",
   "As a mathematician, I know gambling is a sure fire way to lose all my money. However, as a 21 year old male, I can't help but try to make an algorithm to try to win on sports betting. To the right, you can run a Monte Carlo simulation to simulate a common betting technique of doubling down on your losses. It outputs the average amount you can expect to invest before receving X amount of profit."];
const skills = ['<h2>Skills / Languages</h2><div class="skills-list"><ul id="skill_1"><li><h3>Java</h3></li><li><h3>Python</h3></li><li><h3>R</h3></li><li><h3>SQL</h3></li></ul><ul id="skill_2"><li><h3>Machine Learning Techniques</h3></li><li><h3>Data Mining</h3></li><li><h3>Microsoft Apps / Power Platform</h3></li><li><h3>Data Visualization</h3></li></ul></div>',
   '<div class="calculator"><div class="input-section"><label for="desiredProfit">Desired Profit:</label><input type="number" id="desiredProfit" placeholder="Enter profit amount" oninput="calculateInvestment()"></div><div class="output-section"><label>Expected Investment Before Profit:</label><div id="investmentOutput">--</div></div></div>'];
let index = 0;

function updateDisplay() {
  document.getElementById("explanation").innerHTML = explanations[index];
  document.getElementById("content").innerHTML = skills[index];
}

function prevItem() {
  index = (index - 1 + skills.length) % skills.length;
  updateDisplay();
}

function nextItem() {
  index = (index + 1) % skills.length;
  updateDisplay();
}

function calculateInvestment() {
  const profit = parseFloat(document.getElementById("desiredProfit").value);
  let array = [];

  for (let i = 0; i < 500; i++) {
      array.push(getLowestAmount(profit));
  }
  
  investment = array.reduce((sum, val) => sum + val, 0) / array.length;;

  document.getElementById("investmentOutput").innerText = 
      isNaN(investment) ? "--" : `$${investment.toFixed(2)}`;
}

function getLowestAmount(initial) {
  let lowest = 1;
  let bet = 2;
  let cur = 1;

  while (cur < initial) {
      let num = Math.floor(Math.random() * 2) + 1;
      if (num === 1) {
          cur -= bet;
          bet *= 2;
      } else {
          cur += bet;
          bet = 2;
      }
      lowest = Math.min(cur, lowest);
  }
  return lowest;
}