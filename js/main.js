$(document).ready(function() {
    $('.BtnM').click(function() {
        openModal();
    });

    $('.modal-clsd').click(function() {
        $('.modal').removeClass('open');
    });

    function openModal(){
        $('.modal').addClass('open');
    }

    $(document).mouseup(function (e) {
        var container = $(".modal");
        if (container.has(e.target).length === 0 && container.hasClass('open')){
            container.removeClass('open');
        }
    });

    const $slides = $('.hero-bg');
    const $dots = $('.slider-dots .dot');
    let currentSlide = 0;
    let slideInterval;
    
    function initSlider() {
        $slides.removeClass('active');
        $slides.eq(0).addClass('active');
        $dots.removeClass('active');
        $dots.eq(0).addClass('active');
        startSlider();
    }
    
    function goToSlide(n) {
        $slides.removeClass('active');
        $slides.eq(n).addClass('active');
        $dots.removeClass('active');
        $dots.eq(n).addClass('active');
        currentSlide = n;
    }
    
    function nextSlide() {
        let next = currentSlide + 1;
        if (next >= $slides.length) next = 0;
        goToSlide(next);
    }
    
    function startSlider() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 15000);
    }
    
    $dots.click(function() {
        const slideIndex = $(this).data('slide');
        goToSlide(slideIndex);
        startSlider();
    });
    
    initSlider();


    const $sectionToggle = $('.section-toggle');
    const $toggleButton = $('.toggle-button');
    const $arrowIcon = $('.toggle-button .arrow i');
    const $toggleList = $('.toggle-list');
    
    function updateTogglePosition() {
        const listHeight = $toggleList.outerHeight();
        $sectionToggle.css('bottom', `-${listHeight}px`);
    }
    
    updateTogglePosition();
    
    $toggleButton.on('click', function(e) {
        e.stopPropagation();
        
        $sectionToggle.toggleClass('visible');
        $arrowIcon.toggleClass('fa-chevron-up fa-chevron-down');
    });

    $(window).on('resize', updateTogglePosition);
});