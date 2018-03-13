function solve() {
    let summary = {};
    for (let i = 0; i < arguments.length; i++) {
        let obj = arguments[i];
        let type = typeof obj;
        console.log(`${type}: ${obj}`);
        if (!summary[type]){
            summary[type] = 1
        } else {
            summary[type] += 1;
        }
    }
    let sorted = [];
    for(let sum in summary){
        sorted.push([sum, summary[sum]]);
    }
    for(let sum of sorted.sort((a, b) => b[1] - a[1])){
        console.log(sum[0] + ' = ' + sum[1] );
    }
}

solve('cat', 42, function () { console.log('Hello world!'); });