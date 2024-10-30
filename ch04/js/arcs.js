// Load the data here
d3.csv("./data/daily_precipitations.csv", d3.autotype)
    .then( d => {
        console.log("precipitation data", d);
        drawArc(d);
    })

// Draw the arc here
const drawArc = (data) => {
    const pieChartWidth = 300;
    const pieChartHeight = 300;

    const numberOfDays = data.length;
    const numberOfDaysWithPrecipitation = data.filter(d => d.total_precip_in > 0).length;
    const percentageDaysWithPrecipitation = Math.round(numberOfDaysWithPrecipitation/numberOfDays * 100);

    const angleDaysWithPrecipitation_deg = percentageDaysWithPrecipitation * 360 / 100;

    const angleDaysWithPrecipitation_rad = angleDaysWithPrecipitation_deg * Math.PI / 180;

    const svg = d3.select("#arc")
        .append("svg")
        .attr("viewBox", [0, 0, pieChartWidth, pieChartHeight]);


    const innerChart = svg
        .append("g")
            .attr("transform", `translate( ${pieChartWidth/2}, ${pieChartHeight/2})`);
};