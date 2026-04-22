import { gsap, Power4, Power3 } from 'gsap';

export const hide_preloader = () => {
    // executes on page load

    gsap.to('.preloader', {
        'border-radius': '50%',
        ease: Power4.easeOut,
        duration: 1,
    });

    gsap.to('.preloader', {
        y: '100vh',
        // 'border-radius': '50%',
        ease: Power3.easeInOut,
        duration: 1,
    });
};

export const show_preloader = (callback) => {
    gsap.to('.preloader', {
        y: 0,
        'border-radius': 0,
        ease: Power4.easeInOut,
        duration: 1,
        onComplete: callback,
    });
};
