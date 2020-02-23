// find the elements
const  button_s = document.querySelector("#button_s");
const button_c = document.querySelector("#button_c");

// link the events with handler functions
button_s.addEventListener("click",add_square_handler);
button_c.addEventListener("click",add_circle_handler);

// instantiate the maker class
const shape = new ShapeMaker;

function add_square_handler(e) {
    e.preventDefault();
    shape.addSquare();
}

function add_circle_handler(e) {
    e.preventDefault();
    shape.addCircle();
}