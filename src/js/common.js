$(function() {
    'use strict';

    var modalOpen = false;

    // $(window).resize(function(){
    //     location.reload();
    // });
    //modal 
    $('.getInTouchBtn').on('click', function(){
        openModal();
    });

    $('.state4Btn').on('click', function(){
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
        modalOpen = true;
        
    }

    function closeModal() {
        $('.modalOuter').removeClass('animated zoomIn');
        $('.modalOuter').addClass('animated zoomOut');
        modalOpen = false;
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



});