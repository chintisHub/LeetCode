/**
 * @param {number[][]} isWater
 * @return {number[][]}
 */
var highestPeak = function (isWater) {
    const m = isWater.length;
    const n = isWater[0].length;

    const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // Right, Down, Left, Up
    const height = Array.from({ length: m }, () => Array(n).fill(-1)); // Initialize all cells to -1
    const queue = [];

    // Initialize the queue with water cells and mark them in the height array
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (isWater[i][j] === 1) {
                height[i][j] = 0; // Water cells have height 0
                queue.push([i, j]); // Add water cells to the queue
            }
        }
    }

    // Perform BFS
    let index = 0; // Avoid frequent queue shifting by using an index
    while (index < queue.length) {
        const [x, y] = queue[index];
        index++;

        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            // If the cell is within bounds and not visited
            if (nx >= 0 && nx < m && ny >= 0 && ny < n && height[nx][ny] === -1) {
                height[nx][ny] = height[x][y] + 1; // Set height
                queue.push([nx, ny]); // Add the cell to the queue
            }
        }
    }

    return height;
};
