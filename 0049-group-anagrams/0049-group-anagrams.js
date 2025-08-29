var groupAnagrams = function (strs) {
  const groups = new Map();
  for (const s of strs) {
    const key = s.split("").sort().join(""); // O(k log k)
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(s);
  }
  return Array.from(groups.values());
};
