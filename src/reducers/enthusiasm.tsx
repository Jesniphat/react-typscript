import { StoreState } from '../types';
import { EnthusiasmAction } from '../actions';
import { INCREMENT_ENTHUSIASM, DECREMENT_ENTHUSIASM } from '../constants';

const enthusiasmStatus = {
  enthusiasmLevel: 1,
    languageName: 'TypeScript',
    other: 'Jesse'
};

export function enthusiasm(state: StoreState = enthusiasmStatus, action: EnthusiasmAction): StoreState {
  switch (action.type) {
    case INCREMENT_ENTHUSIASM:
      return {
        ...state,
        enthusiasmLevel: state.enthusiasmLevel +  action.number,
        other: (state.enthusiasmLevel +  action.number).toString()
      };
    case DECREMENT_ENTHUSIASM:
      return {
        ...state,
        enthusiasmLevel: Math.max(1, state.enthusiasmLevel + action.number),
        other: (state.enthusiasmLevel +  action.number).toString()
      };
    default:
      return {
        ...state
      }
  }
}
