/**
 * We need to define the shape of the state which Redux will store. For this, we can create a file called src/types/index.tsx 
 * which will contain definitions for types that we might use throughout the program.
 */
export interface StoreState {
  languageName: string;
  enthusiasmLevel: number;
  other?: string;
}

/**
 * Our intention is that languageName will be the programming language this app was written in (i.e. TypeScript or JavaScript) 
 * and enthusiasmLevel will vary. When we write our first container, we'll understand why we intentionally made our state slightly different from our props.
 */
