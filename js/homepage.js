
const data = {
    "Shubharam":"The company was established as a exporter of powder in all particle size which are used as a base and fillers in the industries like cosmetics, paper, paints, rubber, detergents, sizing for fabric, food industries etc. We have immense experience in the field of all kinds of micro minerals. ",
    "Mining":"Mining is the process of digging things out of the ground. Any material that cannot be grown must be mined. We have the mines which posses supreme quality of products",
    "Manufacturing":"Manufactioring is the process of converting the raw materials into the used materials. We have one of the best and versatile manufacturing units and versatile manufacturing units in our field which produces top quality materials",
    "Testing":"We have a testing laboratory with best testing machines which tests the manufactured products as we believe in providing top quality materials",
    "Trading":"We trade globally. We are exporters of all the minerals in all particle size and whiteness example calcite powder coated and natural, dolomite powder, china clay powder etcetera. We also deal in domestic markets"
}

$(function() {
    truckPositionChange();
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
     return truckPositionChange()
 });

function truckPositionChange() {
    $('.homePageBall').removeClass('glow');

    var min = $($('.homePageBall').get(0)).position().left + $($('.homePageBall').get(0)).outerWidth(true);

    $('.homePageBall').each(function(a,b){
            $div2 = $('.car');
            var x1 = $(b).position().left;
            var w1 = $(b).outerWidth(true);

            var r1 = x1 + w1;

            var x2 = $div2.offset().left;
            var w2 = $div2.outerWidth(true);

            var r2 = x2 + w2;

            if (r1<=r2) {
                $('.homePageBall').removeClass('glow');
                $(b).addClass('glow');
                let title = $(b).attr('data-process');
                let text = data[title];

                text = ( text ) ? ( ( text.length == 0 ) ? undefined : text ) : title;
                $(".sun").find('p').find('.title').text(title);
                $(".sun").find('p').find('.text').text(text);
            }

            if(r2 < min){
                $('.homePageBall').removeClass('glow');
                let title = "Shubharam";
                let text = data[title];

                text = ( text ) ? ( ( text.length == 0 ) ? undefined : text ) : title;
                $(".sun").find('p').find('.title').text(title);
                $(".sun").find('p').find('.text').text(text);
            }

    })
}

