'use strict';
// Initialize WOW.js
new WOW().init();
import 'bootstrap';
import {
    nav_handler,
    dropdown_switch,
    dropdown_leave,
    sm_mouseleave_handler,
    stickyNavigationHandler,
    hamburger_handler,
} from './nav.js';
import { mob_dropdown_handler } from './mobile-nav.js';
import gsap from 'gsap';
import { offset_image } from './image.js';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { initializeScroll } from './scroll.js';
import { accordion_class_handler } from './accordion.js';
import { hide_preloader, show_preloader } from './preloader.js';
import { tab_handler, nav_select_handler } from './tab.js';
import { selectify } from './selectify/selectify.js';
import { init_io } from './intersection.js';

// Load GSAP and ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// GSAP Animation
function initializeMovingText() {
    const movingText = document.querySelector('.moving-text');
    if (movingText) {
        const isTextRTL = document.documentElement.dir === 'rtl'; // Check if the document is RTL
        gsap.to('.moving-text', {
            xPercent: isTextRTL ? 100 : -100, // Use 100 for RTL and -100 for LTR
            duration: 10,
            ease: 'linear',
            repeat: -1, // Infinite loop
        });
    } else {
        // console.warn('GSAP target .moving-text not found.');
    }
}

// Swiper initialization service
function initializeSwiper() {
    if (typeof Swiper !== 'undefined') {
        const serviceSwiper = new Swiper('.services-swiper', {
            slidesPerView: 1,
            spaceBetween: 10,

            navigation: {
                nextEl: '.service-button-next',
                prevEl: '.service-button-prev',
            },
            lazy: true,
            speed: 2000,
        });
    }
}
// Swiper initialization service
function initializeTeamSwiper() {
    if (typeof Swiper !== 'undefined') {
        const teamSwiper = new Swiper('.team-swiper', {
            slidesPerView: 1,
            spaceBetween: 10,
            // initialSlide: 4,
            navigation: {
                nextEl: '.team-button-next',
                prevEl: '.team-button-prev',
            },
            lazy: true,
            speed: 1000,
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                991: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 10,
                },
            },
        });
    }
}
// Swiper initialization service
function initializeDemoProjectSwiper() {
    if (typeof Swiper !== 'undefined') {
        const teamSwiper = new Swiper('.demo-project-swiper', {
            slidesPerView: 1,
            spaceBetween: 10,
            // initialSlide: 4,
            navigation: {
                nextEl: '.project-button-next',
                prevEl: '.project-button-prev',
            },
            lazy: true,
            speed: 1000,
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                991: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                1200: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                1280: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
            },
        });
    }
}

function initializeHeroSwiper() {
    if (typeof Swiper !== 'undefined') {
        // Thumbnail Swiper
        const thumbnailSwiper = new Swiper('.thumbnail-slider', {
            spaceBetween: 10,
            slidesPerView: 3, // Adjust the number of visible thumbnails
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });
        const heroSwiper = new Swiper('.hero-slider', {
            effect: 'fade',
            speed: 500,
            slidesPerView: 1,
            centeredSlides: true,
            navigation: {
                nextEl: '.swiper-hero-button-next',
                prevEl: '.swiper-hero-button-prev',
            },
            pagination: {
                el: '.swiper-hero-pagination',
                type: 'fraction',
                formatFractionCurrent: function (number) {
                    return ('0' + number).slice(-2);
                },
                formatFractionTotal: function (number) {
                    return ('0' + number).slice(-2);
                },
                renderFraction: function (currentClass, totalClass) {
                    return (
                        '<span class="' +
                        currentClass +
                        '"></span>' +
                        ' / ' +
                        '<span class="' +
                        totalClass +
                        '"></span>'
                    );
                },
            },
            keyboard: true,
            thumbs: {
                swiper: thumbnailSwiper, // Link thumbnail Swiper
            },
        });
    }
}

