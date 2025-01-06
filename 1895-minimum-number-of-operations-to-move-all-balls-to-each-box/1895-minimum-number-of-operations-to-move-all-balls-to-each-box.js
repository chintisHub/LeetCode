var minOperations = function (boxes) {
    function leftSum(arr) {
        let sum = 0;
        let counter = 0;
        for (let i = arr.length - 1; i >= 0; i--) {
            counter++;
            if (arr[i] === '1') {
                sum += counter
            }
        }
        return sum;
    }
    function rightSum(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === '1') {
                sum += i + 1;
            }
        }
        return sum;
    }
    let count = 0;
    let revCount = 0;
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i] === '1') {
            count += i;
            revCount += Math.abs(i - (boxes.length - 1))
        }

    }
    let res = []
    for (let i = 0; i < boxes.length; i++) {
        if (i !== 0 && i !== boxes.length - 1) {
            let leftArr = boxes.slice(0, i);
            let rightArr = boxes.slice(i + 1, boxes.length);
            res.push(leftSum(leftArr) + rightSum(rightArr));
        } else if (i === 0) {
            res.push(count);
        } else {
            res.push(revCount)
        }
    }
    return res
};