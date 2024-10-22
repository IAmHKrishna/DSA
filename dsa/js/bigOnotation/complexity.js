// 1)
for(var i=1;i<n;i++)
    i*=k
// tiem complexity O(log n)

// 2)-------------------------
for(var i=1;i<n;i++)
    i+=k
//  time complexity O(n)

// 3)------------------------
{
    let a = 0, i = N;
    while (i > 0) {
        a += i;
        i = Math.floor(i/2);
    }
}
// time complexity O(log n)

// 4)------------------------
{
    let a = 0, i = N;
    for (i; i > 0; i = Math.floor(i/2)) {
        a += i;
    }
}
// time complexity O(log n)

// 5)------------------------

let i = 0, j = 0, k = 0;
for (i = Math.floor(n / 2); i <= n; i++) {
    for (j = 2; j <= n; j = j * 2) {
        k = k + Math.floor(n / 2);
    }
}

// outer loop runs O(n/2) times, which simplifies to O(n).
// the inner loop runs O(log n) times.
// O(n)×O(logn)=O(nlogn)
// Conclusion:
// The time complexity of the given code is O(n log n).
