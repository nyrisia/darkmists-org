import React from 'react';
import gateway from '../images/gateway.png';

const GatewayComponent = () => {
  return (
    <section>
        <p><span className='title'>Play the Game</span></p>
        <p>
            <a href='telnet://198.244.108.87:2222'>
            <img src={gateway} alt='gateway to the mists'/><br/>
            198.244.108.87 on port 2222
            </a>
        </p>
    </section>
  );
};

export default GatewayComponent;
