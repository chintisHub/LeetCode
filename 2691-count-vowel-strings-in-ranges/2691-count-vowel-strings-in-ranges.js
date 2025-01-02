var vowelStrings = function(words, queries) {
     let prefix = [];
        let res = [];
        let count = 0;

        function isVowel(c) {
            return 'aeiou'.includes(c);
        }

        for (let word of words) {
            if (isVowel(word[0]) && isVowel(word[word.length - 1])) {
                count++;
            }
            prefix.push(count);
        }

        for (let query of queries) {
            let [l, r] = query;
            if (l === 0) {
                res.push(prefix[r]);
            } else {
                res.push(prefix[r] - prefix[l - 1]);
            }
        }

        return res;
};