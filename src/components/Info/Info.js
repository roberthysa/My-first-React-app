import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { infoContents } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={infoContents.title} imageUrl={infoContents.image} />
    <p>{infoContents.text}</p>
  </Container>
);

export default Info;
