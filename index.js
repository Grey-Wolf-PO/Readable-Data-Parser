exports.parse = parse = function(myString) {
    if (myString.indexOf("{") === 0) {
        return JSON.parse(myString)
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
        if (myString.indexOf("\n") > -1 && myString.indexOf("\r") === -1) {
            var lines = myString.split("\n")
        }
        else {
            var lines = myString.split("\r")
        }
        var obj = {}
        for (var i = 0; i < lines.length; i++) {
            if (!(lines[i].charAt(0) === "[")) {
                var key = lines[i].split(", ")[0]
                var value = lines[i].split(", ")[1]
                if (value.indexOf("list: ") === 0) {
                    value = value.replace("list: ", "").replace(/ and /g, ", ").replace(/\~([^< ](?:[^<]*?[^< ])?)\~/g, '[$1]')
                    value = JSON.parse(value)
                }
                obj[key] = value
            }
            else {
                var line = lines[i].replace(/\[.*?\]\s?/g, "")
                var unBigKey = lines[i].replace(/.*?(\[[^)]*\]).*?/g, "")
                var myRegex = new RegExp(unBigKey, "g")
                var bigKey = lines[i].replace(myRegex, "")
                var key = line.split(", ")[0]
                var value = line.split(", ")[1]
                if (value.indexOf("list: ") === 0) {
                    value = value.replace("list: ", "").replace(/ and /g, ", ").replace(/\~([^< ](?:[^<]*?[^< ])?)\~/g, '[$1]')
                    console.log(value)
                }
                bigKey = bigKey.replace(/\[/g, "").replace(/\]/g, "")
                if (bigKey.split(", ").length === 1) {
                    if (obj[bigKey]) {
                        var little = obj[bigKey]
                    }
                    else {
                        var little = {}
                    }
                    if (isNaN(value)) {
                        little[key] = value
                    }
                    else {
                        little[key] = parseInt(value)
                    }
                    obj[bigKey] = little
                }
                else {
                    string = "obj"
                    for (var j = 0; j < bigKey.split(", ").length; j++) {
                        string += "." + bigKey.split(", ")[j]
                        if (!(eval(string)) || eval(string) === {}) {
                            eval(string + " = {}")
                        }
                    }
                    string += "." + key
                    if (!(typeof value === 'string')) {
                        eval(string + " = " + value)
                    }
                    else {
                        if (!(value === "true" || value === "false") && isNaN(value) && value.indexOf("[") !== 0) {
                            eval(string + " = " + "\"" + value + "\"")
                        }
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
parse(fs.readFileSync("./text.txt", 'utf8'), function(obj) {
    console.log(JSON.stringify(obj))
})
*/
