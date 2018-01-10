$(function() {
    'use strict';


// Video


//Excellence1
$('.awardWinningImg').on('click',function() {
    excellenceItemOpenMeCloseAll('.awardWinningZoomWrapper');
});

$('.awardWinningZoomWrapper').on('click',function() {
    excellenceItemClose('.awardWinningZoomWrapper');
});
//Excellence2
$('.givingImg').on('click',function() {
    excellenceItemOpenMeCloseAll('.givingZoomWrapper');
});

$('.givingZoomWrapper').on('click',function() {
    excellenceItemClose('.givingZoomWrapper');
});

//Excellence3
$('.trainingImg').on('click',function() {
    excellenceItemOpenMeCloseAll('.trainingZoomWrapper');
});

$('.trainingZoomWrapper').on('click',function() {
    excellenceItemClose('.trainingZoomWrapper'); 
});

//Excellence4
$('.coreImg').on('click',function() {
    excellenceItemOpenMeCloseAll('.coreZoomWrapper');
});

$('.coreZoomWrapper').on('click',function() {
    excellenceItemClose('.coreZoomWrapper');
});

//Excellence5
$('.historyImg').on('click',function() {
    excellenceItemOpenMeCloseAll('.historyZoomWrapper');
});

$('.historyZoomWrapper').on('click',function() {
    excellenceItemClose('.historyZoomWrapper');
});

function excellenceItemOpen(wrapper) {
    $(wrapper).removeClass('negativeZ');
    $(wrapper).removeClass('animated fadeOut');
    $(wrapper).addClass('animated fadeIn');
}

function excellenceItemClose(wrapper) {
    $(wrapper).removeClass('animated fadeIn');
    $(wrapper).addClass('animated fadeOut');
    setTimeout(function(){ 
        $(wrapper).addClass('negativeZ');
    }, 1000); 
}

function excellenceItemOpenMeCloseAll(wrapper) {
    if (wrapper != '.awardWinningZoomWrapper') {
        excellenceItemClose('.awardWinningZoomWrapper');
    }
    if (wrapper != '.givingZoomWrapper') {
        excellenceItemClose('.givingZoomWrapper');
    }
    if (wrapper != '.trainingZoomWrapper') {
        excellenceItemClose('.trainingZoomWrapper');
    }
    if (wrapper != '.coreZoomWrapper') {
        excellenceItemClose('.coreZoomWrapper');
    }
    if (wrapper != '.historyZoomWrapper') {
        excellenceItemClose('.historyZoomWrapper');
    }
    excellenceItemOpen(wrapper);
}

// $('.leaderDetails').on('shown.bs.collapse', function() {
//     $(this).addClass('opened');
//     $(this).prev().css( "clear", "both" );
//   }).on('hidden.bs.collapse', function() {
//     $(this).prev().css( "clear", "none" );
//      $(this).removeClass('opened');
//   });




});