/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
    const n = graph.length; //length of the graph 
    const color = new Array(n).fill(0); // create a new array of same length as graph It contains either 0,1,2
    // 0--unvisited 1--visiting and 2--safe state

    const result = []; // array to store all safe states


    function dfs(node) {
        if (color[node] > 0) return color[node] === 2; // Only 0 means unvisited 1,2 are visited it returns true for 2 and false for 1

        color[node] = 1; // making current unvisited to visiting
        for (const neighbor of graph[node]) { // checking if all the outgoing states for this index is safe state
            if (color[neighbor] === 1 || !dfs(neighbor)) {
                return false;
            }// we know that if neighbour is unsafe then current is also unsafe state
            // if neighbour is 1 means there is a loop
            // because we get 1 other than current when we try dfs(neighbour) getting 1 means going back to its ancestor
        }
        //if all the outgoing states are safe then we have to make the current state as safe
        color[node] = 2;
        return true;
    }

    for (let i = 0; i < n; i++) {
        if (dfs(i)) result.push(i);
    }// call dfs() for all states if true then push that index to result

    return result;
};