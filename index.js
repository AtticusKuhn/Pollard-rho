function factor(num) {
    const f = findOneFactor(num)
    if(!f || num===1 || num===0 || f===1 ||f===0 || f===num){
        return [num]
    }
    return [f, ...factor(num/f)]
}
function findOneFactor(num) {
    let c = 0;
    let x = 2
    let y = 2
    for(let i =0; i<1000; i++) {
        c += 1;
        x = poly(x, num);
        y = poly(poly(y, num), num);
        const g = gcd(Math.abs(x - y), num)
        if ( g!== 1 && g !== num) {
            return g
        }
    }
    return num
}
function gcd(a, b) {
    if ((typeof a !== 'number') || (typeof b !== 'number'))
        return false;
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) {
        var t = b;
        b = a % b;
        a = t;
    }
    return a;
}
function poly(k, n) {
    return ((k ** 2 + 7 * k + 51) % n)
}
function main(){
    let num = Number(prompt("choose a number"))
    let factors = factor(num)
    console.log(factors.join("*"))
}
main()
