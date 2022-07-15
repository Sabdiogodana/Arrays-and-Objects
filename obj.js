class KioskCalc {
    constructor (fruit,quantity){
        this.fruit = fruit
        this.quality = quantity
        this.fruitPriceList = {"Orange":30,"Mango":15,"Avocado":40};
        this.getTotalCost= function(){
            return `${quality} ${fruit} for Ksh ${quantity * this.price}`
            

        }
    }
}
KioskCalc.prototype.price= 40;
var KioskCalc = new KioskCalc("Avocado",2)
console.log(KioskCalc.getTotalCost())

