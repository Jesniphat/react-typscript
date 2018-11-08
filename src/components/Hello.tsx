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
  amount: any;
}

class Hello extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      amount: 1
    };
  }

  public add(e: any): void {
    if (this.state.amount != null && this.state.amount > 0) {
      this.props.onIncrement(parseInt(this.state.amount));
    }
  }

  public handleInput(e: any): void {
    const value = e.target.value;
    this.setState({
      amount: value
    });
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
          <br/>
          {this.state.amount}
        </div>
        <div>
          <input type="number" value={this.state.amount} onChange={() => this.handleInput(event)} />
          <button onClick={() => this.add(event)}>Test</button>
          <button onClick={onDecrement}>-</button>
          <button onClick={onIncrement}>+</button>
        </div>
      </div>
    );
  }
}

export default Hello;

// helpers
function getExclamationMarks(numChars: any) {
  console.log(numChars);
  return Array(numChars + 1).join('!');
}
