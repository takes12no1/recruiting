$(function() {
    'use strict';


// Video

//Excellence1
$('.awardWinningImg').on('click',function() {
    $('.awardWinningZoomWrapper').removeClass('negativeZ');
    $('.awardWinningZoomWrapper').removeClass('animated fadeOut');
    $('.awardWinningZoomWrapper').addClass('animated fadeIn');
});

$('.awardWinningZoomWrapper').on('click',function() {
    $('.awardWinningZoomWrapper').removeClass('animated fadeIn');
    $('.awardWinningZoomWrapper').addClass('animated fadeOut');
    setTimeout(function(){ 
        $('.awardWinningZoomWrapper').addClass('negativeZ');
    }, 1000);  
});
//Excellence2
$('.givingImg').on('click',function() {
    $('.givingZoomWrapper').removeClass('negativeZ');
    $('.givingZoomWrapper').removeClass('animated fadeOut');
    $('.givingZoomWrapper').addClass('animated fadeIn');
});

$('.givingZoomWrapper').on('click',function() {
    $('.givingZoomWrapper').removeClass('animated fadeIn');
    $('.givingZoomWrapper').addClass('animated fadeOut');
    setTimeout(function(){ 
        $('.givingZoomWrapper').addClass('negativeZ');
    }, 1000);  
});

//Excellence3
$('.trainingImg').on('click',function() {
    $('.trainingZoomWrapper').removeClass('negativeZ');
    $('.trainingZoomWrapper').removeClass('animated fadeOut');
    $('.trainingZoomWrapper').addClass('animated fadeIn');
});

$('.trainingZoomWrapper').on('click',function() {
    $('.trainingZoomWrapper').removeClass('animated fadeIn');
    $('.trainingZoomWrapper').addClass('animated fadeOut');
    setTimeout(function(){ 
        $('.trainingZoomWrapper').addClass('negativeZ');
    }, 1000);  
});

//Excellence4
$('.coreImg').on('click',function() {
    $('.coreZoomWrapper').removeClass('negativeZ');
    $('.coreZoomWrapper').removeClass('animated fadeOut');
    $('.coreZoomWrapper').addClass('animated fadeIn');
});

$('.coreZoomWrapper').on('click',function() {
    $('.coreZoomWrapper').removeClass('animated fadeIn');
    $('.coreZoomWrapper').addClass('animated fadeOut');
    setTimeout(function(){ 
        $('.coreZoomWrapper').addClass('negativeZ');
    }, 1000);  
});

//Excellence5
$('.historyImg').on('click',function() {
    $('.historyZoomWrapper').removeClass('negativeZ');
    $('.historyZoomWrapper').removeClass('animated fadeOut');
    $('.historyZoomWrapper').addClass('animated fadeIn');
});

$('.historyZoomWrapper').on('click',function() {
    $('.historyZoomWrapper').removeClass('animated fadeIn');
    $('.historyZoomWrapper').addClass('animated fadeOut');
    setTimeout(function(){ 
        $('.historyZoomWrapper').addClass('negativeZ');
    }, 1000);  
});




$('.historyImg').on('mouseenter',function() {
    $('.historyZoomWrapper').fadeIn( "slow" );
});

$('.historyZoomWrapper').on('mouseout',function() {
    $('.historyZoomWrapper').fadeOut( "slow" );
});


});