function initializeSecondHeroSwiper() {
    if (typeof Swiper !== 'undefined') {
        const heroSwiper = new Swiper('.hero-slider-2', {
            effect: 'fade',
            speed: 500,
            slidesPerView: 1,
            centeredSlides: true,
            navigation: {
                nextEl: '.hero-button-next',
                prevEl: '.hero-button-prev',
            },
            pagination: {
                el: '.fraction-hero-pagination',
                type: 'fraction',
                formatFractionCurrent: function (number) {
                    return ('0' + number).slice(-2);
                },
                formatFractionTotal: function (number) {
                    return ('0' + number).slice(-2);
                },
                renderFraction: function (currentClass, totalClass) {
                    return (
                        '<span class="' +
                        currentClass +
                        '"></span>' +
                        ' / ' +
                        '<span class="' +
                        totalClass +
                        '"></span>'
                    );
                },
            },
            keyboard: true,
        });
    }
}
function initializeArchitectureHeroSwiper() {
    if (typeof Swiper !== 'undefined') {
        const customerSwiper = new Swiper('.hero-swiper', {
            effect: 'fade',
            speed: 500,
            slidesPerView: 1,
            centeredSlides: true,
            navigation: {
                nextEl: '.swiper-hero-button-next',
                prevEl: '.swiper-hero-button-prev',
            },
            keyboard: true,
        });
    }
}
function initializeConstructionHeroSwiper() {
    if (typeof Swiper !== 'undefined') {
        const customerSwiper = new Swiper('.hero-swiper', {
            effect: 'fade',
            speed: 500,
            slidesPerView: 1,
            centeredSlides: true,
            navigation: {
                nextEl: '.swiper-hero-button-next',
                prevEl: '.swiper-hero-button-prev',
            },
            keyboard: true,
        });
    }
}
function initializeCustomerFeedabckSwiper() {
    if (typeof Swiper !== 'undefined') {
        const customerSwiper = new Swiper('.feedback-slider', {
            effect: 'fade',
            speed: 500,
            slidesPerView: 1,
            centeredSlides: true,
            navigation: {
                nextEl: '.feedback-button-next',
                prevEl: '.feedback-button-prev',
            },
            keyboard: true,
        });
    }
}

//Feedback Swiper initialization service
function initializeFeedbackSwiper() {
    if (typeof Swiper !== 'undefined') {
        // Feedback Swiper
        const feedbackSwiper = new Swiper('.feedback-swiper', {
            centeredSlides: true,
            centeredSlidesBounds: true,
            initialSlide: 4,
            on: {
                click(event) {
                    feedbackSwiper.slideTo(this.clickedIndex);
                },
            },
            pagination: {
                el: '.feedback-pagination',
                clickable: true,
            },

            breakpoints: {
                768: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1280: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
            },
        });
    }
}
// Consolidated Video Iframe Initialization Function
function initializeVideoModal() {
    const videoTrigger = document.getElementById('videoTrigger');
    const modal = document.getElementById('videoModal');
    const iframe = document.getElementById('videoIframe');
    const closeButton = modal ? modal.querySelector('.close-btn') : null;

    // Function to open the modal and play video
    function openModal() {
        if (iframe) {
            iframe.src = 'https://www.youtube.com/embed/';
        }
        if (modal) {
            modal.style.display = 'block';
        }
    }

    // Function to close the modal and stop the video
    function closeModal() {
        if (modal) {
            modal.style.display = 'none';
        }
        if (iframe) {
            iframe.src = ''; // Clear iframe source to stop the video
        }
    }

    // Add event listener to video trigger
    if (videoTrigger) {
        videoTrigger.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default behavior
            openModal();
        });
    } else {
        // console.warn('Video trigger element not found on this page.');
    }

    // Add event listener to close button
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    } else {
        // console.warn('Close button not found on this page.');
    }

    // Add event listener to close modal when clicking outside of it
    if (modal) {
        window.addEventListener('click', function (event) {
            if (event.target == modal) {
                closeModal();
            }
        });
    } else {
        // console.warn('Modal not found on this page.');
    }
}
function initializeHeroVideoModal(videoTriggerId, modalId, iframeId) {
    const videoTrigger = document.getElementById(videoTriggerId);
    const modal = document.getElementById(modalId);
    const iframe = document.getElementById(iframeId);
    const closeButton = modal ? modal.querySelector('.close-btn') : null;

    // Function to open the modal and play video
    function openModal() {
        if (iframe) {
            iframe.src = 'https://www.youtube.com/embed/';
        }
        if (modal) {
            modal.style.display = 'block';
        }
    }

    // Function to close the modal and stop the video
    function closeModal() {
        if (modal) {
            modal.style.display = 'none';
        }
        if (iframe) {
            iframe.src = ''; // Clear iframe source to stop the video
        }
    }

    // Add event listener to video trigger
    if (videoTrigger) {
        videoTrigger.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default behavior
            openModal();
        });
    } else {
        // console.warn(`Video trigger element with ID '${videoTriggerId}' not found on this page.`);
    }

    // Add event listener to close button
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    } else {
        // console.warn(`Close button not found in modal with ID '${modalId}'.`);
    }

    // Add event listener to close modal when clicking outside of it
    if (modal) {
        window.addEventListener('click', function (event) {
            if (event.target == modal) {
                closeModal();
            }
        });
    } else {
        // console.warn(`Modal with ID '${modalId}' not found on this page.`);
    }
}

