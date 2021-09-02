import React from 'react';

/* const Counter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  return (
    <div className="count__content">
      <div className="count__content-group">
        <p>Contador:</p>
        <h5>{count}</h5>
        <div className="btn">
          <button onClick={increase}>
            <i className="bi bi-caret-up-fill"></i>
          </button>
          <button onClick={decrease}>
            <i className="bi bi-caret-down-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter; */


class Counter extends React.Component {
  // Declarar estado
  state = { 
    count: 0,
    value: 8
  }

  render () {
    const increase = () => {
      this.setState({count: this.state.count + 1});
      this.setState({value: this.state.value + 1});
    };
    const decrease = () => {
      this.setState({count: this.state.count - 1});
      this.setState({value: this.state.value - 1});
    };
    return (
      <div className="count__content">
        <div className="count__content-group">
          <p>Contador:</p>
          <h5>{this.state.count}</h5>
          <h5>{this.state.value}</h5>
          <div className="btn">
            <button onClick={increase}>
              <i className="bi bi-caret-up-fill"></i>
            </button>
            <button onClick={decrease}>
              <i className="bi bi-caret-down-fill"></i>
            </button>
          </div>
        </div>
      </div>
      )
    }
  }
  export default Counter;