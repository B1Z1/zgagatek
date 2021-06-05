// @ts-ignore
import FullPage from 'fullpage.js';

function initFullPage(): void {
    new FullPage('[data-fullpage-container]', {
        licenseKey: '1600B6DD-40C54320-96D74E0D-5430753C',
        scrollOverflow: true
    });
}

export {
    initFullPage
};
