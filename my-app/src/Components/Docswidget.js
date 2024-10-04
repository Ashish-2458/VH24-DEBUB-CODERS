import React, { useEffect } from 'react';

const DocsBotWidget = () => {
  useEffect(() => {
    // Check if the script is already loaded
    const existingScript = document.querySelector('script[src="https://widget.docsbot.ai/chat.js"]');

    if (!existingScript) {
      // Function to initialize the DocsBot widget
      const initDocsBotWidget = () => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.src = 'https://widget.docsbot.ai/chat.js';

        // Append the script to the body
        document.body.appendChild(script);

        // On load, initialize the DocsBot widget
        script.onload = () => {
          if (window.DocsBotAI && typeof window.DocsBotAI.init === 'function') {
            window.DocsBotAI.init({
              id: 'BEN1YpwH0ODr8pzVSYi7/IXadipiFROdeo9BoU65a',
            });
          } else {
            console.error('DocsBotAI is not defined or init is not a function');
          }
        };

        script.onerror = () => {
          console.error('Failed to load the DocsBot widget');
        };
      };

      // Call the function to initialize the widget
      initDocsBotWidget();
    } else {
      // If the script is already loaded, just initialize the widget
      if (window.DocsBotAI && typeof window.DocsBotAI.init === 'function') {
        window.DocsBotAI.init({
          id: 'BEN1YpwH0ODr8pzVSYi7/IXadipiFROdeo9BoU65a',
        });
      }
    }

    // Clean up the script when the component unmounts
    return () => {
      const script = document.querySelector('script[src="https://widget.docsbot.ai/chat.js"]');
      if (script) {
        script.remove();
      }
    };
  }, []); // Empty dependency array to run only once

  return <div id="docsbotai-root"></div>; // Widget will be mounted here
};

export default DocsBotWidget;
