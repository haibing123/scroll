// Initialize GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const illustration = document.getElementById('main-illustration');
    
    // Initial state - illustration is hidden
    gsap.set(illustration, { opacity: 0 });
    
    // Animation 1: Fade in the illustration
    gsap.to(illustration, {
        scrollTrigger: {
            trigger: "#section2",
            start: "top center",
            end: "bottom center",
            scrub: true,
            // markers: true, // Uncomment for debugging
        },
        opacity: 1,
        duration: 1
    });

    // Animation 2: Zoom in to first detail
    gsap.to(illustration, {
        scrollTrigger: {
            trigger: "#section3",
            start: "top center",
            end: "bottom center",
            scrub: true,
            // markers: true,
        },
        scale: 2,
        transformOrigin: "30% 50%",
        duration: 1
    });

    // Animation 3: Pan to second detail
    gsap.to(illustration, {
        scrollTrigger: {
            trigger: "#section4",
            start: "top center",
            end: "bottom center",
            scrub: true,
            // markers: true,
        },
        transformOrigin: "70% 50%",
        duration: 1
    });

    // Animation 4: Zoom out to full view
    gsap.to(illustration, {
        scrollTrigger: {
            trigger: "#section5",
            start: "top center",
            end: "bottom center",
            scrub: true,
            // markers: true,
        },
        scale: 1,
        transformOrigin: "center center",
        duration: 1
    });
});

// Optional: Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
