describe ("pow", function() {

    function makeTest(x, n) {
        var expected = Math.pow(x, n);
        it("При возведении" + x + " в степень n результат: " + expected, function(){
            assert.equal(pow(x, n), expected);
        });
    }

    for (var x = 0;x >= n; x++) {
        makeTest(x);
    }
    
});

describe ("pow", function() {

    function makeTest(x, n) {
        var expected = Math.pow(x, n);
        it("При возведении" + x + " в степень n результат: " + expected, function(){
            assert.equal(pow(x, n), expected);
        });
    }

    for (var x = 0;x < n; x++) {
        makeTest(x);
    }
    
});

// it("возводит в n-ю степень", function() {
    //     assert.equal(pow(x, n))
    // });