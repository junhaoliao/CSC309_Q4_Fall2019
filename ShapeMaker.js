function ShapeMaker() {
    // empty
}

ShapeMaker.prototype = {
    lastWasCircle: false,
    addSquare: function () {
        this.lastWasCircle = false;
        const square = document.createElement("div");
        square.className = "square";
        square.innerHTML = "SQUARE";
        const myBody = document.querySelector("body");
        myBody.append(square);

    },
    addCircle: function () {

        const circle = document.createElement("span");
        circle.className = "circle";
        circle.innerHTML = "CIRCLE";
        const myBody = document.querySelector("body");
        myBody.append(circle);

    }
}