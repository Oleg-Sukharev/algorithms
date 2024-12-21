function moreToNextChar(s: string): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const result: string[] = []; // Explicitly typing result as string[]

  for (const char of s) { 
    const lowerChar = char.toLowerCase(); // Handle case insensitivity

    if (alphabet.includes(lowerChar)) {
      // Check if the character is uppercase
      const isUpperCase = char === char.toUpperCase();

      // Find the current index in the alphabet and calculate the next index
      const currentIndex = alphabet.indexOf(lowerChar);
      const nextIndex = (currentIndex + 1) % alphabet.length;

      // Get the next character, preserving the case
      const nextChar = isUpperCase
        ? alphabet[nextIndex].toUpperCase()
        : alphabet[nextIndex];

      result.push(nextChar); // Add the transformed character
    } else {
      result.push(char); // Non-alphabetic characters remain unchanged
    }
  }

  // Join the array into a final string and return it
  return result.join("");
}