// Initialize modals for different hero slides
function initializeAllHeroVideoModals() {
    initializeHeroVideoModal('videoTriggerHero1', 'videoModalHero1', 'videoIframeHero1');
    initializeHeroVideoModal('videoTriggerHero2', 'videoModalHero2', 'videoIframeHero2');
    initializeHeroVideoModal('videoTriggerHero3', 'videoModalHero3', 'videoIframeHero3');
}

function initializeMainVideoModal() {
    const videoTrigger = document.getElementById('videoTriggerBlock');
    const closeButton = document.querySelector('.video-close-btn');
    const modal = document.getElementById('videoModalBlock');
    const iframe = document.getElementById('videoIframeBlock');

    // The same logic as `initializeVideoModal`, adapted for the main modal
    function openModal() {
        if (iframe) {
            iframe.src = 'https://www.youtube.com/embed/';
        }
        if (modal) {
            modal.style.display = 'block';
        }
    }

    function closeModal() {
        if (modal) {
            modal.style.display = 'none';
        }
        if (iframe) {
            iframe.src = '';
        }
    }

    if (videoTrigger) {
        videoTrigger.addEventListener('click', function (e) {
            e.preventDefault();
            openModal();
        });
    }

    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }

    if (modal) {
        window.addEventListener('click', function (event) {
            if (event.target === modal) {
                closeModal();
            }
        });
    }
}

