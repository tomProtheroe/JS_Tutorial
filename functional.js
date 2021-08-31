let states =["Kansas", "Nebraska", "North Dakota", "South Dakota"];

function urlify(string){
    return string.toLowerCase().split(/\s+/).join("-");
}

function functionalMap(states){
    return states.map(state => urlify(state));
}

function fullAddress(states){
    return states.map(state => "https://example.com/" + state);
}

function functionIncludes(states){
    return states.filter(state => state.includes("Dakota"));
}

console.log(functionIncludes(states));

function functionRegEx(){

}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//sum: Imperative solution
function imperativeSum(elements){
    let total = 0;
    elements.forEach(function (n) {
        total += n;
    });
    return total;
}
console.log(imperativeSum(numbers));

//sum Functional solution
function functionalSum(elements){
    return elements.reduce((total, n) => { return total += n;});
}
console.log(functionalSum(numbers));

//lengths: Imperative solution
function imperativeLengths(elements){
    let lengths = {};
    elements.forEach(function(element){
        lengths[element] = element.length;
});
return lengths;
}
console.log(imperativeLengths(states));

//lengths: Functional solution
function functionalLengths(elements){
    return elements.reduce((lengths, element) => {
        lengths[element] = element.length;
        return lengths;
    }, {});
}
console.log(functionalLengths(states));

//exercise
function returnElements(elements){
    return elements.reduce((total, n) => total *= n);
}
console.log(returnElements(numbers))
