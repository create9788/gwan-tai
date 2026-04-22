export const offset_image = () => {
    // select all offset images
    let els = document.querySelectorAll('.r-image');

    // return if there are no elements
    if (els.length < 1) return;

    // Check if the document is RTL
    const isRTL = document.documentElement.dir === 'rtl';

    // loop through each image
    els.forEach((el) => {
        // if the extend attribute is empty then return
        let extend = el.dataset.extend;

        const container = el.closest('.r-image-container');

        // select the inner container of the image
        let el_inner = el.querySelector('.r-image-inner');
        // get its distance from the relevant side of the screen
        let offset_x = el.getBoundingClientRect().x;
        let offset_from_right = window.innerWidth - (offset_x + el.offsetWidth); // For RTL

        if (extend === '') {
            el_inner.style.width = el.offsetWidth + 'px';
            return;
        }

        // extending to the left in RTL (which is actually extending to the right visually)
        if (extend === 'left' && isRTL) {
            // add the width containing element to the distance from the screen (right side in RTL)
            let width = el.offsetWidth + offset_from_right;

            // set the width and position of the containing inner element
            container.style.setProperty('--width', width + 'px');
            el_inner.style.width = width + 'px';
            el_inner.style.right = offset_from_right * -1 + 'px';
        }
        // extending to the right in RTL (which is actually extending to the left visually)
        else if (extend === 'right' && isRTL) {
            // width from the right of the element to the left of the screen
            let width = offset_x + el.offsetWidth;
            el_inner.style.width = width + 'px';
            container.style.setProperty('--width', width + 'px');
        }
        // extending to the left in LTR
        else if (extend === 'left' && !isRTL) {
            // add the width containing element to the distance from the screen (left side in LTR)
            let width = el.offsetWidth + offset_x;

            // set the width and position of the containing inner element
            container.style.setProperty('--width', width + 'px');
            el_inner.style.width = width + 'px';
            el_inner.style.left = offset_x * -1 + 'px';
        }
        // extending to the right in LTR
        else if (extend === 'right' && !isRTL) {
            // width from the left of the element to the right of the screen
            let width = window.innerWidth - offset_x;
            el_inner.style.width = width + 'px';
            container.style.setProperty('--width', width + 'px');
        }
    });
};
