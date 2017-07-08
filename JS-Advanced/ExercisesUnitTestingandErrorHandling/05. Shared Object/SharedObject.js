let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

document.body.innerHTML = `<body>
    <div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>
</body>`;

let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};

describe('Shared Obj Unit Test', function () {
    describe('Initial value', function () {
        it('test name initial value', function () {
            expect(sharedObject.name).to.be.null;
        });
        it('test income initial value', function () {
            expect(sharedObject.income).to.be.null;
        });
    });
    describe('changeName test', function () {
        it('with empty string', function () {
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.null;
        });
        it('with non-empty string', function () {
            sharedObject.changeName('Pesho');
            expect(sharedObject.name).to.be.equal('Pesho', 'Error');
        });
        describe('Name input tests', function () {
            it('with empty string', function () {
                sharedObject.changeName('Nakov');
                sharedObject.changeName('');
                let nameTxtVal = $('#name');
                expect(nameTxtVal.val()).to.be.equal('Nakov');
            });
            it('with non-empty string', function () {
                sharedObject.changeName('Pesho');
                let nameTxtVal = $('#name');
                expect(nameTxtVal.val()).to.be.equal('Pesho');
            });
        });
    });
    describe('changeIncome test', function () {
        it('with a string', function () {
            sharedObject.changeIncome('d');
            expect(sharedObject.income).to.be.null;
        });
        it('with a positive number', function () {
            sharedObject.changeIncome(5);
            expect(sharedObject.income).to.be.equal(5);
        });
        it('with a floating-point', function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(4.11);
            expect(sharedObject.income).to.be.equal(5);
        });
        it('with a negative number', function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(-4);
            expect(sharedObject.income).to.be.equal(5);
        });
        it('with a zero', function () {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.be.equal(5);
        });
        describe('Income input test', function () {
            it('with a string', function () {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome('d');
                let incomeTxt = $('#income');
                expect(incomeTxt.val()).to.be.equal('5');
            });
            it('with a positive number', function () {
                sharedObject.changeIncome(5);
                let incomeTxt = $('#income');
                expect(incomeTxt.val()).to.be.equal('5');
            });
            it('with a floating-point number', function () {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(2.11);
                let incomeTxt = $('#income');
                expect(incomeTxt.val()).to.be.equal('5');
            });
            it('with a negative number', function () {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(-2);
                let incomeTxt = $('#income');
                expect(incomeTxt.val()).to.be.equal('5');
            });
            it('with a zero', function () {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(0);
                 let incomeTxt = $('#income');
                expect(incomeTxt.val()).to.be.equal('5');
            });
        });
    });
    describe('updateName test', function () {
        it('with an empty string', function () {
            sharedObject.changeName('Viktor');
            let nameEl = $('#name');
            nameEl.val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('Viktor');
       });
        it('with an non-empty string', function () {
            sharedObject.changeName('Viktor');
            let nameEl = $('#name');
            nameEl.val('Kiril');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('Kiril');
        });
    });
    describe('updateIncome', function () {
        it('with a string', function () {
            sharedObject.changeIncome(3);
            let incomeEl = $('#income');
            incomeEl.val('income');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3);
        });
        it('with a floating-point number', function () {
            sharedObject.changeIncome(3);
            let incomeEl = $('#income');
            incomeEl.val('3.11');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3);
        });
        it('with a negative number', function () {
            sharedObject.changeIncome(3);
            let incomeEl = $('#income');
            incomeEl.val('-5');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3);
        });
        it('with a zero', function () {
            sharedObject.changeIncome(3);
            let incomeEl = $('#income');
            incomeEl.val('0');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3);
        });
        it('with a positive number', function () {
            sharedObject.changeIncome(3);
            let incomeEl = $('#income');
            incomeEl.val('5');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(5);
        });
    });
});