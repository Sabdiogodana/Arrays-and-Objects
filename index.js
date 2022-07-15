function calculate(quantity,name,price){
    let totalPrice= quantity*price
    return  `${quantity},${name} for ksh ${totalPrice}`
}
console.log (calculate(4,"Orange",30))