let arr = [1,2,4,'alex', [1,2], {}, null,true, false, undefined,]

let str = 0
let num = 0
let obj = 0
let boolean = 0
let others = 0

arr.forEach(element => {
    if (typeof element === 'string') {
        str++;
    } else if (typeof element === 'number') {
        num++;
    }
     else if (typeof element === 'boolean') {
        boolean++
    }
    else if (typeof element === 'object') {
        if (element === null) {
        others++; 
        } else {
            obj++;
        }
    } else {
        others++; 
    }
});

console.log('string',str);
console.log('numbers',num);
console.log('objects',obj);
console.log('boolean',boolean);
console.log('others',others);