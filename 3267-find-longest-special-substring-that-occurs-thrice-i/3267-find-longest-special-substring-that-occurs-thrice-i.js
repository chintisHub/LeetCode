var maximumLength = function(s) {
    let map = new Map();
    let arr = [];
    let maxString = 0;
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (s[i] == s[j]) {
                arr.push(s[i]);
                let val = arr.join('');
                if (!map.has(val)) map.set(val, 1);
                else map.set(val, map.get(val) + 1);
                if (map.get(val) >= 3) maxString = Math.max(maxString, val.length);
            } else {
                j = s.length;
            }
        }
        arr = [];
    }
    return maxString == 0 ? -1 : maxString;
};