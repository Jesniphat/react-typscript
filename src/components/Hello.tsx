import * as React from 'react';

interface Props {
  name: any;
  enthusiasmLevel?: number;
  other?: string;
  // add redux
  onIncrement?: any; // function
  onDecrement?: any; // function
}

interface State {
  amount: number;
}

class Hello extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      amount: 1
    };
  }

  public add($this: any, data: any) {
    this.props.onIncrement(this.state.amount);
    this.setState(
      {amount: this.state.amount + 1}
    );
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
          {this.state.amount}
        </div>
        <div>
          <input value={this.state.amount} />
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
