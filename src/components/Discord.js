import React from 'react';
import Iframe from 'react-iframe'

const DiscordWidget = () => {
  return (
    <section>
        <p><span className='title'>Join on Discord!</span></p>
        <p>
            <Iframe src="https://discordapp.com/widget?id=733343007373525138&theme=dark"
                width="250"
                height="300"
                allowtransparency="true" 
                frameborder="0"
            />
        </p>
    </section>
  );
};

export default DiscordWidget;