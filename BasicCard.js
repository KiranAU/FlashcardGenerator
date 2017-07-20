// get fs
var fs = require("fs");

// create constructor for basic flash card
function BasicFlashcard(front, back) {
    // making it scope safe 
    // evaluate if the this object is a BasicFlashcard if so proceed as normal
    if (this instanceof BasicFlashcard) {
        this.front = front;
        this.back = back;
        this.create = function() {
            // flashcard object is created
            var data = {
                front: this.front,
                back: this.back,
                type: "basic",
            };
            // basic flash card object is added to log.txt
            fs.appendFile("log.txt", JSON.stringify(data) + ';', "utf8", function(error) {
                // if there is an error, log the error
                if (error) {
                    console.log(error);
                }
            });
        };
        /* If the this object is not a CarPart (ie, it's a window object), 
        call the constructor again, this time with the new operator.
Now our constructor works properly with or without the new operator.
*/
    } else {
        return new BasicFlashcard(front, back);
    }
};



// export the constructor to app.js
module.exports = BasicFlashcard;