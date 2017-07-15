function solve() {

    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new TypeError("Abstract class cannot be instantiated directly");
            }
            this.weight = weight;
            this.melonSort = melonSort;
        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.elementIndex = this.weight * melonSort.length;
        }

        toString() {
            return `Element: Water\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.elementIndex = this.weight * melonSort.length;
        }

        toString() {
            return `Element: Fire\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.elementIndex = this.weight * melonSort.length;
        }

        toString() {
            return `Element: Earth\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.elementIndex = this.weight * melonSort.length;
        }

        toString() {
            return `Element: Air\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    class Melolemonmelon extends Watermelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.elementIndex = this.weight * melonSort.length;
            this._elements = ['Water', 'Fire', 'Earth', 'Air'];
            this.morph();

        }

        morph() {
            let current = this._elements.shift();
            this.element = current;
            this._elements.push(current);
        }

        toString() {
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
        }
    }

    return {
        Melon,
        Watermelon,
        Firemelon,
        Earthmelon,
        Airmelon,
        Melolemonmelon
    }
}
