// Deselects all players in the legend and updates the chart
function deselectAllPlayers() {
    const legendList = document.getElementById('legend-list');
    if (!legendList) return;
    const items = legendList.querySelectorAll('li');
    items.forEach(li => {
        const checkbox = li.querySelector('input[type="checkbox"]');
        if (checkbox && checkbox.checked) {
            checkbox.checked = false;
            checkbox.dispatchEvent(new Event('change'));
        }
    });
    
    console.log("All players deselected");
}

const slides = [
"Every year, the NBAs Most Valuable Player (MVP) award is given to the league’s top performer. However, even dominant players can stop receiving votes despite maintaining or improving their performance. This phenomenon is known as voter fatigue, where voters grow reluctant to keep awarding the same player year after year. But is this phenmonon real? Or are there other underlying causes for inconsistent MVP votes. <br><br>This narrative visualization is designed to help you explore the concept of voter fatigue. You can examine players' careers to see when their MVP streaks ended, even as their stats stayed steady or improved. Use the filters to select specific players and stats, and look for white circles to identify MVP-winning seasons.",
"We'll first examine players Lebron James and Derrick Rose around the 2010-11 season. Lebron James has just come off winning two consecutive MVP awards in 2008-09 and 2009-10, while Derrick Rose is a rising star in the league. We'll use the Efficiency metric for comparison between the players, this metric aims to capture a players total contribution to their team. <br><br>Lebron James Efficiency score is 24% higher than Derrick Rose's. Despite this, Derrick Rose won the MVP in 2010–11, becoming the youngest player ever to receive the award. Interestingly, LeBron James would go on to win the MVP again in the next two seasons (2011-12 and 2012-13), with statistics that were remarkably similar to his 2010-11 performance, highlighting how voter fatigue may have influenced the decision that year.",
"If we zoom out and look at every MVP winner form 1980-2025, we can see this type of discrepency in a couple of other places in NBA history. Steve Nash's MVP's in 2004-05 and 2005-06 are often debated due to the perception that other players had stronger seasons. Other seasons where we see large gaps in Efficiency include: <br><br> Michael Jordan 1997-98 <br><br>Allen Iverson 2000-01 <br><br>Shai Gilgeous-Alexander 2024-25",
"Let us look at the most recent example in 2024-25. The six years prior, the MVP award has gone to a dominant center in Joel Embiid, Giannis Antentakounmpo and Nikola Jokic. In 2024-25, both Giannis and Nikola have historically high seseons in Efficiency, however the award went to Shai Gilgeous-Alexander instead. A ball dominant guard who can score the ball. Nikola Jokic scored 28% higher in efficiency but he had won the award 3 times in the past 4 years. <br><br>The NBA is a business, and the MVP award is a way to market that business. The league wants to promote new stars and keep the narrative fresh. This can lead to voter fatigue, where voters are reluctant to give the award to the same player repeatedly, even if their performance remains stellar. <br><br>In this case, Shai Gilgeous-Alexander's win can be seen as a way to highlight a new star in the league, despite the statistical dominance of players like Jokic and Giannis.",
"If we compare Shai to some of our other noteable MVP winners, we can see that him, Derrick Rose and Allen Iverson all won their awards at similar points in their careers. All of them were young up and coming stars with exciting play styles. <br><br>Their marketability was just starting to peak and the NBA cashed in by giving them their MVP awards",
"Michael Jordan's 1997-98 MVP season and Steve Nash's 2004-05 and 2005-06 seasons do not follow this same pattern of being an up and coming star. Michael Jordan was on the verge of winning three straight championships and Steve Nash had just joined a new team and was pioneering a new style of play with a flashy fast paced offense. <br><br>There will never be an exact reason as to why a player is voted MVP or not, but the evidence makes it clear that it is not solely based on individual statistics but also the narrative around the player. Whether that narrative is being an exciting new player like Shai, fundamentally changing the like game like Jordan and Nash, or your competition has simply won the award too many times in the recent past, a player's individual story plays an impactful role. Voters may get tired of writing the same name down year after year, opting instead to reward a fresh storyline that keeps fans engaged and the league evolving. In the end, the MVP is not just a measure of performance, it's a reflection of timing, context, and the story the league wants to tell. "
];

let currentSlide = 0; 

const slideContentDiv = document.getElementById("slide-content");

