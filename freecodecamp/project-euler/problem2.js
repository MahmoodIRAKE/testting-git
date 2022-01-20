const assert = require('assert');

function fiboEvenSum(n) {
    let sum=0;
    let num=[1,2];
    while(num[1]<=n){
        if(num[1]%2===0){
            sum+=num[1];
        }
        let temp=num[0];
        num[0]=num[1];
        num[1]=num[1]+temp;
    }
    return sum;
    
  }

assert.deepStrictEqual(fiboEvenSum(10), 10)
assert.deepStrictEqual(fiboEvenSum(34), 44)
assert.deepStrictEqual(fiboEvenSum(60), 44)
assert.deepStrictEqual(fiboEvenSum(1000), 798)
assert.deepStrictEqual(fiboEvenSum(100000), 60696)
assert.deepStrictEqual(fiboEvenSum(4000000), 4613732)
