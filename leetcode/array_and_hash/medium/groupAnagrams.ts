function groupAnagrams(strs: string[]): string[][] {
    const map = new Map();

    for (let str of strs) {
        const key = str.split('').sort().join('');
        if (map.has(key)){
          map.get(key).push(str);
        }else{
          map.set(key, [str]);
        }
    }

    return Array.from(map.values());
};

groupAnagrams(["eat","tea","tan","ate","nat","bat"])// => [["bat"],["nat","tan"],["ate","eat","tea"]]
