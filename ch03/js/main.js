const svg = d3.select(".responsive-svg-container")
    .append("svg")
    .attr("viewBox", "0 0 600 700   ")
    .style("border", "1px solid black");

 d3.csv("./data/data.csv", d => {
    return {
        technology: d.technology,
        count: +d.count
    }
}).then( data => {
    data.sort((a, b) => b.count - a.count);
    createViz(data);
})

const createViz = (data) => {

    const xScale = d3.scaleLinear() 
        .domain([0,1078])
        .range([0, 450]);

    const yScale = d3.scaleBand()
        .domain(data.map(d => d.technology))
        .range([0,700])
        .paddingInner(0.2);

    svg
    .selectAll("rect")
    .data(data)
    .join("rect")
    .attr("class", d => {
        console.log(d);
        return `bar bar-${d.technology}`;
    })
    .attr("width", d => xScale(d.count))
    .attr("height", yScale.bandwidth())
    .attr("x", 100)
    .attr("y", d => yScale(d.technology))
    .attr("fill", d => d.technology == "D3.js" ? "yellowgreen" : "skyblue")
};  