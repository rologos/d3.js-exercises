const drawStackedBars = (data) => {
  // Generate the stacked bar chart here
  const stackGenerator = d3.stack()
    .keys(formatsInfo.map( f => f.id));

  const annotatedData = stackGenerator(data);

  /*******************************/
  /*    Append the containers    */
  /*******************************/
  const svg = d3.select("#bars")
  .append("svg")
    .attr("viewBox", [0, 0, width, height]);

  const innerChart = svg
    .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

  
  /*******************************/
  /*    add scales    */
  /*******************************/

  const xScale = d3.scaleLinear()
    .domain([0, ])

};