// Load the data here
d3.csv("./data/daily_precipitations.csv", d3.autoType)
    .then(d => {
        console.log("temperature data",d);
        drawLineChart(data);
    })
// Create the line chart here
const drawLineChart = (data) => {
    const margin = {top: 40, right:170, bottom: 25, left: 40};
    const width = 1000;
    const height = 500;
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const svg = d3.select("#line-chart")
        .append("svg")
        .attr("viewBox",`0 0 ${width} ${height}`);

    const innerChart = svg
        .append("g")
        .attr("transform",`translate( ${margin.right}, ${margin.top})`);
};      