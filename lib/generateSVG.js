const shapesFile = require("./shapes")


function generateSvg(data) {
    const shape = shapesFile.generateShape(data);
    shape.setColor(data.shapeColor);

    const shapeSvg = shape.render();
    return `
<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="white" />
${shapeSvg} 
<text x="150" y="115" font-size="60" text-anchor="middle" fill="${data.textColor}">${data.characters}</text>
</svg>`
}


module.exports = generateSvg;