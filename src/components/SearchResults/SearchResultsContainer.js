import {connect} from 'react-redux';
//import {createAction_changeSearchString} from '../../redux/searchStringRedux';
import SearchResults from './SearchResults';
import {getCards} from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
  const searchString = props.match.params.id;

  return {
    cards: getCards(state, searchString),
  };
};

export default connect(mapStateToProps)(SearchResults);
