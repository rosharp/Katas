function createMessage(num) {
    function adder (n) {
        if (n !== undefined) {
            num += ' ' + n 
            return adder;
        }
        else { // terminate
            return num;
        }
    }

    return adder;
}

console.log(createMessage("Hello")("World!")("how")("are")("you?")());
