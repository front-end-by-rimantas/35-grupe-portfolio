// component imports

import { renderFeatures } from '../components/features/features.js';
import { featuresData } from '../data/featuresData.js';

// components execution

/* header: start */

const mainHeaderDOM = document.querySelector('.main-header');

addEventListener('scroll', function () {
    const headerPosition = 100;
    if (scrollY > headerPosition) {
        mainHeaderDOM.classList.add('header-white');
    } else {
        mainHeaderDOM.classList.remove('header-white');
    }
})

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