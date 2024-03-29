$(function() {
    'use strict';

    
    // $(window).resize(function(){
    //     location.reload();
    // });
    var modalOpen = false;
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

    $('.footerCTABtnContainer img').on('click', function(){
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
        $("body").addClass("modal-open");
        modalOpen = true;
        console.log(modalOpen);
    }

    function closeModal() {
        $('.modalOuter').removeClass('animated zoomIn');
        $('.modalOuter').addClass('animated zoomOut');
        $("body").removeClass("modal-open");
        modalOpen = false;
        setTimeout(function(){
            $('.modalOuter').addClass('negativeZ');
        }, 1000);
        console.log(modalOpen);
        
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



/*! Lity - v3.0.0-dev - 2017-07-17
* http://sorgalla.com/lity/
* Copyright (c) 2015-2017 Jan Sorgalla; Licensed MIT */

!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(c){return b(a,c)}):"object"==typeof module&&"object"==typeof module.exports?module.exports=b(a,require("jquery")):a.lity=b(a,a.jQuery||a.Zepto)}("undefined"!=typeof window?window:this,function(a,b){"use strict";function c(a){var b=C();return O&&a.length?(a.one(O,b.resolve),setTimeout(b.resolve,500)):b.resolve(),b.promise()}function d(a,c,d){if(1===arguments.length)return b.extend({},a);if("string"==typeof c){if(void 0===d)return void 0===a[c]?null:a[c];a[c]=d}else b.extend(a,c);return this}function e(a){var b=a.indexOf("?");b>-1&&(a=a.substr(b+1));for(var c,d=decodeURI(a.split("#")[0]).split("&"),e={},f=0,g=d.length;f<g;f++)d[f]&&(c=d[f].split("="),e[c[0]]=c[1]);return e}function f(a,c){if(!c)return a;if("string"===b.type(c)&&(c=e(c)),a.indexOf("?")>-1){var d=a.split("?");a=d.shift(),c=b.extend({},e(d[0]),c)}return a+"?"+b.param(c)}function g(a,b){var c=a.indexOf("#");return-1===c?b:(c>0&&(a=a.substr(c)),b+a)}function h(a,b,c,d){return b&&b.element().addClass("lity-iframe"),c&&(a=f(a,c)),d&&(a=g(d,a)),'<div class="lity-iframe-container"><iframe frameborder="0" allowfullscreen src="'+a+'"/></div>'}function i(a){return b('<span class="lity-error"/>').append(a)}function j(a,c){var d=c.opener()&&c.opener().data("lity-desc")||"Image with no description",e=b('<img src="'+a+'" alt="'+d+'"/>'),f=C(),g=function(){f.reject(i("Failed loading image"))};return e.on("load",function(){if(0===this.naturalWidth)return g();f.resolve(e)}).on("error",g),f.promise()}function k(a,c){var d,e,f;try{d=b(a)}catch(a){return!1}return!!d.length&&(e=b('<i style="display:none !important"/>'),f=d.hasClass("lity-hide"),c.element().one("lity:remove",function(){e.before(d).remove(),f&&!d.closest(".lity-content").length&&d.addClass("lity-hide")}),d.removeClass("lity-hide").after(e))}function l(a,b){var c=K.exec(a);return!!c&&h("https://www.youtube"+(c[2]||"")+".com/embed/"+c[4]+"?autoplay=1",b,c[5],a)}function m(a,b){var c=L.exec(a);return!!c&&h("https://player.vimeo.com/video/"+c[3]+"?autoplay=1",b,c[4],a)}function n(a,b){var c=N.exec(a);return!!c&&(0!==a.indexOf("http")&&(a="https:"+a),h("https://www.facebook.com/plugins/video.php?href="+a+"&autoplay=1",b,c[4],a))}function o(a,b){var c=M.exec(a);return!!c&&h("https://www.google."+c[3]+"/maps?"+c[6],b,{output:c[6].indexOf("layer=c")>0?"svembed":"embed"},a)}function p(a,b){return h(a,b)}function q(){return A.documentElement.clientHeight?A.documentElement.clientHeight:Math.round(B.height())}function r(a){var b=w();b&&(27===a.keyCode&&b.options("esc")&&b.close(),9===a.keyCode&&s(a,b))}function s(a,b){var c=b.element().find(H),d=c.index(A.activeElement);a.shiftKey&&d<=0?(c.get(c.length-1).focus(),a.preventDefault()):a.shiftKey||d!==c.length-1||(c.get(0).focus(),a.preventDefault())}function t(){b.each(E,function(a,b){b.resize()})}function u(a){1===E.unshift(a)&&(D.addClass("lity-active"),B.on({resize:t,keydown:r})),b("body > *").not(a.element()).addClass("lity-hidden").each(function(){var a=b(this);void 0===a.data(G)&&a.data(G,a.attr(F)||null)}).attr(F,"true")}function v(a){var c;a.element().attr(F,"true"),1===E.length&&(D.removeClass("lity-active"),B.off({resize:t,keydown:r})),E=b.grep(E,function(b){return a!==b}),c=E.length?E[0].element():b(".lity-hidden"),c.removeClass("lity-hidden").each(function(){var a=b(this),c=a.data(G);c?a.attr(F,c):a.removeAttr(F),a.removeData(G)})}function w(){return 0===E.length?null:E[0]}function x(a,c,d,e){var f,g="inline",h=b.extend({},d);return e&&h[e]?(f=h[e](a,c),g=e):(b.each(["inline","iframe"],function(a,b){delete h[b],h[b]=d[b]}),b.each(h,function(b,d){return!d||(!(!d.test||d.test(a,c))||(f=d(a,c),!1!==f?(g=b,!1):void 0))})),{handler:g,content:f||""}}function y(a,e,f,g){function h(a){k=b(a).css("max-height",q()+"px"),j.find(".lity-loader").each(function(){var a=b(this);c(a).always(function(){a.remove()})}),j.removeClass("lity-loading").find(".lity-content").empty().append(k),m=!0,k.trigger("lity:ready",[l])}var i,j,k,l=this,m=!1,n=!1;e=b.extend({},I,e),j=b(e.template),l.element=function(){return j},l.opener=function(){return f},l.content=function(){return k},l.options=b.proxy(d,l,e),l.handlers=b.proxy(d,l,e.handlers),l.resize=function(){m&&!n&&k.css("max-height",q()+"px").trigger("lity:resize",[l])},l.close=function(){if(m&&!n){n=!0,v(l);var a=C();if(g&&(A.activeElement===j[0]||b.contains(j[0],A.activeElement)))try{g.focus()}catch(a){}return k.trigger("lity:close",[l]),j.removeClass("lity-opened").addClass("lity-closed"),c(k.add(j)).always(function(){k.trigger("lity:remove",[l]),j.remove(),j=void 0,a.resolve()}),a.promise()}},i=x(a,l,e.handlers,e.handler),j.attr(F,"false").addClass("lity-loading lity-opened lity-"+i.handler).appendTo("body").focus().on("click","[data-lity-close]",function(a){b(a.target).is("[data-lity-close]")&&l.close()}).trigger("lity:open",[l]),u(l),b.when(i.content).always(h)}function z(a,c,d){a.preventDefault?(a.preventDefault(),d=b(this),a=d.data("lity-target")||d.attr("href")||d.attr("src")):d=b(d);var e=new y(a,b.extend({},d.data("lity-options")||d.data("lity"),c),d,A.activeElement);if(!a.preventDefault)return e}var A=a.document,B=b(a),C=b.Deferred,D=b("html"),E=[],F="aria-hidden",G="lity-"+F,H='a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),iframe,object,embed,[contenteditable],[tabindex]:not([tabindex^="-"])',I={esc:!0,handler:null,handlers:{image:j,inline:k,youtube:l,vimeo:m,googlemaps:o,facebookvideo:n,iframe:p},template:'<div class="lity" role="dialog" aria-label="Dialog Window (Press escape to close)" tabindex="-1"><div class="lity-wrap" data-lity-close role="document"><div class="lity-loader" aria-hidden="true">Loading...</div><div class="lity-container"><div class="lity-content"></div><button class="lity-close" type="button" aria-label="Close (Press escape to close)" data-lity-close>&times;</button></div></div></div>'},J=/(^data:image\/)|(\.(png|jpe?g|gif|svg|webp|bmp|ico|tiff?)(\?\S*)?$)/i,K=/(youtube(-nocookie)?\.com|youtu\.be)\/(watch\?v=|v\/|u\/|embed\/?)?([\w-]{11})(.*)?/i,L=/(vimeo(pro)?\.com)\/(?:[^\d]+)?(\d+)\??(.*)?$/,M=/((maps|www)\.)?google\.([^\/\?]+)\/?((maps\/?)?\?)(.*)/i,N=/(facebook\.com)\/([a-z0-9_-]*)\/videos\/([0-9]*)(.*)?$/i,O=function(){var a=A.createElement("div"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return b[c];return!1}();return j.test=function(a){return J.test(a)},z.version="3.0.0-dev",z.options=b.proxy(d,z,I),z.handlers=b.proxy(d,z,I.handlers),z.current=w,z.iframe=h,b(A).on("click.lity","[data-lity]",z),z});