// import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export const add_scroll_event = (callback) => {
    if (document.body.scrollEvents === undefined) {
        document.body.scrollEvents = [];
    }

    document.body.scrollEvents.push(callback);
};

export const get_scroll_pos = () => {
    // if custom scrollbar is active
    if (document.body.scrollbar !== undefined) {
        return document.body.scrollbar.scroll().position.y;
    } else {
        return window.scrollY;
    }
};

// Initialize Lenis smooth scrolling
export const initializeScroll = () => {
    return;
    const lenis = new Lenis({
        duration: 1.8, // Duration for smooth scrolling
        smooth: true,
        smoothTouch: true, // Smooth scrolling for touch devices
    });

    // Update ScrollTrigger on Lenis scroll events
    lenis.on('scroll', () => {
        ScrollTrigger.update();
    });

    // Use GSAP's ticker to synchronize Lenis' animation frame
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    // Prevent lagging in GSAP animations
    gsap.ticker.lagSmoothing(0);

    // Store Lenis instance in the body for global access
    document.body.lenis = lenis;

    // Add smooth scrolling and menu close for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor behavior
            const targetId = anchor.getAttribute('href').substring(1); // Get the target ID
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                lenis.scrollTo(targetElement, {
                    duration: 1.8, // Match Lenis duration
                    easing: (x) =>
                        x === 0
                            ? 0
                            : x === 1
                              ? 1
                              : x < 0.5
                                ? Math.pow(2, 20 * x - 10) / 2
                                : (2 - Math.pow(2, -20 * x + 10)) / 2, // Match Lenis easing
                    offset: -70, // Offset in pixels (adjust for fixed headers if needed)
                });
            }

            // Close the mobile menu (optional: check for menu visibility before toggling)
            const mobileMenu = document.querySelector('.hamburger'); // Replace with your menu class
            if (mobileMenu && mobileMenu.classList.contains('shown')) {
                mobileMenu.classList.remove('shown');
                // console.log('Menu closed') ;
            }
        });
    });
};
