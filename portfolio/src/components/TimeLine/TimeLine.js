import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';

const Timeline = () => {
  return (
    <Section id="about">
      <SectionDivider/>
      <br/>
      <SectionTitle>About Me</SectionTitle>
      <SectionText>
        I am passionate about building excellent responsive websites and learning new technologies. I am currently pursuing my B.Tech (CSE) prefinal year having experience of building Web using Javascript | React js | MaterialUI and some other cool frameworks and libraries.
      </SectionText>
    </Section>
  );
};

export default Timeline;