// Footer-contact form initialization function
function initializeContactForm(e) {
    const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    const errorContainer = document.getElementById('errorContainer');
    if (form == null) return;
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent page reload

        // Reset previous messages
        successMessage.textContent = '';
        successMessage.style.display = 'none';
        errorContainer.innerHTML = ''; // Clear errors
        errorContainer.style.display = 'none';

        // Fetch form values
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        // Perform validation
        const errors = [];

        // Name validation
        if (name === '') errors.push('Name is required.');

        // Phone validation (simple pattern for 10 digits)
        if (!/^\d{10}$/.test(phone)) errors.push('Phone number must be 10 digits.');

        // Email validation
        if (!/^\S+@\S+\.\S+$/.test(email)) errors.push('Please enter a valid email address.');

        // Subject validation
        if (subject === '') errors.push('Subject is required.');

        // Message validation
        if (message === '') errors.push('Message cannot be empty.');

        if (errors.length > 0) {
            // Display errors
            errorContainer.style.display = 'block';
            errors.forEach((error) => {
                const errorItem = document.createElement('div');
                errorItem.textContent = error;
                errorItem.style.color = 'red'; // Optional: Style errors
                errorContainer.appendChild(errorItem);
            });
        } else {
            // Display success message
            successMessage.textContent = 'Message sent successfully!';
            successMessage.style.display = 'block';
            form.reset(); // Clear the form
        }
    });
}
// header-hamburger form initialization function
function initializeHeaderContactForm() {
    const form = document.getElementById('contactFormHeader');
    const successMessage = document.getElementById('firstSuccessMessage');
    const errorContainer = document.getElementById('firstErrorContainer');

    if (!form || !successMessage || !errorContainer) {
        // console.error('Required elements are missing in the DOM.');
        return;
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent page reload

        // Reset previous messages
        successMessage.textContent = '';
        successMessage.style.display = 'none';
        errorContainer.innerHTML = ''; // Clear errors
        errorContainer.style.display = 'none';

        // Fetch form values
        const name = document.getElementById('firstName').value.trim();
        const phone = document.getElementById('firstPhone').value.trim();
        const email = document.getElementById('firstEmail').value.trim();
        const subject = document.getElementById('firstSubject').value.trim();
        const message = document.getElementById('firstMessage').value.trim();

        // Perform validation
        const errors = [];

        if (name === '') errors.push('Name is required.');
        if (!/^\d{10}$/.test(phone)) errors.push('Phone number must be 10 digits.');
        if (!/^\S+@\S+\.\S+$/.test(email)) errors.push('Please enter a valid email address.');
        if (subject === '') errors.push('Subject is required.');
        if (message === '') errors.push('Message cannot be empty.');

        if (errors.length > 0) {
            errorContainer.style.display = 'block';
            errors.forEach((error) => {
                const errorItem = document.createElement('div');
                errorItem.textContent = error;
                errorContainer.appendChild(errorItem);
            });
        } else {
            successMessage.textContent = 'Message sent successfully!';
            successMessage.style.display = 'block';
            form.reset(); // Clear the form
        }
    });
}
// header-hamburger form initialization function
function initializeCommentForm() {
    const form = document.getElementById('commentForm');
    const successMessage = document.getElementById('postMessage');

    if (!form || !successMessage) {
        // console.error('Required elements are missing in the DOM.');
        return;
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent page reload

        // Reset previous messages
        successMessage.textContent = '';
        successMessage.style.display = 'none';
        errorContainer.innerHTML = ''; // Clear errors
        errorContainer.style.display = 'none';

        // Fetch form values
        const name = document.getElementById('postName').value.trim();
        const email = document.getElementById('postEmail').value.trim();
        const message = document.getElementById('commentMessage').value.trim();

        // Perform validation
        const errors = [];

        if (name === '') errors.push('Name is required.');
        if (!/^\S+@\S+\.\S+$/.test(email)) errors.push('Please enter a valid email address.');
        if (message === '') errors.push('Message cannot be empty.');

        if (errors.length > 0) {
            errorContainer.style.display = 'block';
            errors.forEach((error) => {
                const errorItem = document.createElement('div');
                errorItem.textContent = error;
                errorContainer.appendChild(errorItem);
            });
        } else {
            successMessage.textContent = 'Comment post successfully!';
            successMessage.style.display = 'block';
            form.reset(); // Clear the form
        }
    });
}
// sidebar form initialization function
function initializeSidebarContactForm() {
    const form = document.getElementById('subscriptionForm');
    const successMessage = document.getElementById('submitMessage');
    const errorContainer = document.getElementById('errormessage');

    if (!form || !successMessage || !errorContainer) {
        // console.error('Required elements are missing in the DOM.');
        return;
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent page reload

        // Reset previous messages
        successMessage.textContent = '';
        successMessage.style.display = 'none';
        errorContainer.innerHTML = ''; // Clear errors
        errorContainer.style.display = 'none';

        // Fetch form values
        const name = document.getElementById('yourName').value.trim();
        const email = document.getElementById('yourEmail').value.trim();

        // Perform validation
        const errors = [];

        if (name === '') errors.push('Name is required.');
        if (!/^\S+@\S+\.\S+$/.test(email)) errors.push('Please enter a valid email address.');

        if (errors.length > 0) {
            errorContainer.style.display = 'block';
            errors.forEach((error) => {
                const errorItem = document.createElement('div');
                errorItem.textContent = error;
                errorContainer.appendChild(errorItem);
            });
        } else {
            successMessage.textContent = 'Message sent successfully!';
            successMessage.style.display = 'block';
            form.reset(); // Clear the form
        }
    });
}
// Main-contact form initialization function
function initializeMainContactForm() {
    const form = document.getElementById('mainContactForm');
    const successMessage = document.getElementById('mainSuccessMessage');
    const errorContainer = document.getElementById('errorMessage');

    if (!form || !successMessage || !errorContainer) {
        // console.error('Required elements are missing in the DOM.');
        return;
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent page reload

        // Reset previous messages
        successMessage.textContent = '';
        successMessage.style.display = 'none';
        errorContainer.innerHTML = ''; // Clear errors
        errorContainer.style.display = 'none';

        // Fetch form values
        const name = document.getElementById('myName').value.trim();
        const phone = document.getElementById('phoneNumber').value.trim();
        const email = document.getElementById('myEmail').value.trim();
        const subject = document.getElementById('mySubject').value.trim();
        const company = document.getElementById('myCompany').value.trim();
        const message = document.getElementById('myMessage').value.trim();

        // Perform validation
        const errors = [];

        if (name === '') errors.push('Name is required.');
        if (!/^\d{10}$/.test(phone)) errors.push('Phone number must be 10 digits.');
        if (!/^\S+@\S+\.\S+$/.test(email)) errors.push('Please enter a valid email address.');
        if (subject === '') errors.push('Subject is required.');
        if (company === '') errors.push('Company is required.');
        if (message === '') errors.push('Message cannot be empty.');

        if (errors.length > 0) {
            errorContainer.style.display = 'block';
            errors.forEach((error) => {
                const errorItem = document.createElement('div');
                errorItem.textContent = error;
                errorContainer.appendChild(errorItem);
            });
        } else {
            successMessage.textContent = 'Message sent successfully!';
            successMessage.style.display = 'block';
            form.reset(); // Clear the form
        }
    });
}

