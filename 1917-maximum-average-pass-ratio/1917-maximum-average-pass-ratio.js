/**
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function(classes, extraStudents) {
    // keep max heap of the max ratio change of each class

    let maxHeap = new MaxPriorityQueue();
    let totalPassRatio = 0;

    // 1. Add to maxHeap with priority being classes that will have biggest ratio change
    for (let [pass, total] of classes) {
        let ratioChange = getRatioChange(pass, total);
        maxHeap.enqueue([pass, total], ratioChange);
    }

    // 2. Add extra students to classes with biggest ratio change
    //    Add back to max heap after as well like in step one
    for (let i = 0; i < extraStudents; i++) {
        let { priority, element } = maxHeap.dequeue();
        let [pass, total] = element;

        let nextRatioChange = getRatioChange(pass + 1, total + 1);

        maxHeap.enqueue([pass + 1, total + 1], nextRatioChange);
    }

    // 3. Get average
    while (!maxHeap.isEmpty()) {
        let { priority, element } = maxHeap.dequeue();
        let [pass, total] = element;

        totalPassRatio += (pass / total);
    }

    return totalPassRatio / classes.length;
};

function getRatioChange(pass, total) {
    return ((pass + 1) / (total + 1)) - (pass / total);
}