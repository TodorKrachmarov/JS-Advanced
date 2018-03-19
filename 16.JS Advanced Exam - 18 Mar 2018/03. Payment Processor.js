class PaymentProcessor {
    constructor(options){
        if (options !== undefined) {
            this._options = {};
            this._setOptions(options);
        } else {
            this._options = {types: ["service", "product", "other"], precision: 2};
        }
        this._payments = new Map();
    }

    registerPayment(id, name, type, value){
        if(typeof id !== 'string' || id.trim() === '' || this._payments.has(id)){
            throw new Error('Invalid ID');
        }
        if (typeof name !== 'string' || name.trim() === ''){
            throw new Error('Invalid name');
        }
        if (!this._options.types.includes(type)){
            throw new Error('Invalid type');
        }
        if (Number.isNaN(value) || Number(value) < 0){
            throw new Error('Invalid value');
        }
        this._payments.set(id, {name: name, type: type, value: Number(value).toFixed(this._options.precision)});
    }

    deletePayment(id){
        if(!this._payments.has(id)){
            throw new Error('Invalid ID');
        }
        this._payments.delete(id);
    }

    get(id){
        if(!this._payments.has(id)){
            throw new Error('Invalid ID');
        }
        let pay = this._payments.get(id);
        return `Details about payment ID: ${id}\n- Name: ${pay.name}\n- Type: ${pay.type}\n- Value: ${Number(pay.value).toFixed(this._options.precision)}`;
    }

    setOptions(options){
        if (options !== undefined && typeof options === 'object') {
            if(options.types !== undefined){
                this._options.types = options.types;
            }
            if (options.precision !== undefined) {
                this._options.precision = options.precision;
            }
        }
    }

    toString() {
        let sum = 0;
        for(let [id, pay] of this._payments){
            sum += Number(pay.value);
        }
        return `Summary:\n- Payments: ${this._payments.size}\n- Balance: ${sum.toFixed(this._options.precision)}
`
    }

    _setOptions(options){
        if (options.types !== undefined && options.precision !== undefined){
            this._options.types = options.types;
            this._options.precision = options.precision;
        } else if (options.precision !== undefined){
            this._options.types = ["service", "product", "other"];
            this._options.precision = options.precision;
        } else if (options.types !== undefined){
            this._options.types = options.types;
            this._options.precision = 2;
        }
    }
}

const generalPayments = new PaymentProcessor({types: ['material']});

function add1() {
    generalPayments.registerPayment('0001', 'Microchips', 'material', 15000);
    generalPayments.registerPayment('01A3', 'Biopolymer', 'material', 23000);
}
add1();

console.log(generalPayments.toString());