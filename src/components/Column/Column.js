import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Icon from '../Icon/Icon';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import {settings} from '../../data/dataStore';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    cards: PropTypes.array,
    id: PropTypes.string,
    addCard: PropTypes.func,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render() {
    const {title, icon, cards, addCard} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
          {title}
        </h3>
        <div className={styles.cards}>
          {cards.map(cardsData => (
            <Card key={cardsData.id} {...cardsData} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={addCard}/>
        </div>
      </section>
    );
  }
}

export default Column;
