function canConstruct(ransomNote: string, magazine: string): boolean {
  let magMap = new Map<string, number>()

  for (let i = 0; i < magazine.length; i++) {
    magMap.set(magazine[i], (magMap.get(magazine[i]) || 0) + 1)
  }

  for (let i = 0; i < ransomNote.length; i++) {
    let value = magMap.get(ransomNote[i])
    if (!value) {
      return false
    } else {
      magMap.set(ransomNote[i], (value - 1))
    }
  }

  return true
};