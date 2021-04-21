import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import Container from '../Container/Container';

class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
    changeSearchString: PropTypes.func,
  }

  render(){
    const {cards} = this.props;
    return (
      <section className={styles.component}>
        <Container>
          <div className={styles.cards}>
            {cards.map(cardsData => (
              <Card key={cardsData.id} {...cardsData} />
            ))}
          </div>
        </Container>
      </section>
    );
  }
}

export default SearchResults;
