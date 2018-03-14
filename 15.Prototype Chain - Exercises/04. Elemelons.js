function solve() {
    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new TypeError("Abstract class cannot be instantiated directly");
            }
            this.weight = weight;
            this.sort = melonSort;
            this._elementIndex = weight * melonSort.length;
        }

        get elementIndex() {
            return this._elementIndex;
        }

        toString() {
            return `\nSort: ${this.sort}\nElement Index: ${this.elementIndex}`;
        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._element = 'Water';
        }

        toString() {
            return `Element: ${this._element}` + super.toString();
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._element = 'Fire';
        }

        toString() {
            return `Element: ${this._element}` + super.toString();
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._element = 'Earth';
        }

        toString() {
            return `Element: ${this._element}` + super.toString();
        }
    }

    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._element = 'Air';
        }

        toString() {
            return `Element: ${this._element}` + super.toString();
        }
    }

    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this._elements = ['Fire', 'Earth', 'Air', 'Water'];
        }

        morph() {
            this._element = this._elements.shift();
            this._elements.push(this._element);
        }
    }

    return {Melon, Watermelon, Firemelon, Earthmelon, Airmelon, Melolemonmelon};
}