var a = 1, b = 2, c = 3;

(function firstFunction(){
    var b = 5, c = 6; // a1 b5 c6

    (function secondFunction(){
        var b = 8; // a1 b8 c6
        console.log("a: "+a+", b: "+b+", c: "+c);

        (function thirdFunction(){
            var a = 7, c = 9; // a7 b8 c9

            (function fourthFunction(){
                var a = 1, c = 8; // a1 b8 c8

            })();
        })();
    })();
})();
