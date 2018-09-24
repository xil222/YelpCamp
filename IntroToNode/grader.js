function average(score) {
    var total = 0;
    // var count = 0;
    score.forEach(function(element) {    
        total += element;
    });
    console.log(Math.round(total * 1.0/score.length));
}

var score1 = [90, 98, 89, 100, 100, 86, 94];
average(score1);