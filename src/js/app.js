
$(function() {
    'use strict';
    

    var homeState = 0;
    //zero based 5 equals 6 states
    var stateCasesTotal = 5;
    var stateCaseChange = true;

    $(window).resize(function(){
        location.reload();
        scrollToTheTopAfter();
        console.log('Resized');
    });
    //modal 
    $('.getInTouchBtn').on('click', function(){
        openModal();
    });

    $('.getInTouchBtnMobile').on('click', function(){
        openModal();
    });

    $('.getInTouchMenuItem').on('click', function(){
        openModal();
    });

    $('.state5CTABtnContainer img').on('click', function(){
        openModal();
    });

    $('.getInTouchMobileMenuItem').on('click', function(){
        closeMobileMenu();
        openModal();
    });

    $('.modalClose').on('click', function(){
        closeModal();
    });

    function openModal() {
        $('.modalOuter').removeClass('hidden animated zoomOut negativeZ');
        $('.modalOuter').addClass('animated zoomIn');
    }

    function closeModal() {
        $('.modalOuter').removeClass('animated zoomIn');
        $('.modalOuter').addClass('animated zoomOut');
        setTimeout(function(){
            $('.modalOuter').addClass('negativeZ');
        }, 1000);
    }

    // mobile menu interaction
    $('.mobileMenuImg').on('click', function(){
        openMobileMenu();
    });

    $('.mobileMenuImgOpen').on('click', function(){
        closeMobileMenu();
    });

    $('.mobileMenuCloseIcon').on('click', function(){
        closeMobileMenu();
    });

    function openMobileMenu() {
        $('.mobileMenuContainer').removeClass('hidden animated slideOutLeft');
        $('.mobileMenuContainer').addClass('animated slideInLeft');
    }

    function closeMobileMenu() {
        $('.mobileMenuContainer').removeClass('animated slideInLeft');
        $('.mobileMenuContainer').addClass('animated slideOutLeft');
    }


    // States Build and Destroy
    function buildState0() {   
        setTimeout(function(){     
            //add classes
            $('.state0Wrapper').removeClass('negativeZ');
            $('.state0backgroundContainer').removeClass('backgroundContainerCollapsed');
            $('.state0backgroundContainer').addClass('backgroundContainerActive');
        }, 1000); 
        setTimeout(function(){
            $('.rightCurveShape').removeClass('fadeOut');
            $('.rightCurveShape').addClass('fadeIn');
            $('.leftCurveImg').removeClass('fadeOut');
            $('.leftCurveImg').addClass('fadeIn');
            $('.logo').removeClass('fadeOut');
            $('.logo').addClass('slideInLeft');
            $('.getInTouchBtn').removeClass('fadeOut');
            $('.getInTouchBtn').addClass('fadeIn');
            $('.discoverYourBestTitleImg').removeClass('fadeOut');
            $('.discoverYourBestTitleImg').addClass('slideInLeft');
            $('.scrollToLearnTxt').removeClass('fadeOut');
            $('.scrollToLearnTxt').addClass('slideInLeft');
            $('.scrollToLearnDownChevron').removeClass('hidden');
            $('.scrollToLearnDownChevron').addClass('animated bounce infinite');
        }, 2000);    
        //Menu
        $('.deskTopMenuRight').addClass('hidden'); 
        //pagination
        $('.paginationState0').removeClass('fa-circle-thin');
        $('.paginationState0').addClass('fa-circle');
        homeState = 0;
        scrollToTheTopAfter();
        console.log('state 0 build');
    }

    function destroyState0() {
        $('.rightCurveShape').removeClass('fadeIn');
        $('.rightCurveShape').addClass('fadeOut');
        $('.leftCurveImg').removeClass('fadeIn');
        $('.leftCurveImg').addClass('fadeOut');
        $('.logo').removeClass('slideInLeft');
        $('.logo').addClass('fadeOut');
        $('.getInTouchBtn').removeClass('fadeIn');
        $('.getInTouchBtn').addClass('fadeOut');
        $('.discoverYourBestTitleImg').removeClass('slideInLeft');
        $('.discoverYourBestTitleImg').addClass('fadeOut');
        $('.scrollToLearnTxt').removeClass('slideInLeft');
        $('.scrollToLearnTxt').addClass('fadeOut');
        $('.scrollToLearnDownChevron').removeClass('animated bounce infinite');
        $('.scrollToLearnDownChevron').addClass('hidden');
        setTimeout(function(){
            $('.state0Wrapper').addClass('negativeZ');
            $('.state0backgroundContainer').removeClass('backgroundContainerActive');
            $('.state0backgroundContainer').addClass('backgroundContainerCollapsed');
        }, 1000);
            //pagination
        $('.paginationState0').removeClass('fa-circle');
        $('.paginationState0').addClass('fa-circle-thin');
        scrollToTheTopAfter();
        console.log('state 0 destroyed');
    }

    function buildState1() {
        
        //Background
        $('.state1backgroundContainer').removeClass('backgroundContainerCollapsed');
        $('.state1backgroundContainer').addClass('backgroundContainerActive');
        $('.state1Wrapper').removeClass('negativeZ');
        //Content
        setTimeout(function(){
            $('.state1TitleA').removeClass('hidden animated slideOutUp');
            $('.state1TitleA').addClass('animated slideInDown');
            $('.state1TitleA img').removeClass('animated fadeOut');
            $('.state1TitleA img').addClass('animated fadeIn');
            $('.state1TitleB').removeClass('hidden animated fadeOut');
            $('.state1TitleB').addClass('animated fadeIn');
            $('.state1TitleB img').removeClass('animated slideOutUp');
            $('.state1TitleB img').addClass('animated slideInUp');
            $('.state1Text').removeClass('hidden animated fadeOut');
            $('.state1Text').addClass('animated fadeIn');
            $('.state1Text p').removeClass('animated slideOutUp');
            $('.state1Text p').addClass('animated slideInUp');
            $('.state1Spacer').removeClass('hidden animated fadeOut');
            $('.state1Spacer').addClass('animated fadeIn');
            $('.state1Btn').removeClass('hidden animated slideOutLeft');
            $('.state1Btn').addClass('animated slideInLeft');
        }, 1000);
        
        //pagination
        $('.paginationState1').removeClass('fa-circle-thin');
        $('.paginationState1').addClass('fa-circle');
        //Menu
        $('.deskTopMenuRight').removeClass('hidden negativeZ');
        homeState = 1;
        scrollToTheTopAfter();
        console.log('state 1 build');
    }

    function destroyState1() {
        $('.state1TitleA').removeClass('animated slideInDown');
        $('.state1TitleA').addClass('animated slideOutUp');
        $('.state1TitleA img').removeClass('animated fadeIn');
        $('.state1TitleA img').addClass('animated fadeOut');
        $('.state1TitleB').removeClass('animated fadeIn');
        $('.state1TitleB').addClass('animated fadeOut');
        $('.state1TitleB img').removeClass('animated slideInUp');
        $('.state1TitleB img').addClass('animated slideOutUp');
        $('.state1Text').removeClass('animated fadeIn');
        $('.state1Text').addClass('animated fadeOut');
        $('.state1Text p').removeClass('animated slideInUp');
        $('.state1Text p').addClass('animated slideOutUp');
        $('.state1Spacer').removeClass('animated fadeIn');
        $('.state1Spacer').addClass('animated fadeOut');
        $('.state1Btn').removeClass('animated slideInleft');
        $('.state1Btn').addClass('animated slideOutLeft');
        setTimeout(function(){
            $('.state1Wrapper').addClass('negativeZ');
            $('.state1backgroundContainer').removeClass('backgroundContainerActive');
            $('.state1backgroundContainer').addClass('backgroundContainerCollapsed');
        }, 1000);
        //pagination
        $('.paginationState1').removeClass('fa-circle');
        $('.paginationState1').addClass('fa-circle-thin');
        //Menu
        $('.deskTopMenuRight').addClass('negativeZ');
        scrollToTheTopAfter();
        console.log('state 1 destroy');
    }

    function buildState2() {

        //Background
        $('.state2backgroundContainer').removeClass('backgroundContainerCollapsed');
        $('.state2backgroundContainer').addClass('backgroundContainerActive');
        $('.state2Wrapper').removeClass('negativeZ');
        //Content
        setTimeout(function(){
            $('.state2TitleA').removeClass('hidden animated slideOutUp');
            $('.state2TitleA').addClass('animated slideInDown');
            $('.state2TitleA img').removeClass('animated fadeOut');
            $('.state2TitleA img').addClass('animated fadeIn');
            $('.state2TitleB').removeClass('hidden animated fadeOut');
            $('.state2TitleB').addClass('animated fadeIn');
            $('.state2TitleB img').removeClass('animated slideOutUp');
            $('.state2TitleB img').addClass('animated slideInUp');
            $('.state2Text').removeClass('hidden animated fadeOut');
            $('.state2Text').addClass('animated fadeIn');
            $('.state2Text p').removeClass('animated slideOutUp');
            $('.state2Text p').addClass('animated slideInUp');
            $('.state2Spacer').removeClass('hidden animated fadeOut');
            $('.state2Spacer').addClass('animated fadeIn');
            $('.state2Btn').removeClass('hidden animated slideOutLeft');
            $('.state2Btn').addClass('animated slideInLeft');
        }, 1000);
        //pagination
        $('.paginationState2').removeClass('fa-circle-thin');
        $('.paginationState2').addClass('fa-circle');
        //Menu
        $('.deskTopMenuRight').removeClass('hidden negativeZ');
        homeState = 2;
        scrollToTheTopAfter();
        console.log('state 2 build');
    }

    function destroyState2() {
        $('.state2TitleA').removeClass('animated slideInDown');
        $('.state2TitleA').addClass('animated slideOutUp');
        $('.state2TitleA img').removeClass('animated fadeIn');
        $('.state2TitleA img').addClass('animated fadeOut');
        $('.state2TitleB').removeClass('animated fadeIn');
        $('.state2TitleB').addClass('animated fadeOut');
        $('.state2TitleB img').removeClass('animated slideInUp');
        $('.state2TitleB img').addClass('animated slideOutUp');
        $('.state2Text').removeClass('animated fadeIn');
        $('.state2Text').addClass('animated fadeOut');
        $('.state2Text p').removeClass('animated slideInUp');
        $('.state2Text p').addClass('animated slideOutUp');
        $('.state2Spacer').removeClass('animated fadeIn');
        $('.state2Spacer').addClass('animated fadeOut');
        $('.state2Btn').removeClass('animated slideInleft');
        $('.state2Btn').addClass('animated slideOutLeft');
        setTimeout(function(){
            $('.state2Wrapper').addClass('negativeZ');
            $('.state2backgroundContainer').removeClass('backgroundContainerActive');
            $('.state2backgroundContainer').addClass('backgroundContainerCollapsed');
        }, 1000);
        //pagination
        $('.paginationState2').removeClass('fa-circle');
        $('.paginationState2').addClass('fa-circle-thin');
        //Menu
        $('.deskTopMenuRight').addClass('negativeZ');
        scrollToTheTopAfter();
        console.log('state 2 destroy');
    }

    function buildState3() {
        //Background
        $('.state3backgroundContainer').removeClass('backgroundContainerCollapsed');
        $('.state3backgroundContainer').addClass('backgroundContainerActive');
        $('.state3Wrapper').removeClass('negativeZ');
        //Content
        setTimeout(function(){
            $('.state3TitleA').removeClass('hidden animated slideOutUp');
            $('.state3TitleA').addClass('animated slideInDown');
            $('.state3TitleA img').removeClass('animated fadeOut');
            $('.state3TitleA img').addClass('animated fadeIn');
            $('.state3TitleB').removeClass('hidden animated fadeOut');
            $('.state3TitleB').addClass('animated fadeIn');
            $('.state3TitleB img').removeClass('animated slideOutUp');
            $('.state3TitleB img').addClass('animated slideInUp');
            $('.state3Text').removeClass('hidden animated fadeOut');
            $('.state3Text').addClass('animated fadeIn');
            $('.state3Text p').removeClass('animated slideOutUp');
            $('.state3Text p').addClass('animated slideInUp');
            $('.state3Spacer').removeClass('hidden animated fadeOut');
            $('.state3Spacer').addClass('animated fadeIn');
            $('.state3Btn').removeClass('hidden animated slideOutLeft');
            $('.state3Btn').addClass('animated slideInLeft');
        }, 1000);
        //pagination
        $('.paginationState3').removeClass('fa-circle-thin');
        $('.paginationState3').addClass('fa-circle');
        //Menu
        $('.deskTopMenuRight').removeClass('hidden negativeZ');
        $('.deskTopMenuRightTitle').addClass('deskTopMenuRightListLight');
        $('.deskTopMenuRight').addClass('deskTopMenuRightListLight');
        homeState = 3;
        scrollToTheTopAfter();
        console.log('state 3 build');
    }

    function destroyState3() {
        $('.state3TitleA').removeClass('animated slideInDown');
        $('.state3TitleA').addClass('animated slideOutUp');
        $('.state3TitleA img').removeClass('animated fadeIn');
        $('.state3TitleA img').addClass('animated fadeOut');
        $('.state3TitleB').removeClass('animated fadeIn');
        $('.state3TitleB').addClass('animated fadeOut');
        $('.state3TitleB img').removeClass('animated slideInUp');
        $('.state3TitleB img').addClass('animated slideOutUp');
        $('.state3Text').removeClass('animated fadeIn');
        $('.state3Text').addClass('animated fadeOut');
        $('.state3Text p').removeClass('animated slideInUp');
        $('.state3Text p').addClass('animated slideOutUp');
        $('.state3Spacer').removeClass('animated fadeIn');
        $('.state3Spacer').addClass('animated fadeOut');
        $('.state3Btn').removeClass('animated slideInleft');
        $('.state3Btn').addClass('animated slideOutLeft');
        setTimeout(function(){
            $('.state3Wrapper').addClass('negativeZ');
            $('.state3backgroundContainer').removeClass('backgroundContainerActive');
            $('.state3backgroundContainer').addClass('backgroundContainerCollapsed');
        }, 1000);
        //pagination
        $('.paginationState3').removeClass('fa-circle');
        $('.paginationState3').addClass('fa-circle-thin');
        //Menu
        $('.deskTopMenuRight').addClass('negativeZ');
        $('.deskTopMenuRightTitle').removeClass('deskTopMenuRightListLight');
        $('.deskTopMenuRight').removeClass('deskTopMenuRightListLight');
        scrollToTheTopAfter();
        console.log('state 3 destroy');
    } 

    function buildState4() {
        //Background
        $('.state4backgroundContainer').removeClass('backgroundContainerCollapsed');
        $('.state4backgroundContainer').addClass('backgroundContainerActive');
        $('.state4Wrapper').removeClass('negativeZ');        
        //Content
        $('.mobileMenuImg').attr("src","images/mobileMenuBlue.png");
        setTimeout(function(){
            $('.benefitCurveContainer').removeClass('hidden animated rotateOutUpLeft');
            $('.benefitCurveContainer').addClass('animated rotateInDownLeft');
            $('.state4TitleA').removeClass('hidden animated slideOutUp');
            $('.state4TitleA').addClass('animated slideInDown');
            $('.state4TitleA img').removeClass('animated fadeOut');
            $('.state4TitleA img').addClass('animated fadeIn');
            $('.state4TitleB').removeClass('hidden animated fadeOut');
            $('.state4TitleB').addClass('animated fadeIn');
            $('.state4TitleB img').removeClass('animated slideOutUp');
            $('.state4TitleB img').addClass('animated slideInUp');
            $('.state4Text').removeClass('hidden animated fadeOut');
            $('.state4Text').addClass('animated fadeIn');
            $('.state4Text p').removeClass('animated slideOutUp');
            $('.state4Text p').addClass('animated slideInUp');
            $('.state4mobileIconsContainer').removeClass('hidden animated fadeOut');
            $('.state4mobileIconsContainer').addClass('animated fadeIn');
            $('.state4Spacer').removeClass('hidden animated fadeOut');
            $('.state4Spacer').addClass('animated fadeIn');
            $('.state4Btn').removeClass('hidden animated slideOutLeft');
            $('.state4Btn').addClass('animated slideInLeft');
        }, 1000);
        //pagination
        $('.paginationState4').removeClass('fa-circle-thin');
        $('.paginationState4').addClass('fa-circle');
        $('.paginationContainer i').addClass('bluePagination');
        //Menu
        $('.deskTopMenuRight').removeClass('hidden negativeZ');
        homeState = 4;
        scrollToTheTopAfter();
        console.log('state 4 build');
    }

    function destroyState4() {
        $('.benefitCurveContainer').removeClass('animated rotateInDownLeft');
        $('.benefitCurveContainer').addClass('animated rotateOutUpLeft');
        $('.state4TitleA').removeClass('animated slideInDown');
        $('.state4TitleA').addClass('animated slideOutUp');
        $('.state4TitleA img').removeClass('animated fadeIn');
        $('.state4TitleA img').addClass('animated fadeOut');
        $('.state4TitleB').removeClass('animated fadeIn');
        $('.state4TitleB').addClass('animated fadeOut');
        $('.state4TitleB img').removeClass('animated slideInUp');
        $('.state4TitleB img').addClass('animated slideOutUp');
        $('.state4Text').removeClass('animated fadeIn');
        $('.state4Text').addClass('animated fadeOut');
        $('.state4Text p').removeClass('animated slideInUp');
        $('.state4Text p').addClass('animated slideOutUp');
        $('.state4mobileIconsContainer').removeClass('animated fadeIn');
        $('.state4mobileIconsContainer').addClass('animated fadeOut');
        $('.state4Spacer').removeClass('animated fadeIn');
        $('.state4Spacer').addClass('animated fadeOut');
        $('.state4Btn').removeClass('animated slideInleft');
        $('.state4Btn').addClass('animated slideOutLeft');
        setTimeout(function(){
            $('.state4Wrapper').addClass('negativeZ');
            $('.state4backgroundContainer').removeClass('backgroundContainerActive');
            $('.state4backgroundContainer').addClass('backgroundContainerCollapsed');
        }, 1000);
        //pagination
        $('.paginationState4').removeClass('fa-circle');
        $('.paginationState4').addClass('fa-circle-thin');
        $('.paginationContainer i').removeClass('bluePagination');
        //Menu
        $('.mobileMenuImg').attr("src","images/mobileMenuWhite.png");
        $('.deskTopMenuRight').addClass('negativeZ');
        scrollToTheTopAfter();
        console.log('state 4 destroy');
    }

    function buildState5() {
        //Background
        $('.state5backgroundContainer').removeClass('backgroundContainerCollapsed');
        $('.state5backgroundContainer').addClass('backgroundContainerActive');
        $('.state5Wrapper').removeClass('negativeZ');
        //Content
        setTimeout(function(){
            $('.state5TextArea1').removeClass('hidden animated fadeOut');
            $('.state5TextArea1').addClass('animated slideInDown');
            $('.state5TextArea2').removeClass('hidden animated fadeOut');
            $('.state5TextArea2').addClass('animated slideInDown');
            $('.state5CTABtnContainer').removeClass('hidden animated fadeOut');
            $('.state5CTABtnContainer').addClass('animated fadeIn');

            $('.state5FooterLeft').removeClass('hidden animated fadeOut');
            $('.state5FooterLeft').addClass('animated fadeIn');

            $('.state5FooterRight').removeClass('hidden animated fadeOut');
            $('.state5FooterRight').addClass('animated fadeIn');
            
        }, 1000);
        //pagination
        $('.paginationState5').removeClass('fa-circle-thin');
        $('.paginationState5').addClass('fa-circle');
        //Menu
        $('.deskTopMenuRight').removeClass('hidden negativeZ');
        homeState = 5;
        scrollToTheTopAfter();
        console.log('state 5 build');
    }

    function destroyState5() {
        $('.state5TextArea1').removeClass('animated slideInDown');
        $('.state5TextArea1').addClass('animated fadeOut');
        $('.state5TextArea2').removeClass('animated slideInDown');
        $('.state5TextArea2').addClass('animated fadeOut');
        $('.state5CTABtnContainer').removeClass('animated fadeIn');
        $('.state5CTABtnContainer').addClass('animated fadeOut');
        
        $('.state5FooterLeft').removeClass('animated fadeIn');
        $('.state5FooterLeft').addClass('animated fadeOut');

        $('.state5FooterRight').removeClass('animated fadeIn');
        $('.state5FooterRight').addClass('animated fadeOut');
        
        setTimeout(function(){
            $('.state5Wrapper').addClass('negativeZ');
            $('.state5backgroundContainer').removeClass('backgroundContainerActive');
            $('.state5backgroundContainer').addClass('backgroundContainerCollapsed');
        }, 1000);
        //pagination
        $('.paginationState5').removeClass('fa-circle');
        $('.paginationState5').addClass('fa-circle-thin');
        //Menu
        $('.deskTopMenuRight').addClass('negativeZ');
        scrollToTheTopAfter();
        console.log('state 6 destroy');
    }

    // pagination interaction
    var currentState = 0;
    $('.paginationState0').on('click', function(){
        if (currentState != 0) {
            changeState(0);
        };
        currentState = 0;
   
    });
    $('.paginationState1').on('click', function(){
        if (currentState != 1) {
            changeState(1);
        };
        currentState = 1;
        
    });
    $('.paginationState2').on('click', function(){
        if (currentState !=2) {
            changeState(2);
        };
        currentState = 2;
       
    });
    $('.paginationState3').on('click', function(){
        if (currentState != 3) {
            changeState(3);
        };
        currentState = 3;
    });
    $('.paginationState4').on('click', function(){
        if (currentState != 4) {
            changeState(4);
        };
        currentState = 4;
    });
    $('.paginationState5').on('click', function(){
        if (currentState != 5) {
            changeState(5);
        };
        currentState = 5;
    });

    function changeState(goToState) {
        var currentState = homeState;
        //destroy Previous
        switch (currentState) {
            case 0:
                destroyState0();
                break;
            case 1:
                destroyState1();
                break;
            case 2:
                destroyState2();
                break;
            case 3:
                destroyState3();
                break;
            case 4:
                destroyState4();
                break;
            case 5:
                destroyState5();
        }
        // Build new
        switch (goToState) {
            case 0:
                buildState0();
                break;
            case 1:
                buildState1();
                break;
            case 2:
                buildState2();
                break;
            case 3:
                buildState3();
                break;
            case 4:
                buildState4();
                break;
            case 5:
                buildState5();
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
                destroyState0();
                break;
            case 1:
                destroyState1();
                break;
            case 2:
                destroyState2();
                break;
            case 3:
                destroyState3();
                break;
            case 4:
                destroyState4();
                break;
            case 5:
                destroyState5();
        }
        // Build new
        switch (homeState) {
            case 0:
                buildState0();
                break;
            case 1:
                buildState1();
                break;
            case 2:
                buildState2();
                break;
            case 3:
                buildState3();
                break;
            case 4:
                buildState4();
                break;
            case 5:
                buildState5();
        }
        
    }

    $('body').bind('mousewheel', function(e){
       
            if (stateCaseChange == true) {
                if(e.originalEvent.wheelDelta >= 35) {
                    changeHomeCase(-1);
                    scrollToTheTopAfter();
                    // console.log('scrolled up');
                    scrolled()
                }
                else if(e.originalEvent.wheelDelta <= -35) {
                    changeHomeCase(1);
                    scrollToTheTopAfter();
                    // console.log('scrolled down');
                    scrolled()
                }
            }
      
    });

    $('body').on('swipeup', function(e){
             if (stateCaseChange == true) {
                changeHomeCase(1);
                scrollToTheTopAfter();
                // console.log('scrolled up');
                scrolled(); 
             }
    });

    $('body').on('swipedown', function(e){
        if (stateCaseChange == true) {
                changeHomeCase(-1);
                scrollToTheTopAfter();
                // console.log('scrolled up');
                scrolled(); 
        }
    });

    // Slow down pardner
    function scrolled() {
        stateCaseChange = false;
        scrollToTheTopAfter();
        setTimeout(function(){
            stateCaseChange = true;
            scrollToTheTopAfter();
        }, 2000);
    }

    function scrollToTheTopAfter() {
        console.log('Scroll to top fired');
        $('html,body').stop().animate({scrollTop:0}, 400);
    }

});