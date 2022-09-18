const chai = require('chai');
const assert = chai.assert;

const Translator = require('../components/translator.js');
const tran = new Translator();

suite('Unit Tests', () => {
    suite('American to British', () => {
        // 1
        test('Mangoes are my favorite fruit.', function () {
            assert.equal(tran.translate('Mangoes are my favorite fruit.', 'american-to-british').translation,
                "Mangoes are my <span class=\"highlight\">favourite</span> fruit.")
        })

        // 2
        test('I ate yogurt for breakfast..', function () {
            assert.equal(tran.translate('I ate yogurt for breakfast.', 'american-to-british').translation,
                "I ate <span class=\"highlight\">yoghurt</span> for breakfast.")
        })

        // 3
        test('We had a party at my friend\'s condo.', function () {
            assert.equal(tran.translate('We had a party at my friend\'s condo.', 'american-to-british').translation,
                "We had a party at my friend's <span class=\"highlight\">flat</span>.")
        })

        // 4
        test('Can you toss this in the trashcan for me?', function () {
            assert.equal(tran.translate('Can you toss this in the trashcan for me?', 'american-to-british').translation,
                "Can you toss this in the <span class=\"highlight\">bin</span> for me?")
        })

        // 5
        test('The parking lot was full.', function () {
            assert.equal(tran.translate('The parking lot was full.', 'american-to-british').translation,
                "The <span class=\"highlight\">car park</span> was full.")
        })

        // 6
        test('Like a high tech Rube Goldberg machine.', function () {
            assert.equal(tran.translate('Like a high tech Rube Goldberg machine.', 'american-to-british').translation,
                "Like a high tech <span class=\"highlight\">Heath Robinson device</span>.")
        })

        // 7
        test('To play hooky means to skip class or work..', function () {
            assert.equal(tran.translate('To play hooky means to skip class or work.', 'american-to-british').translation,
                "To <span class=\"highlight\">bunk off</span> means to skip class or work.")
        })

        // 8
        test('No Mr. Bond, I expect you to die.', function () {
            assert.equal(tran.translate('No Mr. Bond, I expect you to die.', 'american-to-british').translation,
                "No <span class=\"highlight\">Mr</span> Bond, I expect you to die.")
        })

        // 9
        test('Dr. Grosh will see you now.', function () {
            assert.equal(tran.translate('Dr. Grosh will see you now.', 'american-to-british').translation,
                "<span class=\"highlight\">Dr</span> Grosh will see you now.")
        })

        // 10
        test('Lunch is at 12:15 today.', function () {
            assert.equal(tran.translate('Lunch is at 12:15 today.', 'american-to-british').translation,
                "Lunch is at <span class=\"highlight\">12.15</span> today.")
        })
    })
    suite('British to American', () => {
        // 11
        test('We watched the footie match for a while.', function () {
            assert.equal(tran.translate('We watched the footie match for a while.', 'british-to-american').translation,
                "We watched the <span class=\"highlight\">soccer</span> match for a while.")
        })

        // 12
        test('Paracetamol takes up to an hour to work.', function () {
            assert.equal(tran.translate('Paracetamol takes up to an hour to work.', 'british-to-american').translation,
                "<span class=\"highlight\">Tylenol</span> takes up to an hour to work.")
        })

        // 13
        test('First, caramelise the onions.', function () {
            assert.equal(tran.translate('First, caramelise the onions.', 'british-to-american').translation,
                "First, <span class=\"highlight\">caramelize</span> the onions.")
        })

        // 14
        test('I spent the bank holiday at the funfair.', function () {
            assert.equal(tran.translate('I spent the bank holiday at the funfair.', 'british-to-american').translation,
                "I spent the <span class=\"highlight\">public holiday</span> at the <span class=\"highlight\">carnival</span>.")
        })

        // 15
        test('I had a bicky then went to the chippy.', function () {
            assert.equal(tran.translate('I had a bicky then went to the chippy.', 'british-to-american').translation,
                "I had a <span class=\"highlight\">cookie</span> then went to the <span class=\"highlight\">fish-and-chip shop</span>.")
        })

        // 16
        test('I\'ve just got bits and bobs in my bum bag.', function () {
            assert.equal(tran.translate('I\'ve just got bits and bobs in my bum bag.', 'british-to-american').translation,
                "I\'ve just got <span class=\"highlight\">odds and ends</span> in my <span class=\"highlight\">fanny pack</span>.")
        })

        // 17
        test('The car boot sale at Boxted Airfield was called off.', function () {
            assert.equal(tran.translate('The car boot sale at Boxted Airfield was called off.', 'british-to-american').translation,
                "The <span class=\"highlight\">swap meet</span> at Boxted Airfield was called off.")
        })

        // 18
        test('Have you met Mrs Kalyani?', function () {
            assert.equal(tran.translate('Have you met Mrs Kalyani?', 'british-to-american').translation,
                "Have you met <span class=\"highlight\">Mrs.</span> Kalyani?")
        })

        // 19
        test('Prof Joyner of King\'s College, London.', function () {
            assert.equal(tran.translate('Prof Joyner of King\'s College, London.', 'british-to-american').translation,
                "<span class=\"highlight\">Prof.</span> Joyner of King\'s College, London.")
        })

        // 20
        test('Tea time is usually around 4 or 4.30.', function () {
            assert.equal(tran.translate('Tea time is usually around 4 or 4.30.', 'british-to-american').translation,
                "Tea time is usually around 4 or <span class=\"highlight\">4:30</span>.")
        })
    })
    suite('Highlight translated words', () => {
        // 21
        test('Mangoes are my favorite fruit.', function () {
            assert.equal(tran.translate('Mangoes are my favorite fruit.', 'american-to-british').translation,
                "Mangoes are my <span class=\"highlight\">favourite</span> fruit.")
        })

        // 22
        test('I ate yogurt for breakfast..', function () {
            assert.equal(tran.translate('I ate yogurt for breakfast.', 'american-to-british').translation,
                "I ate <span class=\"highlight\">yoghurt</span> for breakfast.")
        })

        // 23
        test('We watched the footie match for a while.', function () {
            assert.equal(tran.translate('We watched the footie match for a while.', 'british-to-american').translation,
                "We watched the <span class=\"highlight\">soccer</span> match for a while.")
        })

        // 24
        test('Paracetamol takes up to an hour to work.', function () {
            assert.equal(tran.translate('Paracetamol takes up to an hour to work.', 'british-to-american').translation,
                "<span class=\"highlight\">Tylenol</span> takes up to an hour to work.")
        })
    })
});
