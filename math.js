function greater_divisor(n,m) {

    if (n > m) {
        x = n
        y = n
    }
    if (m > n) {
        x = n
        y = m
    }

    

    while (x > 0) {
        if ((m % x) === 0 && (n % x) === 0) {
            break
        }
        else{
            x -- 
        }

    }

    return "why are you here"
}

console.log(greater_divisor(12, 120));
console.log(greater_divisor(12, 121))