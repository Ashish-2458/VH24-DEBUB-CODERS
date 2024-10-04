// // src/components/GoogleTranslate.js
// import React, { useEffect } from 'react';

// const GoogleTranslate = () => {
//     useEffect(() => {
//         window.googleTranslateElementInit = function () {
//             new window.google.translate.TranslateElement(
//                 { pageLanguage: 'en' },
//                 'google_translate_element'
//             );
//         };

//         const script = document.createElement('script');
//         script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
//         document.body.appendChild(script);
//     }, []);

//     return <div id="google_translate_element"></div>;
// };

// export default GoogleTranslate;