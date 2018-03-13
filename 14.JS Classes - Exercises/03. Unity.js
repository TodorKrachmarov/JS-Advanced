class Rat{
    constructor(name){
        this.name = name;
        this.rats = [];
    }

    unite(otherRat){
        // if (otherRat instanceof Rat)
        let r = Object.getPrototypeOf(otherRat).constructor.name;
        if (r === 'Rat'){
            this.rats.push(otherRat);
        }
    }

    getRats(){
        return this.rats;
    }

    toString(){
        let result = this.name;
        for (let i = 0; i < this.rats.length; i++) {
            result += '\n\r##' + this.rats[i].name;
        }

        return result;
    }
}

let rat2 = new Rat("Viktor");
let rat3 = new Rat("Vichi");
let rat4 = "fake rat";

rat2.unite(rat3);
console.log(rat2.getRats().length);