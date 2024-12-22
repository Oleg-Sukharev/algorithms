function isPrime(n:number):boolean {
    // Function to check if n is a prime number
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

// Example usage
console.log(isPrime(10)); // Outputs: false
console.log(isPrime(11)); // Outputs: true