function initializeCounter() {
    const statItems = document.querySelectorAll('.stat-item h2');

    // Function to format numbers as "k" or "m"
    const formatNumber = (number) => {
        if (number >= 1_000_000) {
            return (number / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
        } else if (number >= 1_000) {
            return (number / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
        } else {
            return Math.floor(number).toString(); // Always an integer when less than 1k
        }
    };

    // Function to animate numbers with increased duration
    const animateNumbers = (element) => {
        const target = +element.getAttribute('data-target');
        const suffix = element.getAttribute('data-suffix') || '';
        const duration = 3000;
        const increment = target / (duration / 16);
        let current = 0;

        const updateNumber = () => {
            current += increment;
            if (current >= target) {
                element.textContent = formatNumber(target) + suffix;
            } else {
                element.textContent = formatNumber(current) + suffix;
                requestAnimationFrame(updateNumber);
            }
        };

        updateNumber();
    };

    // Intersection Observer to trigger animation on scroll
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    animateNumbers(element); // Start counting
                    observer.unobserve(element); // Stop observing after animation
                }
            });
        },
        { threshold: 0.5 } // Trigger when 50% visible
    );

    // Observe each stat item
    statItems.forEach((item) => {
        item.textContent = '0'; // Ensure numbers start at 0
        observer.observe(item);
    });
}
// Function to initialize service detail content
function initializeServiceDetailContent() {
    // Select all buttons and content sections
    const buttons = document.querySelectorAll('.links-container .area-link');
    const contents = document.querySelectorAll('.services-content-block');

    // Run the code only if buttons are present on the page
    if (buttons.length > 0 && contents.length > 0) {
        // Function to activate a specific tab by index
        function activateTab(index) {
            // Hide all content sections and reset their styles
            contents.forEach((content) => {
                content.classList.remove('active');
                content.style.display = 'none';
            });

            // Remove active class from all buttons
            buttons.forEach((btn) => btn.classList.remove('active'));

            // Show the associated content and add active class for transition
            const targetId = buttons[index].getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                // Ensure the target content exists
                targetContent.style.display = 'block'; // Display it first to apply fade-in
                setTimeout(() => targetContent.classList.add('active'), 10); // Small delay to trigger opacity transition
                buttons[index].classList.add('active');
            }
        }

        // Add click event listeners to each button
        buttons.forEach((button, index) => {
            button.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent default scrolling behavior
                activateTab(index);
            });
        });

        // Activate the second tab by default (index 1) when the page loads
        if (buttons[1]) {
            activateTab(1);
        }
    }
}
// Function to initialize service detail content
function initializeBlogSidebar() {
    // Select all buttons and content sections
    const buttons = document.querySelectorAll('.blog-link');
    const contents = document.querySelectorAll('.blog-cards-wrapper');

    // Run the code only if buttons are present on the page
    if (buttons.length > 0 && contents.length > 0) {
        // Function to activate a specific tab by index
        function activateTab(index) {
            // Hide all content sections and reset their styles
            contents.forEach((content) => {
                content.classList.remove('active');
                content.style.display = 'none';
            });

            // Remove active class from all buttons
            buttons.forEach((btn) => btn.classList.remove('active'));

            // Show the associated content and add active class for transition
            const targetId = buttons[index].getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                // Ensure the target content exists
                targetContent.style.display = 'grid'; // Display it first to apply fade-in
                setTimeout(() => targetContent.classList.add('active'), 10); // Small delay to trigger opacity transition
                buttons[index].classList.add('active');
            }
        }

        // Add click event listeners to each button
        buttons.forEach((button, index) => {
            button.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent default scrolling behavior
                activateTab(index);
            });
        });

        // Activate the second tab by default (index 1) when the page loads
        if (buttons[1]) {
            activateTab(1);
        }
    }
}
// Function to initialize service detail content
function initializeProjectSidebar() {
    // Select all buttons and content sections
    const buttons = document.querySelectorAll('.blog-link');
    const contents = document.querySelectorAll('.project-cards-container');

    // Run the code only if buttons are present on the page
    if (buttons.length > 0 && contents.length > 0) {
        // Function to activate a specific tab by index
        function activateTab(index) {
            // Hide all content sections and reset their styles
            contents.forEach((content) => {
                content.classList.remove('active');
                content.style.display = 'none';
            });

            // Remove active class from all buttons
            buttons.forEach((btn) => btn.classList.remove('active'));

            // Show the associated content and add active class for transition
            const targetId = buttons[index].getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                // Ensure the target content exists
                targetContent.style.display = 'grid'; // Display it first to apply fade-in
                setTimeout(() => targetContent.classList.add('active'), 10); // Small delay to trigger opacity transition
                buttons[index].classList.add('active');
            }
        }

        // Add click event listeners to each button
        buttons.forEach((button, index) => {
            button.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent default scrolling behavior
                activateTab(index);
            });
        });

        // Activate the second tab by default (index 1) when the page loads
        if (buttons[1]) {
            activateTab(1);
        }
    }
}
// Define the function to initialize the "Load More" blog functionality
function initializeLoadMoreBlog() {
    const servicesBtn = document.querySelector('.blog-btn');

    // Check if servicesBtn exists before adding the event listener
    if (servicesBtn) {
        servicesBtn.addEventListener('click', function (event) {
            event.preventDefault();

            // Select all elements with the .hidden-item class
            const hiddenItems = document.querySelectorAll('.hidden-item');

            if (hiddenItems.length > 0) {
                // Loop through each hidden item and add the .visible class
                hiddenItems.forEach((item) => {
                    item.classList.add('visible');
                });

                // Hide the "Load more" button after all items are shown
                this.style.display = 'none';
            }
        });
    }
}
//Project Swiper initialization service
function initializeProjectSwiper() {
    if (typeof Swiper !== 'undefined') {
        const projectSwiper = new Swiper('.project-swiper', {
            slidesPerView: 4, // Show 1 full and part of the next card initially
            spaceBetween: 30, // Adjust spacing between cards
            lazy: false,
            loop: true,
            autoplay: true,
            speed: 2000,
            resizeObserver: true,
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
            },
        });
    }
}
let iso;
function initializeIsotope() {
    if (typeof Isotope !== 'undefined') {
        const projectsContainer1 = document.getElementById('projects-container-1');

        if (projectsContainer1) {
            projectsContainer1.isotope = new Isotope(projectsContainer1, {
                itemSelector: '.project-card',
                layoutMode: 'fitRows',
            });

            initializeCustomDropdown('project-filter-dropdown', (filterValue) => {
                projectsContainer1.isotope.arrange({ filter: filterValue });
            });

            const loadMoreButton1 = document.getElementById('load-more-1');
            if (loadMoreButton1) {
                loadMoreButton1.addEventListener('click', (event) => {
                    event.preventDefault();
                    let revealedCount = 0;

                    const hiddenItems = document.querySelectorAll('.project-card.hidden');
                    hiddenItems.forEach((item) => {
                        if (revealedCount < 3) {
                            item.classList.remove('hidden');
                            revealedCount++;
                        }
                    });

                    projectsContainer1.isotope.layout();

                    if (document.querySelectorAll('.project-card.hidden').length === 0) {
                        loadMoreButton1.style.display = 'none';
                    }
                });
            }
        }
    }
}
function initializeCustomDropdown(dropdownId, callback) {
    const dropdown = document.getElementById(dropdownId);
    if (dropdown == null) return;
    const dropdownButton = dropdown.querySelector('.dropdown-button');
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');

    // Toggle dropdown menu visibility
    dropdownButton.addEventListener('click', () => {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Handle dropdown option selection
    dropdownMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            const filterValue = e.target.getAttribute('data-value'); // Get value
            dropdownButton.textContent = e.target.textContent; // Update button text
            dropdownMenu.style.display = 'none'; // Close the menu

            // Pass the selected value to the callback
            if (typeof callback === 'function') {
                callback(filterValue);
            }
        }
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest(`#${dropdownId}`)) {
            dropdownMenu.style.display = 'none';
        }
    });
}
function initializeProjectIsotope() {
    if (typeof Isotope !== 'undefined') {
        const projectsContainer2 = document.getElementById('projects-container-2');

        if (projectsContainer2) {
            projectsContainer2.isotope = new Isotope(projectsContainer2, {
                itemSelector: '.demo-project-card',
                layoutMode: 'fitRows',
                fitRows: {
                    gutter: 30, // Increase row spacing
                },
            });

            initializeProjectCustomDropdown('project-dropdown', (filterValue) => {
                projectsContainer2.isotope.arrange({ filter: filterValue });
            });

            const loadMoreButton2 = document.getElementById('load-more-2');
            if (loadMoreButton2) {
                loadMoreButton2.addEventListener('click', (event) => {
                    event.preventDefault();
                    let revealedCount = 0;

                    const hiddenItems = document.querySelectorAll('.demo-project-card.hidden');
                    hiddenItems.forEach((item) => {
                        if (revealedCount < 3) {
                            item.classList.remove('hidden');
                            revealedCount++;
                        }
                    });

                    projectsContainer2.isotope.layout();

                    if (document.querySelectorAll('.demo-project-card.hidden').length === 0) {
                        loadMoreButton2.style.display = 'none';
                    }
                });
            }
        }
    }
}
function initializeProjectCustomDropdown(dropdownId, callback) {
    const dropdown = document.getElementById(dropdownId);
    if (dropdown == null) return;
    const dropdownButton = dropdown.querySelector('.dropdown-btn');
    const dropdownMenu = dropdown.querySelector('.all-dropdown-menu');

    // Toggle dropdown menu visibility
    dropdownButton.addEventListener('click', () => {
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Handle dropdown option selection
    dropdownMenu.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            const filterValue = e.target.getAttribute('data-value'); // Get value
            dropdownButton.textContent = e.target.textContent; // Update button text
            dropdownMenu.style.display = 'none'; // Close the menu

            // Pass the selected value to the callback
            if (typeof callback === 'function') {
                callback(filterValue);
            }
        }
    });

    // Close dropdown if clicked outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest(`#${dropdownId}`)) {
            dropdownMenu.style.display = 'none';
        }
    });
}
function initializeCustomFormDropdown() {
    // Select all dropdowns with the class `.custom-dropdown`
    const dropdowns = document.querySelectorAll('.custom-dropdown');

    dropdowns.forEach((dropdown) => {
        const dropdownFormButton = dropdown.querySelector('.dropdown-form-button');
        const dropdownFormMenu = dropdown.querySelector('.dropdown-form-menu');

        if (!dropdownFormButton || !dropdownFormMenu) {
            // console.warn('Dropdown structure is incomplete:', dropdown);
            return; // Skip this dropdown if the structure is incomplete
        }

        // Toggle dropdown menu visibility
        dropdownFormButton.addEventListener('click', () => {
            dropdownFormMenu.style.display = dropdownFormMenu.style.display === 'block' ? 'none' : 'block';
        });

        // Handle option selection
        dropdownFormMenu.addEventListener('click', (e) => {
            if (e.target.tagName === 'LI') {
                dropdownFormButton.textContent = e.target.textContent; // Update button text
                dropdownFormMenu.style.display = 'none'; // Close the menu
            }
        });
    });

    // Close all dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        dropdowns.forEach((dropdown) => {
            const dropdownFormMenu = dropdown.querySelector('.dropdown-form-menu');
            if (!e.target.closest('.custom-dropdown') && dropdownFormMenu) {
                dropdownFormMenu.style.display = 'none';
            }
        });
    });
}

