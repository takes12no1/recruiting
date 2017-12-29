$(function() {
    'use strict';


// Video

//Excellence
$('.awardWinningImg').on('mouseenter',function() {
    $('.awardWinningZoomWrapper').removeClass('hidden');
    $('.awardWinningZoomWrapper').fadeIn( "slow" );
});

$('.awardWinningZoomWrapper').on('mouseout',function() {
    $('.awardWinningZoomWrapper').fadeOut( "slow" );
});


});