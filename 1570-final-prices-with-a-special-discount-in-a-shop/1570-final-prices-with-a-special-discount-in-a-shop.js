/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    for(let i =0; i< prices.length; i++){
        for(j=i+1;j<prices.length; j++){
            if(prices[i]>=prices[j]){
                prices[i] = prices[i]-prices[j];
                break;
            }
        }
    }
    return prices
};