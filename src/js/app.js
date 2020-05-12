let d3 = require("d3")
let $ = require("jquery")


$(document).ready(() => {
    let dataSet = []

    for(let i=0; i<20; i++){
        let num = Math.floor(d3.randomUniform(1, 50)())
        dataSet.push(num)
    }

    let barChart = d3.select("#chart")
        .selectAll("div")
        .data(dataSet)
        .enter()
        .append("div")
        .style("height", function (d) {
            let height =  d * 3
            return height + "px"
        })
        .attr("class", "bar")

})

function generate(data) {
    let el = d3.select("body")
        .selectAll("p")
        .data(data)
        .enter()
        .append("p")
        .text((d) => {
            return "this paragraph is binded to the number " + d
        })
        .style("color", (d) => {
            return "#0000" + d
        })
        .attr("class", (d) => {
            if(d > 25){
                return "foo"
            } else {
                return null
            }
        })

    console.log(el)
}