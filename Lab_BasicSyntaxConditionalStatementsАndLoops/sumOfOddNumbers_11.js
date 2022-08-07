function solve(n) {
    let count = 1;
    let sum = 0;
    let oddNum = 1;
    while (count <= n) {
        count++;
        console.log(oddNum);
        sum += oddNum;
        oddNum += 2;
    }

    console.log(`Sum: ${sum}`);
}




solve(5)
solve(3)
