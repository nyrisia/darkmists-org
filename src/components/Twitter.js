import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const TwitterContainer = () => {
  return (
    <section>
      <TwitterTimelineEmbed
          sourceType='profile'
          screenName='darkmists'
          id='67482498'
          theme='dark'
          tweetLimit='4'
          noHeader
          noBorders
          noScrollbar
          noFooter
          transparent
          options={{height: 500, width: 475}}
      />
    </section>
  );
};

export default TwitterContainer;