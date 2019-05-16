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
});