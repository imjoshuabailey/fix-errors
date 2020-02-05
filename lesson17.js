/* Assuming you completed lesson 15 and 16 properly. Now rewrite
the anonymous function using the arrow function.

Expected  output in console:

        This Ran 0
        This Ran 1 
        ['John', 'Roger']
*/
var people = [
    { name: "John", age: 55 },
    { name: "Roger", age: 44 },
    { name: "Betty", age: 37 }
    ]


var nameFilter = function(filteredName) {
    var results = []
    for (var i = 0; i < people.length; i++) {
        let currentName = people[i].name
        if (currentName != filteredName) {
            runCountFunction(i)
            results.push(currentName)

        }
    }

    return results
}

runCountFunction = (name) => {
    console.log("This Ran", name)
}

var filteredNames = nameFilter("Betty")
console.log(filteredNames)
