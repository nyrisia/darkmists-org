import '../css/index.css';
import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import TwitterContainer from '../components/Twitter';
import GatewayComponent from '../components/Gateway';
import DiscordWidget from '../components/Discord';
import VoteComponent from '../components/Vote';

const IndexPage = () => {
    return(
      <div className="App">
        <Header/><br/>
        <section className='page'>
            <article className='home-content'>
                <span className='title'>Welcome to Dark Mists!</span>
                <TwitterContainer/>
            </article>
            <aside className='sidebar'>
                <VoteComponent/>
                <GatewayComponent/>
                <DiscordWidget/>
            </aside>
        </section>
        <Footer/>
      </div>
    );
}

export default IndexPage;