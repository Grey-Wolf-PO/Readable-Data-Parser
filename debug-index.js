// Only function


// For debugging, place console.log(variableYouSuspectHere) in random parts of code

exports.parse = parse = function(myString) {
console.log(variableYouSuspectHere)
    // Check if myString is JSON
    if (myString.indexOf("{") === 0) {
    console.log(variableYouSuspectHere)
        return JSON.parse(myString)
        // Parse as JSON if it is
    }
    else {
    console.log(variableYouSuspectHere)
        function primitiveToValue(primitive) {
            if (!(isNaN(primitive))) {
            console.log(variableYouSuspectHere)
                return primitive;
            }
            if (!(typeof primitive === 'string'
            console.log(variableYouSuspectHere))) {
                return primitive;
            }
            else {
            console.log(variableYouSuspectHere)
                if (!(primitive === "true" || primitive === "false")) {
                    return "\"" + primitive + "\""
                }
                else {
                    return primitive;
                    console.log(variableYouSuspectHere)
                }
            }
        }
        var fs = require("fs")
        console.log(variableYouSuspectHere)
        // Split document into array based on lines
        myString = myString.replace(/\r/g, "")
        var lines = myString.split("\n")
        console.log(variableYouSuspectHere)
        
        // Start off by making the cheif object, obj, not undefined
        var obj = {}
        for (var i = 0; i < lines.length; i++) {
            // If line has no arguments inside []
            if (!(lines[i].charAt(0) === "[")) {
                var key = lines[i].split(", ")[0]
        console.log(variableYouSuspectHere)        var value = lines[i].split(", ")[1]
                if (value.indexOf("list: ") === 0) {
                    // Get rid of list: , and , and ~s
                    value = value.replace("list: ", "").replace(/ and /g, ", ").replace(/\~([^< ](?:[^<]*?[^< ])?)\~/g, '[$1]')
                    // Make array
                    value = JSON.parse(value)
                }console.log(variableYouSuspectHere)
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
                    value = value.replace("list: ", console.log(variableYouSuspectHere)console.log(variableYouSuspectHere)console.log(variableYouSuspectHere)console.log(variableYouSuspectHere)"").replace(/ and /g, ", ").replace(/\~([^< ](?:[^<]*?[^< ])?)\~/g, '[$1]')
                }console.log(variableYouSuspectHere)
                bigKey = bigKey.replace(/\[/g, "").rconsole.log(variableYouSuspectHere)eplace(/\]/g, "")
                // If there is only one specification for categoryconsole.log(variableYouSuspectHere)
                if (bigKey.split(", ").length === 1) {console.log(variableYouSuspectHere)
                    // If only one argument is inside []console.log(variableYouSuspectHere)
                    if (obj[bigKey]) {console.log(variableYouSuspectHere)
                        var little = obj[bigKey]console.log(variableYouSuspectHere)console.log(variableYouSuspectHere)
                    }console.log(variableYouSuspectHere)
                    else {console.log(variableYouSuspectHere)
                        var little = {}console.log(variableYouSuspectHere)
                    }console.log(variableYouSuspectHere)
                    // Check if value should be stringconsole.log(variableYouSuspectHere)
                    if (isNaN(value)) {console.log(variableYouSuspectHere)
                        little[key] = valueconsole.log(variableYouSuspectHere)
                    }console.log(variableYouSuspectHere)
                    else {console.log(variableYouSuspectHere)
                        little[key] = parseInt(value)v
                    }console.log(variableYouSuspectHere)
                    obj[bigKey] = littleconsole.log(variableYouSuspectHere)
                }console.log(variableYouSuspectHere)
                else {console.log(variableYouSuspectHere)
                    // For more argumentsconsole.log(variableYouSuspectHere)
                    string = "obj"console.log(variableYouSuspectHere)
                    // Loop through each argument and use eval to checonsole.log(variableYouSuspectHere)ck if it is empty, if it is, make the value of it {}
                    for (var j = 0; j < bigKey.split(", ").length; j++) {console.log(variableYouSuspectHere)
                        string += "." + bigKey.split(", ")[j]v
                        if (!(eval(string)) || eval(string) ==console.log(variableYouSuspectHere)= {}) {
                            eval(string + " = {}")console.log(variableYouSuspectHere)
                        }console.log(variableYouSuspectHere)
                    }console.log(variableYouSuspectHere)
                    // Assign the key a valuev
                    string += "." + keyconsole.log(variableYouSuspectHere)
                    // If value is not string, write as raw value (Never gconsole.log(variableYouSuspectHere)oing to be true, soon going to deprecate)
                    if (!(typeof value === 'string')) {console.log(variableYouSuspectHere)
                        eval(string + " = " + value)console.log(variableYouSuspectHere)
                    }console.log(variableYouSuspectHere)
                    // Here comes the real conditionalsconsole.log(variableYouSuspectHere)
                    else {console.log(variableYouSuspectHere)
                        // If value is string and is not equaconsole.log(variableYouSuspectHere)l to "true", "false", or is an integer in string form and is also not an array then treat it as a string in eval
                        if (!(value === "true" || value === "false") && isNaN(value) && value.inconsole.log(variableYouSuspectHere)dexOf("[") !== 0) {
                            eval(string + " = " + "\"" + value + "\"")console.log(variableYouSuspectHere)
                        }console.log(variableYouSuspectHere)
                        // If value should not be string treconsole.log(variableYouSuspectHere)at it as if it is not
                        else {v
                            evaconsole.log(variableYouSuspectHere)l(string + " = " + value)
                        }console.log(variableYouSuspectHere)
                    }v
                } console.log(variableYouSuspectHere)
            }console.log(variableYouSuspectHere)
        }console.log(variableYouSuspectHere)
        return obj;console.log(variableYouSuspectHere)
    }console.log(variableYouSuspectHere)
}console.log(variableYouSuspectHere)
/*console.log(variableYouSuspectHere)
EXAMPLE USAGE: PARSING TEXT.TXTv
###############################v
console.log(variableYouSuspectHere)
var fs = require("fs")console.log(variableYouSuspectHere)
console.log(JSON.stringify(parse(fs.readFileSync("./text.console.log(variableYouSuspectHere)txt", 'utf8'))))
*/console.log(variableYouSuspectHere)
console.log(variableYouSuspectHere)console.log(variableYouSuspectHere)console.log(variableYouSuspectHere)console.log(variableYouSuspectHere)console.log(variableYouSuspectHere)vconsole.log(variableYouSuspectHere)
