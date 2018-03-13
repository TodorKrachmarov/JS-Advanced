function subsum(arr, startIndex, endIndex) {
    if (!Array.isArray(arr)) {
        return NaN;
    }
    let start = Math.max(startIndex, 0);
    let end = Math.min(endIndex, arr.length - 1)
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += Number(arr[i]);
    }
    return sum;
}
