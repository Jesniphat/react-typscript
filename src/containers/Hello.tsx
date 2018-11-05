import Hello from '../components/Hello';
import * as actions from '../actions/';
import { StoreState } from '../types/index';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
// import { withRouter } from 'react-router-dom';

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
    onIncrement: () => dispatch(actions.incrementEnthusiasm()),
    onDecrement: () => dispatch(actions.decrementEnthusiasm()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Hello));
