// https://www.hackerearth.com/problem/algorithm/good-subarrays/?utm_source=new_practice
function findMostFrequentGoodnessQuotient(N, P, A) {
    let freqMap = new Map();
    let found = false;

    for (let i = 0; i < N; i++) {
        let sum = 0;
        let maxVal = -Infinity;

        for (let j = i; j < N; j++) {
            sum += A[j];
            maxVal = Math.max(maxVal, A[j]);

            if (sum < P) {
                found = true;
                freqMap.set(maxVal, (freqMap.get(maxVal) || 0) + 1);
            } else {
                break; // no need to go further, as adding more will only increase sum
            }
        }
    }

    if (!found) return 1;

    let maxFreq = 0;
    let result = -Infinity;

    for (let [value, freq] of freqMap.entries()) {
        if (freq > maxFreq || (freq === maxFreq && value > result)) {
            maxFreq = freq;
            result = value;
        }
    }

    return result;
}

// Sample Input
const N = 5;
const P = 10;
const A = [1, 2, 3, 4, 5];

console.log(findMostFrequentGoodnessQuotient(N, P, A));