// Function to initialize the toggle functionality
function initializeViewToggle() {
    const gridViewButton = document.getElementById('grid-view');
    const listViewButton = document.getElementById('list-view');
    const projectsContainer = document.querySelector('.projects');

    if (gridViewButton && listViewButton && projectsContainer) {
        function setActiveButton(activeButton) {
            gridViewButton.classList.remove('active');
            listViewButton.classList.remove('active');
            activeButton.classList.add('active');
            setTimeout(() => projectsContainer?.isotope.layout());
        }

        function setGridView() {
            projectsContainer.classList.add('grid-view');
            projectsContainer.classList.remove('list-view');
            setActiveButton(gridViewButton);
        }

        function setListView() {
            projectsContainer.classList.add('list-view');
            projectsContainer.classList.remove('grid-view');
            setActiveButton(listViewButton);
        }

        gridViewButton.addEventListener('click', setGridView);
        listViewButton.addEventListener('click', setListView);
    }
}
function initializeClientSwiper() {
    if (typeof Swiper !== 'undefined') {
        const clientSwiper = new Swiper('.clients-swiper', {
            slidesPerView: 1,
            spaceBetween: 10,
            lazy: true,
            speed: 2000,
            autoplay: {
                delay: 1500,
                disableOnInteraction: false,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            },
        });
    }
}
// on window resize
window.addEventListener('resize', (e) => {
    offset_image();
});

