const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().trim().split("\n");
const [n, k] = input[0].split(' ').map(Number);

function solution(n, k) {
    const queue = [];
    const answer = [];
    for (let i = 0; i < n; i++) {
        queue.push(i + 1);
    }
    while (queue.length) {
        for (let i = 0; i < k - 1; i++) {
            queue.push(queue.shift());
        }
        answer.push(queue.shift());
    }
    console.log(`<${answer.join(', ')}>`);
}

solution(n, k);
