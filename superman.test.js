const superman = require('./superman')

describe('Chicken rescue for "5 5" and "2 5 10 12 15" case', () => {
    test('Chicken rescue for "5 5" and "2 5 10 12 15" case', () => {
        expect(superman.maxChickensProtected(5, 5,"2 5 10 12 15")).toEqual(2);
    });

});

describe('Chicken rescue for "6 10" and "1 11 30 34 35 37" case', () => {
    test('Chicken rescue for "6 10" and "1 11 30 34 35 37" case', () => {
        expect(superman.maxChickensProtected(6, 10, "1 11 30 34 35 37")).toEqual(4);
    });

});






