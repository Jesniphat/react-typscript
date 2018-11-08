import Hello from '../components/Hello';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import { Dispatch, compose } from 'redux';
import { withRouter } from 'react-router-dom';

export interface EnthusiasmState {
  enthusiasm: StoreState;
}

export function mapStateToProps(state: EnthusiasmState) {
  console.log(state);
  const newState: StoreState = state.enthusiasm;
  return {
    enthusiasmLevel: newState.enthusiasmLevel,
    name: newState.languageName,
    other: newState.other
  }
}

export function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
  return {
    onIncrement: (t: number = 1) => {
      if((typeof t) === 'object') {
        t = 1;
      }
      dispatch(actions.incrementEnthusiasm(t))
    },
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(Hello);
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Hello));
export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Hello)
