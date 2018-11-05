import * as React from 'react';

export interface Props {
  name: any;
  enthusiasmLevel?: number;
  other?: string;
  // add redux
  onIncrement?: any; // function
  onDecrement?: any; // function
}

class Hello extends React.Component<Props, object> {
  public constructor(props: Props) {
    super(props);
  }

  public add($this: any, data: any) {
    console.log($this);
    console.log(data);
    this.props.onIncrement(5);
  }

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
          <button onClick={this.add.bind(this, 'set')}>Test</button>
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
