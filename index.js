const inquirer = require('inquirer');
const fs = require('fs');
const generateSvg = require("./lib/generateSVG.js")

const questions = [
    // Question for Letters (Max 3)
    {
        type: "input",
        name: "characters",
        message: "Choose up to 3 characters",
        validate: function(value) {
            const inputLength = value.trim().length;
            if (inputLength > 3) {
                return "Please enter up to three characters.";
            }
            return true;
        }
          
    },
    // Questions for letter color(color keyword (OR a hexadecimal number))
    {
        type: "input",
        name: "textColor",
        message: "Choose the text color (keyword or hex)",
    },
    // Question for Shape, multiple choice circle, triangle, chair
    {
        type: "list",
        name: "shape",
        message: "Select a shape ",
        choices: ["Circle", "Triangle", "Square"]
    },
    // Question for Shape Color(color keyword (OR a hexadecimal number))
    {
        type: "input",
        name: "shapeColor",
        message: "Choose the shape color (keyword or hex)",
    }
]

// Generates the file named `logo.svg` 
function writeToFile(fileName, data) {
    const svgContent = generateSvg(data);
    fs.writeFile(
        fileName,
        svgContent,
        (err) => {
            if (err) {
                console.error(err);
                return;
            }
            // Output text "Generated logo.svg" is printed in the command line
            console.log("Generated logo.svg")

        }
    );
}


function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            const fileName = "circle.svg";
            writeToFile(fileName, response)
        }
        );
}
init()