function showSlide(index) {
    if (index >= 0 && index < slides.length) {
       
        currentSlide = index;
        slideContentDiv.innerHTML = `<p>${slides[index]}</p>`;

        if (index === 0) {
            deselectAllPlayers();
            document.getElementById('season-start').value = '2003-04';
            document.getElementById('season-end').value = '2024-25';
            document.getElementById('myCheckbox').checked = false;
            
            const form = document.getElementById('options-form');
            if (form) {
                form.dispatchEvent(new Event('submit'));
            }

            addPlayerToSelection('fake player');
            addPlayerToSelection('LeBron James');


        }

        if (index === 1) {
            deselectAllPlayers();
            document.getElementById('season-start').value = '2003-04';
            document.getElementById('season-end').value = '2024-25';
            document.getElementById('myCheckbox').checked = false;
            
            const form = document.getElementById('options-form');
            if (form) {
                form.dispatchEvent(new Event('submit'));
            }

            addPlayerToSelection('fake player');
            addPlayerToSelection('LeBron James');
            addPlayerToSelection('Derrick Rose');
            
            const svgG = d3.select("#chart svg g");
            
            svgG.selectAll('.custom-vertical-line').remove();
            svgG.selectAll('.custom-popup-text').remove();
            const xCoord = 257;
            const height = 62;
            svgG.append("line")
                .attr("x1", xCoord)
                .attr("x2", xCoord)
                .attr("y1", 54)
                .attr("y2", 54 + height)
                .attr("stroke", "black")
                .attr("stroke-width", 2)
                .attr("class", "custom-vertical-line");

          
            svgG.append("rect")
                .attr("x", xCoord + 10)
                .attr("y", 54 + height/2 - 18)
                .attr("width", 140)
                .attr("height", 36)
                .attr("rx", 8)
                .attr("fill", "#222")
                .attr("stroke", "#fff")
                .attr("stroke-width", 1.5)
                .attr("class", "custom-popup-text");
            svgG.append("text")
                .attr("x", xCoord + 18)
                .attr("y", 54 + height/2 + 5)
                .attr("fill", "#fff")
                .attr("font-size", 15)
                .attr("class", "custom-popup-text")
                .text("23.81 % difference");
            
        }

        if (index === 2) {
            deselectAllPlayers();
            document.getElementById('season-start').value = '1980-81';
            document.getElementById('season-end').value = '2024-25';
            document.getElementById('myCheckbox').checked = true; 

            const form = document.getElementById('options-form');
            if (form) {
                form.dispatchEvent(new Event('submit'));
            }

            const svgG = d3.select("#chart svg g");
                
            svgG.selectAll('.custom-vertical-line').remove();
            let xCoord = 298;
            let height = 46;
            svgG.append("line")
                .attr("x1", xCoord)
                .attr("x2", xCoord)
                .attr("y1", 133)
                .attr("y2", 133 + height)
                .attr("stroke", "black")
                .attr("stroke-width", 2)
                .attr("class", "custom-vertical-line");

            xCoord = 350;
            height =80;
            svgG.append("line")
                .attr("x1", xCoord)
                .attr("x2", xCoord)
                .attr("y1", 114)
                .attr("y2", 114 + height)
                .attr("stroke", "black")
                .attr("stroke-width", 2)
                .attr("class", "custom-vertical-line");

            xCoord = 438;
            height =53;
            svgG.append("line")
                .attr("x1", xCoord)
                .attr("x2", xCoord)
                .attr("y1", 120)
                .attr("y2", 120 + height)
                .attr("stroke", "black")
                .attr("stroke-width", 2)
                .attr("class", "custom-vertical-line");

            xCoord = 420;
            height =90;
            svgG.append("line")
                .attr("x1", xCoord)
                .attr("x2", xCoord)
                .attr("y1", 104)
                .attr("y2", 104 + height)
                .attr("stroke", "black")
                .attr("stroke-width", 2)
                .attr("class", "custom-vertical-line");

            xCoord = 525;
            height =49;
            svgG.append("line")
                .attr("x1", xCoord)
                .attr("x2", xCoord)
                .attr("y1", 135)
                .attr("y2", 135+ height)
                .attr("stroke", "black")
                .attr("stroke-width", 2)
                .attr("class", "custom-vertical-line");

            xCoord = 770;
            height =81;
            svgG.append("line")
                .attr("x1", xCoord)
                .attr("x2", xCoord)
                .attr("y1", 3)
                .attr("y2", 3+ height)
                .attr("stroke", "black")
                .attr("stroke-width", 2)
                .attr("class", "custom-vertical-line");
        }

        if (index === 3) {
            deselectAllPlayers();
            document.getElementById('season-start').value = '2018-19';
            document.getElementById('season-end').value = '2024-25';
            document.getElementById('myCheckbox').checked = false;
            
            const form = document.getElementById('options-form');
            if (form) {
                form.dispatchEvent(new Event('submit'));
            }
            addPlayerToSelection('Fake player');
            addPlayerToSelection('Joel Embiid');
            addPlayerToSelection('Giannis Antetokounmpo');
            addPlayerToSelection('Nikola Jokić');
            addPlayerToSelection('Shai Gilgeous-Alexander');

            const svgG = d3.select("#chart svg g");
            let xCoord = 770;
            let height = 85;
            svgG.append("line")
                .attr("x1", xCoord)
                .attr("x2", xCoord)
                .attr("y1", 1)
                .attr("y2", 1 + height)
                .attr("stroke", "black")
                .attr("stroke-width", 2)
                .attr("class", "custom-vertical-line");

            
            svgG.append("rect")
                .attr("x", xCoord - 150)
                .attr("y", 28 + height/2 - 18)
                .attr("width", 140)
                .attr("height", 36)
                .attr("rx", 8)
                .attr("fill", "#222")
                .attr("stroke", "#fff")
                .attr("stroke-width", 1.5)
                .attr("class", "custom-popup-text");
            svgG.append("text")
                .attr("x", xCoord - 142)
                .attr("y", 28 + height/2 + 5)
                .attr("fill", "#fff")
                .attr("font-size", 15)
                .attr("class", "custom-popup-text")
                .text("27.87 % difference");

        }

        if (index === 4) {
            deselectAllPlayers();
            document.getElementById('season-start').value = '1995-96';
            document.getElementById('season-end').value = '2024-25';
            document.getElementById('myCheckbox').checked = false;
            
            const form = document.getElementById('options-form');
            if (form) {
                form.dispatchEvent(new Event('submit'));
            }

            addPlayerToSelection('fake player');
            addPlayerToSelection('Shai Gilgeous-Alexander');
            addPlayerToSelection('Derrick Rose');
            addPlayerToSelection('Allen Iverson');
        }

        if (index === 5) {
            deselectAllPlayers();
            document.getElementById('season-start').value = '1984-85';
            document.getElementById('season-end').value = '2012-13';
            document.getElementById('myCheckbox').checked = false;

            const form = document.getElementById('options-form');
            if (form) {
                form.dispatchEvent(new Event('submit'));
            }


            addPlayerToSelection('fake player');
            addPlayerToSelection('Steve Nash');
            addPlayerToSelection('Michael Jordan');

        }
    }
}

