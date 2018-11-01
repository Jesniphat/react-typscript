/**
 * Let's start off by creating a set of message types that our app can respond to
 */
export const INCREMENT_ENTHUSIASM = 'INCREMENT_ENTHUSIASM';
export type INCREMENT_ENTHUSIASM = typeof INCREMENT_ENTHUSIASM;

export const DECREMENT_ENTHUSIASM = 'DECREMENT_ENTHUSIASM';
export type DECREMENT_ENTHUSIASM = typeof DECREMENT_ENTHUSIASM;

export const OTHER = 'OTHER';
export type OTHER = typeof OTHER;

/**
 * This const/type pattern allows us to use TypeScript's string literal types in an easily accessible and refactorable way.
 */
