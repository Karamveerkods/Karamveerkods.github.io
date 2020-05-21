 $(function() {
    
    $(".sun h2")
        .wrapInner("<span>")

    $(".sun h2 br")
        .before("<span class='spacer'>")
        .after("<span class='spacer'>");

        second()

});

jQuery.fn.onPositionChanged = function (trigger, millis) {
    if (millis == null)
        millis = 100;
    var o = $(this[0]); // our jquery object
    if (o.length < 1)
        return o;
    var lastPos = null;
    var lastOff = null;
    setInterval(function () {
        if (o == null || o.length < 1)
            return o; // abort if element is non existend eny more
        if (lastPos == null)
            lastPos = o.position();
        if (lastOff == null)
            lastOff = o.offset();
        var newPos = o.position();
        var newOff = o.offset();
        if (lastPos.top != newPos.top || lastPos.left != newPos.left) {
            $(this).trigger('onPositionChanged', {lastPos: lastPos, newPos: newPos});
            if (typeof (trigger) == "function")
                trigger(lastPos, newPos);
            lastPos = o.position();
        }
        if (lastOff.top != newOff.top || lastOff.left != newOff.left) {
            $(this).trigger('onOffsetChanged', {lastOff: lastOff, newOff: newOff});
            if (typeof (trigger) == "function")
                trigger(lastOff, newOff);
            lastOff = o.offset();
        }
    }, millis);
    return o;
};

 $(".car").onPositionChanged(function () {
     return second()
 });

function second() {
    $('.homePageBall').removeClass('glow');

    var min = $($('.homePageBall').get(0)).position().left + $($('.homePageBall').get(0)).outerWidth(true);

    $('.homePageBall').each(function(a,b){
            $div2 = $('.car');
            var x1 = $(b).position().left;
            // var y1 = $div1.offset().top;
            // var h1 = $div1.outerHeight(true);
             var w1 = $(b).outerWidth(true);

            // var b1 = y1 + h1;
            var r1 = x1 + w1;

            var x2 = $div2.offset().left;
            // var y2 = $div2.offset().top;
            // var h2 = $div2.outerHeight(true);
             var w2 = $div2.outerWidth(true);

            // var b2 = y2 + h2;
            var r2 = x2 + w2;

            // console.log(" x1: ",x1)
            // console.log(" x2: ",x2)
            if (r1<=r2) {
                $('.homePageBall').removeClass('glow');
                $(b).addClass('glow');
                $(".sun").find('p').find('span').text($(b).attr('data-process'))
            }

            if(r2 < min){
                $('.homePageBall').removeClass('glow');
                $(".sun").find('p').find('span').text("Shubharam")

            }

    })
}