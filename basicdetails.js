const readline = require('readline');
const inp = readline.createInterface({input: process.stdin});
const userInput = [];
inp.on("line", (data) => {userInput.push(data);});
inp.on("close", () =>
{
    //start-here
    var firstname= "Ezhilarasi";
    var lastname ="thirunavukkarasu";
    var matial_status ="single";
    var country ="India";
    var age ="25";
    
    console.log(firstname , lastname, matial_status,country, age);
    
    
    //end-here