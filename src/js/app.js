$(function() {
    'use strict';
    
    var homeState = 0;
    //zero based 5 equals 6 states
    var stateCasesTotal = 5;
    var stateCaseChange = true;

    $(window).resize(function(){
        location.reload();
        console.log('Resized');
    });

    function buildHome() {
        //remove classes if previously built
        $('#rightCurveShape').removeClass('fadeOut');
        
        //add classes
        $('#rightCurveShape').addClass('fadeIn');
        console.log('page 1 build');
    }
    function destroyHome() {
        $('#rightCurveShape').removeClass('fadeIn');
        $('#rightCurveShape').addClass('fadeOut');
        console.log('page 1 destroyed');
    }

    function buildDouble() {
        $('#wrapper').removeClass('backgroundPage1');
        $('#wrapper').addClass('backgroundPage2');
        console.log('page 2 build');
    }

    function destroyDouble() {
        console.log('page 2 destroy');
    }

    function buildJoin() {
        console.log('page 3 build');
    }

    function destroyJoin() {
        console.log('page 3 destroy');
    }

    function buildOperate() {
        console.log('page 4 build');
    }
    function destroyOperate() {
        console.log('page 4 destroy');
    } 

    function buildWinning() {
        console.log('page 5 build');
    }

    function destroyWinning() {
        console.log('page 5 destroy');
    }
    function buildLastPage() {
        console.log('page 6 build');
    }

    function destroyLastPage() {
        console.log('page 6 destroy');
    }

    function changeHomeCase(x) {
        var prevHomeState = homeState;
        homeState = homeState + x;
        console.log('prev= ' + prevHomeState + ' - Current= ' + homeState);
    
        if (homeState >= (stateCasesTotal + 1)) {
            homeState = 0;
        }
        if (homeState < 0) {
            homeState = stateCasesTotal;
        }
        //destroy Previous
        switch (prevHomeState) {
            case 0:
                destroyHome();
                break;
            case 1:
                destroyDouble();
                break;
            case 2:
                destroyJoin();
                break;
            case 3:
                destroyOperate();
                break;
            case 4:
                destroyWinning();
                break;
            case 5:
                destroyLastPage();
        }
        // Build new
        switch (homeState) {
            case 0:
                buildHome();
                break;
            case 1:
                buildDouble();
                break;
            case 2:
                buildJoin();
                break;
            case 3:
                buildOperate();
                break;
            case 4:
                buildWinning();
                break;
            case 5:
                buildLastPage();
        }
        
    }


    $('body').bind('mousewheel', function(e){
       
            if (stateCaseChange == true) {
                if(e.originalEvent.wheelDelta >= 35) {
                    changeHomeCase(-1);
                    // console.log('scrolled up');
                    scrolled()
                }
                else if(e.originalEvent.wheelDelta <= -35) {
                    changeHomeCase(1);
                    // console.log('scrolled down');
                    scrolled()
                }
            }
      
    });

    // Slow down pardner
    function scrolled() {
        stateCaseChange = false;
        setTimeout(function(){
            stateCaseChange = true;
        }, 500);
    }

});