// Add event listeners to number buttons
const slideButtons = document.querySelectorAll(".slide-btn");
slideButtons.forEach((btn, index) => {
btn.addEventListener("click", () => {
    showSlide(index);
});
});

// Left/right arrows
document.getElementById("slide-left").addEventListener("click", () => {
showSlide((currentSlide - 1 + slides.length) % slides.length);
});

document.getElementById("slide-right").addEventListener("click", () => {
showSlide((currentSlide + 1) % slides.length);
});


showSlide(0);


document.addEventListener('DOMContentLoaded', function () {
    d3.csv('MVP_Player_Data.csv').then(function (data) {
        // Form elements
        const playerSelect = document.getElementById('player-select');
        const seasonStartSelect = document.getElementById('season-start');
        const seasonEndSelect = document.getElementById('season-end');
        const perTotalsSelect = document.getElementById('per-totals');
        const columnSelect = document.getElementById('column-select');
        const showOthersCheckbox = document.getElementById('myCheckbox');
        const form = document.getElementById('options-form');
        const chartContainer = d3.select('#chart');
        const legendContainer = d3.select('#legend');

        // Populate dropdowns
        const players = [...new Set(data.map(d => d.PLAYER_NAME))].sort();
        players.forEach(player => {
            playerSelect.innerHTML += `<option value="${player}">${player}</option>`;
        });

        const allSeasons = [...new Set(data.map(d => d.SEASON_ID))].sort();
        allSeasons.forEach(season => {
            seasonStartSelect.innerHTML += `<option value="${season}">${season}</option>`;
            seasonEndSelect.innerHTML += `<option value="${season}">${season}</option>`;
        });

        const stats = Object.keys(data[0]).filter(key => !["PLAYER_ID", "SEASON_ID", "LEAGUE_ID", "TEAM_ID", "PLAYER_NAME", "MVP", "TEAM_ABBREVIATION", "PLAYER_AGE"].includes(key));
        stats.forEach(stat => {
            columnSelect.innerHTML += `<option value="${stat}">${stat}</option>`;
        });
        
        
        //defaults
        columnSelect.value = 'EFF';
        playerSelect.value = 'LeBron James'; 
        seasonStartSelect.value = '2003-04'; 
        seasonEndSelect.value = '2024-25'; 

        playerSelect.addEventListener("change", () => {
            const selectedPlayer = playerSelect.value;
            console.log("Selected Player:", selectedPlayer);

            d3.csv('MVP_Player_Data.csv').then(function (data) {
                
                const playerData = data.filter(row => row.PLAYER_NAME === selectedPlayer);

                
                const seasons = playerData.map(row => row.SEASON_ID).sort();

                if (seasons.length > 0) {
                    const firstSeason = seasons[0];
                    const lastSeason = seasons[seasons.length - 1];

                    
                    seasonStartSelect.value = firstSeason;
                    seasonEndSelect.value = lastSeason;
                }
            });
        });


        

        // Legend ad chart DRAWING 
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            
            const selectedPlayer = playerSelect.value;
            const seasonStart = seasonStartSelect.value;
            const seasonEnd = seasonEndSelect.value;
            const statColumn = columnSelect.value;
            const showAll = showOthersCheckbox.checked;
            const avgOrTotal  = perTotalsSelect.value;

            
            chartContainer.selectAll("*").remove();

            
            const filteredData = data.filter(d => d.SEASON_ID >= seasonStart && d.SEASON_ID <= seasonEnd);
            const filteredPlayers = [...new Set(filteredData.map(d => d.PLAYER_NAME))].sort();
            
            const targetPlayers = showAll ? filteredPlayers : [selectedPlayer];

            
            const legendList = document.getElementById('legend-list');
            legendList.innerHTML = '';
            
            let selectedPlayers = new Set(targetPlayers);

            filteredPlayers.forEach(player => {
                const colorVal = d3.schemeSet3[players.indexOf(player) % 12];
                const li = document.createElement('li');
                li.style.display = 'flex';
                li.style.alignItems = 'center';
                li.style.gap = '8px';

                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = targetPlayers.includes(player);
                checkbox.value = player;
                checkbox.style.margin = 0;

                const swatch = document.createElement('span');
                swatch.style.display = 'inline-block';
                swatch.style.width = '18px';
                swatch.style.height = '18px';
                swatch.style.background = colorVal;
                swatch.style.borderRadius = '4px';
                swatch.style.border = '1px solid #333';

                const label = document.createElement('label');
                label.textContent = player;
                label.style.fontSize = '14px';

                li.appendChild(checkbox);
                li.appendChild(swatch);
                li.appendChild(label);
                legendList.appendChild(li);

                checkbox.addEventListener('change', function() {
                    if (this.checked) {
                        selectedPlayers.add(player);
                    } else {
                        selectedPlayers.delete(player);
                    }
                    drawChart();
                });
            });

            // Draw chart 
            function drawChart() {
                chartContainer.selectAll("*").remove();
                const perGameColumns = ['FTM','FTA','OREB','DREB','REB','AST','STL','BLK','TOV','PF','PTS','FG3M','FG3A','MIN','FGM','FGA'];

                const groupedData = Array.from(selectedPlayers).map(player => {
                    return {
                        player,
                        values: filteredData
                            .filter(d => d.PLAYER_NAME === player)
                            .map(d => {
                                let rawValue = +d[statColumn];
                                if (avgOrTotal === 'per' && perGameColumns.includes(statColumn)) {
                                    const gamesPlayed = +d.GP;
                                    rawValue = gamesPlayed > 0 ? rawValue / gamesPlayed : 0;
                                }
                                return {
                                    season: d.SEASON_ID,
                                    value: rawValue
                                };
                            })
                    };
                });

                // Chart setup
                const margin = { top: 40, right: 20, bottom: 40, left: 10 },
                    width = 800 - margin.left - margin.right,
                    height = 500 - margin.top - margin.bottom;

                const svg = chartContainer.append('svg')
                    .attr('width', width + margin.left + margin.right)
                    .attr('height', height + margin.top + margin.bottom)
                    .append('g')
                    .attr('transform', `translate(${margin.left},${margin.top})`);

                const x = d3.scalePoint()
                    .domain(allSeasons.filter(season => season >= seasonStart && season <= seasonEnd))
                    .range([0, width]);

                const y = d3.scaleLinear()
                    .domain([0, d3.max(groupedData.flatMap(d => d.values.map(v => v.value)))])
                    .range([height, 0]);

                const color = d3.scaleOrdinal(d3.schemeSet3).domain(players);

                // Axes
                svg.append('g')
                    .attr('transform', `translate(0,${height})`)
                    .call(d3.axisBottom(x).tickFormat(d => d ? d.substring(2) : d))
                    .selectAll('text')
                    .attr('transform', 'rotate(-40)')
                    .style('text-anchor', 'end');
                svg.append('g')
                    .call(d3.axisRight(y));

                // Line generator
                const line = d3.line()
                    .x(d => x(d.season))
                    .y(d => y(d.value));

                // Draw lines
                groupedData.forEach(player => {
                    svg.append('path')
                        .datum(player.values)
                        .attr('fill', 'none')
                        .attr('stroke', color(player.player))
                        .attr('stroke-width', 2)
                        .attr('d', line);

                    // Tooltip div
                    let tooltip = d3.select('body').select('.mvp-tooltip');
                    if (tooltip.empty()) {
                        tooltip = d3.select('body')
                            .append('div')
                            .attr('class', 'mvp-tooltip')
                            .style('position', 'absolute')
                            .style('background', '#222')
                            .style('color', '#fff')
                            .style('padding', '6px 12px')
                            .style('border-radius', '6px')
                            .style('pointer-events', 'none')
                            .style('font-size', '13px')
                            .style('opacity', 0);
                    }

                    player.values.forEach(datum => {
                        const original = filteredData.find(row => row.PLAYER_NAME === player.player && row.SEASON_ID === datum.season);
                        if (original && original.MVP && +original.MVP === 1) {
                            svg.append('circle')
                                .attr('cx', x(datum.season))
                                .attr('cy', y(datum.value))
                                .attr('r', 6)
                                .attr('fill', '#fff')
                                .attr('stroke', '#000')
                                .attr('stroke-width', 2);
                        }
                    });

                    
                    player.values.forEach(datum => {
                        svg.append('circle')
                            .attr('cx', x(datum.season))
                            .attr('cy', y(datum.value))
                            .attr('r', 5)
                            .attr('fill', color(player.player))
                            .attr('opacity', 0) 
                            .on('mouseover', function (event) {
                                tooltip.transition().duration(150).style('opacity', 0.95);
                                tooltip.html(`<strong>${player.player}</strong><br>Season: ${datum.season}<br>${statColumn}: ${datum.value.toFixed(1)}`)
                                    .style('left', (event.pageX + 10) + 'px')
                                    .style('top', (event.pageY - 28) + 'px');
                                d3.select(this).attr('opacity', 0.8); 
                            })
                            .on('mousemove', function (event) {
                                tooltip.style('left', (event.pageX + 10) + 'px')
                                    .style('top', (event.pageY - 28) + 'px');
                            })
                            .on('mouseout', function () {
                                tooltip.transition().duration(200).style('opacity', 0);
                                d3.select(this).attr('opacity', 0); 
                            });
                    });

                    
                    
                });


                // Chart title
                svg.append('text')
                    .attr('x', width / 2)
                    .attr('y', -10)
                    .attr('text-anchor', 'middle')
                    .attr('font-size', '22px')
                    .text(`${statColumn} by Season`);
            }

            // Initial draw
            drawChart();
        });

        
        form.dispatchEvent(new Event('submit'));
    });
});

function addPlayerToSelection(playerName) {
    // Find the legend checkbox for the player
    const legendList = document.getElementById('legend-list');
    if (!legendList) return;
    const items = legendList.querySelectorAll('li');
    let found = false;
    items.forEach(li => {
        const label = li.querySelector('label');
        const checkbox = li.querySelector('input[type="checkbox"]');
        if (label && checkbox && label.textContent === playerName) {
            if (!checkbox.checked) {
                checkbox.checked = true;
                checkbox.dispatchEvent(new Event('change'));
            }
            found = true;
        }
    });
    
    if (!found) {
        const playerSelect = document.getElementById('player-select');
        if (playerSelect) {
            playerSelect.value = playerName;
            const form = document.getElementById('options-form');
            if (form) {
                form.dispatchEvent(new Event('submit'));
            }
        }
    }
}
