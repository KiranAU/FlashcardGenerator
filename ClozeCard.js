// get fs
var fs = require("fs");


// constructor for ClozeFlashcard
function ClozeFlashcard(text, cloze) {
    // making it scope safe 
    // evaluate if the this object is a Clozeflashcard, if it is, proceed as normal
    if (this instanceof ClozeFlashcard) {
        this.text = text;
        this.cloze = cloze;
        this.clozeDeleted = this.text.replace(this.cloze, '_____');
        this.create = function() {
            var data = {
                text: this.text,
                cloze: this.cloze,
                clozeDeleted: this.clozeDeleted,
                type: "cloze"
            };
            // add card to log.txt
            fs.appendFile("log.txt", JSON.stringify(data) + ';', "utf8", function(error) {
                // if there is an error, log the error
                if (error) {
                    console.log(error);
                }
            });
        };
    } else {
        /* If the this object is not a ClozeFlashcard (ie, it's a window object), 
        call the constructor again, this time with the new operator.
       Now the constructor works properly with or without the new operator */
        return new ClozeFlashcard(text, cloze);
    }
};
// export the constructor to app.js
module.exports = ClozeFlashcard;