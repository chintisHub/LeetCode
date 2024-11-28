/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {

    var matrixReversed = function(arr){
        let i =0;
        let j = arr.length-1;
        while(j>i){
            let temp = arr[i];
            arr[i]=arr[j];
            arr[j] = temp;
            i++;
            j--;

        }
        return arr;
    }

    for(let i=0; i<matrix.length; i++){
        for(let j=0;j<i; j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }

    for(let i =0 ;i<matrix.length;i++){
        matrix[i] = matrixReversed(matrix[i]);
    }
    return matrix
};