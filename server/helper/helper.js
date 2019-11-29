const fs = require("fs"); 
const uuid = require("uuid/v4"); 

/// Write to JSON file
function writeJSONFile (filename, content) {
    console.log(filename, content); 
    fs. writeFileSync(filename, JSON.stringify(content), "utf8", err => {
        if (err) {
            console.log(err); 
        }
    }); 
    console.log(`Changes saved to file ${filename}`); 
}

/// Create uuids 
const getNewId = () => {
    return uuid(); 
}

module.exports = {
    writeJSONFile, 
    getNewId
}; 