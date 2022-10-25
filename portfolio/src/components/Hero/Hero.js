import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello There! <br/>
        My name is Debangsu Das <br/>
      </SectionTitle>
      <SectionText>
        I'm a front end web developer who enjoys building fun and rich interactive websites. Check out my works !!
      </SectionText>
      <Button onClick={() => window.location = "#tech"}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;