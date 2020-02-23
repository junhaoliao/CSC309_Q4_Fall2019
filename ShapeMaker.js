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
        const myBody = document.querySelector("body");
        myBody.append(square);

    },
    addCircle: function () {

        // circles should follow the last circle: span is the best choice
        const circle = document.createElement("span");
        circle.className = "circle";

        // as specified by the question: no innerHTML/innerText permitted
        const circleTextNode = document.createTextNode("CIRCLE");
        circle.append(circleTextNode);

        // append the shape to "body"
        const myBody = document.querySelector("body");
        myBody.append(circle);

    }
};