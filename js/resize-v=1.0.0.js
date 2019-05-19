window.addEventListener('load', function () {
    // var hig = $('#product .imgbox .im').height();
    // var $ban = $('#product .banner');
    // $ban.css({height: hig});

    //包网
    var wid = $('#programme .detail').width();
    $('#programme .detail .tab-cont div').css({maxWidth: wid+'px'})

    window.addEventListener('resize', function () {
        // hig = $('#product .imgbox .im').height();
        // $ban.css({height: hig});

        wid = $('#programme .detail').width();
        $('#programme .detail .tab-cont div').css({maxWidth: wid+'px'})
    })

    var count = 0;
    var outTime=5;//分钟
    window.setInterval(go, 1000);
    function go() {
        count++;
        if (count == outTime*60) {
             window.location.reload();
        }
    }
    var x ;
    var y ;
    //监听鼠标
    document.onmousemove = function (event) {
            count = 0;
    };
    //监听键盘
    document.onkeydown = function () {
            count = 0;
    };

});