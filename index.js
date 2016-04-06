// Only function


// For debugging, place console.log(variableYouSuspectHere) in random parts of code

exports.parse = parse = function(myString) {
    // Check if myString is JSON
    if (myString.indexOf("{") === 0) {
        return JSON.parse(myString)
        // Parse as JSON if it is
    }
    else {
        function primitiveToValue(primitive) {
            if (!(isNaN(primitive))) {
                return primitive;
            }
            if (!(typeof primitive === 'string')) {
                return primitive;
            }
            else {
                if (!(primitive === "true" || primitive === "false")) {
                    return "\"" + primitive + "\""
                }
                else {
                    return primitive;
                }
            }
        }
        var fs = require("fs")
        // Split document into array based on lines
        myString = myString.replace(/\r/g, "")
        var lines = myString.split("\n")
        // Start off by making the cheif object, obj, not undefined
        var obj = {}
        for (var i = 0; i < lines.length; i++) {
            // If line has no arguments inside []
            if (!(lines[i].charAt(0) === "[")) {
                var key = lines[i].split(", ")[0]
                var value = lines[i].split(", ")[1]
                if (value.indexOf("list: ") === 0) {
                    // Get rid of list: , and , and ~s
                    value = value.replace("list: ", "").replace(/ and /g, ", ").replace(/\~([^< ](?:[^<]*?[^< ])?)\~/g, '[$1]')
                    // Make array
                    value = JSON.parse(value)
                }
                obj[key] = value
            }
            else {
                // Get line as without text inside [] and get bigKey as arguments inside []
                var line = lines[i].replace(/\[.*?\]\s?/g, "")
                var unBigKey = lines[i].replace(/.*?(\[[^)]*\]).*?/g, "")
                // Can't use variable inside / /g
                var myRegex = new RegExp(unBigKey, "g")
                var bigKey = lines[i].replace(myRegex, "")
                var key = line.split(", ")[0]
                var value = line.split(", ")[1]
                // Check if value should be array
                if (value.indexOf("list: ") === 0) {
                    value = value.replace("list: ", "").replace(/ and /g, ", ").replace(/\~([^< ](?:[^<]*?[^< ])?)\~/g, '[$1]')
                }
                bigKey = bigKey.replace(/\[/g, "").replace(/\]/g, "")
                // If there is only one specification for category
                if (bigKey.split(", ").length === 1) {
                    // If only one argument is inside []
                    if (obj[bigKey]) {
                        var little = obj[bigKey]
                    }
                    else {
                        var little = {}
                    }
                    // Check if value should be string
                    if (isNaN(value)) {
                        little[key] = value
                    }
                    else {
                        little[key] = parseInt(value)
                    }
                    obj[bigKey] = little
                }
                else {
                    // For more arguments
                    string = "obj"
                    // Loop through each argument and use eval to check if it is empty, if it is, make the value of it {}
                    for (var j = 0; j < bigKey.split(", ").length; j++) {
                        string += "." + bigKey.split(", ")[j]
                        if (!(eval(string)) || eval(string) === {}) {
                            eval(string + " = {}")
                        }
                    }
                    // Assign the key a value
                    string += "." + key
                    // If value is not string, write as raw value (Never going to be true, soon going to deprecate)
                    if (!(typeof value === 'string')) {
                        eval(string + " = " + value)
                    }
                    // Here comes the real conditionals
                    else {
                        // If value is string and is not equal to "true", "false", or is an integer in string form and is also not an array then treat it as a string in eval
                        if (!(value === "true" || value === "false") && isNaN(value) && value.indexOf("[") !== 0) {
                            eval(string + " = " + "\"" + value + "\"")
                        }
                        // If value should not be string treat it as if it is not
                        else {
                            eval(string + " = " + value)
                        }
                    }
                } 
            }
        }
        return obj;
    }
}
/*
EXAMPLE USAGE: PARSING TEXT.TXT
###############################

var fs = require("fs")
console.log(JSON.stringify(parse(fs.readFileSync("./text.txt", 'utf8'))))
*/
