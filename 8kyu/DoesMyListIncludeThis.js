//Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.







//My Solutions

function include(arr, item){
    return arr.includes(item);
}


function include(arr, item) {
    return arr.indexOf(item) !== -1;
}


function include(arr, item){
    return arr.some(n=>n===item);
}


const include = (arr, item) => arr.includes(item);