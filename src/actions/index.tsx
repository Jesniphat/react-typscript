/**
 * We'll create a set of actions and functions that can create these actions.
 */
import * as constants from '../constants';

export interface IncrementEnthusiasm {
    type: constants.INCREMENT_ENTHUSIASM;
    number: number;
}

export interface DecrementEnthusiasm {
    type: constants.DECREMENT_ENTHUSIASM;
    number: number;
}

export function incrementEnthusiasm(number: number = 1): IncrementEnthusiasm {
    return {
        type: constants.INCREMENT_ENTHUSIASM,
        number
    }
}

export function decrementEnthusiasm(number: number = (-1)): DecrementEnthusiasm {
    return {
        type: constants.DECREMENT_ENTHUSIASM,
        number
    }
}

export type EnthusiasmAction = IncrementEnthusiasm | DecrementEnthusiasm;
