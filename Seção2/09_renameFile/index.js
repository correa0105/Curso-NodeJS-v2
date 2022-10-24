const fs = require("fs");

fs.rename("arquivo.txt", "newname.txt", (err) => {
    
    if(err) return console.log(err);

    console.log("Arquivo renomeado!")
})