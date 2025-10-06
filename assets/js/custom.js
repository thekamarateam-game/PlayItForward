$(function () {
    // Meet Our Team Owl Carousel
    if ($('.meet-team-slider .owl-carousel').length) {
        $('.meet-team-slider .owl-carousel').owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            responsive: {
                0: { items: 1 },
                600: { items: 2 },
                1000: { items: 3 },
                1200: { items: 4 }
            }
        });
    }

    // Header Scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 60) {
            $("header").addClass("fixed-header");
        } else {
            $("header").removeClass("fixed-header");
        }
    });


    // Featured Owl Carousel
    $('.featured-projects-slider .owl-carousel').owlCarousel({
        center: true,
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })


    // Count
    $('.count').each(function () {
		$(this).prop('Counter', 0).animate({
			Counter: $(this).text()
		}, {
			duration: 1000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});


    // ScrollToTop
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const btn = document.getElementById("scrollToTopBtn");
    btn.addEventListener("click", scrollToTop);

    window.onscroll = function () {
        const btn = document.getElementById("scrollToTopBtn");
        if (document.documentElement.scrollTop > 100 || document.body.scrollTop > 100) {
            btn.style.display = "flex";
        } else {
            btn.style.display = "none";
        }
    };


    // Aos
	AOS.init({
		once: true,
	});

    // Contact form submit -> open mailto: with prefilling
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();
        var name = $('#formGroupExampleInput').val().trim();
        var email = $('#exampleInputEmail1').val().trim();
        var message = $('#exampleFormControlTextarea1').val().trim();
        var to = 'thekamarateam@gmail.com'; // placeholder recipient

        if (!name) { alert('Please enter your name.'); return; }
        if (!email) { alert('Please enter your email.'); return; }
        if (!message) { alert('Please enter a message.'); return; }

        // Build subject and body; encodeURIComponent to be safe
        var subject = encodeURIComponent('Website contact from ' + name);
        var body = encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message);

        // Open user's email client with prefilled email
        window.location.href = 'mailto:' + to + '?subject=' + subject + '&body=' + body;
    });

});

