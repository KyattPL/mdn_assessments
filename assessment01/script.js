let arrays = [[1,2,3], [4,5], [6]]

function reduce(arr, f){
    temp = []
    for (element of arr){
        temp = f(temp, element)
    }
    return temp
}

function loop(value, test, update, body){
    temp = value
    while(test(temp)){
        body(temp)
        temp = update(temp)
    }
}

function every(array, test){
    for(element of array){
        if(!test(element)){
            return false
        }
    }
    return true
}

console.log(reduce(arrays, (a,b) => a.concat(b)))
console.log(loop(3, i => i >= 0, i => (i-1), i => console.log(i)))
console.log(every([1,2,3], n => n < 4))