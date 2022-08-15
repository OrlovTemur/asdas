//1 zadanie
const min = (a, b) => {
    if(typeof(a) === 'number'){
        return Math.min(a, b)
    } else if (typeof(a) == 'object' && !a[0]) {
        return Math.min(a.a, a.b)
    } else {
        return Math.min.apply(Math, a)
    }
}
console.log(min([1, 2]))
console.log(min({a:1, b:2}))
console.log(min(1, 2))
const neforjala = min(1, 2)
//2 zadanie
const proporcii = (num1, num2) => {
    console.log(num1 / 100 * num2);
}

proporcii(220, 10)


//3 zadanie
const arr = [1, 3, 5, 6, 7, 2, 4, 8, 9]
const nefor = (arr) => {
    for(let i = arr.length - 1; i > 0; i--){
        for(let j = 0; j < i; j++){
            if(arr[j] > arr[j + 1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp;
            }
        }
    }
    console.log(arr)
}

nefor(arr)