// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

//My Solutions


function between(a, b) {
    arr = []
    for(i = a;i <= b; i++){ 
        arr.push(i)
    }
    return arr
}



function between(a, b) {  
    const betweenArray = []
    
    while (a <= b) {
      betweenArray.push(a);
      a++;
    }
    
    return betweenArray;
}


function between(a, b) {    
    return Array.from({ length: b - a + 1 }, () => a++)
}