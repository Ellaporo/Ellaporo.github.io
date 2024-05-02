var timer = null;

var countdownNumber= 10;

var changeState = function (state) {
    document.body.className = 'body-state'+
    state;
    clearInterval(timer)
    var countdownNumber= 10;
    document.getElementById('countdown').
    innerHTML = countdownNumber;

    // countdown
    if(state == 2) {
        timer = setInterval(function () {
            countdownNumber = countdownNumber-1;
            document.getElementById('countdown').innerHTML
             = countdownNumber;

             // VIDEO KOHTA 22:54 TÄHÄN KOHTAAN JÄITT LOL
            if (countdownNumber > 3 && countdownNumber <= 6) {
                // be mammamia
                document.getElementById('mammamia').className = 'mammamia show';
            } else {
                document.getElementById('mammamia').className = 'mammamia';
            }

            if (countdownNumber == 3) {
                // veijä käteen
                document.getElementById('vedäkäteen').className = 'vedäkäteen show';
            } else {
                document.getElementById('vedäkäteen').className = 'vedäkäteen';
            }

            if (countdownNumber <= 0) {
                changeState(3);
            };
        }, 500);
    } else if (state == 3) {
        var success = setTimeout(function ()
        {
            var randomNumber = Math.round
                (Math.random()*10);
            
            console.log('randomNumber:', randomNumber)
                
                //success
                if (randomNumber > 5) {
                    changeState(4);

                } else {
                    changeState(5)
                }
        }, 2000);
    };
}