const searchClickHandler = (e) => {
    const wrapper = e.target.closest('.search');
    wrapper.classList.toggle('active');
};

const searchCancelHandler = (e) => {
    const search = document.querySelector('.search.active');
    if (search == null || e.target.closest('.search')) {
        return;
    }
    search.classList.remove('active');
};

const CLICK_HANDLERS = {
    '.hamburger-icon': hamburger_handler,
    '.hamburger-overlay': hamburger_handler,
    '.hamburger-close': hamburger_handler,
    '.navigation-menu.mobile': (e) => {
        if (e.target.closest('.back-button')) {
            mob_dropdown_handler(e, true);
        }

        if (e.target.parentNode.matches('.menu-item-has-children')) {
            mob_dropdown_handler(e);
        }
    },
    '.search-icon': searchClickHandler,
    body: searchCancelHandler,
};

document.addEventListener('click', (e) => {
    for (const [key, value] of Object.entries(CLICK_HANDLERS)) {
        if (e.target.closest(key)) {
            value(e);
        }
    }
    // tab select
    if (e.target.matches('.main-tabs-inner .selectify li')) {
        nav_select_handler(e.target);
    }

    if (!e.target.closest('.selectify')) {
        let selects = document.querySelectorAll('.selectify.shown');
        selects.forEach((select) => {
            select.classList.remove('shown');
        });
    }
});

// mouseenter event
document.body.addEventListener(
    'mouseenter',
    function (e) {
        e.stopPropagation();

        // navigation
        if (e.target.matches('.navigation-menu.desktop > .menu-item-has-children')) {
            nav_handler(e);
        }
    },
    true
);

