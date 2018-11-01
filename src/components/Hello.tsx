import * as React from 'react';

export interface Props {
  name: any;
  enthusiasmLevel?: number;
  other?: string;
  // add redux
  onIncrement?: () => void;
  onDecrement?: () => void;
}

class Hello extends React.Component<Props, object> {
  render() {
    const { name, enthusiasmLevel = 1, other, onIncrement, onDecrement } = this.props;

    if (enthusiasmLevel <= 0) {
      throw new Error('You could be a little more enthusiastic. :D');
    }

    return (
      <div className="hello">
        <div className="greeting">
          Hello {other + name + getExclamationMarks(enthusiasmLevel)}
        </div>
        <div>
          <button onClick={onDecrement}>-</button>
          <button onClick={onIncrement}>+</button>
        </div>
      </div>
    );
  }
}

export default Hello;

// helpers
function getExclamationMarks(numChars: number) {
  console.log(numChars);
  return Array(numChars + 1).join('!');
}
