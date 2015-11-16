jQuery(document).ready(function() {

    (function($,sr){

        var debounce = function (func, threshold, execAsap) {
            var timeout;

            return function debounced () {
                var obj = this, args = arguments;
                function delayed () {
                    if (!execAsap)
                        func.apply(obj, args);
                    timeout = null;
                };

                if (timeout)
                    clearTimeout(timeout);
                else if (execAsap)
                    func.apply(obj, args);

                timeout = setTimeout(delayed, threshold || 100);
            };
        }
        // smartresize
        jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

    })(jQuery,'smartresize');

    (function(){

        $wrapper = $('#wrapper');
        $drawerRight = $('#drawer-right');

        // Set Home page Height

        function setHomeBannerHeight() {
            var windowHeight = jQuery(window).height();
            jQuery('#header').height(windowHeight);
        }

        // Center Home page Text

        function centerHomeBannerText() {
            var bannerText = jQuery('#header > .center');
            var bannerTextTop = (jQuery('#header').actual('height')/2) - (jQuery('#header > .center').actual('height')/2) - 0;
            bannerText.css('padding-top', bannerTextTop+'px');
            bannerText.show();
        }

        // Initialize

        jQuery.noConflict();
        setHomeBannerHeight();
        centerHomeBannerText();

        //Resize events

        jQuery(window).smartresize(function(){
            setHomeBannerHeight();
            centerHomeBannerText();
        });

        //Set Down Arrow Button

        jQuery('#scrollToContent').click(function(e){
            e.preventDefault();
            jQuery.scrollTo("#models", 1000, { offset:-(jQuery('#header .top').height()), axis:'y' });
        });

        jQuery('.nav > li > a').click(function(e){
            e.preventDefault();
            jQuery.scrollTo(jQuery(this).attr('href'), 400, { offset:-(jQuery('#header .top').height()), axis:'y' });
        })

        jQuery(window).scroll( function() {
        });

    })();

});

jQuery(document).ready(function($){

    $(window).scroll(function() {

        console.log("asdf");

        if ($(window).scrollTop() > 100 ){

            $('.top-header').addClass('shows');

        } else {

            $('.top-header').removeClass('shows');

        };
    });

});

jQuery('.scroll').on('click', function(e){
    e.preventDefault()

    jQuery('html, body').animate({
        scrollTop : jQuery(this.hash).offset().top
    }, 1500);
});