var lexicographicallySmallestArray = function (nums, limit) {
  const indexed = nums.map((num, index) => ({ num, index })).sort((a, b) => a.num - b.num);

  const groups = [];
  let currentGroup = [indexed[0]];

  for (let i = 1; i < indexed.length; i++) {
    if (indexed[i].num - indexed[i - 1].num <= limit) {
      currentGroup.push(indexed[i]);
    } else {
      groups.push(currentGroup);
      currentGroup = [indexed[i]];
    }
  }
  groups.push(currentGroup);

  const result = new Array(nums.length);
  for (const group of groups) {
    group.sort((a, b) => a.index - b.index);
    const sortedValues = group.map(x => x.num).sort((a, b) => a - b);

    for (let i = 0; i < group.length; i++) {
      result[group[i].index] = sortedValues[i];
    }
  }

  return result;
};