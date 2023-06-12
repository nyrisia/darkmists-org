import React from 'react';
import voteMC from '../images/voteMC.gif';
import voteTMS from '../images/voteTMS.gif';

const VoteComponent = () => {
  return (
    <section>
            <a href="https://www.mudconnect.com/cgi-bin/search.cgi?mode=mud_listing&mud=Dark+Mists" target="_blank" rel="noopener noreferrer">
              <img src={voteMC} alt='vote on mudconnector'/>
            </a>
            <a href="https://www.topmudsites.com/vote-darkmists.html" target="_blank" rel="noopener noreferrer">
              <img src={voteTMS} alt='vote on top mud sites'/>
            </a>
    </section>
  );
};

export default VoteComponent;