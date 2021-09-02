import React from 'react';

const Formulary = () => {
  return (
    <div className="formulary__content">
      <h5>SUBSCRIBE</h5>
      <p>Sign up with your email address to receive news and updates</p>
      <div className="formulary__content-form">
        <div className="formulary__content-form-inputs">
          <input type="text" placeholder="firstname" />
          <input type="text" placeholder="lastname" />
          <input type="email" placeholder="email" />
        </div>
        <div className="formulary__content-form-button">
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Formulary;