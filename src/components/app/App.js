import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/actionCreators';
import Main from '../../pages/Main';
import './App.css';

function mapStateToProps(state) {

  console.log('inside App function mapStateToProps');
  return {
    search: state.search,
    sort: state.sort,
    speed: state.speed,
    tabControl: state.tabControl,
    actions: actionCreators.default
  };
}

function mapDispatchToProps(dispatch) {
  console.log('inside App function mapDispatchToProps');
  console.log('dispatch');
  console.log(dispatch);
  return bindActionCreators(actionCreators, dispatch);
};

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
