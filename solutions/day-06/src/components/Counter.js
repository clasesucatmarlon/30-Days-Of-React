import React, {useState} from 'react';

const Counter = () => {
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

export default Counter;