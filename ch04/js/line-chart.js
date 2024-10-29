// Load the data here
d3.csv("./data/daily_precipitations.csv", d3.autoType)
    .then(d => {
        console.log("temperature data",d);
        drawLineChart(d);
    })
// Create the line chart here
const drawLineChart = (data) => {
    const margin = {top: 40, right:170, bottom: 25, left: 40};
    const width = 1000;
    const height = 500;
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;
    const firstDate = new Date(2021, 0, 1, 0, 0, 0);
    const lastDate = d3.max(data, d => d.date);
    const maxTemp = d3.max(data, d => d.min_temp_F);
    const xScale = d3.scaleTime()
        .domain([firstDate,lastDate])
        .range([0,innerWidth]);

    const yScale = d3.scaleLinear()
        .domain([0, maxTemp])
        .range([innerHeight, 0]);

    const svg = d3.select("#line-chart")
        .append("svg")
        .attr("viewBox",`0 0 ${width} ${height}`);

    const innerChart = svg
        .append("g")
        .attr("transform",`translate( ${margin.right}, ${margin.top})`);

    const bottomAxis = d3.axisBottom(xScale)
            .tickFormat(d3.timeFormat("%b"));

    innerChart.append("g")
        .attr("class","axis-x")
        .attr("transform", `translate(0, ${innerHeight})`)
        .call(bottomAxis)

    d3.selectAll(".axis-x text")
        .attr("x", d => {
            const currentMonth = d;
            const nextMonth = new Date(2021, currentMonth.getMonth() + 1, 1);
            return (xScale(nextMonth) - xScale(currentMonth)) / 2;
        })
        .attr("y","10px")
        .style("font-family","Roboto, sans-serif")
        .style("font-size","14px")
};      