// mouseleave event
document.body.addEventListener(
    'mouseleave',
    function (e) {
        e.stopPropagation();

        if (e.target.matches('.navigation-menu.desktop > .menu-item-has-children')) {
            nav_handler(e);
        }

        if (e.target.matches('.navigation-menu.desktop .sub-menu .sub-menu')) {
            sm_mouseleave_handler(e);
        }
    },
    true
);

document.body.addEventListener(
    'mouseover',
    (e) => {
        e.stopPropagation();
        if (e.target.closest('.navigation-menu.desktop .sub-menu > .menu-item-has-children')) {
            dropdown_switch(e);
        }
    },
    true
);

document.body.addEventListener('mouseout', (e) => {
    if (e.target.closest('.navigation-menu.desktop .sub-menu > .menu-item-has-children')) {
        dropdown_leave(e);
    }
});

const ON_SCROLL_SERVICES = [stickyNavigationHandler];

window.addEventListener(
    'scroll',
    () => {
        ON_SCROLL_SERVICES.forEach((service) => service());
    },
    { passive: true }
);
// Scroll to Top Function
function initializeScrollToTop() {
    const scrollToTopBtn = document.querySelector('.scrollToTopBtn');
    const rootElement = document.documentElement;

    function handleScroll() {
        const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
        if (rootElement.scrollTop / scrollTotal > 0.15) {
            // Show button
            scrollToTopBtn.classList.add('showBtn');
        } else {
            // Hide button
            scrollToTopBtn.classList.remove('showBtn');
        }
    }

    function scrollToTop() {
        return;
        document.body.lenis.scrollTo(0, {
            duration: 2,
            easing: (x) =>
                x === 0
                    ? 0
                    : x === 1
                      ? 1
                      : x < 0.5
                        ? Math.pow(2, 20 * x - 10) / 2
                        : (2 - Math.pow(2, -20 * x + 10)) / 2,
        });
    }

    if (scrollToTopBtn) {
        scrollToTopBtn.addEventListener('click', scrollToTop);
        document.addEventListener('scroll', handleScroll);
    }
}

const animatePreloader = () => {
    const box = document.querySelector('.preloader-icon-container');

    gsap.timeline({ repeat: -1 })
        .to(box, { rotation: 90, duration: 1 })
        .to(box, { rotation: 180, duration: 1 })
        .to(box, { rotation: 270, duration: 1 })
        .to(box, { rotation: 360, duration: 1 });
};

animatePreloader();

// ON_LOAD_SERVICES array
const ON_LOAD_SERVICES = [
    hide_preloader,
    initializeMovingText,
    initializeSwiper,
    initializeTeamSwiper,
    initializeVideoModal,
    initializeCounter,
    initializeFeedbackSwiper,
    initializeHeroSwiper,
    offset_image,
    initializeMainVideoModal,
    initializeSecondHeroSwiper,
    initializeAllHeroVideoModals,
    initializeScroll,
    initializeScrollToTop,
    initializeContactForm,
    initializeHeaderContactForm,
    initializeServiceDetailContent,
    initializeLoadMoreBlog,
    initializeCommentForm,
    initializeSidebarContactForm,
    initializeBlogSidebar,
    initializeMainContactForm,
    initializeProjectSwiper,
    initializeViewToggle,
    initializeIsotope,
    accordion_class_handler,
    initializeProjectSidebar,
    initializeCustomFormDropdown,
    initializeCustomDropdown,
    initializeDemoProjectSwiper,
    initializeCustomerFeedabckSwiper,
    initializeClientSwiper,
    init_io,
    (e) => tab_handler(e.type),
    () => selectify('select'),
    initializeProjectCustomDropdown,
    initializeProjectIsotope,
    initializeArchitectureHeroSwiper,
    initializeConstructionHeroSwiper,
];

// Execute all functions in ON_LOAD_SERVICES on DOMContentLoaded
window.addEventListener('load', (e) => {
    ON_LOAD_SERVICES.forEach((service) => service(e));
});

const preloader_handler = (event, element) => {
    let touchDevice = navigator.maxTouchPoints || 'ontouchstart' in document.documentElement;
    if (touchDevice) return;

    const href = element.getAttribute('href');

    if (
        !href ||
        href.startsWith('tel:') ||
        href.startsWith('mailto:') ||
        href.startsWith('#') ||
        href.startsWith('javascript:')
    )
        return;

    event.preventDefault();

    show_preloader(() => {
        window.location.href = element.href;
    });
};

window.addEventListener('click', (event) => {
    const anchor = event.target.closest('a');
    if (anchor) {
        preloader_handler(event, anchor);
    }
});
