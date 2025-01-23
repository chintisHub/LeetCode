/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function (grid) {
    let r = grid.length;
    let c = grid[0].length;
    let rc = new Array(r).fill(0);
    let cc = new Array(c).fill(0);
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (grid[i][j]) {
                rc[i]++;
                cc[j]++;
            }
        }
    }
    let ans = 0;
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (grid[i][j] && (rc[i] > 1 || cc[j] > 1)) {
                ans++;
            }
        }
    }
    return ans;
};