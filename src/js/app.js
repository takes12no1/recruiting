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
        setTimeout(function(){     
        //add classes
        $('#state0backgroundContainer').removeClass('backgroundContainerCollapsed');
        $('#state0backgroundContainer').addClass('backgroundContainerActive');
        }, 1000); 
        setTimeout(function(){
            $('#rightCurveShape').removeClass('fadeOut');
            $('#rightCurveShape').addClass('fadeIn');
            $('#leftCurveImg').removeClass('slideOutLeft');
            $('#leftCurveImg').addClass('slideInLeft');
            $('#logo').removeClass('fadeOut');
            $('#logo').addClass('slideInLeft');
            $('#getInTouchBtn').removeClass('fadeOut');
            $('#getInTouchBtn').addClass('fadeIn');
            $('#discoverYourBestTitleImg').removeClass('fadeOut');
            $('#discoverYourBestTitleImg').addClass('slideInLeft');
            $('#scrollToLearnTxt').removeClass('fadeOut');
            $('#scrollToLearnTxt').addClass('slideInLeft');
            $('#scrollToLearnDownChevron').removeClass('animated fadeOut');
            $('#scrollToLearnDownChevron').addClass('bounce');
        }, 2000);    
        //Menu
        $('#deskTopMenuRight').addClass('hidden'); 
        //pagination
        $('#paginationState0').removeClass('fa-circle-thin');
        $('#paginationState0').addClass('fa-circle');
        homeState = 0;
        console.log('page 1 build');
    }

    function destroyHome() {
        $('#rightCurveShape').removeClass('fadeIn');
        $('#rightCurveShape').addClass('fadeOut');
        $('#leftCurveImg').removeClass('slideInLeft');
        $('#leftCurveImg').addClass('slideOutLeft');
        $('#logo').removeClass('slideInLeft');
        $('#logo').addClass('fadeOut');
        $('#getInTouchBtn').removeClass('fadeIn');
        $('#getInTouchBtn').addClass('fadeOut');
        $('#discoverYourBestTitleImg').removeClass('slideInLeft');
        $('#discoverYourBestTitleImg').addClass('fadeOut');
        $('#scrollToLearnTxt').removeClass('slideInLeft');
        $('#scrollToLearnTxt').addClass('fadeOut');
        $('#scrollToLearnDownChevron').removeClass('bounce');
        $('#scrollToLearnDownChevron').addClass('animated fadeOut');
        $('#state0backgroundContainer').removeClass('backgroundContainerActive');
        $('#state0backgroundContainer').addClass('backgroundContainerCollapsed');
        //pagination
        $('#paginationState0').removeClass('fa-circle');
        $('#paginationState0').addClass('fa-circle-thin');
        console.log('page 1 destroyed');
    }

    function buildDouble() {
        
        //Background
        $('#state1backgroundContainer').removeClass('backgroundContainerCollapsed');
        $('#state1backgroundContainer').addClass('backgroundContainerActive');
    
        //Content
        setTimeout(function(){
            $('#state1TitleA').removeClass('hidden animated slideOutUp');
            $('#state1TitleA').addClass('animated slideInDown');
            $('#state1TitleA img').removeClass('animated fadeOut');
            $('#state1TitleA img').addClass('animated fadeIn');
            $('#state1TitleB').removeClass('hidden animated fadeOut');
            $('#state1TitleB').addClass('animated fadeIn');
            $('#state1TitleB img').removeClass('animated slideOutUp');
            $('#state1TitleB img').addClass('animated slideInUp');
            $('#state1Text').removeClass('hidden animated fadeOut');
            $('#state1Text').addClass('animated fadeIn');
            $('#state1Text p').removeClass('animated slideOutUp');
            $('#state1Text p').addClass('animated slideInUp');
            $('#state1Spacer').removeClass('hidden animated fadeOut');
            $('#state1Spacer').addClass('animated fadeIn');
            $('#state1Btn').removeClass('hidden animated slideOutLeft');
            $('#state1Btn').addClass('animated slideInLeft');
        }, 1000);
        //pagination
        $('#paginationState1').removeClass('fa-circle-thin');
        $('#paginationState1').addClass('fa-circle');
        //Menu
        $('#deskTopMenuRight').removeClass('hidden');
        homeState = 1;
        console.log('page 2 build');
    }

    



    function destroyDouble() {
        $('#state1TitleA').removeClass('animated slideInDown');
        $('#state1TitleA').addClass('animated slideOutUp');
        $('#state1TitleA img').removeClass('animated fadeIn');
        $('#state1TitleA img').addClass('animated fadeOut');
        
        
        $('#state1TitleB').removeClass('animated fadeIn');
        $('#state1TitleB').addClass('animated fadeOut');
        $('#state1TitleB img').removeClass('animated slideInUp');
        $('#state1TitleB img').addClass('animated slideOutUp');
        $('#state1Text').removeClass('animated fadeIn');
        $('#state1Text').addClass('animated fadeOut');
        $('#state1Text p').removeClass('animated slideInUp');
        $('#state1Text p').addClass('animated slideOutUp');
        $('#state1Spacer').removeClass('animated fadeIn');
        $('#state1Spacer').addClass('animated fadeOut');
        $('#state1Btn').removeClass('animated slideInleft');
        $('#state1Btn').addClass('animated slideOutLeft');
        setTimeout(function(){
            $('#state1backgroundContainer').removeClass('backgroundContainerActive');
            $('#state1backgroundContainer').addClass('backgroundContainerCollapsed');
        }, 1000);
        //pagination
        $('#paginationState1').removeClass('fa-circle');
        $('#paginationState1').addClass('fa-circle-thin');
        console.log('page 2 destroy');
    }

    function buildJoin() {
        $('#state2backgroundContainer').removeClass('backgroundContainerCollapsed');
        
        //add classes
        $('#state2backgroundContainer').addClass('backgroundContainerActive');
        //pagination
        $('#paginationState2').removeClass('fa-circle-thin');
        $('#paginationState2').addClass('fa-circle');
        //Menu
        $('#deskTopMenuRight').removeClass('hidden');
        homeState = 2;
        console.log('page 3 build');
    }

    function destroyJoin() {
        $('#state2backgroundContainer').removeClass('backgroundContainerActive');
        $('#state2backgroundContainer').addClass('backgroundContainerCollapsed');
        
        //pagination
        $('#paginationState2').removeClass('fa-circle');
        $('#paginationState2').addClass('fa-circle-thin');
        console.log('page 3 destroy');
    }

    function buildOperate() {
        $('#state3backgroundContainer').removeClass('backgroundContainerCollapsed');
        
        //add classes
        $('#state3backgroundContainer').addClass('backgroundContainerActive');
        //pagination
        $('#paginationState3').removeClass('fa-circle-thin');
        $('#paginationState3').addClass('fa-circle');
        //Menu
        $('#deskTopMenuRight').removeClass('hidden');
        homeState = 3;
        console.log('page 4 build');
    }

    function destroyOperate() {
        $('#state3backgroundContainer').removeClass('backgroundContainerActive');
        $('#state3backgroundContainer').addClass('backgroundContainerCollapsed');
        //pagination
        $('#paginationState3').removeClass('fa-circle');
        $('#paginationState3').addClass('fa-circle-thin');
        console.log('page 4 destroy');
    } 

    function buildWinning() {
        $('#state4backgroundContainer').removeClass('backgroundContainerCollapsed');
        
        //add classes
        $('#state4backgroundContainer').addClass('backgroundContainerActive');
        //pagination
        $('#paginationState4').removeClass('fa-circle-thin');
        $('#paginationState4').addClass('fa-circle');
        $('#paginationDesktop i').addClass('bluePagination');
        //Menu
        $('#deskTopMenuRight').removeClass('hidden');
        homeState = 4;
        console.log('page 5 build');
    }

    function destroyWinning() {
        $('#state4backgroundContainer').removeClass('backgroundContainerActive');
        $('#state4backgroundContainer').addClass('backgroundContainerCollapsed');
        //pagination
        $('#paginationState4').removeClass('fa-circle');
        $('#paginationState4').addClass('fa-circle-thin');
        $('#paginationDesktop i').removeClass('bluePagination');
        console.log('page 5 destroy');
    }

    function buildLastPage() {
        $('#state5backgroundContainer').removeClass('backgroundContainerCollapsed');
        
        //add classes
        $('#state5backgroundContainer').addClass('backgroundContainerActive');
        //pagination
        $('#paginationState5').removeClass('fa-circle-thin');
        $('#paginationState5').addClass('fa-circle');
        homeState = 5;
        console.log('page 6 build');
    }

    function destroyLastPage() {
        $('#state5backgroundContainer').removeClass('backgroundContainerActive');
        $('#state5backgroundContainer').addClass('backgroundContainerCollapsed');
        //pagination
        $('#paginationState5').removeClass('fa-circle');
        $('#paginationState5').addClass('fa-circle-thin');
        //Menu
        $('#deskTopMenuRight').removeClass('hidden');
        console.log('page 6 destroy');
    }

    // pagination interaction
    $('#paginationState0').on('click', function(){
        changeState(0);
    });
    $('#paginationState1').on('click', function(){
        changeState(1);
    });
    $('#paginationState2').on('click', function(){
        changeState(2);
    });
    $('#paginationState3').on('click', function(){
        changeState(3);
    });
    $('#paginationState4').on('click', function(){
        changeState(4);
    });
    $('#paginationState5').on('click', function(){
        changeState(5);
    });

    function changeState(goToState) {
        var currentState = homeState;
        //destroy Previous
        switch (currentState) {
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
        switch (goToState) {
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



    function changeHomeCase(x) {
        var prevHomeState = homeState;
        homeState = homeState + x;
        // console.log('prev= ' + prevHomeState + ' - Current= ' + homeState);
    
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
        }, 1000);
    }

});