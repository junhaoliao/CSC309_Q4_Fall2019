function ShapeMaker() {
    // empty
}

ShapeMaker.prototype = {
    addSquare: function () {

        // every square should be in a new line: div is the best choice
        const square = document.createElement("div");
        square.className = "square"; // easy to set style

        // as specified by the question: no innerHTML/innerText permitted
        const squareTextNode = document.createTextNode("SQUARE");
        square.append(squareTextNode);

        // append the shape to "body"
        const shapeDiv = document.querySelector("#shapes");
        shapeDiv.append(square);

    },
    addCircle: function () {

        // DISCARDED: circles should follow the last circle: span is the best choice
        // changed back to "div". "display" style was changed to "inline-block" in shapes.css
        const circle = document.createElement("div");
        circle.className = "circle";

        // as specified by the question: no innerHTML/innerText permitted
        const circleTextNode = document.createTextNode("CIRCLE");
        circle.append(circleTextNode);

        // append the shape to "body"
        const shapeDiv = document.querySelector("#shapes");
        shapeDiv.append(circle);

    }
};