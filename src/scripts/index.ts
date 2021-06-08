import 'fullpage.js/vendors/scrolloverflow.min';
// @ts-ignore
import Parallax from 'parallax-js';
import { initFullPage } from '~scripts/fullpage/fullpage';

window.addEventListener('load', () => {
    initFullPage();

    const heroScene = document.querySelector('[data-hero-scene]');
    const heroParallaxInstance = new Parallax(heroScene);

    const teamScene = document.querySelector('[data-team-scene]');
    const teamParallaxInstance = new Parallax(teamScene);

    const contactScene = document.querySelector('[data-contact-scene]');
    const contactParallaxInstance = new Parallax(contactScene);
});
