const bossBaby = require('./bossbaby')

describe('Bossbaby for "SRSSRRR" case', () => {
    test('Bossbaby for "SRSSRRR" case', () => {
        expect(bossBaby.BossBabyRevenged("SRSSRRR")).toEqual("Good boy");
    });

});

describe('Bossbaby for "RSSRR" case', () => {
    test('Bossbaby for "RSSRR" case', () => {
        expect(bossBaby.BossBabyRevenged("RSSRR")).toEqual("Bad boy");
    });

});

describe('Bossbaby for "SSSRRRRS" case', () => {
    test('Bossbaby for "SSSRRRRS" case', () => {
        expect(bossBaby.BossBabyRevenged("SSSRRRRS")).toEqual("Bad boy");
    });

});

describe('Bossbaby for "SRRSSR" case', () => {
    test('Bossbaby for "SRRSSR" case', () => {
        expect(bossBaby.BossBabyRevenged("SRRSSR")).toEqual("Bad boy");
    });

});

describe('bossbaby of "SSRSRR" case', () => {
    test('bossbaby of "SSRSRR" case', () => {
        expect(bossBaby.BossBabyRevenged("SSRSRR")).toEqual("Good boy");
    });

});




