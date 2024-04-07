const { Triangle, Circle, Square } = require('../lib/shapes')

describe('Shapes', () => {

    describe('Triangle', () => {
        it("Should render a triangle", () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        });
    });
});

describe('Shapes', () => {

    describe('Circle', () => {
        it("Should render a circle", () => {
            const shape = new Circle();
            shape.setColor("blue");
            expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="blue" />`);
        });
    });
});

describe('Shapes', () => {

    describe('Square', () => {
        it("Should render a square", () => {
            const shape = new Square();
            shape.setColor("blue");
            expect(shape.render()).toEqual(`<rect x="75" y="25" width="150" height="150" fill="blue" />`);
        });
    });
});