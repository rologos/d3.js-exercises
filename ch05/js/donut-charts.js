const drawDonutCharts = (data) => {
  // Generate the donut charts here

  const svg = d3.select("#donut")
    .append("svg")
      .attr("viewBox", ` 0 0 ${width} ${height}`)

  const donutContainers = svg
    .append("g")
    .attr("transorm", `translate(${margin.left},
        ${margin.top})`);

    /*********************************************/
    /*              Prepare year data            */
    /*********************************************/

  const years = [1975, 1995, 2013];
  const formats = data.columns.filter( format => format !== "year");

  years.forEach( year => {
    const donutContainer = donutContainers
      .append("g")
        .attr("transform", `translate( ${xScale(year)}, ${innerHeight/2})`);
  
    const yearData = data.find( d => d.year === year);

    const formattedData = [];

    formats.forEach( format => {
      formattedData.push({ format: format,
        sales: yearData[format] });
    });
    console.log(formattedData);
  });
 };