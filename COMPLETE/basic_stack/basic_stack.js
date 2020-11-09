// ## Challenge

// Implement a `Stack` which can...

// * `push` an element onto the stack
// * `pop` remove the top element from the stack and return the element
// * `count` the number of elements on the stack
// * `peek` at the top element without removing it
// * `max` find the largest value in the stack

// stack object

var stack = []

function pusher(element) {
    return stack = stack.concat([element])
};

const counter = () => {
    var counter = 0;
    stack.forEach(data => {
        counter++
    });
    return counter;
};

const popper = () => {
    if(counter() > 0) {
        // return stack = stack.slice(0, -1);
        return stack.pop();
    };
};

const peeker = () => {
    return stack[counter() - 1]
};

const maxxer = () => {
    var largest = 0
    stack.forEach(data => {
        if(data >= largest) {
            largest = data;
        }
    })
    return largest;
};

pusher(2);
pusher(4);
pusher(23);
pusher(12);
pusher(74);
pusher(2136);
pusher(43);
console.log(pusher(6));
console.log(counter());
console.log(popper());
console.log(peeker());
console.log(maxxer());