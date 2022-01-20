const assert = require('assert');

function multiplesOf3and5(number) {
    let sum = 0;
    for (let i = 3; i < number; i += 3) {
        sum += i;
    }
    for (let i = 5; i < number; i += 5) {
        if (i % 3 !== 0) {
            sum += i;
        }
    }
    return sum;
}

assert.deepStrictEqual(multiplesOf3and5(49), 543)
assert.deepStrictEqual(multiplesOf3and5(1000), 233168)
assert.deepStrictEqual(multiplesOf3and5(8456), 16687353)
assert.deepStrictEqual(multiplesOf3and5(19564), 89301183)