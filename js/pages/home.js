// component imports

import { Carousel } from '../components/carousel/Carousel.js';
import { InterfaceCard } from '../components/carousel/Interface.js';
import { TestimonialCard } from '../components/carousel/Testimonial.js';
import { renderFeatures } from '../components/features/features.js';
import { featuresData } from '../data/featuresData.js';
import { interfaceData } from '../data/interfaceData.js';

// components execution

/* header: start */

function scrollFunc() {
    const headerPosition = 100;
    if (scrollY > headerPosition) {
        mainHeaderDOM.classList.add('header-white');
    } else {
        mainHeaderDOM.classList.remove('header-white');
    }
}
const mainHeaderDOM = document.querySelector('.main-header');
addEventListener('scroll', scrollFunc);
scrollFunc();

/* header: end */

/* hero: start */
/* hero: end */

/* premium features: start */

// const [featureErr, featureContent] = renderFeatures(548562, featuresData);
// const [featureErr, featureContent] = renderFeatures('', featuresData);
// const [featureErr, featureContent] = renderFeatures('asd', featuresData);
// const [featureErr, featureContent] = renderFeatures('header', featuresData);
// const [featureErr, featureContent] = renderFeatures('#features_block', 15485);
// const [featureErr, featureContent] = renderFeatures('#features_block', null);
// const [featureErr, featureContent] = renderFeatures('#features_block', {});
// const [featureErr, featureContent] = renderFeatures('#features_block', []);
// const [featureErr, featureContent] = renderFeatures('#features_block', [1, 2, 3]);
// const [featureErr, featureContent] = renderFeatures('#features_block', [null, [], {}]);
// const [featureErr, featureContent] = renderFeatures('#features_block', [
//     {},
//     { a: 1 },
//     { b: 'b', c: true },
//     { b: 'b', c: true, d: false },
//     { b: 'b', c: true, d: false, e: [] },
//     { b: 'b', c: true, d: false, e: [], f: {} },
// ]);
// const [featureErr, featureContent] = renderFeatures('#features_block', [
//     {
//         a: true,
//         title: 'Title',
//     },
//     {
//         title: 'Title',
//         desc: 'Description',
//     },
//     {
//         title: 'Title hack',
//         desc: 'Description hack',
//         hackMe: 'please',
//     },
//     {
//         icon: 'globe',
//         title: 'Title hack',
//         desc: 'Description hack',
//         hackMe: 'please',
//     },
// ]);
const [featureErr, featureContent] = renderFeatures('#features_block', featuresData);

if (featureErr) {
    console.error(featureContent);
}

/* premium features: end */

/* comunication app: start */
/* comunication app: end */

/* device manage: start */
/* device manage: end */

/* how app works: start */
/* how app works: end */

/* interface slide: start */

new Carousel('#interface_carousel', InterfaceCard, interfaceData, {
    size: {
        mobile: 1,
        tablet: 1,
        desktop: 1,
    },
    previousNext: true,
    dots: true,
});

/* interface slide: end */

/* testimonials: start */
/* testimonials: end */

/* pricing: start */
/* pricing: end */

/* FAQ: start */
/* FAQ: end */

/* team: start */
/* team: end */

/* app store: start */
/* app store: end */

/* subscribe: start */
/* subscribe: end */

/* contacts: start */
/* contacts: end */

/* footer: start */
/* footer: end */