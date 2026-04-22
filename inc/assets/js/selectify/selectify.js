import { Select } from './select';

export const selectify = (selector) => {
    let elements = document.querySelectorAll(selector);

    if (elements === null || elements === undefined || elements.length < 1) {
        console.warn('Selectify could not find any elements matching the provided selector "' + selector + '"');
        return;
    }

    elements.forEach((element) => {
        element.selectify = new Select(element);
    });
};
