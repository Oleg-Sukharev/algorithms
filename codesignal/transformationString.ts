// For example, for the 
// input string "HelLo WoRld 123", the output should be "hELlO wOrLD 123".

function solution(inputString:string) {
    const alphabet:string = "abcdefghijklmnopqrstuvwxyz";
    const alphabetUpperCase:string =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    const result: string[] = inputString.split('').map(char => {
      if (alphabet.includes(char)) {
        return alphabetUpperCase[alphabet.indexOf(char)];
      } else if (alphabetUpperCase.includes(char)) {
        return alphabet[alphabetUpperCase.indexOf(char)];
      }
      
      return char;
    });

    return result.join("")
}

console.log(solution("HelLo WoRld 123"));

