import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import { faqContents } from '../../data/dataStore';

const FAQ = () => (
  <Container>
    <Hero titleText={faqContents.title} imageUrl={faqContents.image} />
    <p>{faqContents.text}</p>
  </Container>
);

export default FAQ;
