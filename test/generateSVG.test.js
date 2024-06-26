const generateSvg = require('../lib/generateSVG')

describe('generateSvg', () => {
    it('Should generate valid SVG output', () => {
        const testData = {
            shape: "Circle",
            shapeColor: "red",
            textColor: "black", 
            characters: "ABC"
        };

        const svgOutput = generateSvg(testData);
expect(svgOutput).toEqual(`
<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
<rect width="100%" height="100%" fill="white" />
<circle cx="150" cy="100" r="80" fill="red" /> 
<text x="150" y="115" font-size="60" text-anchor="middle" fill="black">ABC</text>
</svg>`)

    });
});